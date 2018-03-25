import { TestBed, async } from '@angular/core/testing';
import { HotelComponent } from './hotel.component';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

export const appRoutes: Routes = [
    { path: 'list', component: HotelComponent },
    { path: '', component: HotelComponent },
    { path: '*', component: HotelComponent },
  ];

  describe('HotelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelComponent
      ],
      imports: [RouterModule.forRoot(appRoutes), HttpClientTestingModule],
      providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    }).compileComponents();
  }));
  
  it('should be created', async(() => {
    const fixture = TestBed.createComponent(HotelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
