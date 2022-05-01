package com.kheefordev.notekeeper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.notekeeper.model.Note;
import com.kheefordev.notekeeper.service.NoteService;

@RestController
@RequestMapping("/note")
public class NoteKeeperController {

	@Autowired
	private NoteService noteService;

	@GetMapping("/getAll")
	public ResponseEntity<String> getAllNote() {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		List<Note> notes = noteService.getAllNote();

		try {
			result = mapper.writeValueAsString(notes);
		} catch (JsonProcessingException e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
