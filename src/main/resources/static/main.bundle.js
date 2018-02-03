webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hotels_hotel_component__ = __webpack_require__("../../../../../src/app/components/hotels/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hotels_hotel_create_component__ = __webpack_require__("../../../../../src/app/components/hotels/hotel.create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hotels_hotel_edit_component__ = __webpack_require__("../../../../../src/app/components/hotels/hotel.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__components_hotels_hotel_component__["a" /* HotelComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_hotels_hotel_edit_component__["a" /* HotelEditComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_7__components_hotels_hotel_create_component__["a" /* HotelCreateComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_hotels_hotel_component__["a" /* HotelComponent */] },
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_5__components_hotels_hotel_component__["a" /* HotelComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_hotels_hotel_component__["a" /* HotelComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_hotels_hotel_create_component__["a" /* HotelCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_hotels_hotel_edit_component__["a" /* HotelEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Address</th>\n                <th>Zip</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let hotel of hotels; let e = even;\">\n                <td>{{hotel.id}}</td>\n                <td>{{hotel.name}}</td>\n                <td>{{hotel.address}}</td>\n                <td>{{hotel.zip}}</td>\n                <td><a [routerLink]=\"['/edit', hotel.id]\">Edit</a> </td>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <a [routerLink]=\"['/create']\">New Hotel</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("../../../../../src/app/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService) {
        this.hotelService = hotelService;
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.getHotels()
            .subscribe(function (list) {
            _this.hotels = list;
        });
    };
    HotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hotels',
            template: __webpack_require__("../../../../../src/app/components/hotels/hotel.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"hotelModel\" class=\"form-horizontal\" (ngSubmit)=\"createHotel(hotelModel.value)\">\n\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-xs-2\">Name</label>\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control\" placeholder=\"Name\" formControlName=\"name\"/>\n                    <span [hidden]=\"!hotelModel.hasError('required', 'name')\">Name is required..</span>\n                    <span [hidden]=\"!hotelModel.hasError('minlength', 'name')\">At least 2 characters in length</span>\n                </div>\n              </div>\n\n                <div class=\"form-group\">\n                    <label for=\"address\" class=\"col-xs-2\">Address</label>\n                    <div class=\"col-xs-6\">\n                        <input class=\"form-control\" placeholder=\"Address\" formControlName=\"address\"/>\n                        <span [hidden]=\"!hotelModel.hasError('required', 'address')\">Address is Required..</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"zip\" class=\"col-xs-2\">Zip</label>\n\n                    <div class=\"col-xs-6\">\n                        <input class=\"form-control\" placeholder=\"Zip\" formControlName=\"zip\"/>\n                       <span [hidden]=\"!hotelModel.hasError('required', 'zip')\">Zip is required..</span>\n                    </div>\n                </div>\n            \n\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\n            <a [routerLink]=\"['/list']\">List Hotels</a>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("../../../../../src/app/services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelCreateComponent = /** @class */ (function () {
    function HotelCreateComponent(hotelService, router, fb) {
        this.hotelService = hotelService;
        this.router = router;
        this.hotelModel = fb.group({
            "name": ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(2)]],
            "address": ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            "zip": ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    }
    HotelCreateComponent.prototype.createHotel = function () {
        var _this = this;
        var hotel = this.hotelModel.value;
        if (this.hotelModel.valid) {
            this.hotelService.createHotel(hotel).subscribe(function (createdHotel) {
                _this.router.navigate(['list']);
            });
        }
    };
    HotelCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-hotel',
            template: __webpack_require__("../../../../../src/app/components/hotels/hotel.create.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HotelCreateComponent);
    return HotelCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"hotelModel\" class=\"form-horizontal\" (ngSubmit)=\"updateHotel(hotelModel)\">\n          <input type=\"hidden\" formControlName=\"id\"/>\n          <input type=\"hidden\" formControlName=\"version\"/>\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"col-xs-2\">Name</label>\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control\" placeholder=\"Name\" formControlName=\"name\"/>\n                    <span [hidden]=\"!hotelModel.hasError('required', 'name')\">Name is required..</span>\n                    <span [hidden]=\"!hotelModel.hasError('minlength', 'name')\">At least 2 characters in length</span>\n                </div>\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"address\" class=\"col-xs-2\">Address</label>\n                    <div class=\"col-xs-6\">\n                        <input class=\"form-control\" placeholder=\"Address\" formControlName=\"address\"/>\n                        <span [hidden]=\"!hotelModel.hasError('required', 'address')\">Address is Required..</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"zip\" class=\"col-xs-2\">Zip</label>\n\n                    <div class=\"col-xs-6\">\n                        <input class=\"form-control\" placeholder=\"Zip\" formControlName=\"zip\"/>\n                       <span [hidden]=\"!hotelModel.hasError('required', 'zip')\">Zip is required..</span>\n                    </div>\n                </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\n            <a [routerLink]=\"['/list']\">List Hotels</a>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hotels/hotel.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("../../../../../src/app/services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelEditComponent = /** @class */ (function () {
    function HotelEditComponent(hotelService, route, router, fb) {
        this.hotelService = hotelService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.hotelModel = this.fb.group({
            "id": [],
            "name": ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
            "address": ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
            "zip": ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
            "version": ['']
        });
    }
    HotelEditComponent.prototype.updateHotel = function () {
        var _this = this;
        var hotel = this.hotelModel.value;
        if (this.hotelModel.valid) {
            this.hotelService.updateHotel(hotel).subscribe(function (updatedHotel) {
                return _this.router.navigate(['list']);
            });
        }
    };
    HotelEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var hotelId = this.route.snapshot.params["id"];
        this.hotelService
            .getHotel(hotelId).subscribe(function (hotel) {
            return _this.hotelModel = _this.fb.group({
                "id": [hotel.id],
                "name": [hotel.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].minLength(2)]],
                "address": [hotel.address, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
                "zip": [hotel.zip, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
                "version": [hotel.version]
            });
        });
    };
    HotelEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'edit-hotel',
            template: __webpack_require__("../../../../../src/app/components/hotels/hotel.edit.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], HotelEditComponent);
    return HotelEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.getHotels = function () {
        return this.http.get("/rest/hotels");
    };
    HotelService.prototype.createHotel = function (hotel) {
        var bodyString = JSON.stringify(hotel);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        console.log("Creating Hotel : " + bodyString);
        return this.http.post("/rest/hotels", bodyString, { headers: headers });
    };
    HotelService.prototype.updateHotel = function (hotel) {
        var bodyString = JSON.stringify(hotel);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        console.log("Updating Hotel : " + bodyString);
        return this.http.put("/rest/hotels/" + hotel.id, bodyString, { headers: headers });
    };
    HotelService.prototype.getHotel = function (id) {
        return this.http.get("/rest/hotels/" + id);
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map