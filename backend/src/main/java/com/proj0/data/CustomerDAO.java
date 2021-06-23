package com.proj0.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proj0.models.Customer;

@Repository
public interface CustomerDAO extends JpaRepository<Customer, Integer>{
	Customer findByEmail(String email);
}
