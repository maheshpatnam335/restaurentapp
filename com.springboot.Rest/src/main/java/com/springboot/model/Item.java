package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {

	@Id
	@GeneratedValue
	public int ID;
	public String ItemName;
	public String ItemCost;
	public boolean Available;
	public int ItemQuantity;
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getItemName() {
		return ItemName;
	}
	public void setItemName(String itemName) {
		ItemName = itemName;
	}
	public String getItemCost() {
		return ItemCost;
	}
	public void setItemCost(String itemCost) {
		ItemCost = itemCost;
	}
	public boolean isAvailable() {
		return Available;
	}
	public void setAvailable(boolean available) {
		Available = available;
	}
	public int getItemQuantity() {
		return ItemQuantity;
	}
	public void setItemQuantity(int itemQuantity) {
		ItemQuantity = itemQuantity;
	}
	
}
