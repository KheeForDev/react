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

	@Value("${wnty.retrieve.notfound.error}")
	private String wntyRetrieveNotfoundError;

	@Value("${wnty.retrieve.forbidden.error}")
	private String wntyRetrieveForbiddenError;

	@Value("${wnty.delete.forbidden.error}")
	private String wntyDeleteForbiddenError;

	@Value("${wnty.update.forbidden.error}")
	private String wntyUpdateForbiddenError;

	@Value("${wnty.update.notfound.error}")
	private String wntyUpdateNotfoundError;

	@Value("${wnty.status.valid}")
	private String wntyStatusValid;

	@Value("${wnty.status.valid.color}")
	private String wntyStatusValidColor;

	@Value("${wnty.status.expiring}")
	private String wntyStatusExpiring;

	@Value("${wnty.status.expiring.color}")
	private String wntyStatusExpiringColor;

	@Value("${wnty.status.expired}")
	private String wntyStatusExpired;

	@Value("${wnty.status.expired.color}")
	private String wntyStatusExpiredColor;

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

	public String getWntyRetrieveNotfoundError() {
		return wntyRetrieveNotfoundError;
	}

	public void setWntyRetrieveNotfoundError(String wntyRetrieveNotfoundError) {
		this.wntyRetrieveNotfoundError = wntyRetrieveNotfoundError;
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

	public String getWntyStatusValid() {
		return wntyStatusValid;
	}

	public void setWntyStatusValid(String wntyStatusValid) {
		this.wntyStatusValid = wntyStatusValid;
	}

	public String getWntyStatusValidColor() {
		return wntyStatusValidColor;
	}

	public void setWntyStatusValidColor(String wntyStatusValidColor) {
		this.wntyStatusValidColor = wntyStatusValidColor;
	}

	public String getWntyStatusExpiring() {
		return wntyStatusExpiring;
	}

	public void setWntyStatusExpiring(String wntyStatusExpiring) {
		this.wntyStatusExpiring = wntyStatusExpiring;
	}

	public String getWntyStatusExpiringColor() {
		return wntyStatusExpiringColor;
	}

	public void setWntyStatusExpiringColor(String wntyStatusExpiringColor) {
		this.wntyStatusExpiringColor = wntyStatusExpiringColor;
	}

	public String getWntyStatusExpired() {
		return wntyStatusExpired;
	}

	public void setWntyStatusExpired(String wntyStatusExpired) {
		this.wntyStatusExpired = wntyStatusExpired;
	}

	public String getWntyStatusExpiredColor() {
		return wntyStatusExpiredColor;
	}

	public void setWntyStatusExpiredColor(String wntyStatusExpiredColor) {
		this.wntyStatusExpiredColor = wntyStatusExpiredColor;
	}
}