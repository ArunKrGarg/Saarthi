package com.saarthi.lendee.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.saarthi.lendee.Crop;
import com.saarthi.lendee.Farmer;
import com.saarthi.lendee.utils.CropListAlias;
import com.saarthi.lender.Loan;

import springfox.documentation.spring.web.json.Json;

public interface FarmerDAO extends CrudRepository<Farmer, String>{
	@Query("select new com.saarthi.lendee.utils.CropListAlias(crops) from Farmer where id = ?1")
	CropListAlias findCropByFarmerId(String farmerId);
}
