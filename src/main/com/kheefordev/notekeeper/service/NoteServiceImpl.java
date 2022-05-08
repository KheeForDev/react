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
	public Note getNoteById(int id) {
		Note note = noteRespository.getReferenceById(id);
		return note;
	}

	@Override
	public Note deleteNote(Note note) {
		noteRespository.delete(note);
		return note;
	}

	@Override
	public Note updateNote(Note note) {
		return noteRespository.save(note);
	}
}
