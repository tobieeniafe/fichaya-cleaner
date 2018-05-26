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

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    /*bottom: 0;*/\r\n    /*padding: 2rem 5rem 5rem 5rem;*/\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #000080;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.side-nav-open, h3, h5{\r\n    color: #000080;\r\n}\r\n\r\n.table-body{\r\n    box-shadow: 0px 1px 15px 1px #ccc;\r\n    padding: 3rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .table-body{\r\n        padding: 1rem;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n            <h4>{{title}}</h4>\n            <br><br>\n\n            <div class=\"row table-body\">\n            <form (submit)=\"updateDetails()\" novalidate=\"\">\n                <h5>Personal Information</h5>\n                \n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Firstname\" name=\"firstname\" [(ngModel)]=\"cleaner.name.firstname\" disabled=\"\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Lastname\" name=\"lastname\" [(ngModel)]=\"cleaner.name.lastname\" disabled=\"\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Phone no\" name=\"phone\" [(ngModel)]=\"cleaner.phone\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"cleaner.email\" disabled=\"\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"BVN\" name=\"bvn\" [(ngModel)]=\"cleaner.bank_details.bvn\" disabled=\"\">\n                </div>\n                 <div class=\"input-field col m3 s12\">\n                    <select name=\"bank\" #bank>\n                        <option selected=\"\" [ngValue]=\"cleaner.bank_details.bank\">{{cleaner.bank_details.bank}}</option>\n                        <option *ngFor=\"let b of allBanks\" [ngValue]=\"b.name\">{{b.name}}</option>\n                    </select>\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Account No\" name=\"account_no\"  [(ngModel)]=\"cleaner.bank_details.account_no\">\n                </div>\n\n                <div class=\"col s12 center\" style=\"padding-top: 10px\">\n                    <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n                </div>\n\n            </form>\n            </div>\n\n            <br><br>\n\n        </div>      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent, Cleaner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cleaner", function() { return Cleaner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
        this.title = 'Account';
        this.cleaner = new Cleaner();
        this.allBanks = [
            { name: "Access Bank", slug: "access-bank", code: "044", longcode: "044150149" },
            { name: "Citibank Nigeria", slug: "citibank-nigeria", code: "023", longcode: "023150005" },
            { name: "Diamond Bank", slug: "diamond-bank", code: "063", longcode: "063150162" },
            { name: "Ecobank Nigeria", slug: "ecobank-nigeria", code: "050", longcode: "050150010" },
            { name: "Enterprise Bank", slug: "enterprise-bank", code: "084", longcode: "084150015" },
            { name: "Fidelity Bank", slug: "fidelity-bank", code: "070", longcode: "070150003" },
            { name: "First Bank of Nigeria", slug: "first-bank-of-nigeria", code: "011", longcode: "011151003" },
            { name: "First City Monument Bank", slug: "first-city-monument-bank", code: "214", longcode: "214150018" },
            { name: "Guaranty Trust Bank", slug: "guaranty-trust-bank", code: "058", longcode: "058152036" },
            { name: "Heritage Bank", slug: "heritage-bank", code: "030", longcode: "030159992" },
            { name: "Keystone Bank", slug: "keystone-bank", code: "082", longcode: "082150017" },
            { name: "MainStreet Bank", slug: "mainstreet-bank", code: "014", longcode: "014150331" },
            { name: "Skye Bank", slug: "skye-bank", code: "076", longcode: "076151006" },
            { name: "Stanbic IBTC Bank", slug: "stanbic-ibtc-bank", code: "221", longcode: "221159522" },
            { name: "Standard Chartered Bank", slug: "standard-chartered-bank", code: "068", longcode: "068150015" },
            { name: "Sterling Bank", slug: "sterling-bank", code: "232", longcode: "232150016" },
            { name: "Union Bank of Nigeria", slug: "union-bank-of-nigeria", code: "032", longcode: "032080474" },
            { name: "United Bank For Africa", slug: "united-bank-for-africa", code: "033", longcode: "033153513" },
            { name: "Unity Bank", slug: "unity-bank", code: "215", longcode: "215154097" },
            { name: "Wema Bank", slug: "wema-bank", code: "035", longcode: "035150103" },
            { name: "Zenith Bank", slug: "zenith-bank", code: "057", longcode: "057150013" },
            { name: "Jaiz Bank", slug: "jaiz-bank", code: "301", longcode: "301080020" },
            { name: "Suntrust Bank", slug: "suntrust-bank", code: "100", longcode: "" },
            { name: "Providus Bank", slug: "providus-bank", code: "101", longcode: "" },
            { name: "Parallex Bank", slug: "parallex-bank", code: "526", longcode: "" }
        ];
        this.getCleaner();
        $(document).ready(function () {
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    AccountComponent.prototype.ngOnInit = function () { };
    AccountComponent.prototype.getCleaner = function () {
        var _this = this;
        this.accountService.getUserDetails().subscribe(function (data) {
            if (data.success == true) {
                console.log(data.cleaner);
                _this.cleaner = data.cleaner;
            }
            else {
                Materialize.toast("Something's not right 1", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right 2", 1500, 'red white-text'); }, function () { return $(document).ready(function () {
            $('select').material_select();
        }); });
    };
    AccountComponent.prototype.updateDetails = function (s, l, t) {
        var query = {};
        //console.log(query)
        this.accountService.updateDetails(query).subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 1500, 'green white-text');
                // this.getCleaner()
            }
            else {
                Materialize.toast("Something's not right", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], AccountComponent);
    return AccountComponent;
}());

var Cleaner = /** @class */ (function () {
    function Cleaner() {
        this.name = {
            firstname: '',
            lastname: ''
        };
        this.address = {
            address: '',
            busstop: '',
            location: '',
            area: ''
        };
        this.bank_details = {
            bvn: '',
            bank: '',
            account_no: ''
        };
    }
    return Cleaner;
}());



/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    AccountService.prototype.getUserDetails = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/cleaner/profile', httpOptions);
    };
    AccountService.prototype.updateDetails = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.put(this.api + '/cleaner/update', user, httpOptions);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
var Api = /** @class */ (function () {
    function Api() {
        //readonly endpoint: string = 'https://fichaya-api.herokuapp.com/api/v1'
        this.endpoint = 'http://localhost:3000/api/v1';
    }
    return Api;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/services/validator.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_routeguard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/routeguard.service */ "./src/app/services/routeguard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _register_register_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.service */ "./src/app/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: 'cleaner/login', pathMatch: 'full' },
    { path: 'cleaner/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], canActivate: [_services_routeguard_service__WEBPACK_IMPORTED_MODULE_12__["RouteGuardService"]] },
    { path: 'cleaner/register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], canActivate: [_services_routeguard_service__WEBPACK_IMPORTED_MODULE_12__["RouteGuardService"]] },
    { path: 'cleaner/dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'cleaner/booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_14__["BookingComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'cleaner/account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
];
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_14__["BookingComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"], _services_routeguard_service__WEBPACK_IMPORTED_MODULE_12__["RouteGuardService"], _register_register_service__WEBPACK_IMPORTED_MODULE_19__["RegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: left 0.5s ease;\r\n    /*padding: 2rem 2rem 2rem 4rem;*/\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #000080;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.table-body{\r\n    box-shadow: 0px 1px 15px 1px #ccc;\r\n    padding: 2rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n.side-nav-open, h3, th{\r\n    color: #000080;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .body-view, .table-body{\r\n    padding: 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <!-- container starts --> \n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n\n            <h4>{{title}}</h4>\n\n            <div class=\"table-body\"><table class=\"striped\">\n                <thead>\n                  <tr>\n                      <th>Date</th>\n                      <th>Time</th>\n                      <th>Address</th>\n                      <th>Bus-Stop, Area</th>\n                      <th>Location</th>\n                      <th>Type</th>\n                      <th>Completed</th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let b of bookings\">\n                    <td>{{b.details.date}}</td>\n                    <td>{{b.details.time}}</td>\n                    <td>{{b.address.address}}</td>\n                    <td>{{b.address.busstop}}, {{b.address.area}}</td>\n                    <td>{{b.address.location}}</td>\n                    <td>{{b.type}}</td>\n                    <td>\n                      <div class=\"switch\">\n                          <label>No<input type=\"checkbox\" [checked]=\"b.is_complete\" (change)='markAsComplete(b._id)' value=\"{{b.is_complete}}\"><span class=\"lever\"></span>Yes</label>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n            </table></div>\n\n        </div>\n        <!-- container ends -->      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.service */ "./src/app/booking/booking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingComponent = /** @class */ (function () {
    function BookingComponent(router, bookingService) {
        this.router = router;
        this.bookingService = bookingService;
        this.title = 'Booking';
        this.getBookings();
        $(document).ready(function () {
            //customer sidebar
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    BookingComponent.prototype.ngOnInit = function () { };
    BookingComponent.prototype.getBookings = function () {
        var _this = this;
        this.bookingService.getBookings().subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 5500, 'green white-text');
                _this.bookings = data.gigs;
                //console.log(data.gigs)
            }
            else {
                Materialize.toast("error getting booking", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("error occured", 3000, 'red white-text'); }, function () { return console.log(); });
    };
    BookingComponent.prototype.markAsComplete = function (id) {
        var _this = this;
        this.bookingService.markAsComplete({ gig_id: id }).subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 5500, 'green white-text');
                _this.getBookings();
            }
            else {
                Materialize.toast("unable to mark as complete", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("error occured", 3000, 'red white-text'); }, function () { return console.log(); });
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/booking/booking.service.ts":
/*!********************************************!*\
  !*** ./src/app/booking/booking.service.ts ***!
  \********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    BookingService.prototype.getBookings = function () {
        this.token = localStorage.getItem('access_token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/cleaner/view_gigs', httpOptions);
    };
    BookingService.prototype.markAsComplete = function (id) {
        this.token = localStorage.getItem('access_token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.put(this.api + '/cleaner/gig/complete', id, httpOptions);
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: left 0.5s ease;\r\n    padding: 2rem 5rem;\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #000080;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.side-nav-open, h3{\r\n    color: #000080;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n            <h4>{{title}}</h4>\n        </div>      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.title = 'Dashboard';
        $(document).ready(function () {
            //customer sidebar
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n  background: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/assets/images/bg-2.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-color: #111;\r\n  padding-top: 12rem;\r\n  text-align: center;\r\n  min-height: 100%;\r\n}\r\n\r\n.form-body{\r\n\tbackground-color: #fff;\r\n\tpadding: 2rem 5rem !important;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .back {\r\n    padding-top: 5rem;\r\n    min-height: 100%;\r\n  }\r\n  .form-body{\r\n    padding: 1rem 2rem !important;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"back\">\n  <div class=\"container row\">\n\t    <div class=\"col m6 s12 white-text\"><h4 style=\"padding-top: 5rem\">Become a partner with fichaya and make money cleaning.</h4></div>\n\n\t    <div class=\"col m6 s12 form-body\" align=\"center\">\n\t    \t\t<h4 class=\"primary-text\">Associate's Login</h4>\n\t\t    \t<form (submit)=\"submitForm()\" novalidate=\"\">\n\t\t    \t\t<div class=\"row\">\n\t\t    \t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t\t    \t<input type=\"text\" placeholder=\"email or phone number\" name=\"loginvalue\" [(ngModel)]=\"loginvalue\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t\t\t    <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-field col m12 s12\" *ngIf=\"!preloader\">\n\t\t\t    \t\t\t<button class=\"btn btn-primary\" type=\"submit\">Login <i class=\"ion-log-in\"></i></button>\n\t\t\t    \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</form>\n\n\t\t    <div align='center' *ngIf=\"preloader\">\n\t\t\t    <div class=\"preloader-wrapper small active\">\n\t\t\t      <div class=\"spinner-layer\">\n\t\t\t        <div class=\"circle-clipper left\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t        <div class=\"gap-patch\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t        <div class=\"circle-clipper right\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t</div>\n\n\t    \t<h6>Want to be part of Fichaya? <a routerLink=\"/cleaner/register\">Join Us</a></h6>\n\t    \t\n\t    \t\n\n\t    </div>\n  </div>\n</div>\n\n\t\t\t\t\t"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validator.service */ "./src/app/services/validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _auth, _validateService) {
        this.router = router;
        this._auth = _auth;
        this._validateService = _validateService;
        this.preloader = false;
        $(document).ready(function () {
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submitForm = function () {
        if (this.loginvalue == undefined || this.loginvalue == null) {
            Materialize.toast('Form cannot be empty', 3000, 'red white-text');
            return false;
        }
        else {
            if (this._validateService.ValidateEmail(this.loginvalue)) {
                this.submitEmailForm();
            }
            else {
                this.submitPhoneForm();
            }
        }
    };
    LoginComponent.prototype.submitEmailForm = function () {
        var _this = this;
        this.preloader = true;
        var cleaner = {
            email: this.loginvalue,
            password: this.password
        };
        if (!this._validateService.ValidateEmail(cleaner.email)) {
            Materialize.toast('Invalid email', 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        if (!this._validateService.ValidateLoginEmail(cleaner)) {
            Materialize.toast('Invalid login parameters', 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        this._auth.loginCleanerEmail(cleaner).subscribe(function (data) {
            if (data.success == false) {
                Materialize.toast(data.message, 3000, 'red white-text');
                _this.preloader = false;
            }
            else if (data.success == true) {
                Materialize.toast(data.message, 3000, 'green white-text');
                localStorage.setItem('access_token', data.token);
                _this.router.navigate(['/cleaner/dashboard']);
            }
            else {
                Materialize.toast('uh-oh', 3000, 'red white-text');
                _this.preloader = false;
                _this.router.navigate(['/cleaner/login']);
            }
        }, function (err) { return (Materialize.toast("something's not right", 3000, 'red white-text')); }, function () { return console.log(); });
    };
    LoginComponent.prototype.submitPhoneForm = function () {
        var _this = this;
        this.preloader = true;
        var cleaner = {
            phone: this.loginvalue,
            password: this.password
        };
        if (!this._validateService.ValidatePhone(cleaner.phone)) {
            Materialize.toast("Invalid phone number or email", 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        if (!this._validateService.ValidateLoginPhone(cleaner)) {
            Materialize.toast("Invalid login prarameters", 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        this._auth.loginCleanerPhone(cleaner).subscribe(function (data) {
            if (data.success == false) {
                Materialize.toast(data.message, 3000, 'red white-text');
                _this.preloader = false;
            }
            else if (data.success == true) {
                Materialize.toast(data.message, 3000, 'green white-text');
                localStorage.setItem('access_token', data.token);
                _this.router.navigate(['/cleaner/dashboard']);
            }
            else {
                Materialize.toast('uh-oh', 3000, 'red white-text');
                _this.preloader = false;
                _this.router.navigate(['/cleaner/login']);
            }
        }, function (err) { return (Materialize.toast("something's not right", 3000, 'red white-text')); }, function () { return console.log(); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_3__["ValidatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_h {\r\n  position: fixed;\r\n  max-height: 65px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background: none;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n  top: 0px;\r\n  padding-bottom: 6px !important;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .main_h {\r\n    padding-top: 20px;\r\n  }\r\n}\r\n.open-nav {\r\n  min-height: 200px !important;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.open-nav .mobile-toggle {\r\n  transform: rotate(-90deg);\r\n  -webkit-transform: rotate(-90deg);\r\n}\r\n.sticky {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /*opacity: 1;*/\r\n  top: 0px;\r\n  /*border-bottom: 1px solid gainsboro;*/\r\n}\r\n.logo {\r\n  width: 50px;\r\n  font-size: 25px;\r\n  color: #ffffff !important;\r\n  text-transform: uppercase;\r\n  float: left;\r\n  display: block;\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .logo {\r\n    float: none;\r\n    padding-left: 10px;\r\n  }\r\n}\r\nnav {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav {\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul {\r\n  list-style: none;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul {\r\n    padding-top: 10px;\r\n    margin-bottom: 22px;\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-left: 35px;\r\n  line-height: 1;  /*1.5*/\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul li {\r\n    width: 100%;\r\n    padding: 7px 0;\r\n    margin: 0;\r\n  }\r\n}\r\nnav ul a {\r\n  color: #fff;\r\n  text-transform: uppercase; \r\n  padding: 0.3rem 0;\r\n}\r\nnav ul a:hover {\r\n  color: #000080;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n  border-bottom: 1.5px solid #000080;\r\n}\r\n.mobile-toggle {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 0;\r\n  width: 30px;\r\n  transition: all 200ms ease-in;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .mobile-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.mobile-toggle span {\r\n  width: 30px;\r\n  height: 4px;\r\n  margin-bottom: 6px;\r\n  border-radius: 1000px;\r\n  background: #fff;\r\n  display: block;\r\n}\r\n.row-nav {\r\n  width: 100%;\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n@-webkit-keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n@keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main_h\">\n    <div class=\"row-nav\">\n        <a class=\"logo\" href=\"\">FICHAYA</a>\n\n        <div class=\"mobile-toggle\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n\n        <nav>\n            <ul>\n                <li><a routerLink='/cleaner/register' routerLinkActive='active'>Register</a></li>\n                <li><a routerLink='/cleaner/login' routerLinkActive='active' class=\"\">Login</a></li>\n            </ul>\n        </nav>\n        \n    </div> \n</header>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        (function ($) {
            $(function () {
                // Sticky Header
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 100) {
                        $('.main_h').addClass('sticky');
                    }
                    else {
                        $('.main_h').removeClass('sticky');
                    }
                });
                // Mobile Navigation
                $('.mobile-toggle').click(function () {
                    if ($('.main_h').hasClass('open-nav')) {
                        $('.main_h').removeClass('open-nav');
                    }
                    else {
                        $('.main_h').addClass('open-nav');
                    }
                });
                $('.main_h li a').click(function () {
                    if ($('.main_h').hasClass('open-nav')) {
                        $('.navigation').removeClass('open-nav');
                        $('.main_h').removeClass('open-nav');
                    }
                });
                // Navigation Scroll - ljepo radi materem
                $('nav a').click(function (event) {
                    var id = $(this).attr("href");
                    var offset = 70;
                    var target = $(id).offset().top - offset;
                    $('html, body').animate({
                        scrollTop: target
                    }, 500);
                    event.preventDefault();
                });
            });
        })(jquery__WEBPACK_IMPORTED_MODULE_1__);
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n  background: linear-gradient(0deg,rgba(0, 0, 128, 0.5),rgba(0, 0, 128, 0.5)),url('/assets/images/bg-1.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-color: #111;\r\n  padding-top: 7rem;\r\n  padding-bottom: 4rem;\r\n  text-align: center;\r\n  min-height: 100%;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  color: #000080;\r\n}\r\n\r\n.form-body{\r\n\tbackground-color: #fff;\r\n\tpadding: 2rem 5rem !important;\r\n  max-width: 65%;\r\n  border-radius: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .back {\r\n    padding-top: 5rem;\r\n    min-height: 100%;\r\n  }\r\n  .form-body{\r\n    padding: 1rem 2rem !important;\r\n  }\r\n}\r\n\r\n.payment-details, .identification{\r\n  display: none;\r\n}\r\n\r\n.image-upload-box{\r\n  border: 2px dotted #000080;\r\n  padding: 1rem !important;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  color: #000080;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"back\">\n\t<div class=\"form-body row\">\n\t\t\t<h4>Cleaning Associate's Registration Form</h4>\n\t\t\t<h6 class=\"red-text\"><b>NB: ALL FIELDS ARE REQUIRED</b></h6>\n\t\t\t<br>\n\t\t\t<form novalidate>\n\t\t\t\t<!-- ========\n\t\t\t\t\tpersonal start\n\t\t\t\t\t============= -->\n\t\t\t\t<div class=\"personal row col m12 s12\">\n\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Firstname\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lastname\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m5 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m7 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m3 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Bus-Stop\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m3 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Area (Lekki, Ikoyi, Yaba)\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m3 s12\">\n\t\t\t\t\t\t<select name=\"location\" #location>\n\t\t\t\t\t\t\t<option selected=\"\" disabled=\"\">Location</option>\n\t\t\t\t            <option [ngValue]=\"island\">Island</option>\n\t\t\t\t            <option [ngValue]=\"mainland\">Mainland</option>\n\t\t\t\t        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m3 s12\">\n\t\t\t\t\t\t<select name=\"experience\" #experience>\n\t\t\t\t\t\t\t<option selected=\"\" disabled=\"\">Cleaning Experience</option>\n\t\t\t\t            <option [ngValue]=\"yes\">Yes</option>\n\t\t\t\t            <option [ngValue]=\"no\">No</option>\n\t\t\t\t        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m4 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m4 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Password\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m4 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Confirm Password\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 m12\">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn show-identification\" style=\"float: right;\">Next <i class=\"ion-ios-arrow-thin-right\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- ========\n\t\t\t\t\tpersonal end\n\t\t\t\t\t============= -->\n\n\t\t\t\t<!-- ========\n\t\t\t\tidentification start\n\t\t\t\t============= -->\n\n\t\t\t\t<div class=\"identification row col m12 s12\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col s12 m6\">\n\t\t\t\t\t\t\t<h6>Form of Identification</h6>\n\t\t\t\t\t\t    <p>\n\t\t\t\t\t\t      <input class=\"with-gap\" name=\"idtype\" type=\"radio\" id=\"id1\">\n\t\t\t\t\t\t      <label for=\"id1\">National ID Card</label>\n\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t    <p>\n\t\t\t\t\t\t      <input class=\"with-gap\" name=\"idtype\" type=\"radio\" id=\"id2\">\n\t\t\t\t\t\t      <label for=\"id2\">International Passport</label>\n\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t    <p>\n\t\t\t\t\t\t      <input class=\"with-gap\" name=\"idtype\" type=\"radio\" id=\"id3\">\n\t\t\t\t\t\t      <label for=\"id3\">Driver's Licence</label>\n\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t    <p>\n\t\t\t\t\t\t      <input class=\"with-gap\" name=\"idtype\" type=\"radio\" id=\"id4\">\n\t\t\t\t\t\t      <label for=\"id4\">Voter's Card</label>\n\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col s12 m6 center\">\n\t\t\t\t\t\t\t<div class=\"col s12 m2 center\">\n\t\t\t\t\t\t\t\t<input type=\"file\" id=\"file\" style=\"display: none\" (change)=\"handleFileInput($event)\" #ImageID>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"image-upload-box col s12 m8 center\" (click)=\"ImageID.click()\">\n\t\t\t\t\t\t\t\t<i class=\"ion-camera center\" style=\"font-size: 50px\"></i>\n\t\t\t\t\t\t\t\t<p class=\"center\">Upload Identification Image (.jpg &amp; .png only)</p>\n\t\t\t\t\t\t\t\t{{filename}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col s12 m2 center\"></div>\n\t\t\t\t\t\t\t<!-- <div class=\"btn\">\n\t\t\t\t\t\t        <span>Profile Picture</span>\n\t\t\t\t\t\t        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event)\" #ImageID>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"file-path-wrapper\">\n\t\t\t\t\t\t        <input class=\"file-path validate\" type=\"text\">\n\t\t\t\t\t\t    </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> \n\n\t\t\t\t\t<h5 class=\"center\">Guarantor's Details</h5>\n\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Firstname\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lastname\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 m12\">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn show-personal\" style=\"float: left;\">Back <i class=\"ion-ios-arrow-thin-left\"></i></button>\n\t\t\t\t\t\t<button class=\"btn show-payment-details\" style=\"float: right;\">Next <i class=\"ion-ios-arrow-thin-right\"></i></button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- ========\n\t\t\t\tidentification end\n\t\t\t\t============= -->\n\n\t\t\t\t<!-- ========\n\t\t\t\tpayment details start\n\t\t\t\t============= -->\n\n\t\t\t\t<div class=\"row col s12 m12 payment-details\">\n\t\t\t\t\t<h5 class=\"center\">Let's Have Your Payment Details</h5>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Account Name\" name=\"account_name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Account Number\" name=\"accont_no\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<select name=\"banks\" #banks>\n\t                        <option *ngFor=\"let b of allBanks\" [ngValue]=\"b.name\">{{b.name}}</option>\n\t                    </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col m6 s12\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"BVN\" name=\"bvn\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 m12\">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn show-identification\" style=\"float: left;\">Back <i class=\"ion-ios-arrow-thin-left\"></i></button>\n\t\t\t\t\t\t<button class=\"btn\" style=\"float: right;\">Register <i class=\"ion-ios-paperplane\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- ========\n\t\t\t\tpayment details end\n\t\t\t\t============= -->\n\t\t\t\t\n\t\t\t</form>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.allBanks = [
            { name: "Access Bank", slug: "access-bank", code: "044", longcode: "044150149" },
            { name: "Citibank Nigeria", slug: "citibank-nigeria", code: "023", longcode: "023150005" },
            { name: "Diamond Bank", slug: "diamond-bank", code: "063", longcode: "063150162" },
            { name: "Ecobank Nigeria", slug: "ecobank-nigeria", code: "050", longcode: "050150010" },
            { name: "Enterprise Bank", slug: "enterprise-bank", code: "084", longcode: "084150015" },
            { name: "Fidelity Bank", slug: "fidelity-bank", code: "070", longcode: "070150003" },
            { name: "First Bank of Nigeria", slug: "first-bank-of-nigeria", code: "011", longcode: "011151003" },
            { name: "First City Monument Bank", slug: "first-city-monument-bank", code: "214", longcode: "214150018" },
            { name: "Guaranty Trust Bank", slug: "guaranty-trust-bank", code: "058", longcode: "058152036" },
            { name: "Heritage Bank", slug: "heritage-bank", code: "030", longcode: "030159992" },
            { name: "Keystone Bank", slug: "keystone-bank", code: "082", longcode: "082150017" },
            { name: "MainStreet Bank", slug: "mainstreet-bank", code: "014", longcode: "014150331" },
            { name: "Skye Bank", slug: "skye-bank", code: "076", longcode: "076151006" },
            { name: "Stanbic IBTC Bank", slug: "stanbic-ibtc-bank", code: "221", longcode: "221159522" },
            { name: "Standard Chartered Bank", slug: "standard-chartered-bank", code: "068", longcode: "068150015" },
            { name: "Sterling Bank", slug: "sterling-bank", code: "232", longcode: "232150016" },
            { name: "Union Bank of Nigeria", slug: "union-bank-of-nigeria", code: "032", longcode: "032080474" },
            { name: "United Bank For Africa", slug: "united-bank-for-africa", code: "033", longcode: "033153513" },
            { name: "Unity Bank", slug: "unity-bank", code: "215", longcode: "215154097" },
            { name: "Wema Bank", slug: "wema-bank", code: "035", longcode: "035150103" },
            { name: "Zenith Bank", slug: "zenith-bank", code: "057", longcode: "057150013" },
            { name: "Jaiz Bank", slug: "jaiz-bank", code: "301", longcode: "301080020" },
            { name: "Suntrust Bank", slug: "suntrust-bank", code: "100", longcode: "" },
            { name: "Providus Bank", slug: "providus-bank", code: "101", longcode: "" },
            { name: "Parallex Bank", slug: "parallex-bank", code: "526", longcode: "" }
        ];
        this.fileToUpload = null;
        $(document).ready(function () {
            $('select').material_select();
            $(".show-identification").click(function () {
                $('.personal').fadeOut('1');
                $('.payment-details').fadeOut('1');
                $('.identification').fadeIn('1500');
            });
            $(".show-personal").click(function () {
                $('.identification').fadeOut('1');
                $('.payment-details').fadeOut('1');
                $('.personal').fadeIn('1500');
            });
            $(".show-payment-details").click(function () {
                $('.personal').fadeOut('1');
                $('.identification').fadeOut('1');
                $('.payment-details').fadeIn('1500');
            });
        });
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.handleFileInput = function (file) {
        this.fileToUpload = file.target.files[0];
        this.filename = this.fileToUpload.name;
        this.getFileExtention(this.filename);
    };
    RegisterComponent.prototype.uploadFileToActivity = function () {
        this.registerService.uploadImage(this.fileToUpload).subscribe(function (data) {
            console.log(data.data.link);
            Materialize.toast('Image upload successful', 1500, 'green white-text');
        }, function (err) { return (Materialize.toast('Image upload failed', 1500, 'red white-text')); });
    };
    RegisterComponent.prototype.getFileExtention = function (fname) {
        var extension = fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);
        if (extension !== 'jpg' && extension !== 'png') {
            Materialize.toast('Selected file is not an image', 3000, 'red white-text');
        }
        else {
            this.uploadFileToActivity();
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
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


var RegisterService = /** @class */ (function () {
    function RegisterService(httpClient) {
        this.httpClient = httpClient;
    }
    RegisterService.prototype.uploadImage = function (fileToUpload) {
        var endpoint = 'https://api.imgur.com/3/image';
        var formData = new FormData();
        formData.append('image', fileToUpload, fileToUpload.name);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Client-ID aab3505f42b5d63'
            })
        };
        return this.httpClient.post(endpoint, formData, httpOptions);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_3__["Api"]().endpoint;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    AuthService.prototype.registerCleaner = function (cleaner) {
        return this.http.post(this.api + '/cleaner/register', cleaner, this.httpOptions);
    };
    AuthService.prototype.loginCleanerEmail = function (cleaner) {
        return this.http.post(this.api + '/cleaner/login', cleaner, this.httpOptions);
    };
    AuthService.prototype.loginCleanerPhone = function (cleaner) {
        return this.http.post(this.api + '/cleaner/login_phone', cleaner, this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/cleaner/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/routeguard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/routeguard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    RouteGuardService.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            this._router.navigate(['/cleaner/dashboard']);
        }
        return true;
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/services/validator.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/validator.service.ts ***!
  \***********************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.ValidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidatorService.prototype.ValidateLoginEmail = function (customer) {
        if (customer.email == undefined || customer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidatePhone = function (phone) {
        if (phone.length != 11) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidateLoginPhone = function (customer) {
        if (customer.phone == undefined || customer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidatorService);
    return ValidatorService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav {\r\n\tbackground-color: #000080 !important;\r\n\tcolor: #fff;\r\n\tpadding-top: 2rem;\r\n}\r\n\r\n.side-nav li a h6 {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.ion{\r\n\tfont-size: 30px;\r\n}\r\n\r\n.avatar{\r\n\twidth: 150px;\r\n\theight: 150px;\r\n}\r\n\r\n.logout: hover{\r\n\tcolor: #000080 !important;\r\n\tbackground-color: #fff;\t\r\n}\r\n\r\nli a h6 {\r\n\tfont-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul id=\"slide-out\" class=\"side-nav\" align=\"center\">\n    <li><img src=\"{{avatar}}\" class=\"circle avatar\"></li>\n    <li class=\"white-text\"><h5>{{user.firstname}} {{user.lastname}}</h5></li>\n    <li><a routerLink=\"/cleaner/dashboard\"><h6>Dashboard <i class=\"ion ion-ios-speedometer-outline\"></i></h6></a></li>\n    <li><a routerLink=\"/cleaner/booking\"><h6>Booking History <i class=\"ion ion-ios-clock-outline\"></i></h6></a></li>\n    <li><a routerLink=\"/cleaner/booking\"><h6>Payment <i class=\"ion ion-card\"></i></h6></a></li>\n    <li><a routerLink=\"/cleaner/account\"><h6>Profile <i class=\"ion ion-ios-person\"></i></h6></a></li>\n    \n    <br>\n    <button class=\"btn logout\" (click)='logOut()' style=\"color: #fff; border: 2px solid #fff\">Logout <i class=\"ion-log-out\"></i></button>\n</ul>\n  "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_auth, router, sidebarService) {
        this._auth = _auth;
        this.router = router;
        this.sidebarService = sidebarService;
        this.avatar = 'assets/images/avatar.png';
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loggedIn);
        this.user = {};
        this.getUser();
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    SidebarComponent.prototype.logOut = function () {
        Materialize.toast('logged out', 3000, 'green white-text');
        localStorage.removeItem('access_token');
        this.setLoggedIn(false);
        this.router.navigate(['/cleaner/login']);
    };
    SidebarComponent.prototype.getUser = function () {
        var _this = this;
        this.sidebarService.getUserName().subscribe(function (data) {
            if (data.success == true) {
                // console.log(data)
                _this.user = data.cleaner.name;
            }
            else {
                Materialize.toast("Something's not right 1", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right 2", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.service.ts":
/*!********************************************!*\
  !*** ./src/app/sidebar/sidebar.service.ts ***!
  \********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarService = /** @class */ (function () {
    function SidebarService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    SidebarService.prototype.getUserName = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/cleaner/profile', httpOptions);
    };
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SidebarService);
    return SidebarService;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular2\fichaya-cleaner\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map