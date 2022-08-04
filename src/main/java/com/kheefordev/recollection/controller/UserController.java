package com.kheefordev.recollection.controller;

import java.sql.Timestamp;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kheefordev.recollection.dto.UserRequestDto;
import com.kheefordev.recollection.model.Role;
import com.kheefordev.recollection.model.RoleToUser;
import com.kheefordev.recollection.model.User;
import com.kheefordev.recollection.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
	private static final Logger log = LogManager.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers() {
		List<User> users = userService.getUsers();
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}

	@PostMapping("/user/save")
	public ResponseEntity<String> saveUser(@RequestBody UserRequestDto userRequestDto) {
		User existUser = userService.getUser(userRequestDto.getUsername());
		
		if (existUser != null)
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Username taken");
		
		User user = new User();
		user.setUsername(userRequestDto.getUsername());
		user.setPassword(userRequestDto.getPassword());
		user.setCreatedBy("system");
		user.setCreatedOn(new Timestamp(System.currentTimeMillis()));
		user.setUpdatedBy("system");
		user.setUpdatedOn(new Timestamp(System.currentTimeMillis()));
		User newUser = userService.saveUser(user);

		if (newUser != null) {
			userService.addRoleToUser(newUser.getUsername(), "ROLE_USER");
		} else {
			ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to create user");
		}

		return ResponseEntity.status(HttpStatus.CREATED).body("You have registered successfully");
	}

	@PostMapping("/role/save")
	public ResponseEntity<Role> saveRole(@RequestBody Role role) {
		return ResponseEntity.status(HttpStatus.OK).body(null);
	}

	@PostMapping("/role/addtouser")
	public ResponseEntity<String> saveRole(@RequestBody RoleToUser roleToUser) {
		return ResponseEntity.status(HttpStatus.OK).body(null);
	}
}
