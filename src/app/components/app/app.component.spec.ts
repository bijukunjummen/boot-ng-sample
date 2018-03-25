import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { appRoutes } from "../../app-routes"
import { AppModule } from "../../app.module"
import {Location} from "@angular/common";


describe('AppComponent', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                // AppComponent
            ],
            imports: [AppModule]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });
    it('should create the app', fakeAsync(() => {
        router.navigate([''])
        tick();
        expect(location.path()).toBe('');
    }));
});
