package com.saarthi.commons;
import lombok.Data;

public class GenericResponse {
	private boolean status;
	private Object message;
	public GenericResponse(Object message) {
		this.message = message;
		status = true;
	}
	public boolean isStatus() {
		return status;
	}
	public Object getMessage() {
		return message;
	}
	
}
