package com.kheefordev.recollection.service;

import java.util.List;

import com.kheefordev.recollection.model.Role;
import com.kheefordev.recollection.model.User;

public interface UserService {
	public List<User> getUsers();

	public User saveUser(User user);

	public Role saveRole(Role role);

	public void addRoleToUser(String username, String roleName);

	public User getUser(String username);
}
