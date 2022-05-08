package com.kheefordev.notekeeper.service;

import java.util.List;

import com.kheefordev.notekeeper.model.Note;

public interface NoteService {
	public List<Note> getAllNote();
	public Note addNote(Note note);
	public Note getNoteById(int id);
	public Note deleteNote(Note note);
	public Note updateNote(Note student);
}
