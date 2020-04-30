package com.saarthi.lender.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.checker.service.WarehouseService;
import com.saarthi.lendee.Farmer;
import com.saarthi.lendee.dao.FarmerDAO;
import com.saarthi.lender.Loan;
import com.saarthi.lender.dao.LoanDAO;
import com.saarthi.lender.utils.LenderConstants;
import com.saarthi.lender.utils.PreLoanResponse;

@Service
public class LoanService {
	@Autowired
    private LoanDAO loanDao;
	
	@Autowired
	private WarehouseService warehouseService;
	
	public PreLoanResponse preApplyLoan() {
		PreLoanResponse response = new PreLoanResponse();
		response.setTimeframes(Arrays.asList(LenderConstants.TIME_FRAMES));
		response.setWarehouses(warehouseService.getAllWarehouses());
		response.setReasonsForLoan(Arrays.asList(LenderConstants.LOAN_REASONS));
		response.setInstallments(Arrays.asList(LenderConstants.INSTALLMENTS));
		return response;
	}

    public List<Loan> getAllLoans() {
        List<Loan> loans = new ArrayList<>();
        loanDao.findAll().forEach(loans::add);
        return loans;
    }

    public Loan getLoan(String id) {
        return loanDao.findOne(id);
    }

    public void addLoan(Loan farmer) {
    	loanDao.save(farmer);
    }

    public void updateLoan(String id, Loan farmer) {
    	loanDao.save(farmer);
    }

    public void deleteLoan(String id) {
    	loanDao.delete(id);
    }
}
