package com.kheefordev.notekeeper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.notekeeper.model.ColorCode;

@Repository
public interface ColorCodeRespository extends JpaRepository<ColorCode, Integer> {

}
