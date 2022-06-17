package com.kheefordev.notekeeper.controller;

import java.sql.Timestamp;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.notekeeper.model.Note;
import com.kheefordev.notekeeper.dto.NoteResponseDto;
import com.kheefordev.notekeeper.model.Properties;
import com.kheefordev.notekeeper.service.NoteService;

@CrossOrigin
@RestController
@RequestMapping("/note")
public class NoteKeeperController {
	private static final Logger log = LogManager.getLogger(NoteKeeperController.class);

	@Autowired
	private NoteService noteService;

	@Autowired
	private Properties properties;

	@GetMapping("/getAll")
	public ResponseEntity<String> getAllNote() {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		List<Note> notes = noteService.getAllNote();

		NoteResponseDto noteResponseDto = new NoteResponseDto();
		noteResponseDto.setSize(notes.size());
		noteResponseDto.setNotes(notes);

		try {
			result = mapper.writeValueAsString(noteResponseDto);
		} catch (JsonProcessingException e) {
			log.error("error: {}", e.getMessage());
		}

		log.info("result: {}", result);

		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@PostMapping("/add")
	public ResponseEntity<String> addNote(@RequestBody Note note) {
		ObjectMapper mapper = new ObjectMapper();
		StringBuilder sbError = new StringBuilder();

		try {
			log.info("note: {}", mapper.writeValueAsString(note));
		} catch (JsonProcessingException e) {
			log.error("error: {}", e.getMessage());
		}

		List<Note> notes = noteService.getAllNote();
		if (notes.size() >= properties.getNoteLimit()) {
			return ResponseEntity.status(HttpStatus.INSUFFICIENT_STORAGE).body(properties.getNoteLimitExceedError());
		}

		if (note.getContent().length() == 0) {
			sbError.append(properties.getNoteContentEmptyError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (note.getTitle().length() > 50) {
			sbError.append(properties.getNoteTitleExceedError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (note.getContent().length() > 200) {
			sbError.append(properties.getNoteContentExceedError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (sbError.length() > 0)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(sbError.toString());

		note.setCreatedBy("User");
		note.setCreatedOn(new Timestamp(System.currentTimeMillis()));

		noteService.addNote(note);
		return ResponseEntity.status(HttpStatus.OK).body(properties.getNoteAddMsg());
	}

//	@GetMapping("/get/{id}")
//	public Note getNote(@PathVariable(value = "id") int id) {
//		return noteService.getNote(id);
//	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteNote(@PathVariable(value = "id") int id) {
		log.info("note id: {}", id);

		Note note = noteService.getNoteById(id);

		if (note == null)
			return ResponseEntity.status(HttpStatus.OK).body(properties.getNoteDeleteMsg());

		if (note.getCreatedBy().equalsIgnoreCase("Admin"))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(properties.getNoteDeleteForbiddenError());

		noteService.deleteNote(note);
		return ResponseEntity.status(HttpStatus.OK).body(properties.getNoteDeleteMsg());
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateNote(@PathVariable(value = "id") int id, @RequestBody Note note) {
		ObjectMapper mapper = new ObjectMapper();
		StringBuilder sbError = new StringBuilder();

		try {
			log.info("note: {}", mapper.writeValueAsString(note));
		} catch (JsonProcessingException e) {
			log.error("error: {}", e.getMessage());
		}

		Note existNote = noteService.getNoteById(id);

		if (existNote == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(properties.getNoteUpdateNotfoundError());

		if (existNote.getCreatedBy().equalsIgnoreCase("Admin"))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(properties.getNoteUpdateForbiddenError());

		if (note.getContent().length() == 0) {
			sbError.append(properties.getNoteContentEmptyError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (note.getTitle().length() > 50) {
			sbError.append(properties.getNoteTitleExceedError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (note.getContent().length() > 200) {
			sbError.append(properties.getNoteContentExceedError());
			sbError.append(System.getProperty("line.separator"));
		}

		if (sbError.length() > 0)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(sbError.toString());

		note.setCreatedBy("User");
		note.setCreatedOn(new Timestamp(System.currentTimeMillis()));

		noteService.updateNote(note);
		return ResponseEntity.status(HttpStatus.OK).body(properties.getNoteUpdateMsg());
	}
}
