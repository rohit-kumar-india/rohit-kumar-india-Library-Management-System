package com.rohitcodes.LibraryManagementSystemSpringBootApi.service;

import java.util.List;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Student;

public interface StudentService {
    public Student saveOrUpdateStudent(Student student);
    public List<Student> getAllStudents();
    public Student getStudentByEmailId(String emailId);
    public String deleteStudentById(int id);
}
