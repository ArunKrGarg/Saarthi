package com.saarthi.checker;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

import com.saarthi.commons.Location;

import lombok.Data;

@Entity
@Data
public class Warehouse {
	@Id 
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	private String name;
	@Embedded
	private Location location;
	// TBD to be changed to ManyToMany
	@ManyToOne
	private WarehouseOwner owner;
}
