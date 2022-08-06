package com.kheefordev.recollection.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kheefordev.recollection.dto.WarrantyRequestDto;
import com.kheefordev.recollection.dto.WarrantyResponseDto;
import com.kheefordev.recollection.model.Properties;
import com.kheefordev.recollection.model.Warranty;
import com.kheefordev.recollection.model.WarrantyCategory;
import com.kheefordev.recollection.service.WarrantyService;
import com.kheefordev.recollection.util.DateUtil;
import com.kheefordev.recollection.util.HelperUtil;
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
	private HelperUtil helperUtil;

	@Autowired
	private Properties properties;

	@GetMapping("/warranties")
	public ResponseEntity<List<WarrantyResponseDto>> getWarranties(@RequestHeader HttpHeaders headers) {
		String username = getUsernameFromHeaders(headers);

		List<Warranty> warranties = warrantyService.getWarranties(username);
		List<WarrantyResponseDto> warrantiesDto = new ArrayList<WarrantyResponseDto>();

		for (Warranty warranty : warranties) {
			WarrantyResponseDto warrantyResponseDto = new WarrantyResponseDto();
			warrantyResponseDto.setId(warranty.getId());
			warrantyResponseDto.setProductName(warranty.getProductName());
			warrantyResponseDto.setBrand(warranty.getBrand());
			
			// get warranty status
			HashMap<String, String> hashMap = new HashMap<String, String>();
			hashMap = helperUtil.getWarrantyStatus(warranty.getEndDate());
			
			warrantyResponseDto.setStatus(hashMap.get("status"));
			warrantyResponseDto.setStatusColorCode(hashMap.get("statusColorCode"));
			
			warrantiesDto.add(warrantyResponseDto);
		}

		return ResponseEntity.status(HttpStatus.OK).body(warrantiesDto);
	}

	@GetMapping("/warranty/get/{id}")
	public ResponseEntity<String> getNote(@RequestHeader HttpHeaders headers, @PathVariable(value = "id") int id) {
		String username = getUsernameFromHeaders(headers);
		ObjectMapper mapper = new ObjectMapper();
		String responseDto = "";

		Warranty warranty = warrantyService.getWarrantyById(id);

		if (warranty == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(properties.getWntyRetrieveNotfoundError());

		if (warranty != null && !warranty.getCreatedBy().equalsIgnoreCase(username))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(properties.getWntyRetrieveForbiddenError());

		WarrantyCategory warrantyCategory = warrantyService.getWarrantyCategoryById(warranty.getWarrantyCategoryId());

		WarrantyResponseDto warrantyResponseDto = new WarrantyResponseDto();
		warrantyResponseDto.setId(warranty.getId());
		warrantyResponseDto.setProductName(warranty.getProductName());
		warrantyResponseDto.setWarrantyCategory(String.valueOf(warranty.getWarrantyCategoryId()));
		warrantyResponseDto.setWarrantyCategoryName(warrantyCategory.getName());
		warrantyResponseDto.setBrand(warranty.getBrand());
		warrantyResponseDto.setModel(warranty.getModel());
		warrantyResponseDto.setStartDate(dateUtil.formatTimestampToString(warranty.getStartDate(), "yyyy-MM-dd"));
		warrantyResponseDto.setEndDate(dateUtil.formatTimestampToString(warranty.getEndDate(), "yyyy-MM-dd"));
		warrantyResponseDto.setRemark(warranty.getRemark());

		try {
			responseDto = mapper.writeValueAsString(warrantyResponseDto);
		} catch (JsonProcessingException e) {
			log.error(e.getMessage());
		}

		return ResponseEntity.status(HttpStatus.OK).body(responseDto);
	}

	@PostMapping("/warranty/add")
	public ResponseEntity<String> addWarranty(@RequestHeader HttpHeaders headers,
			@RequestBody WarrantyRequestDto warrantyRequestDto) {
		String username = getUsernameFromHeaders(headers);

		Warranty warranty = new Warranty();
		warranty.setProductName(warrantyRequestDto.getProductName());
		warranty.setWarrantyCategoryId(Integer.valueOf(warrantyRequestDto.getWarrantyCategory()));
		warranty.setBrand(warrantyRequestDto.getBrand());
		warranty.setModel(warrantyRequestDto.getModel());
		warranty.setStartDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getStartDate(), "yyyy-MM-dd"));
		warranty.setEndDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getEndDate(), "yyyy-MM-dd"));
		warranty.setRemark(warrantyRequestDto.getRemark());
		warranty.setCreatedBy(username);
		warranty.setCreatedOn(new Timestamp(System.currentTimeMillis()));
		warranty.setUpdatedBy(username);
		warranty.setUpdatedOn(new Timestamp(System.currentTimeMillis()));

		warrantyService.addWarranty(warranty);

		return ResponseEntity.status(HttpStatus.CREATED).body(properties.getWntyAddMsg());
	}

	@DeleteMapping("/warranty/delete/{id}")
	public ResponseEntity<String> deleteNote(@RequestHeader HttpHeaders headers, @PathVariable(value = "id") int id) {
		String username = getUsernameFromHeaders(headers);

		Warranty warranty = warrantyService.getWarrantyById(id);

		if (warranty == null)
			return ResponseEntity.status(HttpStatus.OK).body(properties.getWntyDeleteMsg());

		if (warranty != null && !warranty.getCreatedBy().equalsIgnoreCase(username))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(properties.getWntyDeleteForbiddenError());

		warrantyService.deleteNote(warranty);
		return ResponseEntity.status(HttpStatus.OK).body(properties.getWntyDeleteMsg());
	}

	@PutMapping("/warranty/update/{id}")
	public ResponseEntity<String> updateNote(@RequestHeader HttpHeaders headers, @PathVariable(value = "id") int id,
			@RequestBody WarrantyRequestDto warrantyRequestDto) {
		String username = getUsernameFromHeaders(headers);
		StringBuilder sbError = new StringBuilder();

		Warranty warranty = warrantyService.getWarrantyById(id);

		if (warranty == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(properties.getWntyUpdateNotfoundError());

		if (!warranty.getCreatedBy().equalsIgnoreCase(username))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(properties.getWntyUpdateForbiddenError());

		// Code logic to perform validation
		// Append error message to sbError if fail

		if (sbError.length() > 0)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(sbError.toString());

		warranty.setProductName(warrantyRequestDto.getProductName());
		warranty.setWarrantyCategoryId(Integer.valueOf(warrantyRequestDto.getWarrantyCategory()));
		warranty.setBrand(warrantyRequestDto.getBrand());
		warranty.setModel(warrantyRequestDto.getModel());
		warranty.setStartDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getStartDate(), "yyyy-MM-dd"));
		warranty.setEndDate(dateUtil.formatStringToTimestamp(warrantyRequestDto.getEndDate(), "yyyy-MM-dd"));
		warranty.setRemark(warrantyRequestDto.getRemark());
		warranty.setUpdatedBy(username);
		warranty.setUpdatedOn(new Timestamp(System.currentTimeMillis()));


		warrantyService.updateNote(warranty);
		return ResponseEntity.status(HttpStatus.OK).body(properties.getWntyUpdateMsg());
	}

	private String getUsernameFromHeaders(HttpHeaders headers) {
		List<String> authorizationHeader = headers.get("Authorization");

		String token = authorizationHeader.get(0).split(" ")[1];
		String username = jwtUtil.getUsername(token);

		return username;
	}
}
