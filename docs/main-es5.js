(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!*********************************************!*\
      !*** multi ./projects/demo-app/src/main.ts ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /var/www/ngx-mention/projects/demo-app/src/main.ts */
      "hWqd");
      /***/
    },

    /***/
    "1K97":
    /*!*************************************************!*\
      !*** ./projects/demo-app/src/app/app.module.ts ***!
      \*************************************************/

    /*! exports provided: AppModule */

    /***/
    function K97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! projects/ngx-mention/src/lib/ngx-mention.module */
      "m6mK");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "27ck");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "xA2O");
      /* harmony import */


      var _async_async_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./async/async.component */
      "Bu1u");
      /* harmony import */


      var _static_static_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./static/static.component */
      "a393");

      var routes = [{
        path: '',
        redirectTo: 'static',
        pathMatch: 'full'
      }, {
        path: 'static',
        component: _static_static_component__WEBPACK_IMPORTED_MODULE_15__["StaticComponent"]
      }, {
        path: 'async',
        component: _async_async_component__WEBPACK_IMPORTED_MODULE_14__["AsyncComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
          useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseHref
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_11__["NgxMentionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _async_async_component__WEBPACK_IMPORTED_MODULE_14__["AsyncComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_15__["StaticComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_11__["NgxMentionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _async_async_component__WEBPACK_IMPORTED_MODULE_14__["AsyncComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_15__["StaticComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_11__["NgxMentionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
              useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseHref
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "27ck":
    /*!***********************************************************!*\
      !*** ./projects/demo-app/src/environments/environment.ts ***!
      \***********************************************************/

    /*! exports provided: environment */

    /***/
    function ck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        baseHref: '/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "7ik7":
    /*!********************************************!*\
      !*** ./projects/demo-app/src/app/users.ts ***!
      \********************************************/

    /*! exports provided: Users */

    /***/
    function ik7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Users", function () {
        return Users;
      });

      var Users = [{
        id: 1,
        value: 'brennon.morissette'
      }, {
        id: 2,
        value: 'grant24'
      }, {
        id: 3,
        value: 'lblick'
      }, {
        id: 4,
        value: 'langworth.filiberto'
      }, {
        id: 5,
        value: 'mozelle96'
      }, {
        id: 6,
        value: 'bethany.abbott'
      }, {
        id: 7,
        value: 'torphy.avis'
      }, {
        id: 8,
        value: 'marion70'
      }, {
        id: 9,
        value: 'connelly.blanche'
      }, {
        id: 10,
        value: 'amira.flatley'
      }, {
        id: 11,
        value: 'junius.jacobson'
      }, {
        id: 12,
        value: 'gusikowski.guillermo'
      }, {
        id: 13,
        value: 'tmurazik'
      }, {
        id: 14,
        value: 'nschaden'
      }, {
        id: 15,
        value: 'obrekke'
      }, {
        id: 16,
        value: 'allene99'
      }, {
        id: 17,
        value: 'grant00'
      }, {
        id: 18,
        value: 'lcrooks'
      }, {
        id: 19,
        value: 'earnest.berge'
      }, {
        id: 20,
        value: 'caroline02'
      }, {
        id: 21,
        value: 'satterfield.carlo'
      }, {
        id: 22,
        value: 'hans49'
      }, {
        id: 23,
        value: 'nelle03'
      }, {
        id: 24,
        value: 'dach.kailee'
      }, {
        id: 25,
        value: 'william.franecki'
      }, {
        id: 26,
        value: 'arlene.mosciski'
      }, {
        id: 27,
        value: 'sandrine.smitham'
      }, {
        id: 28,
        value: 'gilberto64'
      }, {
        id: 29,
        value: 'usatterfield'
      }, {
        id: 30,
        value: 'leora.bogan'
      }, {
        id: 31,
        value: 'ucremin'
      }, {
        id: 32,
        value: 'kmonahan'
      }, {
        id: 33,
        value: 'myrtice.stamm'
      }, {
        id: 34,
        value: 'odaniel'
      }, {
        id: 35,
        value: 'riley.parisian'
      }, {
        id: 36,
        value: 'ilynch'
      }, {
        id: 37,
        value: 'athena.gleason'
      }, {
        id: 38,
        value: 'bradtke.dangelo'
      }, {
        id: 39,
        value: 'tiara63'
      }, {
        id: 40,
        value: 'fmueller'
      }, {
        id: 41,
        value: 'marta34'
      }, {
        id: 42,
        value: 'vdubuque'
      }, {
        id: 43,
        value: 'znolan'
      }, {
        id: 44,
        value: 'ibotsford'
      }, {
        id: 45,
        value: 'mlittle'
      }, {
        id: 46,
        value: 'delia.schneider'
      }, {
        id: 47,
        value: 'lazaro59'
      }, {
        id: 48,
        value: 'boris73'
      }, {
        id: 49,
        value: 'chaim.kuvalis'
      }, {
        id: 50,
        value: 'nreilly'
      }, {
        id: 51,
        value: 'oda31'
      }, {
        id: 52,
        value: 'okuneva.jennings'
      }, {
        id: 53,
        value: 'tracy.moen'
      }, {
        id: 54,
        value: 'mann.josue'
      }, {
        id: 55,
        value: 'ramiro.ferry'
      }, {
        id: 56,
        value: 'iva.schultz'
      }, {
        id: 57,
        value: 'konopelski.gust'
      }, {
        id: 58,
        value: 'myrtle.keeling'
      }, {
        id: 59,
        value: 'cydney51'
      }, {
        id: 60,
        value: 'raynor.cecilia'
      }, {
        id: 61,
        value: 'jonas.boyer'
      }, {
        id: 62,
        value: 'enoch.rodriguez'
      }, {
        id: 63,
        value: 'akautzer'
      }, {
        id: 64,
        value: 'estelle35'
      }, {
        id: 65,
        value: 'freda.wyman'
      }, {
        id: 66,
        value: 'mellie95'
      }, {
        id: 67,
        value: 'eoreilly'
      }, {
        id: 68,
        value: 'ggreen'
      }, {
        id: 69,
        value: 'rohan.augusta'
      }, {
        id: 70,
        value: 'fidel.kihn'
      }, {
        id: 71,
        value: 'freda.hoppe'
      }, {
        id: 72,
        value: 'grover.ratke'
      }, {
        id: 73,
        value: 'herta.upton'
      }, {
        id: 74,
        value: 'emilio65'
      }, {
        id: 75,
        value: 'wintheiser.granville'
      }, {
        id: 76,
        value: 'pamela.beahan'
      }, {
        id: 77,
        value: 'jace.leannon'
      }, {
        id: 78,
        value: 'lexi.witting'
      }, {
        id: 79,
        value: 'luther35'
      }, {
        id: 80,
        value: 'justen72'
      }, {
        id: 81,
        value: 'magdalen67'
      }, {
        id: 82,
        value: 'sincere.flatley'
      }, {
        id: 83,
        value: 'utoy'
      }, {
        id: 84,
        value: 'litzy.kunze'
      }, {
        id: 85,
        value: 'kay70'
      }, {
        id: 86,
        value: 'ova74'
      }, {
        id: 87,
        value: 'rylee.hammes'
      }, {
        id: 88,
        value: 'vergie.hahn'
      }, {
        id: 89,
        value: 'eloisa50'
      }, {
        id: 90,
        value: 'kylee.effertz'
      }, {
        id: 91,
        value: 'quinten77'
      }, {
        id: 92,
        value: 'pfeffer.estel'
      }, {
        id: 93,
        value: 'moore.orion'
      }, {
        id: 94,
        value: 'mckenzie.guiseppe'
      }, {
        id: 95,
        value: 'monica44'
      }, {
        id: 96,
        value: 'isabelle.nader'
      }, {
        id: 97,
        value: 'richard.mertz'
      }, {
        id: 98,
        value: 'etrantow'
      }, {
        id: 99,
        value: 'stoltenberg.cloyd'
      }, {
        id: 100,
        value: 'flatley.monserrat'
      }];
      /***/
    },

    /***/
    "Bu1u":
    /*!************************************************************!*\
      !*** ./projects/demo-app/src/app/async/async.component.ts ***!
      \************************************************************/

    /*! exports provided: AsyncComponent */

    /***/
    function Bu1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncComponent", function () {
        return AsyncComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../ngx-mention/src/lib/ngx-mention.directive */
      "eaWN");

      var AsyncComponent = /*#__PURE__*/function () {
        function AsyncComponent(httpClient, baseHref) {
          _classCallCheck(this, AsyncComponent);

          this.httpClient = httpClient;
          this.baseHref = baseHref;
          this.asyncSearchItems = [];
          this.customDenotationItems = [];
          this.customSearchNgxMentionConfig = {
            disableSearch: true
          };
          this.customDenotationCharacterConfig = {
            disableSearch: true,
            denotationCharacter: '$'
          };
        }

        _createClass(AsyncComponent, [{
          key: "onSearch",
          value: function onSearch($event) {
            var _this = this;

            this.httpClient.get("".concat(this.baseHref, "assets/users.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
              return items.filter(function (item) {
                return item.value.toLowerCase().includes($event.toLowerCase());
              });
            })).subscribe(function (items) {
              _this.asyncSearchItems = items;
            });
          }
        }, {
          key: "onCustomDenotationSearch",
          value: function onCustomDenotationSearch($event) {
            var _this2 = this;

            this.httpClient.get("".concat(this.baseHref, "assets/users.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
              return items.filter(function (item) {
                return item.value.toLowerCase().includes($event.toLowerCase());
              });
            })).subscribe(function (items) {
              _this2.customDenotationItems = items;
            });
          }
        }]);

        return AsyncComponent;
      }();

      AsyncComponent.ɵfac = function AsyncComponent_Factory(t) {
        return new (t || AsyncComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]));
      };

      AsyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AsyncComponent,
        selectors: [["app-async"]],
        decls: 17,
        vars: 8,
        consts: [[2, "padding", "24px"], ["href", "./assets/users.json"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "searchTerm"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "searchTerm"]],
        template: function AsyncComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Async search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " For a complete list of values that are available (generated faker usernames) please go to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The json file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " We can perform async search using disableSearch and the searchTerm output. The example below is using the HttpClient to retrieve values from a json file. It has a delay time of 200ms to simulate an API request ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchTerm", function AsyncComponent_Template_input_searchTerm_9_listener($event) {
              return ctx.onSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchTerm", function AsyncComponent_Template_textarea_searchTerm_10_listener($event) {
              return ctx.onSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Async Custom denotation character");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " We can change the denotation character to any character we want, here we have set the character to '$' ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchTerm", function AsyncComponent_Template_input_searchTerm_15_listener($event) {
              return ctx.onCustomDenotationSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchTerm", function AsyncComponent_Template_textarea_searchTerm_16_listener($event) {
              return ctx.onCustomDenotationSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ncNgxMention", ctx.asyncSearchItems)("ngxMentionConfig", ctx.customSearchNgxMentionConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ncNgxMention", ctx.asyncSearchItems)("ngxMentionConfig", ctx.customSearchNgxMentionConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ncNgxMention", ctx.customDenotationItems)("ngxMentionConfig", ctx.customDenotationCharacterConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ncNgxMention", ctx.customDenotationItems)("ngxMentionConfig", ctx.customDenotationCharacterConfig);
          }
        },
        directives: [_ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_4__["NgxMentionDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3luYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AsyncComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-async',
            templateUrl: './async.component.html',
            styleUrls: ['./async.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GXiP":
    /*!*************************************************************************************!*\
      !*** ./projects/ngx-mention/src/lib/ngx-mention-list/ngx-mention-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: NgxMentionListComponent */

    /***/
    function GXiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMentionListComponent", function () {
        return NgxMentionListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _caret_coords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../caret-coords */
      "qrtv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["container"];

      function NgxMentionListComponent_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          item: a0
        };
      };

      function NgxMentionListComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMentionListComponent_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r2));
        }
      }

      function NgxMentionListComponent_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "ngx-mention__item--selected": a0
        };
      };

      function NgxMentionListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMentionListComponent_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r3 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onItemCLick(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMentionListComponent_div_2_ng_container_1_Template, 2, 4, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMentionListComponent_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "mention-item-", i_r3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, i_r3 === ctx_r1.activeIndex));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.customTemplate)("ngIfElse", _r5);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "ngx-mention--visible": a0,
          "ngx-mention--drop-up": a1
        };
      };

      var FIRST_ITEM_INDEX = 0;
      var SELECTED_CLASS = 'ngx-mention__item--selected';

      var NgxMentionListComponent = /*#__PURE__*/function () {
        function NgxMentionListComponent(elementRef, renderer) {
          _classCallCheck(this, NgxMentionListComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.items = [];
          this.hidden = true;
          this.activeIndex = 0;
          this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * Positions ngx mention list component
         *
         * @param parentElement
         *
         * @author Roy Freij <info@royfreij.nl>
         * @version 1.0.0
         */


        _createClass(NgxMentionListComponent, [{
          key: "position",
          value: function position(parentElement) {
            var nativeElement = this.elementRef.nativeElement;
            var coords = Object(_caret_coords__WEBPACK_IMPORTED_MODULE_1__["getCaretCoordinates"])(parentElement, parentElement.selectionStart, null);
            coords.top = parentElement.offsetTop + coords.top - parentElement.scrollTop;
            coords.left = parentElement.offsetLeft + coords.left - parentElement.scrollLeft;
            var offsetTop = parseFloat(window.getComputedStyle(parentElement).lineHeight);
            var top = coords.top + offsetTop;
            this.renderer.setStyle(nativeElement, 'position', 'absolute');
            this.renderer.setStyle(nativeElement, 'left', "".concat(coords.left, "px"));
            this.renderer.setStyle(nativeElement, 'top', "".concat(top, "px"));
          }
          /**
           * Activates next item
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "activateNextItem",
          value: function activateNextItem() {
            var container = this.container.nativeElement;
            var activeElement = container.getElementsByClassName(SELECTED_CLASS).item(FIRST_ITEM_INDEX);

            if (activeElement) {
              var activeItemIndex = this.getItemIndex(activeElement.id);
              var nextItemIndex = activeItemIndex + 1;
              var nextElement = document.getElementById("mention-item-".concat(nextItemIndex));

              if (nextElement) {
                var nextElementRect = nextElement.getBoundingClientRect();

                if (nextElementRect.bottom > container.getBoundingClientRect().bottom) {
                  container.scrollTop = nextElement.offsetTop + nextElementRect.height - container.clientHeight;
                }

                this.activeIndex = nextItemIndex;
              }
            }
          }
          /**
           * Activates previous item
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "activatePreviousItem",
          value: function activatePreviousItem() {
            var container = this.container.nativeElement;
            var activeElement = container.getElementsByClassName(SELECTED_CLASS).item(FIRST_ITEM_INDEX);

            if (activeElement) {
              var activeItemIndex = this.getItemIndex(activeElement.id);
              var nextItemIndex = activeItemIndex - 1;
              var previousElement = document.getElementById("mention-item-".concat(nextItemIndex));

              if (previousElement) {
                var previousElementRect = previousElement.getBoundingClientRect();

                if (previousElementRect.bottom < container.getBoundingClientRect().top) {
                  container.scrollTop = previousElement.offsetTop;
                }

                this.activeIndex = nextItemIndex;
              }
            }
          }
          /**
           * Determines whether item is clicked on
           *
           * @param item
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "onItemCLick",
          value: function onItemCLick(index) {
            this.activeIndex = index;
            this.itemClick.emit();
          }
          /**
           * Resets scroll top
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "resetScrollTop",
          value: function resetScrollTop() {
            var _this3 = this;

            // Needs to be activated after the container is created
            setTimeout(function () {
              _this3.container.nativeElement.scrollTop = 0;
            });
          }
          /**
           * Tracks by chat message id
           *
           * @param index
           * @param item
           *
           * @returns ngx mention item ID
           *
           * @author Roy Freij <roy@bsbip.com>\
           * @version 1.0.0
           */

        }, {
          key: "trackByItemId",
          value: function trackByItemId(index, item) {
            return item.id;
          }
          /**
           * Gets item index
           *
           * @param elementId
           *
           * @returns index
           *
           * @author Roy Freij <info@royfreij.nl>
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(elementId) {
            return parseFloat(elementId.split('mention-item-')[1]);
          }
        }]);

        return NgxMentionListComponent;
      }();

      NgxMentionListComponent.ɵfac = function NgxMentionListComponent_Factory(t) {
        return new (t || NgxMentionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      NgxMentionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxMentionListComponent,
        selectors: [["nc-ngx-mention-list"]],
        viewQuery: function NgxMentionListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          }
        },
        outputs: {
          itemClick: "itemClick"
        },
        decls: 3,
        vars: 6,
        consts: [[1, "ngx-mention", 3, "ngClass"], ["container", ""], ["class", "ngx-mention__item", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ngx-mention__item", 3, "ngClass", "id", "click"], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function NgxMentionListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMentionListComponent_div_2_Template, 4, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c3, !ctx.hidden, ctx.ngxMentionConfig.dropUp));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItemId);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [".ngx-mention[_ngcontent-%COMP%] {\n  width: 270px;\n  border: 1px solid #f0f0f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 12px 0 rgba(30, 30, 30, 0.08);\n  z-index: 9001;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  height: auto;\n  max-height: 200px;\n  overflow: hidden;\n  border-radius: 4px;\n  scroll-behavior: smooth;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n}\n.ngx-mention--visible[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 100;\n  transition: opacity ease-in-out 0.2s;\n}\n.ngx-mention--drop-up[_ngcontent-%COMP%] {\n  bottom: 100%;\n  top: auto;\n  margin-bottom: 40px;\n}\n.ngx-mention__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  vertical-align: middle;\n  padding: 10px 20px;\n  line-height: 22px;\n  height: 44px;\n  color: #4a4a4a;\n  cursor: pointer;\n}\n.ngx-mention__item--selected[_ngcontent-%COMP%] {\n  background-color: #f2f5f8;\n}\n.ngx-mention__item[_ngcontent-%COMP%]:hover {\n  background-color: #f2f5f8;\n}\n.ngx-mention__item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1tZW50aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLG9DQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0FBUFI7QUFVSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBS0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUVBLGNBQUE7RUFFQSxlQUFBO0FBakJSO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBZ0JRO0VBQ0kseUJBQUE7QUFkWjtBQWlCUTtFQUNJLGdCQUFBO0FBZloiLCJmaWxlIjoibmd4LW1lbnRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5neC1tZW50aW9uIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgzMCwgMzAsIDMwLCAwLjA4KTtcbiAgICB6LWluZGV4OiA5MDAxO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCAuMnM7XG5cbiAgICAmLS12aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogMTAwO1xuXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgLjJzO1xuICAgIH1cblxuICAgICYtLWRyb3AtdXAge1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcblxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG5cbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMentionListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nc-ngx-mention-list',
            templateUrl: './ngx-mention-list.component.html',
            styleUrls: ['./ngx-mention-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
          }],
          itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Q0DP":
    /*!************************************************************************!*\
      !*** ./projects/demo-app/$$_lazy_route_resource lazy namespace object ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function Q0DP(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "Q0DP";
      /***/
    },

    /***/
    "a393":
    /*!**************************************************************!*\
      !*** ./projects/demo-app/src/app/static/static.component.ts ***!
      \**************************************************************/

    /*! exports provided: StaticComponent */

    /***/
    function a393(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
        return StaticComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../users */
      "7ik7");
      /* harmony import */


      var _ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../ngx-mention/src/lib/ngx-mention.directive */
      "eaWN");

      var _c0 = ["customTemplate"];

      function StaticComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var item_r2 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r2.username, " ", item_r2.id, " ");
        }
      }

      var StaticComponent = /*#__PURE__*/function () {
        function StaticComponent() {
          _classCallCheck(this, StaticComponent);

          this.items = _users__WEBPACK_IMPORTED_MODULE_1__["Users"];
          this.customSearchItems = _users__WEBPACK_IMPORTED_MODULE_1__["Users"];
          this.customDenotationItems = _users__WEBPACK_IMPORTED_MODULE_1__["Users"];
          this.minCharacterItems = _users__WEBPACK_IMPORTED_MODULE_1__["Users"];
          this.dropUpItems = _users__WEBPACK_IMPORTED_MODULE_1__["Users"];
          this.customTemplateItems = _users__WEBPACK_IMPORTED_MODULE_1__["Users"].map(function (item) {
            return {
              username: item.value,
              id: item.id
            };
          });
          this.customSearchNgxMentionConfig = {
            disableSearch: true
          };
          this.customDenotationCharacterConfig = {
            denotationCharacter: '$'
          };
          this.minCharactersConfig = {
            minimalCharacters: 3
          };
          this.dropUpConfig = {
            dropUp: true
          };
          this.customTemplateConfig = {
            formatSelected: function formatSelected(item) {
              return item.username;
            }
          };
        }

        _createClass(StaticComponent, [{
          key: "onCustomSearchMentionSearch",
          value: function onCustomSearchMentionSearch($event) {
            this.customSearchItems = this.items.filter(function (item) {
              return item.value.toLowerCase().includes($event.toLowerCase());
            });
          }
        }, {
          key: "onMinCharacterSearchMentionSearch",
          value: function onMinCharacterSearchMentionSearch($event) {
            this.minCharacterItems = this.items.filter(function (item) {
              return item.value.toLowerCase().includes($event.toLowerCase());
            });
          }
        }]);

        return StaticComponent;
      }();

      StaticComponent.ɵfac = function StaticComponent_Factory(t) {
        return new (t || StaticComponent)();
      };

      StaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StaticComponent,
        selectors: [["app-static"]],
        viewQuery: function StaticComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
          }
        },
        decls: 41,
        vars: 24,
        consts: [[2, "padding", "24px"], ["href", "./assets/users.json"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "searchTerm"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "searchTerm"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "search"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "search"], ["customTemplate", ""], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "customTemplate"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "customTemplate"]],
        template: function StaticComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " For a complete list of values that are available (generated faker usernames) please go to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The json file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Custom search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Using disableSearch and the searchTerm output we can change the behaviour of how search is being handled. Default search uses startsWith, with the searchTerm Ouput we can change it to includes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchTerm", function StaticComponent_Template_input_searchTerm_13_listener($event) {
              return ctx.onCustomSearchMentionSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchTerm", function StaticComponent_Template_textarea_searchTerm_14_listener($event) {
              return ctx.onCustomSearchMentionSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Custom denotation character");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We can change the denotation character to any character we want, here we have set the character to '$' ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Minimal character configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " We can change the amount of characters have to be typed before search will kick in. Below the configuration is set to '3' ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function StaticComponent_Template_input_search_25_listener($event) {
              return ctx.onMinCharacterSearchMentionSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function StaticComponent_Template_textarea_search_26_listener($event) {
              return ctx.onMinCharacterSearchMentionSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Drop up configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Sometimes it is needed to have the mention list drop up instead of down. The dropUp configuration will fix this for you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Custom template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, StaticComponent_ng_template_35_Template, 1, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " You may wish to use a custom template to alter the search results. The customTemplate input provides that ability. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.customSearchNgxMentionConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.customSearchNgxMentionConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.customDenotationCharacterConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.customDenotationCharacterConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.minCharactersConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customSearchItems)("ngxMentionConfig", ctx.minCharactersConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.dropUpItems)("ngxMentionConfig", ctx.dropUpConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.dropUpItems)("ngxMentionConfig", ctx.dropUpConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customTemplateItems)("ngxMentionConfig", ctx.customTemplateConfig)("customTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.customTemplateItems)("ngxMentionConfig", ctx.customTemplateConfig)("customTemplate", _r0);
          }
        },
        directives: [_ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_2__["NgxMentionDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aWMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-static',
            templateUrl: './static.component.html',
            styleUrls: ['./static.component.scss']
          }]
        }], function () {
          return [];
        }, {
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customTemplate']
          }]
        });
      })();
      /***/

    },

    /***/
    "eaWN":
    /*!***************************************************************!*\
      !*** ./projects/ngx-mention/src/lib/ngx-mention.directive.ts ***!
      \***************************************************************/

    /*! exports provided: NgxMentionDirective */

    /***/
    function eaWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMentionDirective", function () {
        return NgxMentionDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ngx-mention-list/ngx-mention-list.component */
      "GXiP");

      var NgxMentionDirective = /*#__PURE__*/function () {
        function NgxMentionDirective(elementRef, componentResolver, viewContainerRef) {
          _classCallCheck(this, NgxMentionDirective);

          this.elementRef = elementRef;
          this.componentResolver = componentResolver;
          this.viewContainerRef = viewContainerRef;
          this.items = [];
          this.ngxMentionConfig = {};
          this.searching = false;
          this.mentionList = null;
          this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.defaultConfig = {
            denotationCharacter: '@',
            minimalCharacters: 0,
            disableSearch: false,
            dropUp: false,
            formatSelected: function formatSelected(item) {
              return item.value;
            }
          };
        }
        /**
         * on init
         *
         * @author Roy Freij <info@royfreij.nl>
         * @version 1.0.0
         */


        _createClass(NgxMentionDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.ngxMentionConfig = Object.assign(Object.assign({}, this.defaultConfig), this.ngxMentionConfig);
            this.nativeElement = this.elementRef.nativeElement;
            this.input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'input').subscribe(function () {
              var mentionDenotationCharacter = _this4.ngxMentionConfig.denotationCharacter;

              if (_this4.nativeElement.value.endsWith(mentionDenotationCharacter)) {
                _this4.startIndex = _this4.nativeElement.value.length;
                _this4.searching = true;
              }

              var endIndex = _this4.nativeElement.value.length;

              var searchValue = _this4.nativeElement.value.substring(_this4.startIndex, endIndex);

              if (_this4.searching && searchValue.length >= _this4.ngxMentionConfig.minimalCharacters) {
                if (endIndex < _this4.startIndex) {
                  _this4.stopSearch();
                } else {
                  _this4.startSearching(searchValue);
                }
              }
            });
            this.keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function ($event) {
              return $event.key !== 'Shift';
            })).subscribe(function ($event) {
              var _a;

              if (!((_a = _this4.mentionList) === null || _a === void 0 ? void 0 : _a.hidden) && _this4.searching) {
                switch ($event.key) {
                  case 'Tab':
                  case 'Enter':
                    _this4.stopEvent($event);

                    _this4.onItemSelect();

                    break;

                  case 'Escape':
                    _this4.stopSearch();

                    break;

                  case 'ArrowDown':
                    _this4.stopEvent($event);

                    _this4.mentionList.activateNextItem();

                    break;

                  case 'ArrowUp':
                    _this4.stopEvent($event);

                    _this4.mentionList.activatePreviousItem();

                    break;

                  default:
                }
              }
            });
            this.blur$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'blur').subscribe(function ($event) {
              if ($event instanceof KeyboardEvent) {
                _this4.stopEvent($event);

                _this4.stopSearch();
              }
            });
          }
          /**
           * on changes
           *
           * @param changes
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.items && !changes.items.firstChange) {
              this.updateMentionListItems(this.items);

              if (changes.items.currentValue.length === 0) {
                this.stopSearch();
              }
            }
          }
          /**
           * Starts searching
           *
           * @param endIndex
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "startSearching",
          value: function startSearching(searchValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var matches;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.searchTerm.emit(searchValue);
                      this.showMentionList();

                      if (!this.ngxMentionConfig.disableSearch) {
                        matches = this.items.filter(function (item) {
                          return _this5.ngxMentionConfig.formatSelected(item).toLowerCase().startsWith(searchValue.toLowerCase());
                        });
                        this.updateMentionListItems(matches);
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Determines whether item is selected
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "onItemSelect",
          value: function onItemSelect() {
            if (this.mentionList) {
              var selectedItem = this.mentionList.items[this.mentionList.activeIndex];
              var selectedItemValue = this.ngxMentionConfig.formatSelected(selectedItem);
              this.nativeElement.value = this.nativeElement.value.substring(0, this.startIndex) + selectedItemValue + ' ';
              this.nativeElement.focus();
              var valueLength = this.nativeElement.value.length;
              this.nativeElement.setSelectionRange(valueLength, valueLength);
              this.nativeElement.dispatchEvent(new Event('input'));
              this.selectItem.emit(selectedItem);
              this.stopSearch();
            }
          }
          /**
           * Updates mention list items
           *
           * @param items
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "updateMentionListItems",
          value: function updateMentionListItems(items) {
            if (this.mentionList) {
              this.mentionList.items = items;
              this.mentionList.hidden = items.length === 0;
              this.mentionList.resetScrollTop();
            }
          }
          /**
           * Shows mention list
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "showMentionList",
          value: function showMentionList() {
            var _this6 = this;

            if (this.mentionList === null) {
              var componentFactory = this.componentResolver.resolveComponentFactory(_ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_4__["NgxMentionListComponent"]);
              var componentRef = this.viewContainerRef.createComponent(componentFactory);
              this.mentionList = componentRef.instance;
            }

            this.mentionList.activeIndex = 0;
            this.mentionList.position(this.nativeElement);
            this.mentionList.resetScrollTop();
            this.mentionList.ngxMentionConfig = this.ngxMentionConfig;

            if (this.customTemplate) {
              this.mentionList.customTemplate = this.customTemplate;
            }

            if (!this.mentionListItemClick$) {
              this.mentionListItemClick$ = this.mentionList.itemClick.subscribe(function () {
                _this6.onItemSelect();
              });
            }
          }
          /**
           * Stops event
           *
           * @param $event
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "stopEvent",
          value: function stopEvent($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $event.stopImmediatePropagation();
          }
          /**
           * Stops search
           *
           * @author Roy Freij <info@royfreij.nl>
           * @version 1.0.0
           */

        }, {
          key: "stopSearch",
          value: function stopSearch() {
            if (this.mentionList) {
              this.mentionList.hidden = true;
            }

            this.searching = false;
          }
          /**
           * on destroy
           *
           * @author Roy Freij <roy@bsbip.com>
           * @version 1.0.0
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.input$.unsubscribe();
            this.keyDown$.unsubscribe();
            this.blur$.unsubscribe();
          }
        }]);

        return NgxMentionDirective;
      }();

      NgxMentionDirective.ɵfac = function NgxMentionDirective_Factory(t) {
        return new (t || NgxMentionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
      };

      NgxMentionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NgxMentionDirective,
        selectors: [["", "ncNgxMention", ""]],
        inputs: {
          items: ["ncNgxMention", "items"],
          ngxMentionConfig: "ngxMentionConfig",
          customTemplate: "customTemplate"
        },
        outputs: {
          searchTerm: "searchTerm",
          selectItem: "selectItem"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMentionDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ncNgxMention]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['ncNgxMention']
          }],
          ngxMentionConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          searchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selectItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hWqd":
    /*!***************************************!*\
      !*** ./projects/demo-app/src/main.ts ***!
      \***************************************/

    /*! no exports provided */

    /***/
    function hWqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "27ck");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "1K97");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "m6mK":
    /*!************************************************************!*\
      !*** ./projects/ngx-mention/src/lib/ngx-mention.module.ts ***!
      \************************************************************/

    /*! exports provided: NgxMentionModule */

    /***/
    function m6mK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMentionModule", function () {
        return NgxMentionModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngx-mention-list/ngx-mention-list.component */
      "GXiP");
      /* harmony import */


      var _ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ngx-mention.directive */
      "eaWN");

      var NgxMentionModule = function NgxMentionModule() {
        _classCallCheck(this, NgxMentionModule);
      };

      NgxMentionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgxMentionModule
      });
      NgxMentionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NgxMentionModule_Factory(t) {
          return new (t || NgxMentionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMentionModule, {
          declarations: [_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMentionDirective"], _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_2__["NgxMentionListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMentionDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMentionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMentionDirective"], _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_2__["NgxMentionListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMentionDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qrtv":
    /*!******************************************************!*\
      !*** ./projects/ngx-mention/src/lib/caret-coords.ts ***!
      \******************************************************/

    /*! exports provided: getCaretCoordinates */

    /***/
    function qrtv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCaretCoordinates", function () {
        return getCaretCoordinates;
      });
      /* From: https://github.com/component/textarea-caret-position */

      /* jshint browser: true */
      // We'll copy the properties below into the mirror div.
      // Note that some browsers, such as Firefox, do not concatenate properties
      // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
      // so we have to list every single property explicitly.


      var properties = ['direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', // https://developer.mozilla.org/en-US/docs/Web/CSS/font
      'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', 'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];
      var isBrowser = typeof window !== 'undefined';
      var isFirefox = isBrowser && window['mozInnerScreenX'] != null;

      function getCaretCoordinates(element, position, options) {
        if (!isBrowser) {
          throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
        }

        var debug = options && options.debug || false;

        if (debug) {
          var el = document.querySelector('#input-textarea-caret-position-mirror-div');
          if (el) el.parentNode.removeChild(el);
        } // The mirror div will replicate the textarea's style


        var div = document.createElement('div');
        div.id = 'input-textarea-caret-position-mirror-div';
        document.body.appendChild(div);
        var style = div.style;
        var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9

        var isInput = element.nodeName === 'INPUT'; // Default textarea styles

        style.whiteSpace = 'pre-wrap';
        if (!isInput) style.wordWrap = 'break-word'; // only for textarea-s
        // Position off-screen

        style.position = 'absolute'; // required to return coordinates properly

        if (!debug) style.visibility = 'hidden'; // not 'display: none' because we want rendering
        // Transfer the element's properties to the div

        properties.forEach(function (prop) {
          if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            if (computed.boxSizing === 'border-box') {
              var height = parseInt(computed.height);
              var outerHeight = parseInt(computed.paddingTop) + parseInt(computed.paddingBottom) + parseInt(computed.borderTopWidth) + parseInt(computed.borderBottomWidth);
              var targetHeight = outerHeight + parseInt(computed.lineHeight);

              if (height > targetHeight) {
                style.lineHeight = height - outerHeight + 'px';
              } else if (height === targetHeight) {
                style.lineHeight = computed.lineHeight;
              } else {
                style.lineHeight = '0';
              }
            } else {
              style.lineHeight = computed.height;
            }
          } else {
            style[prop] = computed[prop];
          }
        });

        if (isFirefox) {
          // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
          if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll';
        } else {
          style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
        }

        div.textContent = element.value.substring(0, position); // The second special handling for input type="text" vs textarea:
        // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037

        if (isInput) div.textContent = div.textContent.replace(/\s/g, "\xA0");
        var span = document.createElement('span'); // Wrapping must be replicated *exactly*, including when a long word gets
        // onto the next line, with whitespace at the end of the line before (#7).
        // The  *only* reliable way to do that is to copy the *entire* rest of the
        // textarea's content into the <span> created at the caret position.
        // For inputs, just '.' would be enough, but no need to bother.

        span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all

        div.appendChild(span);
        var coordinates = {
          top: span.offsetTop + parseInt(computed['borderTopWidth']),
          left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
          height: parseInt(computed['lineHeight'])
        };

        if (debug) {
          span.style.backgroundColor = '#aaa';
        } else {
          document.body.removeChild(div);
        }

        return coordinates;
      }
      /***/

    },

    /***/
    "xA2O":
    /*!****************************************************!*\
      !*** ./projects/demo-app/src/app/app.component.ts ***!
      \****************************************************/

    /*! exports provided: AppComponent */

    /***/
    function xA2O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.opened = true;
        }

        _createClass(AppComponent, [{
          key: "toggleSidenav",
          value: function toggleSidenav() {
            this.opened = !this.opened;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 17,
        vars: 3,
        consts: [[1, "container"], ["mode", "side", 2, "width", "15%", 3, "opened", "openedChange"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink"], ["color", "primary"], ["mat-icon-button", "", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_1_listener($event) {
              return ctx.opened = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Statische voorbeelden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Async voorbeelden ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
              return ctx.toggleSidenav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ngx Mention");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/static");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/async");
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map