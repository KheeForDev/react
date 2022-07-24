package com.kheefordev.recollection.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Properties {
	@Value("${wnty.add.msg}")
	private String wntyAddMsg;

	@Value("${wnty.delete.msg}")
	private String wntyDeleteMsg;

	@Value("${wnty.update.msg}")
	private String wntyUpdateMsg;

	public String getWntyAddMsg() {
		return wntyAddMsg;
	}

	public void setWntyAddMsg(String wntyAddMsg) {
		this.wntyAddMsg = wntyAddMsg;
	}

	public String getWntyDeleteMsg() {
		return wntyDeleteMsg;
	}

	public void setWntyDeleteMsg(String wntyDeleteMsg) {
		this.wntyDeleteMsg = wntyDeleteMsg;
	}

	public String getWntyUpdateMsg() {
		return wntyUpdateMsg;
	}

	public void setWntyUpdateMsg(String wntyUpdateMsg) {
		this.wntyUpdateMsg = wntyUpdateMsg;
	}
}
