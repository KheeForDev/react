package com.kheefordev.recollection.util;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class DateUtil {
	private static final Logger log = LogManager.getLogger(DateUtil.class);

	public Timestamp formatStringToTimestamp(String strDate, String format) {
		if (strDate != "" && format != "") {
			Date date = null;

			try {
				date = new SimpleDateFormat(format).parse(strDate);
			} catch (ParseException e) {
				log.error(e.getMessage());
			}

			return new Timestamp(date.getTime());
		}

		return null;
	}
}
