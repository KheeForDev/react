package com.kheefordev.recollection.service;

import java.util.List;

import com.kheefordev.recollection.model.Warranty;
import com.kheefordev.recollection.model.WarrantyCategory;

public interface WarrantyService {
	public List<WarrantyCategory> getWarrantyCategories();

	public List<Warranty> getWarranties(String username);

	public Warranty getWarrantyById(int id);

	public void addWarranty(Warranty warrant);

	public void deleteNote(Warranty warrant);

	public void updateNote(Warranty warrant);
}
