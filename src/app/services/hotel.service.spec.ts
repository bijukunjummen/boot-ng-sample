import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {Hotel} from "./hotel"
import {HotelService} from './hotel.service'


describe("Hotel Service", () => {
  let hotelService: HotelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HotelService
      ]
    });

    hotelService = TestBed.get(HotelService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it("should get all hotels", (done) => {
    hotelService.getHotels().subscribe((res) => {
      expect(res).toEqual([{"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"}]);
      done()
    });

    let hotelsRequest = httpMock.expectOne("/rest/hotels");
    hotelsRequest.flush([{"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"}]);

    httpMock.verify();

  });

  it("should retrieve a hotel by id", (done) => {
    hotelService.getHotel(1).subscribe((res) => {
      expect(res).toEqual({"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"});
      done();
    });

    let hotelRequestById = httpMock.expectOne("/rest/hotels/1");
    hotelRequestById.flush({"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"});

    httpMock.verify();
  });

  it("should create a hotel on POST with details", (done) => {
    let hotel: Hotel = {id: null, name: "test hotel", address: "test address", zip: "test zip"};

    hotelService
      .createHotel(hotel)
      .subscribe((res) => {
        expect(res).toEqual({"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"});
        done();          
      });

    let hotelRequestById = httpMock.expectOne("/rest/hotels")
    hotelRequestById.flush({"id": "1", "name": "test name", "address": "test address", "zip": "zip", "version": "1"});
  });


})
