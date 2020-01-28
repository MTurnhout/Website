function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js ***!
    \*************************************************************************/

  /*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */

  /***/
  function node_modulesNgRecaptcha__ivy_ngcc__Fesm2015NgRecaptchaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function () {
      return RECAPTCHA_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function () {
      return RECAPTCHA_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function () {
      return RECAPTCHA_NONCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function () {
      return RECAPTCHA_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function () {
      return RECAPTCHA_V3_SITE_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function () {
      return ReCaptchaV3Service;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function () {
      return RecaptchaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function () {
      return RecaptchaFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function () {
      return RecaptchaLoaderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function () {
      return RecaptchaModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function () {
      return RecaptchaV3Module;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function () {
      return RecaptchaValueAccessorDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return RecaptchaCommonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-language');
    var RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-base-url');
    var RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-nonce-tag');

    function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
      window.ng2recaptchaloaded = function () {
        onLoaded(grecaptcha);
      };

      var script = document.createElement('script');
      script.innerHTML = '';
      var baseUrl = url || 'https://www.google.com/recaptcha/api.js';
      script.src = "".concat(baseUrl, "?render=").concat(renderMode, "&onload=ng2recaptchaloaded").concat(urlParams);

      if (nonce) {
        // tslint:disable-next-line:no-any Remove "any" cast once we upgrade Angular to 7 and TypeScript along with it
        script.nonce = nonce;
      }

      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    var RecaptchaLoaderService = RecaptchaLoaderService_1 =
    /*#__PURE__*/
    function () {
      function RecaptchaLoaderService( // tslint:disable-next-line:no-any
      platformId, language, baseUrl, nonce) {
        _classCallCheck(this, RecaptchaLoaderService);

        this.platformId = platformId;
        this.language = language;
        this.baseUrl = baseUrl;
        this.nonce = nonce;
        this.init();
        this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService_1.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
      }
      /** @internal */


      _createClass(RecaptchaLoaderService, [{
        key: "init",
        value: function init() {
          if (RecaptchaLoaderService_1.ready) {
            return;
          }

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
            RecaptchaLoaderService_1.ready = subject;
            var langParam = this.language ? '&hl=' + this.language : '';
            loadScript('explicit', function (grecaptcha) {
              return subject.next(grecaptcha);
            }, langParam, this.baseUrl, this.nonce);
          }
        }
      }]);

      return RecaptchaLoaderService;
    }();

    RecaptchaLoaderService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RecaptchaLoaderService,
      factory: function RecaptchaLoaderService_Factory(t) {
        return new (t || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_NONCE, 8));
      },
      providedIn: null
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaLoaderService, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_LANGUAGE]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_BASE_URL]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_NONCE]
        }]
      }];
    }, {
      constructor: [],
      platformId: [],
      language: [],
      baseUrl: [],
      nonce: [],
      ready: [],
      init: []
    });

    ;
    /**
     * @internal
     * @nocollapse
     */

    RecaptchaLoaderService.ready = null;
    RecaptchaLoaderService = RecaptchaLoaderService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_LANGUAGE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String, String])], RecaptchaLoaderService);
    var RecaptchaLoaderService_1;
    var RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-settings');
    var nextId = 0;

    var RecaptchaComponent =
    /*#__PURE__*/
    function () {
      function RecaptchaComponent(elementRef, loader, zone, settings) {
        _classCallCheck(this, RecaptchaComponent);

        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-".concat(nextId++);
        this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (settings) {
          this.siteKey = settings.siteKey;
          this.theme = settings.theme;
          this.type = settings.type;
          this.size = settings.size;
          this.badge = settings.badge;
        }
      }

      _createClass(RecaptchaComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
            if (grecaptcha != null && grecaptcha.render instanceof Function) {
              _this.grecaptcha = grecaptcha;

              _this.renderRecaptcha();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // reset the captcha to ensure it does not leave anything behind
          // after the component is no longer needed
          this.grecaptchaReset();

          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
        /**
         * Executes the invisible recaptcha.
         * Does nothing if component's size is not set to "invisible".
         */

      }, {
        key: "execute",
        value: function execute() {
          if (this.size !== 'invisible') {
            return;
          }

          if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
          } else {
            // delay execution of recaptcha until it actually renders
            this.executeRequested = true;
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
              // Only emit an event in case if something would actually change.
              // That way we do not trigger "touching" of the control if someone does a "reset"
              // on a non-resolved captcha.
              this.resolved.emit(null);
            }

            this.grecaptchaReset();
          }
        }
        /** @internal */

      }, {
        key: "expired",
        value: function expired() {
          this.resolved.emit(null);
        }
        /** @internal */

      }, {
        key: "captchaResponseCallback",
        value: function captchaResponseCallback(response) {
          this.resolved.emit(response);
        }
        /** @internal */

      }, {
        key: "grecaptchaReset",
        value: function grecaptchaReset() {
          var _this2 = this;

          if (this.widget != null) {
            this.zone.runOutsideAngular(function () {
              return _this2.grecaptcha.reset(_this2.widget);
            });
          }
        }
        /** @internal */

      }, {
        key: "renderRecaptcha",
        value: function renderRecaptcha() {
          var _this3 = this;

          this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: function callback(response) {
              _this3.zone.run(function () {
                return _this3.captchaResponseCallback(response);
              });
            },
            'expired-callback': function expiredCallback() {
              _this3.zone.run(function () {
                return _this3.expired();
              });
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type
          });

          if (this.executeRequested === true) {
            this.executeRequested = false;
            this.execute();
          }
        }
      }]);

      return RecaptchaComponent;
    }();

    RecaptchaComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RecaptchaComponent,
      selectors: [["re-captcha"]],
      factory: function RecaptchaComponent_Factory(t) {
        return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
      },
      hostBindings: function RecaptchaComponent_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵallocHostVars"](1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id",
        siteKey: "siteKey",
        theme: "theme",
        type: "type",
        size: "size",
        badge: "badge",
        tabIndex: "tabIndex"
      },
      outputs: {
        resolved: "resolved"
      },
      exportAs: ["reCaptcha"],
      consts: 0,
      vars: 0,
      template: function RecaptchaComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        exportAs: 'reCaptcha',
        selector: 're-captcha',
        template: ""
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: RecaptchaLoaderService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_SETTINGS]
        }]
      }];
    }, {
      constructor: [],
      elementRef: [],
      loader: [],
      zone: [],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['attr.id']
      }],
      resolved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      siteKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      badge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ngAfterViewInit: [],
      subscription: [],
      grecaptcha: [],
      ngOnDestroy: [],
      execute: [],
      executeRequested: [],
      reset: [],
      expired: [],
      captchaResponseCallback: [],
      grecaptchaReset: [],
      renderRecaptcha: [],
      widget: [],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    });

    ;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RecaptchaComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "siteKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], RecaptchaComponent.prototype, "tabIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "badge", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RecaptchaComponent.prototype, "resolved", void 0);
    RecaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_SETTINGS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], RecaptchaLoaderService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])], RecaptchaComponent);

    var RecaptchaCommonModule = function RecaptchaCommonModule() {
      _classCallCheck(this, RecaptchaCommonModule);
    };

    RecaptchaCommonModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecaptchaCommonModule
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecaptchaCommonModule, {
      declarations: [RecaptchaComponent],
      exports: [RecaptchaComponent]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaCommonModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [RecaptchaComponent],
        exports: [RecaptchaComponent]
      }]
    }], null, null);

    RecaptchaCommonModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecaptchaCommonModule_Factory(t) {
        return new (t || RecaptchaCommonModule)();
      }
    });
    ;

    var RecaptchaModule = RecaptchaModule_1 =
    /*#__PURE__*/
    function () {
      function RecaptchaModule() {
        _classCallCheck(this, RecaptchaModule);
      }

      _createClass(RecaptchaModule, null, [{
        key: "forRoot",
        // We need this to maintain backwards-compatibility with v4. Removing this will be a breaking change
        value: function forRoot() {
          return RecaptchaModule_1;
        }
      }]);

      return RecaptchaModule;
    }();

    RecaptchaModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecaptchaModule
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecaptchaModule, {
      imports: [RecaptchaCommonModule],
      exports: [RecaptchaComponent]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [RecaptchaComponent],
        imports: [RecaptchaCommonModule],
        providers: [RecaptchaLoaderService]
      }]
    }], null, null);

    RecaptchaModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecaptchaModule_Factory(t) {
        return new (t || RecaptchaModule)();
      },
      providers: [RecaptchaLoaderService],
      imports: [[RecaptchaCommonModule]]
    });
    ;
    var RecaptchaModule_1;
    var RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-v3-site-key');
    /**
     * The main service for working with reCAPTCHA v3 APIs.
     *
     * Use the `execute` method for executing a single action, and
     * `onExecute` observable for listening to all actions at once.
     */

    var ReCaptchaV3Service =
    /*#__PURE__*/
    function () {
      function ReCaptchaV3Service(zone, siteKey, // tslint:disable-next-line:no-any
      platformId, baseUrl, nonce) {
        var _this4 = this;

        _classCallCheck(this, ReCaptchaV3Service);

        /** @internal */
        this.onLoadComplete = function (grecaptcha) {
          _this4.grecaptcha = grecaptcha;

          if (_this4.actionBacklog && _this4.actionBacklog.length > 0) {
            _this4.actionBacklog.forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  action = _ref2[0],
                  subject = _ref2[1];

              return _this4.executeActionWithSubject(action, subject);
            });

            _this4.actionBacklog = undefined;
          }
        };

        this.zone = zone;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.siteKey = siteKey;
        this.nonce = nonce;
        this.baseUrl = baseUrl;
        this.init();
      }

      _createClass(ReCaptchaV3Service, [{
        key: "execute",

        /**
         * Executes the provided `action` with reCAPTCHA v3 API.
         * Use the emitted token value for verification purposes on the backend.
         *
         * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
         * https://developers.google.com/recaptcha/docs/v3.
         *
         * @param {string} action the action to execute
         * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
         * The returned `Observable` completes immediately after emitting a value.
         */
        value: function execute(action) {
          var subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

          if (this.isBrowser) {
            if (!this.grecaptcha) {
              // todo: add to array of later executions
              if (!this.actionBacklog) {
                this.actionBacklog = [];
              }

              this.actionBacklog.push([action, subject]);
            } else {
              this.executeActionWithSubject(action, subject);
            }
          }

          return subject.asObservable();
        }
        /** @internal */

      }, {
        key: "executeActionWithSubject",
        value: function executeActionWithSubject(action, subject) {
          var _this5 = this;

          this.zone.runOutsideAngular(function () {
            // tslint:disable-next-line:no-any
            _this5.grecaptcha.execute(_this5.siteKey, {
              action: action
            }).then(function (token) {
              _this5.zone.run(function () {
                subject.next(token);
                subject.complete();

                if (_this5.onExecuteSubject) {
                  _this5.onExecuteSubject.next({
                    action: action,
                    token: token
                  });
                }
              });
            });
          });
        }
        /** @internal */

      }, {
        key: "init",
        value: function init() {
          if (this.isBrowser) {
            if ('grecaptcha' in window) {
              this.grecaptcha = grecaptcha;
            } else {
              loadScript(this.siteKey, this.onLoadComplete, '', this.baseUrl, this.nonce);
            }
          }
        }
      }, {
        key: "onExecute",
        get: function get() {
          if (!this.onExecuteSubject) {
            this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onExecuteObservable = this.onExecuteSubject.asObservable();
          }

          return this.onExecuteObservable;
        }
      }]);

      return ReCaptchaV3Service;
    }();

    ReCaptchaV3Service.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReCaptchaV3Service,
      factory: function ReCaptchaV3Service_Factory(t) {
        return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RECAPTCHA_NONCE, 8));
      },
      providedIn: null
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_V3_SITE_KEY]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_BASE_URL]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [RECAPTCHA_NONCE]
        }]
      }];
    }, {
      constructor: [],
      onLoadComplete: [],
      grecaptcha: [],
      actionBacklog: [],
      zone: [],
      isBrowser: [],
      siteKey: [],
      nonce: [],
      baseUrl: [],
      onExecute: [],
      onExecuteSubject: [],
      onExecuteObservable: [],
      execute: [],
      executeActionWithSubject: [],
      init: []
    });

    ;
    ReCaptchaV3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_V3_SITE_KEY)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], String, Object, String, String])], ReCaptchaV3Service);

    var RecaptchaV3Module = function RecaptchaV3Module() {
      _classCallCheck(this, RecaptchaV3Module);
    };

    RecaptchaV3Module.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecaptchaV3Module
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaV3Module, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        providers: [ReCaptchaV3Service]
      }]
    }], null, null);

    RecaptchaV3Module.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecaptchaV3Module_Factory(t) {
        return new (t || RecaptchaV3Module)();
      },
      providers: [ReCaptchaV3Service]
    });
    ;

    var RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 =
    /*#__PURE__*/
    function () {
      function RecaptchaValueAccessorDirective(host) {
        _classCallCheck(this, RecaptchaValueAccessorDirective);

        this.host = host;
      }

      _createClass(RecaptchaValueAccessorDirective, [{
        key: "writeValue",
        value: function writeValue(value) {
          if (!value) {
            this.host.reset();
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "onResolve",
        value: function onResolve($event) {
          if (this.onChange) {
            this.onChange($event);
          }

          if (this.onTouched) {
            this.onTouched();
          }
        }
      }]);

      return RecaptchaValueAccessorDirective;
    }();

    RecaptchaValueAccessorDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: RecaptchaValueAccessorDirective,
      selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
      factory: function RecaptchaValueAccessorDirective_Factory(t) {
        return new (t || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RecaptchaComponent));
      },
      hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
            return ctx.onResolve($event);
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        // tslint:disable-next-line:no-forward-ref
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RecaptchaValueAccessorDirective_1;
        })
      }])]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaValueAccessorDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        providers: [{
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          // tslint:disable-next-line:no-forward-ref
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return RecaptchaValueAccessorDirective_1;
          })
        }],
        // tslint:disable-next-line:directive-selector
        selector: 're-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]'
      }]
    }], function () {
      return [{
        type: RecaptchaComponent
      }];
    }, {
      constructor: [],
      host: [],
      writeValue: [],
      registerOnChange: [],
      onChange: [],
      registerOnTouched: [],
      onTouched: [],
      onResolve: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['resolved', ['$event']]
      }]
    });

    ;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('resolved', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RecaptchaValueAccessorDirective.prototype, "onResolve", null);
    RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RecaptchaComponent])], RecaptchaValueAccessorDirective);
    var RecaptchaValueAccessorDirective_1;

    var RecaptchaFormsModule = function RecaptchaFormsModule() {
      _classCallCheck(this, RecaptchaFormsModule);
    };

    RecaptchaFormsModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecaptchaFormsModule
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecaptchaFormsModule, {
      declarations: function declarations() {
        return [RecaptchaValueAccessorDirective];
      },
      imports: function imports() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], RecaptchaCommonModule];
      },
      exports: function exports() {
        return [RecaptchaValueAccessorDirective];
      }
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecaptchaFormsModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [RecaptchaValueAccessorDirective],
        exports: [RecaptchaValueAccessorDirective],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], RecaptchaCommonModule]
      }]
    }], null, null);

    RecaptchaFormsModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecaptchaFormsModule_Factory(t) {
        return new (t || RecaptchaFormsModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], RecaptchaCommonModule]]
    });
    ;
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-recaptcha.js.map

    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

    var routes = [{
      path: "",
      component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    LoginRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginRoutingModule_Factory(t) {
        return new (t || LoginRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_security_enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/security/enums/authentication-type.enum */
    "./src/app/core/security/enums/authentication-type.enum.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/security */
    "./src/app/core/security/index.ts");
    /* harmony import */


    var _core_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/toast */
    "./src/app/core/toast/index.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = [1, "row"];
    var _c1 = [1, "col-md-8", "col-xl-6", "mx-auto"];
    var _c2 = [1, "card", 3, "formGroup"];
    var _c3 = [1, "card-body"];
    var _c4 = [1, "form-group"];
    var _c5 = ["type", "email", "formControlName", "email", "required", "", 1, "form-control"];
    var _c6 = ["type", "password", "formControlName", "password", "required", "", 1, "form-control"];
    var _c7 = ["formControlName", "recaptcha", "theme", "dark", 3, "siteKey"];
    var _c8 = [1, "card-footer"];
    var _c9 = ["class", "btn btn-secondary", 3, "click", 4, "ngIf"];
    var _c10 = [1, "btn", "btn-primary", "float-right", 3, "disabled", "click"];
    var _c11 = [1, "btn", "btn-secondary", 3, "click"];
    var _c12 = ["viewBox", "0 0 72 72", 1, "msazure-logo"];
    var _c13 = ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0 34.219H34.219V0H0V34.219Z", "transform", "translate(0.00499725 0.00601196)", "fill", "#F25022"];
    var _c14 = ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0 34.219H34.219V0H0V34.219Z", "transform", "translate(37.779)", "fill", "#7FBA00"];
    var _c15 = ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0 34.219H34.219V0H0V34.219Z", "transform", "translate(0 37.779)", "fill", "#00A4EF"];
    var _c16 = ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0 34.219H34.219V0H0V34.219Z", "transform", "translate(37.779 37.779)", "fill", "#FFB900"];

    function LoginComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", _c11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_15_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.azureAdLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", _c12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", _c13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", _c14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", _c15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", _c16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(route, router, securityService, toastService) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.securityService = securityService;
        this.toastService = toastService;
        this.azureAdAuthenticationEnabled = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].azureAdSettings.enabled;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initValidation();
          this.recaptchaSiteKey = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].recaptchaSiteKey;
        }
      }, {
        key: "initValidation",
        value: function initValidation() {
          this.formValidation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+]{8,}$/)]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          if (!this.formValidation.valid) {
            this.formValidation.markAllAsTouched();
            return;
          }

          this.securityService.login({
            email: this.formValidation.get("email").value,
            password: this.formValidation.get("password").value,
            recaptcha: this.formValidation.get("recaptcha").value
          }).subscribe(function () {
            var returnUrl = _this6.route.snapshot.queryParams.returnUrl || "/";

            _this6.router.navigate([returnUrl]);
          }, function (error) {
            _this6.toastService.showError(error);
          });
        }
      }, {
        key: "azureAdLogin",
        value: function azureAdLogin() {
          this.externalLogin(_core_security_enums_authentication_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthenticationType"].AzureAd);
        }
      }, {
        key: "externalLogin",
        value: function externalLogin(authenticationType) {
          var _this7 = this;

          this.securityService.externalLogin(authenticationType).then(function () {
            var returnUrl = _this7.route.snapshot.queryParams.returnUrl || "/";

            _this7.router.navigate([returnUrl]);
          }, function (error) {
            _this7.toastService.showError(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      factory: function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_security__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_toast__WEBPACK_IMPORTED_MODULE_6__["ToastService"]));
      },
      consts: 18,
      vars: 4,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", _c5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", _c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", _c6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", _c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "re-captcha", _c7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", _c8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_button_15_Template, 6, 0, "button", _c9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", _c10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("siteKey", ctx.recaptchaSiteKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.azureAdAuthenticationEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formValidation.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaValueAccessorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".msazure-logo[_ngcontent-%COMP%] {\n  height: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxtX3R1clxcRG9jdW1lbnRzXFxHaXRIdWJcXFdlYnNpdGVcXHNyY1xcQ2xpZW50c1xcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tc2F6dXJlLWxvZ28ge1xyXG4gIGhlaWdodDogMjNweDtcclxufVxyXG4iLCIubXNhenVyZS1sb2dvIHtcbiAgaGVpZ2h0OiAyM3B4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.scss"]
      }]
    }], function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _core_security__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]
      }, {
        type: _core_toast__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaFormsModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, {
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaFormsModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaFormsModule"]]
      }]
    }], null, null);
    /***/

  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map