package com.saarthi.checker.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.checker.Warehouse;
import com.saarthi.checker.dao.WarehouseDAO;
import com.saarthi.lender.Loan;

@Service
public class WarehouseService {
	@Autowired
	private WarehouseDAO warehouseDAO;
	
	public List<Warehouse> getAllWarehouses() {
        List<Warehouse> warehouses = new ArrayList<>();
        warehouseDAO.findAll().forEach(warehouses::add);
        return warehouses;
    }
}
