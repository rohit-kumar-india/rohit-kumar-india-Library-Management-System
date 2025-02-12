package com.rohitcodes.LibraryManagementSystemSpringBootApi.service;

import java.util.List;

import com.rohitcodes.LibraryManagementSystemSpringBootApi.model.Student;
import com.rohitcodes.LibraryManagementSystemSpringBootApi.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StudentSeviceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveOrUpdateStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentByEmailId(String emailId) {
        return studentRepository.findByEmailId(emailId);
    }

    @Override
    public String deleteStudentById(int id) {
        if(studentRepository.existsById(id)) {
			studentRepository.deleteById(id);
			return "Student Deleted";
		}else
		{
			return "Delete failed as Student doesn't exist";
		}
        
    }

    
}
