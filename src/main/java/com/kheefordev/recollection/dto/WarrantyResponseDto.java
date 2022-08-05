package com.kheefordev.recollection.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class WarrantyResponseDto {
	private int id;
	private String productName;
	private String warrantyCategory;
	private String warrantyCategoryName;
	private String brand;
	private String model;
	private String startDate;
	private String endDate;
	private String remark;

	public WarrantyResponseDto() {

	}

	public WarrantyResponseDto(int id, String productName, String warrantyCategory, String warrantyCategoryName,
			String brand, String model, String startDate, String endDate, String remark) {
		super();
		this.id = id;
		this.productName = productName;
		this.warrantyCategory = warrantyCategory;
		this.warrantyCategoryName = warrantyCategoryName;
		this.brand = brand;
		this.model = model;
		this.startDate = startDate;
		this.endDate = endDate;
		this.remark = remark;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getWarrantyCategory() {
		return warrantyCategory;
	}

	public void setWarrantyCategory(String warrantyCategory) {
		this.warrantyCategory = warrantyCategory;
	}

	public String getWarrantyCategoryName() {
		return warrantyCategoryName;
	}

	public void setWarrantyCategoryName(String warrantyCategoryName) {
		this.warrantyCategoryName = warrantyCategoryName;
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

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
}