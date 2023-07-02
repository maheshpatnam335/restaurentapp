package com.springboot.repo;

import java.util.List;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.springboot.model.Register;

public interface RegisterRepo extends JpaRepository<Register, Id>{
	@Query("from Register where email=?1 and password=?2")
	Register findByEmailAndPassword(String email,String password);
//	@Query("from Register where email=?1")
//	List<Register> findByEmail(String email);
}
