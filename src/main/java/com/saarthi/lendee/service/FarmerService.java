package com.saarthi.lendee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.lendee.Farmer;
import com.saarthi.lendee.dao.FarmerDAO;

@Service
public class FarmerService {
	@Autowired
    private FarmerDAO farmerDao;

    public List<Farmer> getAllFarmers() {
        List<Farmer> farmers = new ArrayList<>();
        farmerDao.findAll().forEach(farmers::add);
        return farmers;
    }

    public Farmer getFarmer(String id) {
        return farmerDao.findOne(id);
    }

    public void addFarmer(Farmer farmer) {
    	farmerDao.save(farmer);
    }

    public void updateFarmer(String id, Farmer farmer) {
    	farmerDao.save(farmer);
    }

    public void deleteFarmer(String id) {
    	farmerDao.delete(id);
    }
    
}
