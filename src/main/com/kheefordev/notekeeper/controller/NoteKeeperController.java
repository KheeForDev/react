package com.kheefordev.notekeeper.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.notekeeper.model.Note;
import com.kheefordev.notekeeper.service.NoteService;

@CrossOrigin
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

	@PostMapping("/add")
	public ResponseEntity<String> addNote(@RequestBody Note note) {
		if (note.getContent().length() > 200)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Note content exceeded limit of 200 characters");

		note.setCreatedBy("User");
		note.setCreatedOn(new Timestamp(System.currentTimeMillis()));

		noteService.addNote(note);
		return ResponseEntity.status(HttpStatus.OK).body("New note added");
	}

//	@GetMapping("/get/{id}")
//	public Note getNote(@PathVariable(value = "id") int id) {
//		return noteService.getNote(id);
//	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteNote(@PathVariable(value = "id") int id) {
		Note note = noteService.getNoteById(id);
		
		if (note == null)
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Note does not exist");
		
		noteService.deleteNote(note);
		return ResponseEntity.status(HttpStatus.OK).body("Note deleted");
	}

	@PostMapping("/update")
	public ResponseEntity<String> updateNote(@RequestBody Note note) {
		Note existNote = noteService.getNoteById(note.getId());
		
		if (existNote == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Unable to update as note does not exist");
		
		note.setCreatedBy("User");
		note.setCreatedOn(new Timestamp(System.currentTimeMillis()));

		noteService.updateNote(note);
		return ResponseEntity.status(HttpStatus.OK).body("Note updated");
	}
}
