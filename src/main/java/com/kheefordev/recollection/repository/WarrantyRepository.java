package com.kheefordev.recollection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.recollection.model.Warranty;

@Repository
public interface WarrantyRepository extends JpaRepository<Warranty, Integer> {
	public List<Warranty> findByCreatedBy(String createdBy);
}
