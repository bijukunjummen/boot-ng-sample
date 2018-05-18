(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hotels/hotel.component */ "./src/app/components/hotels/hotel.component.ts");
/* harmony import */ var _components_hotels_hotel_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hotels/hotel.create.component */ "./src/app/components/hotels/hotel.create.component.ts");
/* harmony import */ var _components_hotels_hotel_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hotels/hotel.edit.component */ "./src/app/components/hotels/hotel.edit.component.ts");



var appRoutes = [
    { path: 'list', component: _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_0__["HotelComponent"] },
    { path: 'edit/:id', component: _components_hotels_hotel_edit_component__WEBPACK_IMPORTED_MODULE_2__["HotelEditComponent"] },
    { path: 'create', component: _components_hotels_hotel_create_component__WEBPACK_IMPORTED_MODULE_1__["HotelCreateComponent"] },
    { path: '', component: _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_0__["HotelComponent"] },
    { path: '*', component: _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_0__["HotelComponent"] },
];


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");
/* harmony import */ var _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hotels/hotel.component */ "./src/app/components/hotels/hotel.component.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_hotels_hotel_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hotels/hotel.create.component */ "./src/app/components/hotels/hotel.create.component.ts");
/* harmony import */ var _components_hotels_hotel_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hotels/hotel.edit.component */ "./src/app/components/hotels/hotel.edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_hotels_hotel_component__WEBPACK_IMPORTED_MODULE_6__["HotelComponent"],
                _components_hotels_hotel_create_component__WEBPACK_IMPORTED_MODULE_8__["HotelCreateComponent"],
                _components_hotels_hotel_edit_component__WEBPACK_IMPORTED_MODULE_9__["HotelEditComponent"],
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["appRoutes"])
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/hotel.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/hotels/hotel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Address</th>\n                <th>Zip</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let hotel of hotels; let e = even;\">\n                <td>{{hotel.id}}</td>\n                <td>{{hotel.name}}</td>\n                <td>{{hotel.address}}</td>\n                <td>{{hotel.zip}}</td>\n                <td><a [routerLink]=\"['/edit', hotel.id]\">Edit</a> </td>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <a [routerLink]=\"['/create']\">New Hotel</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/hotel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/hotels/hotel.component.ts ***!
  \******************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hotel.service */ "./src/app/services/hotel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hotels',
            template: __webpack_require__(/*! ./hotel.component.html */ "./src/app/components/hotels/hotel.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"]]
        }),
        __metadata("design:paramtypes", [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/hotel.create.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/hotels/hotel.create.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <form [formGroup]=\"hotelModel\" class=\"form-horizontal\" (ngSubmit)=\"createHotel(hotelModel.value)\">\n\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-sm-2\">Name</label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\" placeholder=\"Name\" formControlName=\"name\"/>\n                    <span [hidden]=\"!hotelModel.hasError('required', 'name')\">Name is required..</span>\n                    <span [hidden]=\"!hotelModel.hasError('minlength', 'name')\">At least 2 characters in length</span>\n                </div>\n              </div>\n\n                <div class=\"form-group\">\n                    <label for=\"address\" class=\"col-sm-2\">Address</label>\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\" placeholder=\"Address\" formControlName=\"address\"/>\n                        <span [hidden]=\"!hotelModel.hasError('required', 'address')\">Address is Required..</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"zip\" class=\"col-sm-2\">Zip</label>\n\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\" placeholder=\"Zip\" formControlName=\"zip\"/>\n                       <span [hidden]=\"!hotelModel.hasError('required', 'zip')\">Zip is required..</span>\n                    </div>\n                </div>\n            \n\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\n            <a [routerLink]=\"['/list']\">List Hotels</a>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/hotel.create.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/hotels/hotel.create.component.ts ***!
  \*************************************************************/
/*! exports provided: HotelCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCreateComponent", function() { return HotelCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hotel.service */ "./src/app/services/hotel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelCreateComponent = /** @class */ (function () {
    function HotelCreateComponent(hotelService, router, fb) {
        this.hotelService = hotelService;
        this.router = router;
        this.hotelModel = fb.group({
            "name": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            "address": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            "zip": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-hotel',
            template: __webpack_require__(/*! ./hotel.create.component.html */ "./src/app/components/hotels/hotel.create.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"]]
        }),
        __metadata("design:paramtypes", [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], HotelCreateComponent);
    return HotelCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/hotel.edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/hotels/hotel.edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <form [formGroup]=\"hotelModel\" class=\"form-horizontal\" (ngSubmit)=\"updateHotel(hotelModel)\">\n          <input type=\"hidden\" formControlName=\"id\"/>\n          <input type=\"hidden\" formControlName=\"version\"/>\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"col-sm-2\">Name</label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\" placeholder=\"Name\" formControlName=\"name\"/>\n                    <span [hidden]=\"!hotelModel.hasError('required', 'name')\">Name is required..</span>\n                    <span [hidden]=\"!hotelModel.hasError('minlength', 'name')\">At least 2 characters in length</span>\n                </div>\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"address\" class=\"col-sm-2\">Address</label>\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\" placeholder=\"Address\" formControlName=\"address\"/>\n                        <span [hidden]=\"!hotelModel.hasError('required', 'address')\">Address is Required..</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"zip\" class=\"col-sm-2\">Zip</label>\n\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\" placeholder=\"Zip\" formControlName=\"zip\"/>\n                       <span [hidden]=\"!hotelModel.hasError('required', 'zip')\">Zip is required..</span>\n                    </div>\n                </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\n            <a [routerLink]=\"['/list']\">List Hotels</a>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/hotel.edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/hotels/hotel.edit.component.ts ***!
  \***********************************************************/
/*! exports provided: HotelEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelEditComponent", function() { return HotelEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hotel.service */ "./src/app/services/hotel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
            "name": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "address": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "zip": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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
                "name": [hotel.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
                "address": [hotel.address, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                "zip": [hotel.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                "version": [hotel.version]
            });
        });
    };
    HotelEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'edit-hotel',
            template: __webpack_require__(/*! ./hotel.edit.component.html */ "./src/app/components/hotels/hotel.edit.component.html"),
            // styleUrls: ['./hotel.component.css'],
            providers: [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"]]
        }),
        __metadata("design:paramtypes", [_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], HotelEditComponent);
    return HotelEditComponent;
}());



/***/ }),

/***/ "./src/app/services/hotel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/hotel.service.ts ***!
  \*******************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        console.log("Creating Hotel : " + bodyString);
        return this.http.post("/rest/hotels", bodyString, { headers: headers });
    };
    HotelService.prototype.updateHotel = function (hotel) {
        var bodyString = JSON.stringify(hotel);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        console.log("Updating Hotel : " + bodyString);
        return this.http.put("/rest/hotels/" + hotel.id, bodyString, { headers: headers });
    };
    HotelService.prototype.getHotel = function (id) {
        return this.http.get("/rest/hotels/" + id);
    };
    HotelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bkunjummen/learn/js/boot-ng-sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map