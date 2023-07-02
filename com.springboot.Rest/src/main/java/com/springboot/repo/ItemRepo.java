package com.springboot.repo;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Item;

public interface ItemRepo extends JpaRepository<Item, Id>{

}
