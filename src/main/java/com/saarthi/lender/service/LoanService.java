package com.saarthi.lender.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.checker.service.WarehouseService;
import com.saarthi.commons.Document;
import com.saarthi.lender.Bank;
import com.saarthi.lender.Loan;
import com.saarthi.lender.dao.BankDAO;
import com.saarthi.lender.dao.LoanDAO;
import com.saarthi.lender.utils.LenderConstants;
import com.saarthi.lender.utils.LoanRequestDTO;
import com.saarthi.lender.utils.LoanStatus;
import com.saarthi.lender.utils.PreLoanResponse;

@Service
public class LoanService {
	@Autowired
    private LoanDAO loanDao;
	
	@Autowired
	private BankDAO bankDao;
	
	@Autowired
	private WarehouseService warehouseService;
	
	public PreLoanResponse preApplyLoan() {
		PreLoanResponse response = new PreLoanResponse();
		response.setTimeframes(Arrays.asList(LenderConstants.TIME_FRAMES));
		response.setWarehouses(warehouseService.getAllWarehouses());
		response.setReasonsForLoan(Arrays.asList(LenderConstants.LOAN_REASONS));
		response.setInstallments(Arrays.asList(LenderConstants.INSTALLMENTS));
		response.setBanks(getAllBanks());
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

    public void addLoan(LoanRequestDTO loanRequest) {
    	Loan loan = generateLoanRequest(loanRequest);
    	loanDao.save(loan);
    }

    private Loan generateLoanRequest(LoanRequestDTO loanRequest) {
    	Loan loan = new Loan();
    	loan.setPrincipal(loanRequest.getAmount());
		loan.setTenure(loanRequest.getTimeframe());
		loan.setWarehouseId(loanRequest.getWarehouseId());
		loan.setReasonForLoan(loanRequest.getReasonForLoan());
		loan.setInstallments(loanRequest.getInstallments());
		loan.setAdditionalDetails(loanRequest.getAdditionalDetails());
		processLoanDocs(loanRequest.getDoc());
		loan.setStatus(LoanStatus.IN_PROGRESS);
		return loan;
	}

	private void processLoanDocs(Document doc) {
		// TODO Auto-generated method stub
		
	}

	public void addBank(Bank bank) {
    	bankDao.save(bank);
    }
	
	public List<Bank> getAllBanks() {
        List<Bank> banks = new ArrayList<>();
        bankDao.findAll().forEach(banks::add);
        return banks;
    }
	
	public void updateLoan(String id, Loan farmer) {
    	loanDao.save(farmer);
    }

    public void deleteLoan(String id) {
    	loanDao.delete(id);
    }
}
