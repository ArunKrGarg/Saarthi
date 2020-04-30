package com.saarthi.lender.utils;

import com.saarthi.commons.Document;

import lombok.Data;

@Data
public class LoanRequestDTO {
	private int amount;
	private int timeframe;
	private String warehouseId;
	private String reasonForLoan;
	private String installments;
	private String additionalDetails;
	private Document doc;
}
