(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/security */ "./src/app/core/security/index.ts");





const routes = [
    { path: "", redirectTo: "/blog", pathMatch: "full" },
    {
        path: "blog",
        loadChildren: () => Promise.all(/*! import() | pages-blog-blog-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./pages/blog/blog.module */ "./src/app/pages/blog/blog.module.ts")).then(mod => mod.BlogModule),
        data: { title: "Blog" }
    },
    {
        path: "login",
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(mod => mod.LoginModule),
        data: { title: "Login" }
    },
    {
        path: "admin",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-admin-admin-module */ "pages-admin-admin-module").then(__webpack_require__.bind(null, /*! ./pages/admin/admin.module */ "./src/app/pages/admin/admin.module.ts")).then(mod => mod.AdminModule),
        canActivate: [_core_security__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        data: { claimType: _core_security__WEBPACK_IMPORTED_MODULE_2__["ApplicationClaimType"].CanViewAdminPage, title: "Admin" }
    },
    { path: "**", redirectTo: "/blog" }
];
class AppRoutingModule {
}
AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security */ "./src/app/core/security/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_security_directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/security/directives/has-claim.directive */ "./src/app/core/security/directives/has-claim.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/toast */ "./src/app/core/toast/index.ts");









const _c0 = [1, "sticky-top", "bg-dark"];
const _c1 = [1, "container"];
const _c2 = [1, "navbar", "navbar-expand-lg", "navbar-dark"];
const _c3 = ["routerLink", "/blog", 1, "navbar-brand"];
const _c4 = ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"];
const _c5 = [1, "navbar-toggler-icon"];
const _c6 = ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "justify-content-center", 3, "ngbCollapse"];
const _c7 = [1, "navbar-nav"];
const _c8 = ["routerLinkActive", "active", "routerLink", "/blog", 1, "nav-item", "nav-link", 3, "click"];
const _c9 = [1, "navbar-nav", "ml-auto"];
const _c10 = ["class", "nav-item nav-link", "routerLinkActive", "active", "routerLink", "/admin", 3, "click", 4, "appHasClaim"];
const _c11 = ["class", "nav-item nav-link", "routerLinkActive", "active", "routerLink", "/login", 3, "click", 4, "ngIf"];
const _c12 = ["class", "nav-item nav-link", "href", "logout", 3, "click", 4, "ngIf"];
const _c13 = [1, "container", "mt-3"];
const _c14 = ["routerLinkActive", "active", "routerLink", "/admin", 1, "nav-item", "nav-link", 3, "click"];
function AppComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.collapseNavigationBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c15 = ["routerLinkActive", "active", "routerLink", "/login", 1, "nav-item", "nav-link", 3, "click"];
function AppComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.collapseNavigationBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c16 = ["href", "logout", 1, "nav-item", "nav-link", 3, "click"];
function AppComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_14_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r23.logout($event); return ctx_r23.collapseNavigationBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, securityService) {
        this.router = router;
        this.securityService = securityService;
        this.title = "MT";
        this.isCollapsed = true;
        this.ApplicationClaimType = _core_security__WEBPACK_IMPORTED_MODULE_1__["ApplicationClaimType"];
        this.applicationUser = securityService.applicationUser;
    }
    logout(event) {
        this.securityService.logout();
        this.router.navigate(["/"]);
        event.preventDefault();
    }
    toggleNavigationBar() {
        this.isCollapsed = !this.isCollapsed;
    }
    collapseNavigationBar() {
        this.isCollapsed = true;
    }
}
AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_security__WEBPACK_IMPORTED_MODULE_1__["SecurityService"])); }, consts: 18, vars: 6, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", _c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener($event) { return ctx.toggleNavigationBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", _c6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", _c8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener($event) { return ctx.collapseNavigationBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", _c9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_a_12_Template, 2, 0, "a", _c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_a_13_Template, 2, 0, "a", _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_a_14_Template, 2, 0, "a", _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", _c13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-toasts-container");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHasClaim", ctx.ApplicationClaimType.CanViewAdminPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.applicationUser.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationUser.isAuthenticated);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _core_security_directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__["HasClaimDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_toast__WEBPACK_IMPORTED_MODULE_6__["ToastsContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_security__WEBPACK_IMPORTED_MODULE_1__["SecurityService"] }]; }, null);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, loadCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrentUser", function() { return loadCurrentUser; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _core_interceptors_json_date_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/interceptors/json-date-http-interceptor */ "./src/app/core/interceptors/json-date-http-interceptor.ts");
/* harmony import */ var _core_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/security */ "./src/app/core/security/index.ts");
/* harmony import */ var _core_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/toast */ "./src/app/core/toast/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_security_directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/security/directives/has-claim.directive */ "./src/app/core/security/directives/has-claim.directive.ts");











class AppModule {
}
AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: loadCurrentUser,
            deps: [_core_security__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_json_date_http_interceptor__WEBPACK_IMPORTED_MODULE_3__["JsonDateHttpInterceptor"],
            multi: true
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _core_security__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _core_security__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedErrorInterceptor"],
            multi: true
        }
    ], imports: [[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _core_toast__WEBPACK_IMPORTED_MODULE_5__["ToastsContainerComponent"], _core_security_directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_9__["HasClaimDirective"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _core_toast__WEBPACK_IMPORTED_MODULE_5__["ToastsContainerComponent"], _core_security_directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_9__["HasClaimDirective"]],
                imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: loadCurrentUser,
                        deps: [_core_security__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_json_date_http_interceptor__WEBPACK_IMPORTED_MODULE_3__["JsonDateHttpInterceptor"],
                        multi: true
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _core_security__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                        useClass: _core_security__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null);
function loadCurrentUser(securityService) {
    return () => securityService.restoreSession();
}


/***/ }),

/***/ "./src/app/core/abstraction/api-service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/abstraction/api-service.ts ***!
  \*************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class ApiService {
    constructor(http, actionUrl) {
        this.http = http;
        this.actionUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/${actionUrl}`;
        this.validateApiUrl(this.actionUrl);
    }
    get(alternativeUrl = null) {
        if (alternativeUrl) {
            this.validateApiUrl(alternativeUrl);
        }
        let url = this.actionUrl;
        if (alternativeUrl) {
            url += alternativeUrl;
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    post(model, alternativeUrl = null) {
        if (alternativeUrl) {
            this.validateApiUrl(alternativeUrl);
        }
        let url = this.actionUrl;
        if (alternativeUrl) {
            url += alternativeUrl;
        }
        return this.http.post(url, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    put(model, alternativeUrl = null) {
        if (alternativeUrl) {
            this.validateApiUrl(alternativeUrl);
        }
        let url = this.actionUrl;
        if (alternativeUrl) {
            url += alternativeUrl;
        }
        return this.http.put(url, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    delete(alternativeUrl = null) {
        if (alternativeUrl) {
            this.validateApiUrl(alternativeUrl);
        }
        let url = this.actionUrl;
        if (alternativeUrl) {
            url += alternativeUrl;
        }
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    validateApiUrl(url) {
        if (url.endsWith("/")) {
            throw new Error("API url may not end with '/'");
        }
    }
    handleError(error) {
        let errorMessage = "Server error";
        if (error) {
            if (error.message) {
                errorMessage = error.message;
            }
            else if (error.status) {
                errorMessage = `${error.status} - ${error.statusText}`;
            }
        }
        // tslint:disable-next-line: no-console
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}


/***/ }),

/***/ "./src/app/core/abstraction/index.ts":
/*!*******************************************!*\
  !*** ./src/app/core/abstraction/index.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-service */ "./src/app/core/abstraction/api-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });




/***/ }),

/***/ "./src/app/core/interceptors/json-date-http-interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/json-date-http-interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: JsonDateHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonDateHttpInterceptor", function() { return JsonDateHttpInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class JsonDateHttpInterceptor {
    constructor() {
        this.iso8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                this.convertToDate(event.body);
            }
        }));
    }
    convertToDate(body) {
        // Ability to configure HttpClient JSON.parse reviver would be nice
        if (body === null || body === undefined || typeof body !== "object") {
            return body;
        }
        for (const key of Object.keys(body)) {
            const value = body[key];
            if (!value) {
                continue;
            }
            else if (typeof value === "object") {
                this.convertToDate(value);
            }
            else if (typeof value === "string" && this.iso8601.test(value)) {
                body[key] = new Date(value);
            }
        }
    }
}
JsonDateHttpInterceptor.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JsonDateHttpInterceptor, factory: function JsonDateHttpInterceptor_Factory(t) { return new (t || JsonDateHttpInterceptor)(); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonDateHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null);


/***/ }),

/***/ "./src/app/core/local-storage-keys.ts":
/*!********************************************!*\
  !*** ./src/app/core/local-storage-keys.ts ***!
  \********************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
class LocalStorageKeys {
}
LocalStorageKeys.AccessToken = "website_access_token";
LocalStorageKeys.AuthenticationType = "website_authentication_type";


/***/ }),

/***/ "./src/app/core/local-storage/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/local-storage/index.ts ***!
  \*********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });




/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageService {
    constructor() {
        this.userKeys = this._getItem(LocalStorageService.userKeysKey);
        if (!this.userKeys) {
            this.userKeys = [];
        }
    }
    /**
     * Retrieve value from local storage
     * Will return null if there is no value
     */
    getItem(key) {
        return this._getItem(key);
    }
    /**
     * Add value to local storage
     */
    setItem(key, value) {
        this._setItem(key, value);
    }
    /**
     * Remove item from local storage
     */
    removeItem(key) {
        const userKeyIndex = this.userKeys.indexOf(key);
        if (userKeyIndex >= 0) {
            this.userKeys.splice(userKeyIndex, 1);
            this._storeUserKeys();
        }
        this._removeItem(key);
    }
    /**
     * Add user item to local storage
     * User items will be cleared when another user uses the same browser cache
     */
    setUserItem(key, value) {
        if (this.userKeys.indexOf(key) < 0) {
            this.userKeys.push(key);
            this._storeUserKeys();
        }
        this._setItem(key, value);
    }
    /**
     * Clears all stored user items
     */
    clearUserItems() {
        while (this.userKeys.length > 0) {
            const key = this.userKeys.pop();
            this._removeItem(key);
        }
        this._storeUserKeys();
    }
    _getItem(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    _setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    _removeItem(key) {
        localStorage.removeItem(key);
    }
    _storeUserKeys() {
        this._setItem(LocalStorageService.userKeysKey, this.userKeys);
    }
}
LocalStorageService.userKeysKey = "UserKeys";
LocalStorageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }, providedIn: "root" });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/core/security/directives/has-claim.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/security/directives/has-claim.directive.ts ***!
  \*****************************************************************/
/*! exports provided: HasClaimDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasClaimDirective", function() { return HasClaimDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/security.service */ "./src/app/core/security/services/security.service.ts");



class HasClaimDirective {
    constructor(templateRef, viewContainer, securityService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.securityService = securityService;
        securityService.applicationUserChanged.subscribe(() => this.validateClaim());
    }
    set appHasClaim(claimType) {
        this.claimTypes = Array.isArray(claimType) ? claimType : [claimType];
        this.validateClaim();
    }
    validateClaim() {
        if (this.securityService.hasClaim(this.claimTypes)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
HasClaimDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HasClaimDirective, selectors: [["", "appHasClaim", ""]], factory: function HasClaimDirective_Factory(t) { return new (t || HasClaimDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"])); }, inputs: { appHasClaim: "appHasClaim" } });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasClaimDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appHasClaim]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _services_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"] }]; }, { appHasClaim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/core/security/enums/application-claim-type.enum.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/security/enums/application-claim-type.enum.ts ***!
  \********************************************************************/
/*! exports provided: ApplicationClaimType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationClaimType", function() { return ApplicationClaimType; });
var ApplicationClaimType;
(function (ApplicationClaimType) {
    ApplicationClaimType[ApplicationClaimType["CanViewAdminPage"] = 1] = "CanViewAdminPage";
    ApplicationClaimType[ApplicationClaimType["CanAddBlogPost"] = 2] = "CanAddBlogPost";
    ApplicationClaimType[ApplicationClaimType["CanUpdateBlogPost"] = 3] = "CanUpdateBlogPost";
    ApplicationClaimType[ApplicationClaimType["CanDeleteBlogPost"] = 4] = "CanDeleteBlogPost";
})(ApplicationClaimType || (ApplicationClaimType = {}));


/***/ }),

/***/ "./src/app/core/security/enums/authentication-type.enum.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/security/enums/authentication-type.enum.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationType", function() { return AuthenticationType; });
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType[AuthenticationType["Default"] = 0] = "Default";
    AuthenticationType[AuthenticationType["AzureAd"] = 1] = "AzureAd";
})(AuthenticationType || (AuthenticationType = {}));


/***/ }),

/***/ "./src/app/core/security/guards/authentication.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/security/guards/authentication.guard.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/security.service */ "./src/app/core/security/services/security.service.ts");
/* harmony import */ var _core_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/toast */ "./src/app/core/toast/index.ts");





class AuthenticationGuard {
    constructor(router, securityService, toastService) {
        this.router = router;
        this.securityService = securityService;
        this.toastService = toastService;
    }
    canActivate(next, state) {
        const claimType = next.data.claimType;
        const applicationUser = this.securityService.applicationUser;
        if (applicationUser.isAuthenticated &&
            (!claimType || this.securityService.hasClaim(claimType))) {
            return true;
        }
        if (applicationUser.isAuthenticated) {
            this.toastService.showWarning("Not authorized to view this page!");
        }
        else {
            this.router.navigate(["/login"], {
                queryParams: { returnUrl: state.url }
            });
        }
        return false;
    }
}
AuthenticationGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_toast__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); }, providedIn: "root" });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] }, { type: _core_toast__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, null);


/***/ }),

/***/ "./src/app/core/security/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/security/index.ts ***!
  \****************************************/
/*! exports provided: ApplicationClaimType, AuthenticationGuard, JwtInterceptor, UnauthorizedErrorInterceptor, ApplicationUserModel, UserCredentialsModel, SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_application_claim_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/application-claim-type.enum */ "./src/app/core/security/enums/application-claim-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationClaimType", function() { return _enums_application_claim_type_enum__WEBPACK_IMPORTED_MODULE_0__["ApplicationClaimType"]; });

/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/core/security/guards/authentication.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"]; });

/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/core/security/interceptors/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _interceptors_unauthorized_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/unauthorized-error.interceptor */ "./src/app/core/security/interceptors/unauthorized-error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedErrorInterceptor", function() { return _interceptors_unauthorized_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["UnauthorizedErrorInterceptor"]; });

/* harmony import */ var _models_application_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/application-user.model */ "./src/app/core/security/models/application-user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUserModel", function() { return _models_application_user_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationUserModel"]; });

/* harmony import */ var _models_user_credentials_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/user-credentials.model */ "./src/app/core/security/models/user-credentials.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCredentialsModel", function() { return _models_user_credentials_model__WEBPACK_IMPORTED_MODULE_5__["UserCredentialsModel"]; });

/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/security.service */ "./src/app/core/security/services/security.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _services_security_service__WEBPACK_IMPORTED_MODULE_6__["SecurityService"]; });










/***/ }),

/***/ "./src/app/core/security/interceptors/jwt.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/security/interceptors/jwt.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/security.service */ "./src/app/core/security/services/security.service.ts");



/**
 * Add authorization header with jwt token if available
 */
class JwtInterceptor {
    constructor(securityService) {
        this.securityService = securityService;
    }
    intercept(request, next) {
        const accessToken = this.securityService.getAccessToken();
        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"] }]; }, null);


/***/ }),

/***/ "./src/app/core/security/interceptors/unauthorized-error.interceptor.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/security/interceptors/unauthorized-error.interceptor.ts ***!
  \******************************************************************************/
/*! exports provided: UnauthorizedErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedErrorInterceptor", function() { return UnauthorizedErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/security.service */ "./src/app/core/security/services/security.service.ts");





/**
 * Logout if 401 response returned from API
 */
class UnauthorizedErrorInterceptor {
    constructor(securityService) {
        this.securityService = securityService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                this.securityService.logout();
                location.reload();
            }
            let error;
            if (err.error && err.error.message) {
                error = err.error.message;
            }
            else {
                error = err.statusText;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
UnauthorizedErrorInterceptor.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnauthorizedErrorInterceptor, factory: function UnauthorizedErrorInterceptor_Factory(t) { return new (t || UnauthorizedErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] }]; }, null);


/***/ }),

/***/ "./src/app/core/security/models/application-user.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/security/models/application-user.model.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUserModel", function() { return ApplicationUserModel; });
class ApplicationUserModel {
    constructor() {
        this.isAuthenticated = false;
        this.bearerToken = null;
        this.userName = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.claims = [];
    }
}


/***/ }),

/***/ "./src/app/core/security/models/user-credentials.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/security/models/user-credentials.model.ts ***!
  \****************************************************************/
/*! exports provided: UserCredentialsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCredentialsModel", function() { return UserCredentialsModel; });
class UserCredentialsModel {
}


/***/ }),

/***/ "./src/app/core/security/services/azure-ad-authentication.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/security/services/azure-ad-authentication.service.ts ***!
  \***************************************************************************/
/*! exports provided: AzureAdAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureAdAuthenticationService", function() { return AzureAdAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_3__);





class AzureAdAuthenticationService {
    constructor() {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].azureAdSettings.enabled) {
            return;
        }
        const azureAdSettings = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].azureAdSettings;
        const config = {
            authority: `https://sts.windows.net/${azureAdSettings.tenantId}`,
            client_id: azureAdSettings.clientId,
            redirect_uri: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clientUrl}/assets/oidc-login-redirect.html`,
            scope: `openid api://${azureAdSettings.webApiId}/api-access profile`,
            response_type: "id_token token",
            post_logout_redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clientUrl,
            extraQueryParams: { resource: azureAdSettings.webApiId },
            loadUserInfo: false,
            userStore: new oidc_client__WEBPACK_IMPORTED_MODULE_3__["WebStorageStateStore"]({ store: window.localStorage })
        };
        this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_3__["UserManager"](config);
        this.userPromise = this.loadUser();
        this.userManager.events.addUserLoaded(args => {
            this.loadUser();
        });
    }
    awaitInitialization() {
        return this.userPromise;
    }
    login() {
        return this.userManager.signinPopup();
    }
    logout() {
        return this.userManager.signoutRedirect();
    }
    getAccessToken() {
        return this.user ? this.user.access_token : null;
    }
    loadUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.userManager.getUser().then(user => {
                if (user && !user.expired) {
                    this.user = user;
                }
                return user;
            });
        });
    }
}
AzureAdAuthenticationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AzureAdAuthenticationService, factory: function AzureAdAuthenticationService_Factory(t) { return new (t || AzureAdAuthenticationService)(); }, providedIn: "root" });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AzureAdAuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/core/security/services/security.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/security/services/security.service.ts ***!
  \************************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_abstraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/abstraction */ "./src/app/core/abstraction/index.ts");
/* harmony import */ var _core_local_storage_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/local-storage-keys */ "./src/app/core/local-storage-keys.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/authentication-type.enum */ "./src/app/core/security/enums/authentication-type.enum.ts");
/* harmony import */ var _models_application_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/application-user.model */ "./src/app/core/security/models/application-user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/local-storage */ "./src/app/core/local-storage/index.ts");
/* harmony import */ var _azure_ad_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./azure-ad-authentication.service */ "./src/app/core/security/services/azure-ad-authentication.service.ts");













class SecurityService extends _core_abstraction__WEBPACK_IMPORTED_MODULE_2__["ApiService"] {
    constructor(http, localStorage, azureAdAuthenticationService) {
        super(http, "users");
        this.localStorage = localStorage;
        this.azureAdAuthenticationService = azureAdAuthenticationService;
        this.applicationUser = new _models_application_user_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationUserModel"]();
        this.applicationUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    login(userCredentials) {
        this.setAuthenticationType(_enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_7__["AuthenticationType"].Default);
        return this.post(userCredentials, "/authenticate").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(user => {
            this.localStorage.setUserItem(_core_local_storage_keys__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AccessToken, user.bearerToken);
            this.updateUser(user);
            return user;
        }));
    }
    externalLogin(authenticationType) {
        this.setAuthenticationType(authenticationType);
        const authenticationService = this.getExternalAuthentication();
        if (authenticationService) {
            return authenticationService.login().then(() => {
                this.loadCurrentUser();
            });
        }
    }
    logout() {
        const authenticationService = this.getExternalAuthentication();
        if (authenticationService) {
            authenticationService.logout();
        }
        this.localStorage.clearUserItems();
        this.updateUser(new _models_application_user_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationUserModel"]());
    }
    hasClaim(claim) {
        if (Array.isArray(claim)) {
            return this.applicationUser.claims.some(c => claim.includes(c));
        }
        else {
            return this.applicationUser.claims.includes(claim);
        }
    }
    restoreSession() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let accessToken = null;
            const authenticationService = this.getExternalAuthentication();
            if (authenticationService) {
                yield authenticationService.awaitInitialization();
                accessToken = authenticationService.getAccessToken();
            }
            else {
                accessToken = this.getAccessToken();
            }
            if (!accessToken) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null).toPromise();
            }
            this.loadCurrentUser();
        });
    }
    getAccessToken() {
        const authenticationService = this.getExternalAuthentication();
        if (authenticationService) {
            return authenticationService.getAccessToken();
        }
        return this.applicationUser.bearerToken
            ? this.applicationUser.bearerToken
            : this.localStorage.getItem(_core_local_storage_keys__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AccessToken);
    }
    updateUser(applicationUser) {
        Object.assign(this.applicationUser, applicationUser);
        this.applicationUserChanged.emit(this.applicationUser);
    }
    loadCurrentUser() {
        return this.get("/current")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(applicationUser => {
            if (applicationUser) {
                this.updateUser(applicationUser);
            }
            else {
                this.logout();
            }
            return this.applicationUser;
        }))
            .toPromise();
    }
    getExternalAuthentication() {
        const authenticationType = this.getAuthenticationType();
        switch (authenticationType) {
            case _enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_7__["AuthenticationType"].AzureAd: {
                return _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].azureAdSettings.enabled
                    ? this.azureAdAuthenticationService
                    : null;
            }
            default: {
                return null;
            }
        }
    }
    getAuthenticationType() {
        let authenticationType = this.localStorage.getItem(_core_local_storage_keys__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AuthenticationType);
        if (!authenticationType) {
            authenticationType = _enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_7__["AuthenticationType"].Default;
        }
        return authenticationType;
    }
    setAuthenticationType(authenticationType) {
        this.localStorage.setUserItem(_core_local_storage_keys__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AuthenticationType, authenticationType);
    }
}
SecurityService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SecurityService, factory: function SecurityService_Factory(t) { return new (t || SecurityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_azure_ad_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AzureAdAuthenticationService"])); }, providedIn: "root" });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecurityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _core_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"] }, { type: _azure_ad_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AzureAdAuthenticationService"] }]; }, null);


/***/ }),

/***/ "./src/app/core/toast/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/toast/index.ts ***!
  \*************************************/
/*! exports provided: ToastService, ToastsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"]; });

/* harmony import */ var _toasts_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasts-container.component */ "./src/app/core/toast/toasts-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function() { return _toasts_container_component__WEBPACK_IMPORTED_MODULE_1__["ToastsContainerComponent"]; });





/***/ }),

/***/ "./src/app/core/toast/toast.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/toast/toast.service.ts ***!
  \*********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(textOrTpl, options = {}) {
        this.showToast(textOrTpl, options);
    }
    showSuccess(message) {
        this.showToast(message, { classname: "bg-success text-light" });
    }
    showWarning(message) {
        this.showToast(message, { classname: "bg-warning text-dark" });
    }
    showError(message) {
        this.showToast(message, { classname: "bg-danger text-light" });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
    showToast(textOrTpl, options = {}) {
        this.toasts.push(Object.assign({ textOrTpl, autoHide: true }, options));
    }
}
ToastService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: function ToastService_Factory(t) { return new (t || ToastService)(); }, providedIn: "root" });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/core/toast/toasts-container.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/toast/toasts-container.component.ts ***!
  \**********************************************************/
/*! exports provided: ToastsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function() { return ToastsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





const _c0 = [1, "ngb-toasts", 2, "margin-top", "70px"];
const _c1 = ["style", "cursor: pointer;", 3, "class", "autohide", "delay", "mouseenter", "mouseleave", "click", "hide", 4, "ngFor", "ngForOf"];
const _c2 = [2, "cursor", "pointer", 3, "autohide", "delay", "mouseenter", "mouseleave", "click", "hide"];
const _c3 = [3, "ngIf", "ngIfElse"];
const _c4 = ["text", ""];
const _c5 = [3, "ngTemplateOutlet"];
function ToastsContainerComponent_ngb_toast_1_ng_template_1_ng_template_0_Template(rf, ctx) { }
function ToastsContainerComponent_ngb_toast_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsContainerComponent_ngb_toast_1_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", _c5);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
} }
function ToastsContainerComponent_ngb_toast_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
} }
function ToastsContainerComponent_ngb_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ToastsContainerComponent_ngb_toast_1_Template_ngb_toast_mouseenter_0_listener($event) { const toast_r1 = ctx.$implicit; return toast_r1.autoHide = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ToastsContainerComponent_ngb_toast_1_Template_ngb_toast_mouseleave_0_listener($event) { const toast_r1 = ctx.$implicit; return toast_r1.autoHide = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastsContainerComponent_ngb_toast_1_Template_ngb_toast_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const toast_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); toast_r1.autoHide = false; return ctx_r10.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastsContainerComponent_ngb_toast_1_Template_ngb_toast_hide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const toast_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastsContainerComponent_ngb_toast_1_ng_template_1_Template, 1, 1, "ng-template", _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastsContainerComponent_ngb_toast_1_ng_template_2_Template, 1, 1, "ng-template", null, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", toast_r1.autoHide)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
} }
class ToastsContainerComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    isTemplate(toast) {
        return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
    }
}
ToastsContainerComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastsContainerComponent, selectors: [["app-toasts-container"]], factory: function ToastsContainerComponent_Factory(t) { return new (t || ToastsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); }, consts: 2, vars: 1, template: function ToastsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastsContainerComponent_ngb_toast_1_Template, 4, 5, "ngb-toast", _c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-toasts-container",
                template: `
    <div class="ngb-toasts" style="margin-top: 70px;">
      <ngb-toast
        *ngFor="let toast of toastService.toasts"
        [class]="toast.classname"
        style="cursor: pointer;"
        [autohide]="toast.autoHide"
        (mouseenter)="toast.autoHide = false"
        (mouseleave)="toast.autoHide = true"
        (click)="toast.autoHide = false; toastService.remove(toast)"
        [delay]="toast.delay || 5000"
        (hide)="toastService.remove(toast)"
      >
        <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
          <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
        </ng-template>

        <ng-template #text>{{ toast.textOrTpl }}</ng-template>
      </ngb-toast>
    </div>
  `
            }]
    }], function () { return [{ type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null);


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    clientUrl: "https://martijnturnhout.com",
    apiUrl: "/api",
    recaptchaSiteKey: "6LeOaq0UAAAAAFm6THEVZTNUk6MU76mVA59F9Yj_",
    azureAdSettings: {
        enabled: true,
        tenantId: "bfc60a20-4601-4b3b-aa55-2ba676b14976",
        clientId: "ba0156a1-daaa-4b6d-990a-a73283a95a4a",
        webApiId: "0be261fe-0e96-4163-b07d-fbac0059c339"
    },
    applicationInsights: {
        instrumentationKey: "850af97e-3c89-4da4-aee3-79bfa6cb9a8c"
    }
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    clientUrl: "http://localhost:4200",
    apiUrl: "/api",
    recaptchaSiteKey: "6LdLprcUAAAAABxlfA223kbR2lhoAqTKKXyDjMdS",
    azureAdSettings: {
        enabled: true,
        // Directory id
        tenantId: "bfc60a20-4601-4b3b-aa55-2ba676b14976",
        // App registration id of client
        clientId: "ba0156a1-daaa-4b6d-990a-a73283a95a4a",
        // App registration id of web api
        webApiId: "0be261fe-0e96-4163-b07d-fbac0059c339"
    },
    applicationInsights: {
        instrumentationKey: "850af97e-3c89-4da4-aee3-79bfa6cb9a8c"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => {
    // tslint:disable-next-line: no-console
    console.error(err);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\m_tur\Documents\GitHub\Website\src\Clients\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map