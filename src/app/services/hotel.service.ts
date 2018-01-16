import { Injectable } from '@angular/core'

import {Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export class Hotel {
  id: string
  name: string
  address: string
  zip: string
}

@Injectable()
export class HotelService {
  constructor(private http: Http) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get("/rest/hotels")
      .map(res => res.json())
  }


  createHotel(hotel: Hotel): Observable<Hotel> {
    let bodyString = JSON.stringify(hotel)
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let requestOptions: RequestOptions = new RequestOptions({headers: headers})
    console.log("Creating Hotel : " + bodyString)
    return this.http.post("/rest/hotels", bodyString, requestOptions)
      .map((res: Response) => res.json())
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    let bodyString = JSON.stringify(hotel)
    let headers = new Headers({'Content-Type': 'application/json'})
    let requestOptions: RequestOptions = new RequestOptions({headers: headers})
    console.log("Updating Hotel : " + bodyString)
    return this.http.put("/rest/hotels/" + hotel.id, bodyString, requestOptions)
      .map((res: Response) => res.json())
  }

  getHotel(id: number) {
    return this.http.get(`/rest/hotels/${ id }`)
      .map(res => res.json())
  }
}
