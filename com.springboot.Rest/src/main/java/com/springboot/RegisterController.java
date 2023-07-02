package com.springboot;

import java.util.List;

import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import com.springboot.model.Alien;
import com.springboot.model.Register;
import com.springboot.repo.AlienRepo;
import com.springboot.repo.RegisterRepo;

@RestController
public class RegisterController {

	@Autowired
	RegisterRepo repo;

	@CrossOrigin
	@GetMapping("/login")
	public Register get(@RequestParam String email, @RequestParam String password) {
		Register logindetails = repo.findByEmailAndPassword(email, password);
		if(logindetails ==null) {
			return null;
		}
		return logindetails;
	}

	@CrossOrigin
	@PostMapping("/Register")
	public Register post(@RequestBody Register reg) {
		Register exists = get(reg.getEmail(), reg.getPassword());
		if (exists != null && exists.getId() > 0) {
			return null;
		}
		repo.save(reg);
		return reg;
	}

	@GetMapping("/getRegister")
	public List<Register> getRegister() {

		return repo.findAll();
	}

}
