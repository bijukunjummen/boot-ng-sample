import {Component, OnInit} from '@angular/core';
import {HotelService, Hotel} from '../../services/hotel.service'

@Component({
  selector: 'hotels',
  templateUrl: './hotel.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelComponent implements OnInit {
  hotels: Hotel[]

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe(list => {
        this.hotels = list
      })
  }
}
