package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;


@Entity
public class Register {
	@javax.persistence.Id
	@GeneratedValue
private int Id;
private String Fname;
private String Lname;
private String Email;
private String MobileNumber;
private String Password;
public int getId() {
	return Id;
}
public void setId(int id) {
	Id = id;
}
public String getFname() {
	return Fname;
}
public void setFname(String fname) {
	Fname = fname;
}
public String getLname() {
	return Lname;
}
public void setLname(String lname) {
	Lname = lname;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}
public String getMobileNumber() {
	return MobileNumber;
}
public void setMobileNumber(String mobileNumber) {
	MobileNumber = mobileNumber;
}
public String getPassword() {
	return Password;
}
public void setPassword(String password) {
	Password = password;
}
@Override
public String toString() {
	return "Register [Id=" + Id + ", Fname=" + Fname + ", Lname=" + Lname + ", Email=" + Email + ", MobileNumber="
			+ MobileNumber + ", Password=" + Password + "]";
}


}
