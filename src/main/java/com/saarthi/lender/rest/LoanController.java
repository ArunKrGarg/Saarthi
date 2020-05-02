package com.saarthi.lender.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.saarthi.lendee.Farmer;
import com.saarthi.lendee.service.FarmerService;
import com.saarthi.lender.Bank;
import com.saarthi.lender.Loan;
import com.saarthi.lender.service.LoanService;
import com.saarthi.lender.utils.LoanRequestDTO;
import com.saarthi.lender.utils.PreLoanResponse;

@RestController
@RequestMapping("/lender")
public class LoanController {
	@Autowired
    private LoanService loanService;
	
	@RequestMapping("/preApplyLoan")
    public PreLoanResponse preApplyLoan() {
    	return loanService.preApplyLoan();
    }
	
	@RequestMapping(method = RequestMethod.POST, value = "/applyLoan")
    public String applyLoan(@RequestBody LoanRequestDTO loanRequest) {
    	return loanService.addLoan(loanRequest);
    }
	
	@RequestMapping(method = RequestMethod.POST, value = "/bank")
    public void addBank(@RequestBody Bank bank) {
    	loanService.addBank(bank);
    }

    @RequestMapping("loans")
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }
    
    @RequestMapping("banks")
    public List<Bank> getAllBanks() {
        return loanService.getAllBanks();
    }

    @RequestMapping("/loan/{id}")
    public Loan getFarmer(@PathVariable String id) {
        return loanService.getLoan(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/loan/{id}")
    public void updateLoan(@RequestBody Loan loan,@PathVariable String id) {
    	loanService.updateLoan(id, loan);
    }
}
