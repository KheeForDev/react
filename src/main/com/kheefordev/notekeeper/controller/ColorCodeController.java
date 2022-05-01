package com.kheefordev.notekeeper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.notekeeper.model.ColorCode;
import com.kheefordev.notekeeper.service.ColorCodeService;

@RestController
@RequestMapping("/colorCode")
public class ColorCodeController {

	@Autowired
	private ColorCodeService colorCodeService;

	@GetMapping("/getAll")
	public ResponseEntity<String> getAllColorCode() {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		List<ColorCode> colorCodes = colorCodeService.getAllColorCode();

		try {
			result = mapper.writeValueAsString(colorCodes);
		} catch (JsonProcessingException e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
