import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HotelService, Hotel } from "../../services/hotel.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: 'edit-hotel',
  templateUrl: './hotel.edit.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelEditComponent implements OnInit {
  hotelModel: FormGroup
  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.hotelModel = this.fb.group({
      "id": [],
      "name": ['', Validators.required],
      "address": ['', Validators.required],
      "zip": ['', Validators.required],
      "version": ['']
    })
  }

  updateHotel() {
    let hotel = this.hotelModel.value
    if (this.hotelModel.valid) {
      this.hotelService.updateHotel(hotel).subscribe(updatedHotel =>
        this.router.navigate(['list'])
      )
    }
  }

  ngOnInit() {
    let hotelId = this.route.snapshot.params["id"]
    this.hotelService
      .getHotel(hotelId).subscribe(hotel =>
        this.hotelModel = this.fb.group({
          "id": [hotel.id],
          "name": [hotel.name, [Validators.required, Validators.minLength(2)]],
          "address": [hotel.address, Validators.required],
          "zip": [hotel.zip, Validators.required],
          "version": [hotel.version]
        })
      )
  }
}
