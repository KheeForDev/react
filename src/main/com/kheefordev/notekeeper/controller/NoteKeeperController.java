package com.kheefordev.notekeeper.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteKeeperController {
	
	@GetMapping("/test")
	public String getAllStudents() {
		return "Hello World";
	}
}
