package com.kheefordev.recollection.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kheefordev.recollection.controller.UserController;
import com.kheefordev.recollection.model.Warranty;
import com.kheefordev.recollection.model.WarrantyCategory;
import com.kheefordev.recollection.repository.WarrantyCategoryRepository;
import com.kheefordev.recollection.repository.WarrantyRepository;

@Service
@Transactional
public class WarrantyServiceImpl implements WarrantyService {
	private static final Logger log = LogManager.getLogger(UserController.class);

	@Autowired
	private WarrantyCategoryRepository warrantyCategoryRepository;
	
	@Autowired
	private WarrantyRepository warrantyRepository;

	@Override
	public List<WarrantyCategory> getWarrantyCategories() {
		log.info("Fetching all warranty categories");
		return warrantyCategoryRepository.findAll();
	}


	@Override
	public List<Warranty> getWarranties(String username) {
		log.info("Fetching all warranties");
		return warrantyRepository.findByCreatedBy(username);
	}


	@Override
	public void addWarranty(Warranty warranty) {
		log.info("Adding warranty");
		warrantyRepository.save(warranty);
	}
}
