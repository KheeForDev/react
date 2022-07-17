package com.kheefordev.recollection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.recollection.model.WarrantyCategory;

@Repository
public interface WarrantyCategoryRepository extends JpaRepository<WarrantyCategory, Integer> {
	
}
