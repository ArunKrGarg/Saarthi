package com.saarthi.lender.utils;

import java.util.List;

import com.saarthi.checker.Warehouse;
import com.saarthi.lender.Bank;

import lombok.Data;

@Data
public class PreLoanResponse {
	private List<Integer> timeframes;
	private List<Warehouse> warehouses;
	private List<String> reasonsForLoan;
	private List<String> installments;
	private List<Bank> banks;
}
