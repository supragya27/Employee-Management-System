package com.employeemanagementsystem.backend.controller;

import com.employeemanagementsystem.backend.model.Employee;
import com.employeemanagementsystem.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all Employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //create new employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
}
