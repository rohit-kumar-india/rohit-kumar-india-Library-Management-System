package com.rohitcodes.LibraryManagementSystemSpringBootApi.service;

import java.util.List;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Admin;
import com.rohitcodes.LibraryManagementSystemSpringBootApi.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdminSeviceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin saveOrUpdateAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminByEmailId(String emailId) {
        return adminRepository.findByEmailId(emailId);
    }

    @Override
    public String deleteAdminById(int id) {
        adminRepository.deleteById(id);
        return "Admin deleted";
        
    }

    
}
