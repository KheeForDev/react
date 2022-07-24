package com.kheefordev.recollection.controller;

import java.sql.Timestamp;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kheefordev.recollection.dto.WarrantyRequestDto;
import com.kheefordev.recollection.model.Properties;
import com.kheefordev.recollection.model.Warranty;
import com.kheefordev.recollection.service.WarrantyService;
import com.kheefordev.recollection.util.DateUtil;
import com.kheefordev.recollection.util.JwtUtil;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class WarrantyController {
	private static final Logger log = LogManager.getLogger(WarrantyController.class);

	@Autowired
	private WarrantyService warrantyService;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private DateUtil dateUtil;
	
	@Autowired
	private Properties properties;

	@GetMapping("/warranties")
	public ResponseEntity<List<Warranty>> getWarranties(@RequestHeader HttpHeaders headers) {
		List<String> authorizationHeader = headers.get("Authorization");

		String token = authorizationHeader.get(0).split(" ")[1];
		String username = jwtUtil.getUsername(token);

		List<Warranty> warranties = warrantyService.getWarranties(username);
		return ResponseEntity.status(HttpStatus.OK).body(warranties);
	}

	@PostMapping("/warranty/add")
	public ResponseEntity<String> addWarranty(@RequestHeader HttpHeaders headers,
			@RequestBody WarrantyRequestDto warrantyRequestDto) {
		List<String> authorizationHeader = headers.get("Authorization");

		String token = authorizationHeader.get(0).split(" ")[1];
		String username = jwtUtil.getUsername(token);

		Warranty warranty = new Warranty();
		warranty.setProductName(warrantyRequestDto.getProductName());
		warranty.setWarrantyCategoryId(Long.valueOf(warrantyRequestDto.getWarrantyCategory()));
		warranty.setBrand(warrantyRequestDto.getBrand());
		warranty.setModel(warrantyRequestDto.getModel());
		warranty.setStartDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getStartDate(), "yyyy-MM-dd"));
		warranty.setEndDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getEndDate(), "yyyy-MM-dd"));
		warranty.setCreatedBy(username);
		warranty.setCreatedOn(new Timestamp(System.currentTimeMillis()));
		warranty.setUpdatedBy(username);
		warranty.setUpdatedOn(new Timestamp(System.currentTimeMillis()));

		warrantyService.addWarranty(warranty);

		return ResponseEntity.status(HttpStatus.CREATED).body(properties.getWntyAddMsg());
	}
}
