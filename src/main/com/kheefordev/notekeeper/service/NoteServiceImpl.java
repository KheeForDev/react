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
}
