package com.kheefordev.notekeeper.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kheefordev.notekeeper.model.Note;
import com.kheefordev.notekeeper.repository.NoteRespository;

@Service
public class NoteServiceImpl implements NoteService {

	@Autowired
	private NoteRespository noteRespository;

	@Override
	public List<Note> getAllNote() {
		return noteRespository.findAll();
	}

	@Override
	public Note addNote(Note note) {
		return noteRespository.save(note);
	}

	@Override
	public Note getNote(int id) {
		return null;
	}

	@Override
	public Note deleteNote(int id) {
		return null;
	}

	@Override
	public Note updateNote(Note student) {
		return null;
	}
}
