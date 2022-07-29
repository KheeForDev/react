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
//			userService.saveRole(new Role(null, "ROLE_ADMIN"));
//
//			userService.saveUser(new User(null, "demo_admin", "password", new ArrayList<Role>(), "system",
//					new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));
//			userService.saveUser(new User(null, "demo_user", "password", new ArrayList<Role>(), "system",
//					new Timestamp(System.currentTimeMillis()), "system", new Timestamp(System.currentTimeMillis())));
//
//			userService.addRoleToUser("demo_admin", "ROLE_ADMIN");
//			userService.addRoleToUser("demo_user", "ROLE_USER");
//		};
//	}
}
