import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from "./components/hotels/hotel.component";
import {AppComponent} from "./components/app/app.component"
import {HotelCreateComponent} from "./components/hotels/hotel.create.component";
import {HotelEditComponent} from "./components/hotels/hotel.edit.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  { path: 'list', component: HotelComponent },
  { path: 'edit/:id', component: HotelEditComponent },
  { path: 'create', component: HotelCreateComponent },
  { path: '', component: HotelComponent },
  { path: '*', component: HotelComponent },
];

@NgModule({
  declarations: [
    HotelComponent,
    HotelCreateComponent,
    HotelEditComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
