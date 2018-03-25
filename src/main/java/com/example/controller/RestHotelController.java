package com.example.controller;

import com.example.domain.Hotel;
import com.example.service.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/rest/hotels")
public class RestHotelController {
  private HotelRepository hotelRepository;

  @Autowired
  public RestHotelController(HotelRepository hotelRepository) {
    this.hotelRepository = hotelRepository;
  }

  @RequestMapping(method = RequestMethod.POST)
  public Hotel create(@RequestBody @Valid Hotel hotel) {
    return this.hotelRepository.save(hotel);
  }

  @RequestMapping(method = RequestMethod.GET)
  public List<Hotel> list() {
    return this.hotelRepository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public ResponseEntity<Hotel> get(@PathVariable("id") long id) {
    return this.hotelRepository
      .findById(id)
      .map(hotel -> ResponseEntity.ok(hotel))
      .orElse(ResponseEntity.notFound().build());
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public Hotel update(@PathVariable("id") long id, @RequestBody @Valid Hotel hotel) {
    return hotelRepository.save(hotel);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<Boolean> delete(@PathVariable("id") long id) {
    return this.hotelRepository.findById(id).map(
      hotel -> {
        this.hotelRepository.delete(hotel);
        return ResponseEntity.accepted().body(true);
      }
    ).orElse(ResponseEntity.notFound().build());
  }
}
