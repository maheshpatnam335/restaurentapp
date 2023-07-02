package com.springboot.repo;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Alien;

public interface AlienRepo extends JpaRepository<Alien, Id> {

}
