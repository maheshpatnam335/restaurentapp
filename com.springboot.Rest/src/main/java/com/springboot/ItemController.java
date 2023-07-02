package com.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Item;
import com.springboot.repo.ItemRepo;

@RestController
public class ItemController {
	@Autowired
	ItemRepo repo;

	@CrossOrigin
	@PostMapping("/AddItem")
	public Item AddItem(@RequestBody Item item) {
		repo.save(item);
		return item;
	}
	
	@CrossOrigin
	@GetMapping("/getItems")
	public List<Item> getItems(){
		return repo.findAll();
	}
}
