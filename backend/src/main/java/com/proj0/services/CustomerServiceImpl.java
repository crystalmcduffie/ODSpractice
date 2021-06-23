package com.proj0.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proj0.data.CustomerDAO;
import com.proj0.models.Customer;

@Service
public class CustomerServiceImpl implements CustomerService{

	private CustomerDAO customerDAO;
	
	@Autowired
	private CustomerServiceImpl(CustomerDAO c) {
		this.customerDAO = c;
	}

	@Override
	public Customer getCustomerById(Integer id) {
		return customerDAO.findById(id).get();
	}

	@Override
	public Customer getCustomerByEmail(String email) {
		return customerDAO.findByEmail(email);
	}
	
	
}
