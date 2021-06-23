package com.proj0.services;

import com.proj0.models.Customer;

public interface CustomerService {
	public Customer getCustomerById(Integer id);
	public Customer getCustomerByEmail(String email);
}
