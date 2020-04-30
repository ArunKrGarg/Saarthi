package com.saarthi.lender.dao;

import org.springframework.data.repository.CrudRepository;

import com.saarthi.lender.Loan;

public interface LoanDAO extends CrudRepository<Loan, String>{

}
