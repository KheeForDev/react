package com.kheefordev.recollection.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Properties {
	@Value("${jwt.secret}")
	private String jwtSecret;

	@Value("${wnty.add.msg}")
	private String wntyAddMsg;

	@Value("${wnty.delete.msg}")
	private String wntyDeleteMsg;

	@Value("${wnty.update.msg}")
	private String wntyUpdateMsg;

	@Value("${wnty.retrieve.forbidden.error}")
	private String wntyRetrieveForbiddenError;

	@Value("${wnty.delete.forbidden.error}")
	private String wntyDeleteForbiddenError;

	@Value("${wnty.update.forbidden.error}")
	private String wntyUpdateForbiddenError;

	@Value("${wnty.update.notfound.error}")
	private String wntyUpdateNotfoundError;

	public String getJwtSecret() {
		return jwtSecret;
	}

	public void setJwtSecret(String jwtSecret) {
		this.jwtSecret = jwtSecret;
	}

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

	public String getWntyRetrieveForbiddenError() {
		return wntyRetrieveForbiddenError;
	}

	public void setWntyRetrieveForbiddenError(String wntyRetrieveForbiddenError) {
		this.wntyRetrieveForbiddenError = wntyRetrieveForbiddenError;
	}

	public String getWntyDeleteForbiddenError() {
		return wntyDeleteForbiddenError;
	}

	public void setWntyDeleteForbiddenError(String wntyDeleteForbiddenError) {
		this.wntyDeleteForbiddenError = wntyDeleteForbiddenError;
	}

	public String getWntyUpdateForbiddenError() {
		return wntyUpdateForbiddenError;
	}

	public void setWntyUpdateForbiddenError(String wntyUpdateForbiddenError) {
		this.wntyUpdateForbiddenError = wntyUpdateForbiddenError;
	}

	public String getWntyUpdateNotfoundError() {
		return wntyUpdateNotfoundError;
	}

	public void setWntyUpdateNotfoundError(String wntyUpdateNotfoundError) {
		this.wntyUpdateNotfoundError = wntyUpdateNotfoundError;
	}
}
