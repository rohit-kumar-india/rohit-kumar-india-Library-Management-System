package com.rohitcodes.LibraryManagementSystemSpringBootApi.repository;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{

    Student findByEmailId(String emailId);
    
}
