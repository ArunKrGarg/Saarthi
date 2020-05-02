package com.saarthi.utils;

import com.saarthi.commons.DocType;
import com.saarthi.commons.Document;
import com.sun.javafx.binding.StringFormatter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.net.URLDecoder;
import java.util.Date;

@RestController
@RequestMapping("util")
public class CommonController {
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public Document upload(@RequestParam("file") MultipartFile file,
						   @RequestParam("phoneNo") String phoneNo, @RequestParam("docType") String docType) throws Exception {
		String msg = null;
		String fileName = null;
		boolean isInputFileDeleted = false;

		if (file != null) {
			fileName = URLDecoder.decode(file.getOriginalFilename(), "UTF-8");
			fileName = fileName.substring(0, fileName.indexOf(".csv")) + "_" + new Date().getTime() + "_.csv";
		}

		Document doc = new Document();
		doc.setDocType(DocType.CROP_EXCHANGE);
		doc.setImageUrl(fileName);
		return doc;
	}

}
