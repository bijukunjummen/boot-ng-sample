package com.example.service;


import com.example.domain.Hotel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HotelRepository extends CrudRepository<Hotel, Long> {
	@Override
	List<Hotel> findAll();
}
