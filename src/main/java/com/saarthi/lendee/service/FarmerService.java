package com.saarthi.lendee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.saarthi.lendee.Crop;
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

    public Crop getCropByWarehouse(String farmerId, String warehouseId) {
    	System.out.println("pehle");
    	List<Crop> crops = farmerDao.findCropByFarmerId(farmerId).getCrops();
    	System.out.println("farmerId id: "+farmerId+", warehouseId: "+warehouseId);
    	System.out.println(new Gson().toJson(crops));
    	if(crops==null)return null;
    	// TBD can this be done via mysql, it says of an implicit queryable mechanism for json
    	for(Crop crop: crops) {
    		if(crop.getWarehouseId().equals(warehouseId)) {
    			return crop;
    		}
    	}
    	return null;
    }
    
    public List<Crop> getCropByFarmerId(String id){
    	return farmerDao.findCropByFarmerId(id).getCrops();
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
