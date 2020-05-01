package com.saarthi.lender.dao;

import org.springframework.data.repository.CrudRepository;

import com.saarthi.lender.Bank;
import com.saarthi.lender.Loan;

public interface BankDAO extends CrudRepository<Bank, String>{

}