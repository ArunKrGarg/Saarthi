package com.saarthi.lender.service;

import java.util.ArrayList;
import java.util.Date;
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

    public String addLoan(LoanRequestDTO loanRequest) {
    	try {
    		Loan loan = generateLoanRequest(loanRequest);
    		loanDao.save(loan);
    		return "Loan applied successfully. <br> Waiting for digital contract approval. You will be notified soon";
    	}catch(Exception e) {
    		System.out.println("Error while adding loan: "+e);
    		return "Error while applying loan";
    	}
    }

    private Loan generateLoanRequest(LoanRequestDTO loanRequest) {
    	Loan loan = new Loan();
    	loan.setPrincipal(loanRequest.getAmount());
		loan.setTenure(loanRequest.getTimeframe());
		loan.setWarehouseId(loanRequest.getWarehouseId());
		loan.setReasonForLoan(loanRequest.getReasonForLoan());
		loan.setInstallments(loanRequest.getInstallments());
		loan.setAdditionalDetails(loanRequest.getAdditionalDetails());
		// main reason of taking a request dto instean of loan
		processLoanDocs(loanRequest.getDoc());
		loan.setStatus(LoanStatus.CREATED);
		Bank bank = getBank(loanRequest.getBankId());
		loan.setBank(bank);
		loan.setFarmerId(loanRequest.getFarmerId());
		loan.setCreatedDate(new Date());
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
	
	public Bank getBank(String id) {
        return bankDao.findOne(id);
    }
	
	public void updateLoan(String id, Loan farmer) {
    	loanDao.save(farmer);
    }

    public void deleteLoan(String id) {
    	loanDao.delete(id);
    }
    
}
