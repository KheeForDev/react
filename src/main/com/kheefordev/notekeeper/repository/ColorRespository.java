package com.kheefordev.notekeeper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.notekeeper.model.Color;

@Repository
public interface ColorRespository extends JpaRepository<Color, Integer> {

}
