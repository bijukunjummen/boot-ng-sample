import {Component} from '@angular/core';
import {HotelService, Hotel} from '../../services/hotel.service'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'create-hotel',
  templateUrl: './hotel.create.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelCreateComponent {

  hotelModel: FormGroup;

  constructor(private hotelService: HotelService, private router: Router, fb: FormBuilder) {
    this.hotelModel = fb.group({
      "name" : ['', [Validators.required, Validators.minLength(2)]],
      "address": ['', Validators.required],
      "zip": ['', Validators.required]
    })
  }

  createHotel() {
    let hotel = this.hotelModel.value
    if (this.hotelModel.valid) {
      this.hotelService.createHotel(hotel).subscribe(createdHotel => {
        this.router.navigate(['list']);
      })
    }
  }

}
