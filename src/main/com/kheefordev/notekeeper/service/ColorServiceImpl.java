package com.kheefordev.notekeeper.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kheefordev.notekeeper.model.Color;
import com.kheefordev.notekeeper.repository.ColorRespository;

@Service
public class ColorServiceImpl implements ColorService {

	@Autowired
	private ColorRespository colorRespository;

	@Override
	public List<Color> getAllColor() {
		return colorRespository.findAll();
	}
}
