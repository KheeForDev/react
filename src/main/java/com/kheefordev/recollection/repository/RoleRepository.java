package com.kheefordev.recollection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kheefordev.recollection.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	public Role findByName(String name);
}
