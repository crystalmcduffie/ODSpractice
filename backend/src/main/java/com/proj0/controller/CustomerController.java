package com.proj0.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proj0.services.CustomerService;
import com.proj0.models.Customer;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

	CustomerService customerService;
	
	@Autowired
	public CustomerController(CustomerService c) {
		this.customerService = c;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Integer id) {
		Customer c = customerService.getCustomerById(id);
		if(c!=null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@GetMapping("/find")
	public ResponseEntity<Customer> getCustomerByEmail(@RequestParam("email") String email){
		Customer c = customerService.getCustomerByEmail(email);
		if(c!=null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
