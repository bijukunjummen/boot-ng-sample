import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule} from '@angular/router';
import {appRoutes} from "./app-routes";
import {HotelComponent} from "./components/hotels/hotel.component";
import {AppComponent} from "./components/app/app.component"
import {HotelCreateComponent} from "./components/hotels/hotel.create.component";
import {HotelEditComponent} from "./components/hotels/hotel.edit.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
