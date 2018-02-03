import {Injectable} from '@angular/core'

import {HttpHeaders, HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';

import {Hotel} from "./hotel"

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>("/rest/hotels")
  }


  createHotel(hotel: Hotel): Observable<Hotel> {
    let bodyString = JSON.stringify(hotel)
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    console.log("Creating Hotel : " + bodyString)
    return this.http.post<Hotel>("/rest/hotels", bodyString, {headers: headers})
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    let bodyString = JSON.stringify(hotel)
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    console.log("Updating Hotel : " + bodyString)
    return this.http.put<Hotel>("/rest/hotels/" + hotel.id, bodyString, {headers: headers})
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`/rest/hotels/${ id }`)
  }
}
