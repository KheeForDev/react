package com.kheefordev.notekeeper.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kheefordev.notekeeper.model.ColorCode;
import com.kheefordev.notekeeper.repository.ColorCodeRespository;

@Service
public class ColorCodeServiceImpl implements ColorCodeService {

	@Autowired
	private ColorCodeRespository colorCodeRespository;

	@Override
	public List<ColorCode> getAllColorCode() {
		return colorCodeRespository.findAll();
	}
}
