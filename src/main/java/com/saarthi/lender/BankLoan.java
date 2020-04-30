package com.saarthi.lender;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.saarthi.lender.utils.BankName;
import com.saarthi.utils.ListToJsonConverter;

import lombok.Data;

@Embeddable
@Data
public class BankLoan {
	private BankName bank;
	private int rate;
	private String penalty;
	@Convert(converter = ListToJsonConverter.class)
	private List<String> termsAndConditions; 
}
