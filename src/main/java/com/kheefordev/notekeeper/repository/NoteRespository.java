package com.kheefordev.notekeeper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.notekeeper.model.Note;

@Repository
public interface NoteRespository extends JpaRepository<Note, Integer> {

}
