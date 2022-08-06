package com.kheefordev.recollection.util;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.kheefordev.recollection.model.Properties;

@Component
public class HelperUtil {
	@Autowired
	private Properties properties;

	public HashMap<String, String> getWarrantyStatus(Timestamp timestamp) {
		HashMap<String, String> hashMap = new HashMap<String, String>();

		Date currentDate = new Date();
		Date endDate = new Date(timestamp.getTime());

		if (currentDate.compareTo(endDate) == -1) {
			hashMap.put("status", properties.getWntyStatusExpired());
			hashMap.put("statusColorCode", properties.getWntyStatusExpiredColor());
			return hashMap;
		}

		Long currentMilliseconds = currentDate.getTime();
		Long endMilliseconds = endDate.getTime();

		long timeDiff = 0;
		timeDiff = currentMilliseconds - endMilliseconds;

		int dayDiff = (int) (timeDiff / (1000 * 60 * 60 * 24));

		if (dayDiff > 7) {
			hashMap.put("status", properties.getWntyStatusValid());
			hashMap.put("statusColorCode", properties.getWntyStatusValidColor());
		} else {
			hashMap.put("status", properties.getWntyStatusExpiring());
			hashMap.put("statusColorCode", properties.getWntyStatusExpiringColor());
		}

		return hashMap;
	}
}
