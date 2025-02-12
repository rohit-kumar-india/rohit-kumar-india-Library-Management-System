package com.rohitcodes.LibraryManagementSystemSpringBootApi.service;

import java.util.List;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Admin;

public interface AdminService {
    public Admin saveOrUpdateAdmin(Admin admin);
    public List<Admin> getAllAdmins();
    public Admin getAdminByEmailId(String emailId);
    public String deleteAdminById(int id);
}
