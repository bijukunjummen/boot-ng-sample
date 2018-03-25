import {HotelComponent} from "./components/hotels/hotel.component";
import {AppComponent} from "./components/app/app.component"
import {HotelCreateComponent} from "./components/hotels/hotel.create.component";
import {HotelEditComponent} from "./components/hotels/hotel.edit.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: 'list', component: HotelComponent },
  { path: 'edit/:id', component: HotelEditComponent },
  { path: 'create', component: HotelCreateComponent },
  { path: '', component: HotelComponent },
  { path: '*', component: HotelComponent },
];