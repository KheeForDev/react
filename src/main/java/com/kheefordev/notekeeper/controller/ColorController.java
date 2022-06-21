package com.kheefordev.notekeeper.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.notekeeper.model.Color;
import com.kheefordev.notekeeper.service.ColorService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ColorController {
	private static final Logger log = LogManager.getLogger(ColorController.class);

	@Autowired
	private ColorService colorService;

	@GetMapping("/color/getAll")
	public ResponseEntity<String> getAllColor() {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		List<Color> colors = colorService.getAllColor();

		try {
			result = mapper.writeValueAsString(colors);
		} catch (JsonProcessingException e) {
			log.error("error: {}", e.getMessage());
		}

		log.info("result: {}", result);

		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
