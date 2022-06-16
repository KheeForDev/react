package com.kheefordev.notekeeper.dto;

import java.util.List;

import com.kheefordev.notekeeper.model.Note;

public class NoteResponseDto {
	private int size;
	private List<Note> notes;

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public List<Note> getNotes() {
		return notes;
	}

	public void setNotes(List<Note> notes) {
		this.notes = notes;
	}

}
