package com.kheefordev.recollection.dto;

public class WarrantyResponseDto {
	private String productName;
	private String warrantyCategory;
	private String brand;
	private String model;
	private String startDate;
	private String endDate;
	private String remark;

	public WarrantyResponseDto() {

	}

	public WarrantyResponseDto(String productName, String warrantyCategory, String brand, String model, String startDate,
			String endDate, String remark) {
		super();
		this.productName = productName;
		this.warrantyCategory = warrantyCategory;
		this.brand = brand;
		this.model = model;
		this.startDate = startDate;
		this.endDate = endDate;
		this.remark = remark;
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
