package com.kheefordev.notekeeper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kheefordev.notekeeper.model.ColorCode;
import com.kheefordev.notekeeper.service.ColorCodeService;

@RestController
@RequestMapping("/colorCode")
public class ColorCodeController {

	@Autowired
	private ColorCodeService colorCodeService;

	@GetMapping("/getAll")
	public List<ColorCode> getAllColorCode() {
		List<ColorCode> colorCodes = colorCodeService.getAllColorCode();
		return colorCodes;
	}
}
