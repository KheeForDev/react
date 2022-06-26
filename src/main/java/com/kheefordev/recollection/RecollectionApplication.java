package com.kheefordev.recollection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class RecollectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecollectionApplication.class, args);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args -> {
//			userService.saveRole(new Role(null, "ROLE_USER"));
//			userService.saveRole(new Role(null, "ROLE_MANAGER"));
//			userService.saveRole(new Role(null, "ROLE_ADMIN"));
//			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));
//
//			userService.saveUser(new User(null, "Bruce", "Lee", "john", "1234", new ArrayList<Role>()));
//			userService.saveUser(new User(null, "Mary", "Jane", "mary", "1234", new ArrayList<Role>()));
//			userService.saveUser(new User(null, "Jane", "Tan", "jane", "1234", new ArrayList<Role>()));
//			userService.saveUser(new User(null, "Kate", "Spade", "kate", "1234", new ArrayList<Role>()));
//
//			userService.addRoleToUser("john", "ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("john", "ROLE_ADMIN");
//			userService.addRoleToUser("john", "ROLE_MANAGER");
//			userService.addRoleToUser("john", "ROLE_USER");
//			userService.addRoleToUser("mary", "ROLE_ADMIN");
//			userService.addRoleToUser("mary", "ROLE_MANAGER");
//			userService.addRoleToUser("mary", "ROLE_USER");
//			userService.addRoleToUser("Jane", "ROLE_MANAGER");
//			userService.addRoleToUser("Jane", "ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("Jane", "ROLE_USER");
//			userService.addRoleToUser("kate", "ROLE_USER");
//		};
//	}
}
