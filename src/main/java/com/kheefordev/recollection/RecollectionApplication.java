package com.kheefordev.recollection;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.kheefordev.recollection.model.Role;
import com.kheefordev.recollection.model.User;
import com.kheefordev.recollection.service.UserService;

@SpringBootApplication
public class RecollectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecollectionApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));

			userService.saveUser(
					new User(null, "Bruce Lee", "john", "1234", new ArrayList<Role>(), "system", new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));
			userService.saveUser(
					new User(null, "Mary Jane", "mary", "1234", new ArrayList<Role>(), "system", new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));
			userService.saveUser(
					new User(null, "Jane Tan", "jane", "1234", new ArrayList<Role>(), "system", new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));
			userService.saveUser(
					new User(null, "Kate Spade", "kate", "1234", new ArrayList<Role>(), "system", new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));

			userService.addRoleToUser("john", "ROLE_ADMIN");
			userService.addRoleToUser("john", "ROLE_USER");
			userService.addRoleToUser("mary", "ROLE_ADMIN");
			userService.addRoleToUser("mary", "ROLE_USER");
			userService.addRoleToUser("Jane", "ROLE_USER");
			userService.addRoleToUser("kate", "ROLE_USER");
		};
	}
}
