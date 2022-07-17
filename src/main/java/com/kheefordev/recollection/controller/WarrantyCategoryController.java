package com.kheefordev.recollection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kheefordev.recollection.model.WarrantyCategory;
import com.kheefordev.recollection.service.WarrantyService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class WarrantyCategoryController {
	
	@Autowired
	private WarrantyService warrantyService;
	
	@GetMapping("/warrantycategories")
	public ResponseEntity<List<WarrantyCategory>> getWarrantyCategories() {
		List<WarrantyCategory> categories = warrantyService.getWarrantyCategories();
		return ResponseEntity.status(HttpStatus.OK).body(categories);
	}
}
