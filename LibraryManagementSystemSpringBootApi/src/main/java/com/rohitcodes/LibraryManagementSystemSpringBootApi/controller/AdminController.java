package com.rohitcodes.LibraryManagementSystemSpringBootApi.controller;

import java.util.List;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Admin;
import com.rohitcodes.LibraryManagementSystemSpringBootApi.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public String add(@RequestBody Admin admin){
        adminService.saveOrUpdateAdmin(admin);
        return "New Admin is Added";
    }
    @GetMapping("/getAll")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }
    @GetMapping("/get/{emailId}")
    public Admin getAdminByEmailId(@PathVariable String emailId){
        return adminService.getAdminByEmailId(emailId);
    }

    @PutMapping("/update")
    public Admin update(@RequestBody Admin admin){
        return adminService.saveOrUpdateAdmin(admin);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAdminById(@PathVariable int id){
        return adminService.deleteAdminById(id);
    }
}
