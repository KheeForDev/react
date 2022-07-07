package com.kheefordev.recollection.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kheefordev.recollection.controller.UserController;
import com.kheefordev.recollection.model.Role;
import com.kheefordev.recollection.model.User;
import com.kheefordev.recollection.repository.RoleRepository;
import com.kheefordev.recollection.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	private static final Logger log = LogManager.getLogger(UserController.class);

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public List<User> getUsers() {
		log.info("Fetching all users {}");
		return userRepository.findAll();
	}

	@Override
	public User saveUser(User user) {
		log.info("Saving new user {} to the database", user.getName());
		log.info("Password: {}", user.getPassword());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	@Override
	public Role saveRole(Role role) {
		log.info("Saving new role {} to the database", role.getName());
		return roleRepository.save(role);
	}

	@Override
	public void addRoleToUser(String username, String roleName) {
		log.info("Adding role {} to user {} to the database", roleName, username);
		User user = userRepository.findByUsername(username);
		Role role = roleRepository.findByName(roleName);
		user.getRoles().add(role);
	}

	@Override
	public User getUser(String username) {
		log.info("Fetching user {}", username);
		return userRepository.findByUsername(username);
	}
}
