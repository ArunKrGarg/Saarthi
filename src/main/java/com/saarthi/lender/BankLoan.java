package com.saarthi.lender;

import java.util.List;

import javax.persistence.Embeddable;

import com.saarthi.lender.utils.BankName;

import lombok.Data;

@Embeddable
@Data
public class BankLoan {
	private BankName bank;
	private int rate;
	private String penalty;
	private List<String> termsAndConditions; 
}
