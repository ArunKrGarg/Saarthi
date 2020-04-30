package com.saarthi.commons;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

import com.saarthi.lendee.Farmer;

import lombok.Data;

@Data
public class Document {
	private String imageUrl;
	private DocType docType;
}
