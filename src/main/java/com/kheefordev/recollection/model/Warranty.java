package com.kheefordev.recollection.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Warranty {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String productName;
	private Long warrantyCategoryId;
	private String brand;
	private String model;
	private Timestamp startDate;
	private Timestamp endDate;
	private String remark;
	private String createdBy;
	private Timestamp createdOn;
	private String updatedBy;
	private Timestamp updatedOn;

	public Warranty() {

	}

	public Warranty(Long id, String productName, Long warrantyCategoryId, String brand, String model,
			Timestamp startDate, Timestamp endDate, String remark, String createdBy, Timestamp createdOn,
			String updatedBy, Timestamp updatedOn) {
		super();
		this.id = id;
		this.productName = productName;
		this.warrantyCategoryId = warrantyCategoryId;
		this.brand = brand;
		this.model = model;
		this.startDate = startDate;
		this.endDate = endDate;
		this.remark = remark;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Long getWarrantyCategoryId() {
		return warrantyCategoryId;
	}

	public void setWarrantyCategoryId(Long warrantyCategoryId) {
		this.warrantyCategoryId = warrantyCategoryId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Timestamp getStartDate() {
		return startDate;
	}

	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}

	public Timestamp getEndDate() {
		return endDate;
	}

	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Timestamp getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Timestamp updatedOn) {
		this.updatedOn = updatedOn;
	}
}
