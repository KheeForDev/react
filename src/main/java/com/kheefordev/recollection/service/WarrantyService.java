package com.kheefordev.recollection.service;

import java.util.List;

import com.kheefordev.recollection.model.Warranty;
import com.kheefordev.recollection.model.WarrantyCategory;

public interface WarrantyService {
	public List<WarrantyCategory> getWarrantyCategories();

	public List<Warranty> getWarranties(String username);

	public void addWarranty(Warranty warrant);
}
