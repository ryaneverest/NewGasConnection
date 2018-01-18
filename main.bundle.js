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

/***/ "../../../../../src/app/app-bootstrap/app-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBootstrapModule = (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n \r\n .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 80px;\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n}\r\n\r\n.main-content{\r\n    min-height: 500px\r\n}\r\n#service {\r\n    font: 400 15px Lato, sans-serif;\r\n    line-height: 1.8;\r\n    color: #818181;\r\n}\r\n\r\n    #service.h2 {\r\n        font-size: 24px;\r\n        text-transform: uppercase;\r\n        color: #303030;\r\n        font-weight: 600;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    #service.h4 {\r\n        font-size: 19px;\r\n        line-height: 1.375em;\r\n        color: #303030;\r\n        font-weight: 400;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n.jumbotron2 {\r\n    margin-top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    background-color: #aaa;\r\n    color: #fff;\r\n    padding: 80px 30px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\n\r\n.address_bg {\r\n   height: 100px;\r\n    background-color: #818181;\r\n    -ms-flex-line-pack:center;\r\n        align-content:center;\r\n    color: #fff;\r\n    padding: 50px 50px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n.mapCanvas{\r\n    padding:20px;\r\n    margin:20px;\r\n}\r\n\r\n\r\n#service.bg-grey {\r\n    background-color: #f6f6f6;\r\n    \r\n}\r\n\r\n\r\n.red {\r\n    background-color: #f4511e;\r\n}\r\n\r\n.text1 {\r\n    color: #a59e9e;\r\n    padding:5px\r\n}\r\n\r\n.width-6 {\r\n    width: 60%;\r\n}\r\n\r\ninput, select, textarea {\r\n    max-width: 600px;\r\n}\r\n.input-box{\r\n    background-color: #dfdfdf !important;\r\n}\r\n.grey {\r\n    background-color: #f6f6f6;\r\n    padding:15px;\r\n}\r\n.btn-secondary          { color:#ffffff; background-color: #777; border-color: #555; }\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active, .open .dropdown-toggle.btn-secondary\r\n                        { color: #ffffff; background-color: #888; border-color: #444; }\r\n\r\n#service.panel {\r\n    border: 1px solid #f4511e;\r\n    border-radius: 0 !important;\r\n    transition: box-shadow 0.5s;\r\n}\r\n\r\n    #service.panel:hover {\r\n        box-shadow: 5px 0px 40px rgba(0,0,0, .2);\r\n    }\r\n\r\n#service.panel-footer .btn:hover {\r\n    border: 1px solid #f4511e;\r\n    background-color: #fff !important;\r\n    color: #f4511e;\r\n}\r\n\r\n#service.panel-heading {\r\n    color: #fff !important;\r\n    background-color: #f4511e !important;\r\n    padding: 25px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n#service.panel-footer {\r\n    background-color: white !important;\r\n}\r\n\r\n    #service.panel-footer h3 {\r\n        font-size: 32px;\r\n    }\r\n\r\n    #service.panel-footer h4 {\r\n        color: #aaa;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #service.panel-footer .btn {\r\n        margin: 15px 0;\r\n        background-color: #f4511e;\r\n        color: #fff;\r\n    }\r\n\r\n\r\n\r\n#service.footer .glyphicon {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n    color: #f4511e;\r\n}\r\n\r\n#service.slideanim {\r\n    visibility: hidden;\r\n}\r\n\r\n#service.slide {\r\n    animation-name: slide;\r\n    -webkit-animation-name: slide;\r\n    animation-duration: 1s;\r\n    -webkit-animation-duration: 1s;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n@keyframes slide {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(70%);\r\n                transform: translateY(70%);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(70%);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .col-sm-4 {\r\n        text-align: center;\r\n        margin: 25px 0;\r\n    }\r\n\r\n    .btn-lg {\r\n        width: 100%;\r\n        margin-bottom: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .logo {\r\n        font-size: 150px;\r\n    }\r\n}\r\n\r\n.imageRadio label > input{ /* HIDE RADIO */\r\n  visibility: hidden; /* Makes input not-clickable */\r\n  position: absolute; /* Remove input from document flow */\r\n}\r\nlabel > input + img{ /* IMAGE STYLES */\r\n  cursor:pointer;\r\n  border:1px #555 solid ;\r\n  padding:20px 50px;\r\n}\r\nlabel > input:checked + img{ /* (RADIO CHECKED) IMAGE STYLES */\r\n  border:4px solid #aaa;\r\n}\r\nfooter{\r\n    padding-top: 30px;\r\n    margin-top:20px;\r\n    background: #ebe9e9;\r\n    text-align: left;\r\n    line-height: 20px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-navbar></app-navbar>\n\n<div class=\"container-fluid main-content \">\n        <router-outlet></router-outlet>\n       \n      </div>\n      <footer>\n          <p>&copy; 2016 Southern Company. Use constitutes acceptance of General Website Terms and Conditions </p>\n        </footer>\n    \n        \n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_bootstrap_app_bootstrap_module__ = __webpack_require__("../../../../../src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_Onlynumber_directive__ = __webpack_require__("../../../../../src/app/directives/Onlynumber.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pdf_maker_pdf_maker_component__ = __webpack_require__("../../../../../src/app/pdf-maker/pdf-maker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_signaturepad__ = __webpack_require__("../../../../angular-signaturepad/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__usps_validation_usps_validation_component__ = __webpack_require__("../../../../../src/app/usps-validation/usps-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signature_field_signature_field_component__ = __webpack_require__("../../../../../src/app/signature-field/signature-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_bootstrap_app_bootstrap_module__["a" /* AppBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_signaturepad__["SignaturePadModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directives_Onlynumber_directive__["a" /* OnlyNumber */],
                __WEBPACK_IMPORTED_MODULE_10__pdf_maker_pdf_maker_component__["a" /* PdfMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__usps_validation_usps_validation_component__["a" /* UspsValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signature_field_signature_field_component__["a" /* SignatureFieldComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_maker_pdf_maker_component__ = __webpack_require__("../../../../../src/app/pdf-maker/pdf-maker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usps_validation_usps_validation_component__ = __webpack_require__("../../../../../src/app/usps-validation/usps-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signature_field_signature_field_component__ = __webpack_require__("../../../../../src/app/signature-field/signature-field.component.ts");





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__signature_field_signature_field_component__["a" /* SignatureFieldComponent */] },
    { path: 'usps', component: __WEBPACK_IMPORTED_MODULE_3__usps_validation_usps_validation_component__["a" /* UspsValidationComponent */] },
    { path: 'signature', component: __WEBPACK_IMPORTED_MODULE_4__signature_field_signature_field_component__["a" /* SignatureFieldComponent */] },
    { path: 'pdf', component: __WEBPACK_IMPORTED_MODULE_2__pdf_maker_pdf_maker_component__["a" /* PdfMakerComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'not-found' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/directives/Onlynumber.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumber = (function () {
    function OnlyNumber(el) {
        this.el = el;
    }
    OnlyNumber.prototype.onKeyDown = function (even) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], OnlyNumber.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumber.prototype, "onKeyDown", null);
    OnlyNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[OnlyNumber]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], OnlyNumber);
    return OnlyNumber;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#service {\r\n    font: 400 15px Lato, sans-serif;\r\n    line-height: 1.8;\r\n    color: #818181;\r\n}\r\n\r\n    #service.h2 {\r\n        font-size: 24px;\r\n        text-transform: uppercase;\r\n        color: #303030;\r\n        font-weight: 600;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    #service.h4 {\r\n        font-size: 19px;\r\n        line-height: 1.375em;\r\n        color: #303030;\r\n        font-weight: 400;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n.jumbotron2 {\r\n    margin-top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    background-color: #aaa;\r\n    color: #fff;\r\n    padding: 80px 30px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\n\r\n.address_bg {\r\n   height: 100px;\r\n    background-color: #818181;\r\n    -ms-flex-line-pack:center;\r\n        align-content:center;\r\n    color: #fff;\r\n    padding: 50px 50px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n.mapCanvas{\r\n    padding:20px;\r\n    margin:20px;\r\n}\r\n\r\n\r\n#service.bg-grey {\r\n    background-color: #f6f6f6;\r\n    \r\n}\r\n\r\n#service.logo-small {\r\n    color: #f4511e;\r\n    font-size: 50px;\r\n}\r\n\r\n#service.logo {\r\n    color: #f4511e;\r\n    font-size: 200px;\r\n}\r\n\r\n#service.thumbnail {\r\n    padding: 0 0 15px 0;\r\n    border: none;\r\n    border-radius: 0;\r\n}\r\n\r\n    #service.thumbnail img {\r\n        width: 100%;\r\n        height: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n#service.carousel-control.right, .carousel-control.left {\r\n    background-image: none;\r\n    color: #f4511e;\r\n}\r\n\r\n#service.carousel-indicators li {\r\n    border-color: #f4511e;\r\n}\r\n\r\n    #service.carousel-indicators li.active {\r\n        background-color: #f4511e;\r\n    }\r\n\r\n#service.item h4 {\r\n    font-size: 19px;\r\n    line-height: 1.375em;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    margin: 70px 0;\r\n}\r\n\r\n#service.item span {\r\n    font-style: normal;\r\n}\r\n\r\n.red {\r\n    background-color: #f4511e;\r\n}\r\n\r\n.text1 {\r\n    color: #a59e9e;\r\n    padding:5px\r\n}\r\n\r\n.width-6 {\r\n    width: 60%;\r\n}\r\n\r\ninput, select, textarea {\r\n    max-width: 600px;\r\n}\r\n.grey {\r\n    background-color: #f6f6f6;\r\n    padding:15px;\r\n  \r\n}\r\n.btn-secondary          { color: #ffffff; background-color: #777; border-color: #555; }\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active, .open .dropdown-toggle.btn-secondary\r\n                        { color: #ffffff; background-color: #888; border-color: #444; }\r\n\r\n#service.panel {\r\n    border: 1px solid #f4511e;\r\n    border-radius: 0 !important;\r\n    transition: box-shadow 0.5s;\r\n}\r\n\r\n    #service.panel:hover {\r\n        box-shadow: 5px 0px 40px rgba(0,0,0, .2);\r\n    }\r\n\r\n#service.panel-footer .btn:hover {\r\n    border: 1px solid #f4511e;\r\n    background-color: #fff !important;\r\n    color: #f4511e;\r\n}\r\n\r\n#service.panel-heading {\r\n    color: #fff !important;\r\n    background-color: #f4511e !important;\r\n    padding: 25px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n#service.panel-footer {\r\n    background-color: white !important;\r\n}\r\n\r\n    #service.panel-footer h3 {\r\n        font-size: 32px;\r\n    }\r\n\r\n    #service.panel-footer h4 {\r\n        color: #aaa;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #service.panel-footer .btn {\r\n        margin: 15px 0;\r\n        background-color: #f4511e;\r\n        color: #fff;\r\n    }\r\n\r\n\r\n\r\n#service.footer .glyphicon {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n    color: #f4511e;\r\n}\r\n\r\n#service.slideanim {\r\n    visibility: hidden;\r\n}\r\n\r\n#service.slide {\r\n    animation-name: slide;\r\n    -webkit-animation-name: slide;\r\n    animation-duration: 1s;\r\n    -webkit-animation-duration: 1s;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n@keyframes slide {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(70%);\r\n                transform: translateY(70%);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(70%);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .col-sm-4 {\r\n        text-align: center;\r\n        margin: 25px 0;\r\n    }\r\n\r\n    .btn-lg {\r\n        width: 100%;\r\n        margin-bottom: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .logo {\r\n        font-size: 150px;\r\n    }\r\n}\r\n\r\n.imageRadio label > input{ /* HIDE RADIO */\r\n  visibility: hidden; /* Makes input not-clickable */\r\n  position: absolute; /* Remove input from document flow */\r\n}\r\nlabel > input + img{ /* IMAGE STYLES */\r\n  cursor:pointer;\r\n  border:1px #555 solid ;\r\n  padding:20px 50px;\r\n}\r\nlabel > input + span{\r\n    \r\n}\r\nlabel > input:checked + img{ /* (RADIO CHECKED) IMAGE STYLES */\r\n  border:4px solid #aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t\n\t\t<div class=\"navbar navbar-default navbar-fixed-top\">\n    \n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n    \n    \n    \n    \n                </div>\n                <div class=\"navbar-collapse collapse\">\n                    <a class=\"navbar-brand\"  [routerLink] = \"['/']\" ><img src=\"~/assets/agl_logo.png\" height=\"40\" /></a>\n                    <ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t\t  <li><a [routerLink]=\"['/']\" >Home</a></li>\n                        <li><a  [routerLink]=\"['/pdf']\" >PDF Signing</a></li>\n\t\t\t\t\t\t<li><a  [routerLink]=\"['/signature']\" >Digital Signature</a></li>\n                      \n                        <li><a [routerLink] = \"['/usps']\" >USPS Address</a></li>\n                       \n                    </ul>\n                    \n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    \t<a  [routerLink] = \"['/']\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a>\n                        <a  [routerLink] = \"['/contact-us']\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact us </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pdf-maker/pdf-maker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.sig-container canvas {\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n.sig-container canvas {\r\n  background-image: url(http://lathonez.com/angular2-signaturepad-demo/assets/sign-here.png);\r\n  background-repeat: no-repeat;\r\n  background-position-y: 95%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf-maker/pdf-maker.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"createPdf()\"  class=\"btn btn-info\">Open PDF</button>\n<button (click)=\"downloadPdf()\" class=\"btn btn-primary\">Download PDF</button>\n\n<p>\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n</p>\n \n <div class=\"col-md-6 col-md-offset-1\">\n \t   <signature-field></signature-field>\n \t\n </div>\n  <div class=\"col-md-5\"></div>"

/***/ }),

/***/ "../../../../../src/app/pdf-maker/pdf-maker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signature_field_signature_field_component__ = __webpack_require__("../../../../../src/app/signature-field/signature-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pdfMake = __webpack_require__("../../../../pdfmake/build/pdfmake.js");
var pdfFonts = __webpack_require__("../../../../pdfmake/build/vfs_fonts.js");
pdfMake.vfs = pdfFonts.pdfMake.vfs;
var PdfMakerComponent = (function () {
    function PdfMakerComponent() {
        this.options = {};
    }
    ;
    PdfMakerComponent.prototype.ngAfterViewInit = function () {
        this.child.options = {
            'minWidth': 1,
            'dotSize': 0.1,
            'canvasWidth': 300,
            'canvasHeight': 200,
            'maxWidth': 2,
            'backgroundColor': '#f1f1f1'
        };
    };
    PdfMakerComponent.prototype.createPdf = function () {
        this.signatureData = this.child.signatureData;
        //console.log("Signature Data : "+ this.signatureData);
        this.dd = {
            content: [
                'First paragraph',
                '16 Nov 2016',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                '',
                '',
                {
                    image: this.signatureData,
                    width: 100,
                },
            ],
        };
        pdfMake.createPdf(this.dd).open();
        console.log('pdf created');
    };
    PdfMakerComponent.prototype.downloadPdf = function () {
        pdfMake.createPdf(this.dd).download();
        console.log('pdf downloaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__signature_field_signature_field_component__["a" /* SignatureFieldComponent */]),
        __metadata("design:type", Object)
    ], PdfMakerComponent.prototype, "child", void 0);
    PdfMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pdf-maker',
            template: __webpack_require__("../../../../../src/app/pdf-maker/pdf-maker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdf-maker/pdf-maker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfMakerComponent);
    return PdfMakerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signature-field/signature-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-1\">\r\n\t\r\n<div  *ngIf='!signatureData' >\r\n\r\n<signature-pad [options]=\"options\" (onBeginEvent)=\"drawBegin()\" (onEndEvent)=\"drawComplete()\">\r\n\t\r\n</signature-pad>\r\n<p></p>\r\n<button class=\"btn btn-info\" (click) = 'save()'> Sign</button>\r\n\r\n<button class=\"btn btn-danger\" (click) = 'clear()'> Clear</button>\r\n</div>\r\n<div *ngIf='signatureData'> \r\n\t<p> Thank you for signing.</p>\r\n<img src='{{signatureData}}'>\r\n</div>\r\n\r\n </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/signature-field/signature-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_signaturepad_signature_pad__ = __webpack_require__("../../../../angular-signaturepad/signature-pad.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SignatureField component.
  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var SignatureFieldComponent = (function () {
    function SignatureFieldComponent() {
        this.options = {
            'minWidth': 1,
            'dotSize': 0.1,
            'canvasWidth': 250,
            'canvasHeight': 150,
            'maxWidth': 2,
            'backgroundColor': '#f1f1f1'
        };
        this._signature = null;
        this.propagateChange = null;
    }
    SignatureFieldComponent_1 = SignatureFieldComponent;
    Object.defineProperty(SignatureFieldComponent.prototype, "signature", {
        get: function () {
            return this._signature;
        },
        set: function (value) {
            this._signature = value;
        },
        enumerable: true,
        configurable: true
    });
    SignatureFieldComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this._signature = value;
        this.signaturePad.fromDataURL(this.signature);
    };
    SignatureFieldComponent.prototype.registerOnChange = function (fn) {
        //this.propagateChange = fn;
    };
    SignatureFieldComponent.prototype.registerOnTouched = function () {
        // no-op
    };
    SignatureFieldComponent.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
    };
    SignatureFieldComponent.prototype.drawBegin = function () {
        //console.log('Begin Drawing');
    };
    SignatureFieldComponent.prototype.drawComplete = function () {
        this.signature = this.signaturePad.toDataURL('image/png', 0.5);
    };
    SignatureFieldComponent.prototype.save = function () {
        this.signatureData = this.signaturePad.toDataURL('image/png', 0.5);
        // this.signaturePad.clear();
        // this.signature = '';
    };
    SignatureFieldComponent.prototype.clear = function () {
        this.signaturePad.clear();
        this.signature = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_signaturepad_signature_pad__["AngularSignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_signaturepad_signature_pad__["AngularSignaturePad"])
    ], SignatureFieldComponent.prototype, "signaturePad", void 0);
    SignatureFieldComponent = SignatureFieldComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signature-field',
            template: __webpack_require__("../../../../../src/app/signature-field/signature-field.component.html"),
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SignatureFieldComponent_1; }),
                    multi: true,
                },
            ],
        })
    ], SignatureFieldComponent);
    return SignatureFieldComponent;
    var SignatureFieldComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/usps-validation/usps-validation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n}\r\n\r\ninput[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n}\r\n\r\n.form-box {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n    float:left;\r\n    width:600px;\r\n}\r\n.text-box{\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n    float:right;\r\n    width:500;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usps-validation/usps-validation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-box\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n          <label for=\"streetAddress\">Street Address</label>\n          <input type=\"text\" id=\"streetAddress\" name=\"streetAddress\" formControlName=\"streetAddress\">\n      \n          <label for=\"zip\"></label>\n          <input type=\"text\" id=\"zip\" name=\"zip\" formControlName=\"zip\">\n      \n          <label for=\"city\">City</label>\n          <input type=\"text\" id=\"city\" name=\"city\" formControlName=\"city\">\n          \n           <label for=\"state\">State</label>\n          <input type=\"text\" id=\"state\" name=\"state\"  value='Georgia' formControlName=\"state\">\n      \n          <input type=\"submit\" value=\"Submit\">\n        </form>\n</div>\n      <div class=\"text-box\">\n            <div *ngIf='originalAddress'>\n                  <h5> Original Address</h5>\n                  <p><strong> {{originalAddress.Address2 | uppercase}}</strong> </p>  \n                  <p><strong> {{originalAddress.City | uppercase}}, {{originalAddress.State | uppercase}},{{originalAddress.Zip5 | uppercase}}</strong></p> \n                  <button class='btn btn-info' (click)='get_uspsAddress()'>Validate Address</button> \n            </div>\n            <div *ngIf='addressValidated'>\n                  <h5>USPS Validated Address</h5>\n                  <p> <strong>{{addressValidated.Address2}}</strong>  </p>\n                  <strong> {{addressValidated.City}}, {{addressValidated.State}},{{addressValidated.Zip5}}-{{addressValidated.Zip4}}</strong>          \n            </div>\n      </div>\n      <pre>{{originalAddress |json }}</pre>\n      <pre>{{addressValidated |json }}</pre>\n              "

/***/ }),

/***/ "../../../../../src/app/usps-validation/usps-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UspsValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import '/assets/scripts/xml2json.js';
var X2JS = __webpack_require__("../../../../../src/app/usps-validation/xml2json.js");
var UspsValidationComponent = (function () {
    function UspsValidationComponent(http) {
        this.http = http;
        this.originalAddress = null;
        this.addressValidated = null;
        this.uspsResponseJson = null;
        this.uspsResponseXml = null;
        this.xmlFormat = null;
        this.baseUrl = 'https://secure.shippingapis.com/ShippingAPI.dll';
        //  initializing json to xml converter instance
        this.x2js = new X2JS();
        var group = {};
        group.streetAddress = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('3200 Lenox Rd F204', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        group.zip = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('30324');
        group.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('GA');
        group.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('Atlanta');
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    }
    ;
    UspsValidationComponent.prototype.ngOnInit = function () {
    };
    UspsValidationComponent.prototype.convertXml2JSon = function (addressObj) {
        return this.x2js.xml_str2json(addressObj);
    };
    UspsValidationComponent.prototype.convertJSon2XML = function (addressObj) {
        return this.x2js.json2xml_str(addressObj);
    };
    ;
    UspsValidationComponent.prototype.onSubmit = function () {
        this.originalAddress = {
            'Address1': this.form.value.address2 || '',
            'Address2': this.form.value.streetAddress,
            'City': this.form.value.city,
            'State': this.form.value.state,
            'Zip5': this.form.value.zip,
            'Zip4': ''
        };
        var uspsObj = {
            'AddressValidateRequest': {
                'Revision': '1',
                'Address': this.originalAddress,
                '_USERID': '423SOUTH5942'
            }
        };
        this.xmlFormat = this.convertJSon2XML(uspsObj);
    };
    UspsValidationComponent.prototype.get_uspsAddress = function () {
        var _this = this;
        var requestUrl = this.baseUrl + '?API=Verify&XML=' + (this.xmlFormat);
        this.http.get(requestUrl, { responseType: 'text' }).subscribe(function (data) {
            var response = _this.convertXml2JSon(data);
            _this.addressValidated = response.AddressValidateResponse.Address;
        }, function (err) {
            return 'something went wrong';
        });
    };
    ;
    UspsValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usps-validation',
            template: __webpack_require__("../../../../../src/app/usps-validation/usps-validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usps-validation/usps-validation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UspsValidationComponent);
    return UspsValidationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usps-validation/xml2json.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function parseXml(xmlStr) {
    return new window.DOMParser().parseFromString(xmlStr, "text/xml");
 }

(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.X2JS = factory();
    }
}(this, function () {
   return function (config) {
       'use strict';
           
       var VERSION = "1.2.0";
       
       config = config || {};
       initConfigDefaults();
       initRequiredPolyfills();
       
       function initConfigDefaults() {
           if(config.escapeMode === undefined) {
               config.escapeMode = true;
           }
           
           config.attributePrefix = config.attributePrefix || "_";
           config.arrayAccessForm = config.arrayAccessForm || "none";
           config.emptyNodeForm = config.emptyNodeForm || "text";		
           
           if(config.enableToStringFunc === undefined) {
               config.enableToStringFunc = true; 
           }
           config.arrayAccessFormPaths = config.arrayAccessFormPaths || []; 
           if(config.skipEmptyTextNodesForObj === undefined) {
               config.skipEmptyTextNodesForObj = true;
           }
           if(config.stripWhitespaces === undefined) {
               config.stripWhitespaces = true;
           }
           config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];
   
           if(config.useDoubleQuotes === undefined) {
               config.useDoubleQuotes = false;
           }
           
           config.xmlElementsFilter = config.xmlElementsFilter || [];
           config.jsonPropertiesFilter = config.jsonPropertiesFilter || [];
           
           if(config.keepCData === undefined) {
               config.keepCData = false;
           }
       }
   
       var DOMNodeTypes = {
           ELEMENT_NODE 	   : 1,
           TEXT_NODE    	   : 3,
           CDATA_SECTION_NODE : 4,
           COMMENT_NODE	   : 8,
           DOCUMENT_NODE 	   : 9
       };
       
       function initRequiredPolyfills() {		
       }
       
       function getNodeLocalName( node ) {
           var nodeLocalName = node.localName;			
           if(nodeLocalName == null) // Yeah, this is IE!! 
               nodeLocalName = node.baseName;
           if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
               nodeLocalName = node.nodeName;
           return nodeLocalName;
       }
       
       function getNodePrefix(node) {
           return node.prefix;
       }
           
       function escapeXmlChars(str) {
           if(typeof(str) == "string")
               return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
           else
               return str;
       }
   
       function unescapeXmlChars(str) {
           return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
       }
       
       function checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {
           var idx = 0;
           for(; idx < stdFiltersArrayForm.length; idx++) {
               var filterPath = stdFiltersArrayForm[idx];
               if( typeof filterPath === "string" ) {
                   if(filterPath == path)
                       break;
               }
               else
               if( filterPath instanceof RegExp) {
                   if(filterPath.test(path))
                       break;
               }				
               else
               if( typeof filterPath === "function") {
                   if(filterPath(obj, name, path))
                       break;
               }
           }
           return idx!=stdFiltersArrayForm.length;
       }
       
       function toArrayAccessForm(obj, childName, path) {
           switch(config.arrayAccessForm) {
               case "property":
                   if(!(obj[childName] instanceof Array))
                       obj[childName+"_asArray"] = [obj[childName]];
                   else
                       obj[childName+"_asArray"] = obj[childName];
                   break;
               /*case "none":
                   break;*/
           }
           
           if(!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
               if(checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {
                   obj[childName] = [obj[childName]];
               }			
           }
       }
       
       function fromXmlDateTime(prop) {
           // Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
           // Improved to support full spec and optional parts
           var bits = prop.split(/[-T:+Z]/g);
           
           var d = new Date(bits[0], bits[1]-1, bits[2]);			
           var secondBits = bits[5].split("\.");
           d.setHours(bits[3], bits[4], secondBits[0]);
           if(secondBits.length>1)
               d.setMilliseconds(secondBits[1]);
   
           // Get supplied time zone offset in minutes
           if(bits[6] && bits[7]) {
               var offsetMinutes = bits[6] * 60 + Number(bits[7]);
               var sign = /\d\d-\d\d:\d\d$/.test(prop)? '-' : '+';
   
               // Apply the sign
               offsetMinutes = 0 + (sign == '-'? -1 * offsetMinutes : offsetMinutes);
   
               // Apply offset and local timezone
               d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset())
           }
           else
               if(prop.indexOf("Z", prop.length - 1) !== -1) {
                   d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));					
               }
   
           // d is now a local time equivalent to the supplied time
           return d;
       }
       
       function checkFromXmlDateTimePaths(value, childName, fullPath) {
           if(config.datetimeAccessFormPaths.length > 0) {
               var path = fullPath.split("\.#")[0];
               if(checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {
                   return fromXmlDateTime(value);
               }
               else
                   return value;			
           }
           else
               return value;
       }
       
       function checkXmlElementsFilter(obj, childType, childName, childPath) {
           if( childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {
               return checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);	
           }
           else
               return true;
       }	
   
       function parseDOMChildren( node, path ) {
           if(node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
               var result = new Object;
               var nodeChildren = node.childNodes;
               // Alternative for firstElementChild which is not supported in some environments
               for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                   var child = nodeChildren.item(cidx);
                   if(child.nodeType == DOMNodeTypes.ELEMENT_NODE) {
                       var childName = getNodeLocalName(child);
                       result[childName] = parseDOMChildren(child, childName);
                   }
               }
               return result;
           }
           else
           if(node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
               var result = new Object;
               result.__cnt=0;
               
               var nodeChildren = node.childNodes;
               
               // Children nodes
               for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                   var child = nodeChildren.item(cidx); // nodeChildren[cidx];
                   var childName = getNodeLocalName(child);
                   
                   if(child.nodeType!= DOMNodeTypes.COMMENT_NODE) {
                       var childPath = path+"."+childName;
                       if (checkXmlElementsFilter(result,child.nodeType,childName,childPath)) {
                           result.__cnt++;
                           if(result[childName] == null) {
                               result[childName] = parseDOMChildren(child, childPath);
                               toArrayAccessForm(result, childName, childPath);					
                           }
                           else {
                               if(result[childName] != null) {
                                   if( !(result[childName] instanceof Array)) {
                                       result[childName] = [result[childName]];
                                       toArrayAccessForm(result, childName, childPath);
                                   }
                               }
                               (result[childName])[result[childName].length] = parseDOMChildren(child, childPath);
                           }
                       }
                   }								
               }
               
               // Attributes
               for(var aidx=0; aidx <node.attributes.length; aidx++) {
                   var attr = node.attributes.item(aidx); // [aidx];
                   result.__cnt++;
                   result[config.attributePrefix+attr.name]=attr.value;
               }
               
               // Node namespace prefix
               var nodePrefix = getNodePrefix(node);
               if(nodePrefix!=null && nodePrefix!="") {
                   result.__cnt++;
                   result.__prefix=nodePrefix;
               }
               
               if(result["#text"]!=null) {				
                   result.__text = result["#text"];
                   if(result.__text instanceof Array) {
                       result.__text = result.__text.join("\n");
                   }
                   //if(config.escapeMode)
                   //	result.__text = unescapeXmlChars(result.__text);
                   if(config.stripWhitespaces)
                       result.__text = result.__text.trim();
                   delete result["#text"];
                   if(config.arrayAccessForm=="property")
                       delete result["#text_asArray"];
                   result.__text = checkFromXmlDateTimePaths(result.__text, childName, path+"."+childName);
               }
               if(result["#cdata-section"]!=null) {
                   result.__cdata = result["#cdata-section"];
                   delete result["#cdata-section"];
                   if(config.arrayAccessForm=="property")
                       delete result["#cdata-section_asArray"];
               }
               
               if( result.__cnt == 0 && config.emptyNodeForm=="text" ) {
                   result = '';
               }
               else
               if( result.__cnt == 1 && result.__text!=null  ) {
                   result = result.__text;
               }
               else
               if( result.__cnt == 1 && result.__cdata!=null && !config.keepCData  ) {
                   result = result.__cdata;
               }			
               else			
               if ( result.__cnt > 1 && result.__text!=null && config.skipEmptyTextNodesForObj) {
                   if( (config.stripWhitespaces && result.__text=="") || (result.__text.trim()=="")) {
                       delete result.__text;
                   }
               }
               delete result.__cnt;			
               
               if( config.enableToStringFunc && (result.__text!=null || result.__cdata!=null )) {
                   result.toString = function() {
                       return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
                   };
               }
               
               return result;
           }
           else
           if(node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
               return node.nodeValue;
           }	
       }
       
       function startTag(jsonObj, element, attrList, closed) {
           var resultStr = "<"+ ( (jsonObj!=null && jsonObj.__prefix!=null)? (jsonObj.__prefix+":"):"") + element;
           if(attrList!=null) {
               for(var aidx = 0; aidx < attrList.length; aidx++) {
                   var attrName = attrList[aidx];
                   var attrVal = jsonObj[attrName];
                   if(config.escapeMode)
                       attrVal=escapeXmlChars(attrVal);
                   resultStr+=" "+attrName.substr(config.attributePrefix.length)+"=";
                   if(config.useDoubleQuotes)
                       resultStr+='"'+attrVal+'"';
                   else
                       resultStr+="'"+attrVal+"'";
               }
           }
           if(!closed)
               resultStr+=">";
           else
               resultStr+="/>";
           return resultStr;
       }
       
       function endTag(jsonObj,elementName) {
           return "</"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"")+elementName+">";
       }
       
       function endsWith(str, suffix) {
           return str.indexOf(suffix, str.length - suffix.length) !== -1;
       }
       
       function jsonXmlSpecialElem ( jsonObj, jsonObjField ) {
           if((config.arrayAccessForm=="property" && endsWith(jsonObjField.toString(),("_asArray"))) 
                   || jsonObjField.toString().indexOf(config.attributePrefix)==0 
                   || jsonObjField.toString().indexOf("__")==0
                   || (jsonObj[jsonObjField] instanceof Function) )
               return true;
           else
               return false;
       }
       
       function jsonXmlElemCount ( jsonObj ) {
           var elementsCnt = 0;
           if(jsonObj instanceof Object ) {
               for( var it in jsonObj  ) {
                   if(jsonXmlSpecialElem ( jsonObj, it) )
                       continue;			
                   elementsCnt++;
               }
           }
           return elementsCnt;
       }
       
       function checkJsonObjPropertiesFilter(jsonObj, propertyName, jsonObjPath) {
           return config.jsonPropertiesFilter.length == 0
               || jsonObjPath==""
               || checkInStdFiltersArrayForm(config.jsonPropertiesFilter, jsonObj, propertyName, jsonObjPath);	
       }
       
       function parseJSONAttributes ( jsonObj ) {
           var attrList = [];
           if(jsonObj instanceof Object ) {
               for( var ait in jsonObj  ) {
                   if(ait.toString().indexOf("__")== -1 && ait.toString().indexOf(config.attributePrefix)==0) {
                       attrList.push(ait);
                   }
               }
           }
           return attrList;
       }
       
       function parseJSONTextAttrs ( jsonTxtObj ) {
           var result ="";
           
           if(jsonTxtObj.__cdata!=null) {										
               result+="<![CDATA["+jsonTxtObj.__cdata+"]]>";					
           }
           
           if(jsonTxtObj.__text!=null) {			
               if(config.escapeMode)
                   result+=escapeXmlChars(jsonTxtObj.__text);
               else
                   result+=jsonTxtObj.__text;
           }
           return result;
       }
       
       function parseJSONTextObject ( jsonTxtObj ) {
           var result ="";
   
           if( jsonTxtObj instanceof Object ) {
               result+=parseJSONTextAttrs ( jsonTxtObj );
           }
           else
               if(jsonTxtObj!=null) {
                   if(config.escapeMode)
                       result+=escapeXmlChars(jsonTxtObj);
                   else
                       result+=jsonTxtObj;
               }
           
           return result;
       }
       
       function getJsonPropertyPath(jsonObjPath, jsonPropName) {
           if (jsonObjPath==="") {
               return jsonPropName;
           }
           else
               return jsonObjPath+"."+jsonPropName;
       }
       
       function parseJSONArray ( jsonArrRoot, jsonArrObj, attrList, jsonObjPath ) {
           var result = ""; 
           if(jsonArrRoot.length == 0) {
               result+=startTag(jsonArrRoot, jsonArrObj, attrList, true);
           }
           else {
               for(var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {
                   result+=startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
                   result+=parseJSONObject(jsonArrRoot[arIdx], getJsonPropertyPath(jsonObjPath,jsonArrObj));
                   result+=endTag(jsonArrRoot[arIdx],jsonArrObj);
               }
           }
           return result;
       }
       
       function parseJSONObject ( jsonObj, jsonObjPath ) {
           var result = "";	
   
           var elementsCnt = jsonXmlElemCount ( jsonObj );
           
           if(elementsCnt > 0) {
               for( var it in jsonObj ) {
                   
                   if(jsonXmlSpecialElem ( jsonObj, it) || (jsonObjPath!="" && !checkJsonObjPropertiesFilter(jsonObj, it, getJsonPropertyPath(jsonObjPath,it))) )
                       continue;			
                   
                   var subObj = jsonObj[it];						
                   
                   var attrList = parseJSONAttributes( subObj )
                   
                   if(subObj == null || subObj == undefined) {
                       result+=startTag(subObj, it, attrList, true);
                   }
                   else
                   if(subObj instanceof Object) {
                       
                       if(subObj instanceof Array) {					
                           result+=parseJSONArray( subObj, it, attrList, jsonObjPath );					
                       }
                       else if(subObj instanceof Date) {
                           result+=startTag(subObj, it, attrList, false);
                           result+=subObj.toISOString();
                           result+=endTag(subObj,it);
                       }
                       else {
                           var subObjElementsCnt = jsonXmlElemCount ( subObj );
                           if(subObjElementsCnt > 0 || subObj.__text!=null || subObj.__cdata!=null) {
                               result+=startTag(subObj, it, attrList, false);
                               result+=parseJSONObject(subObj, getJsonPropertyPath(jsonObjPath,it));
                               result+=endTag(subObj,it);
                           }
                           else {
                               result+=startTag(subObj, it, attrList, true);
                           }
                       }
                   }
                   else {
                       result+=startTag(subObj, it, attrList, false);
                       result+=parseJSONTextObject(subObj);
                       result+=endTag(subObj,it);
                   }
               }
           }
           result+=parseJSONTextObject(jsonObj);
           
           return result;
       }
       
       this.parseXmlString = function(xmlDocStr) {
           var isIEParser = window.ActiveXObject || "ActiveXObject" in window;
           if (xmlDocStr === undefined) {
               return null;
           }
           var xmlDoc;
           if (window.DOMParser) {
               var parser=new window.DOMParser();			
               var parsererrorNS = null;
               // IE9+ now is here
               if(!isIEParser) {
                   try {
                       parsererrorNS = parser.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
                   }
                   catch(err) {					
                       parsererrorNS = null;
                   }
               }
               try {
                   xmlDoc = parser.parseFromString( xmlDocStr, "text/xml" );
                   if( parsererrorNS!= null && xmlDoc.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
                       //throw new Error('Error parsing XML: '+xmlDocStr);
                       xmlDoc = null;
                   }
               }
               catch(err) {
                   xmlDoc = null;
               }
           }
           else {
               // IE :(
               if(xmlDocStr.indexOf("<?")==0) {
                   xmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf("?>") + 2 );
               }
               xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
               xmlDoc.async="false";
               xmlDoc.loadXML(xmlDocStr);
           }
           return xmlDoc;
       };
       
       this.asArray = function(prop) {
           if (prop === undefined || prop == null)
               return [];
           else
           if(prop instanceof Array)
               return prop;
           else
               return [prop];
       };
       
       this.toXmlDateTime = function(dt) {
           if(dt instanceof Date)
               return dt.toISOString();
           else
           if(typeof(dt) === 'number' )
               return new Date(dt).toISOString();
           else	
               return null;
       };
       
       this.asDateTime = function(prop) {
           if(typeof(prop) == "string") {
               return fromXmlDateTime(prop);
           }
           else
               return prop;
       };
   
       this.xml2json = function (xmlDoc) {
           return parseDOMChildren ( xmlDoc );
       };
       
       this.xml_str2json = function (xmlDocStr) {
           var xmlDoc = this.parseXmlString(xmlDocStr);
           if(xmlDoc!=null)
               return this.xml2json(xmlDoc);
           else
               return null;
       };
   
       this.json2xml_str = function (jsonObj) {
           return parseJSONObject ( jsonObj, "" );
       };
   
       this.json2xml = function (jsonObj) {
           var xmlDocStr = this.json2xml_str (jsonObj);
           return this.parseXmlString(xmlDocStr);
       };
       
       this.getVersion = function () {
           return VERSION;
       };	
   }
}))

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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