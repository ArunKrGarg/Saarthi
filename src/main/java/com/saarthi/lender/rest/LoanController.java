package com.saarthi.lender.rest;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.saarthi.lendee.Farmer;
import com.saarthi.lendee.service.FarmerService;
import com.saarthi.lender.Bank;
import com.saarthi.lender.Loan;
import com.saarthi.lender.service.LoanService;
import com.saarthi.lender.utils.PreLoanResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.saarthi.commons.GenericResponse;
import com.saarthi.commons.dto.EntityLoansResponseDTO;
import com.saarthi.commons.dto.LoanRequestDTO;
import com.saarthi.commons.dto.LoanSummaryDTO;

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
    public ResponseEntity<?> applyLoan(@RequestBody LoanRequestDTO loanRequest) {
		try {
			return new ResponseEntity<GenericResponse>(new GenericResponse(loanService.addLoan(loanRequest)), HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<GenericResponse>(new GenericResponse(e, false), HttpStatus.INTERNAL_SERVER_ERROR);
		}
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
    
    @RequestMapping("loans/warehouseOwner/details/{id}")
    public ResponseEntity<List<EntityLoansResponseDTO>> getAllLoansByWarehouseOwner(@PathVariable String id, @RequestParam(required = false, defaultValue = "5") int pageSize, @RequestParam(required = false, defaultValue = "1") int pageNo) {
        return new ResponseEntity<>(loanService.getAllLoansByWarehouseOwner(id, pageSize, pageNo), HttpStatus.OK);
    }
    
    // Implementation incomplete currently same as previous
    @RequestMapping("loans/bank/details/{id}")
    public ResponseEntity<List<Loan>> getAllLoansByBank(@PathVariable String id) {
        return new ResponseEntity<>(loanService.getAllLoansByBank(id), HttpStatus.OK);
    }
    
    @RequestMapping("loans/bank/{id}")
    public ResponseEntity<?> getLoanSummaryBank(@PathVariable String id, @RequestParam(required = false, defaultValue = "5") int pageSize, @RequestParam(required = false, defaultValue = "1") int pageNo){
    	return new ResponseEntity<GenericResponse>(new GenericResponse(loanService.getLoanSummaryBank(id, pageSize, pageNo)),HttpStatus.OK);
    }
    
    @RequestMapping("loans/warehouseOwner/{id}")
    public ResponseEntity<?> getLoanSummaryWarehouse(@PathVariable String id, @RequestParam(required = false, defaultValue = "5") int pageSize, @RequestParam(required = false, defaultValue = "1") int pageNo){
    	return new ResponseEntity<GenericResponse>(new GenericResponse(loanService.getLoanSummaryWarehouse(id, pageSize, pageNo)),HttpStatus.OK);
    }
    
    @RequestMapping("loan/{id}/details")
    public ResponseEntity<?> getLoanDetails(@PathVariable String id){
    	return new ResponseEntity<GenericResponse>(new GenericResponse(loanService.getLoanDetails(id)) ,HttpStatus.OK);
    }
}
