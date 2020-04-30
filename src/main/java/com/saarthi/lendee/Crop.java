package com.saarthi.lendee;

import javax.persistence.Entity;

import org.hibernate.mapping.MetadataSource;

import com.saarthi.lendee.utils.CropQuality;
import com.saarthi.lendee.utils.Measure;

import lombok.Data;

@Data
public class Crop {
	private String warehouseId;
	private String quantity;
	private Measure measure;
	private CropQuality quality;
}
