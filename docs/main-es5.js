function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../ngx-mention/src/lib/ngx-mention-list/ngx-mention-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ../ngx-mention/src/lib/ngx-mention-list/ngx-mention-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NgxMentionListComponent */

  /***/
  function ngxMentionSrcLibNgxMentionListNgxMentionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMentionListComponent", function () {
      return NgxMentionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");

    var _c0 = ["container"];

    var _c1 = function _c1(a0) {
      return {
        "ngx-mention__item--selected": a0
      };
    };

    function NgxMentionListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMentionListComponent_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onItemCLick(i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "mention-item-", i_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, i_r3 === ctx_r1.activeIndex));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "ngx-mention--visible": a0
      };
    };

    var EXTRA_OFFSET = 5;
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
          var parentBounds = parentElement.getBoundingClientRect();
          var offsetTop = parseFloat(window.getComputedStyle(parentElement).height) + EXTRA_OFFSET;
          this.renderer.setStyle(nativeElement, 'position', 'absolute');
          this.renderer.setStyle(nativeElement, 'left', "".concat(parentBounds.left, "px"));
          this.renderer.setStyle(nativeElement, 'top', "".concat(parentBounds.top + offsetTop, "px"));
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
          var _this = this;

          // Needs to be activated after the container is created
          setTimeout(function () {
            _this.container.nativeElement.scrollTop = 0;
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
      vars: 5,
      consts: [[1, "ngx-mention", 3, "ngClass"], ["container", ""], ["class", "ngx-mention__item", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ngx-mention__item", 3, "ngClass", "id", "click"]],
      template: function NgxMentionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMentionListComponent_div_2_Template, 2, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, !ctx.hidden));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItemId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".ngx-mention[_ngcontent-%COMP%] {\n  width: 270px;\n  border: 1px solid #f0f0f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 12px 0 rgba(30, 30, 30, 0.08);\n  z-index: 9001;\n  position: absolute;\n  margin-bottom: 42px;\n  height: auto;\n  max-height: 150px;\n  overflow: hidden;\n  border-radius: 4px;\n  scroll-behavior: smooth;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n}\n.ngx-mention--visible[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 100;\n  transition: opacity ease-in-out 0.2s;\n}\n.ngx-mention__item[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 0 20px;\n  line-height: 44px;\n  height: 44px;\n  color: #4a4a4a;\n  cursor: pointer;\n}\n.ngx-mention__item--selected[_ngcontent-%COMP%] {\n  background-color: #f2f5f8;\n}\n.ngx-mention__item[_ngcontent-%COMP%]:hover {\n  background-color: #f2f5f8;\n}\n.ngx-mention__item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JzYmlwL3JlcG9zaXRvcmllcy9uZ3gtbWVudGlvbi9wcm9qZWN0cy9uZ3gtbWVudGlvbi9zcmMvbGliL25neC1tZW50aW9uLWxpc3Qvbmd4LW1lbnRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1tZW50aW9uL3NyYy9saWIvbmd4LW1lbnRpb24tbGlzdC9uZ3gtbWVudGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEsdUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxvQ0FBQTtBQ05KO0FEUUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtBQ1BSO0FEVUk7RUFLSSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBRUEsZUFBQTtBQ2ZSO0FER1E7RUFDSSx5QkFBQTtBQ0RaO0FEY1E7RUFDSSx5QkFBQTtBQ1paO0FEZVE7RUFDSSxnQkFBQTtBQ2JaIiwiZmlsZSI6InByb2plY3RzL25neC1tZW50aW9uL3NyYy9saWIvbmd4LW1lbnRpb24tbGlzdC9uZ3gtbWVudGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmd4LW1lbnRpb24ge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDMwLCAzMCwgMzAsIDAuMDgpO1xuICAgIHotaW5kZXg6IDkwMDE7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcblxuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgLjJzO1xuXG4gICAgJi0tdmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG9wYWNpdHk6IDEwMDtcblxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IC4ycztcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuXG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjg7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubmd4LW1lbnRpb24ge1xuICB3aWR0aDogMjcwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMzAsIDMwLCAzMCwgMC4wOCk7XG4gIHotaW5kZXg6IDkwMDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IDAuMnM7XG59XG4ubmd4LW1lbnRpb24tLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxMDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgMC4ycztcbn1cbi5uZ3gtbWVudGlvbl9faXRlbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZ3gtbWVudGlvbl9faXRlbS0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNWY4O1xufVxuLm5neC1tZW50aW9uX19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbn1cbi5uZ3gtbWVudGlvbl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"]
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
  "../ngx-mention/src/lib/ngx-mention.directive.ts":
  /*!*******************************************************!*\
    !*** ../ngx-mention/src/lib/ngx-mention.directive.ts ***!
    \*******************************************************/

  /*! exports provided: NgxMentionDirective */

  /***/
  function ngxMentionSrcLibNgxMentionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMentionDirective", function () {
      return NgxMentionDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ngx-mention-list/ngx-mention-list.component */
    "../ngx-mention/src/lib/ngx-mention-list/ngx-mention-list.component.ts");

    var NgxMentionDirective = /*#__PURE__*/function () {
      function NgxMentionDirective(elementRef, componentResolver, viewContainerRef) {
        _classCallCheck(this, NgxMentionDirective);

        this.elementRef = elementRef;
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
        this.searching = false;
        this.mentionList = null;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultConfig = {
          denotationCharacter: '@',
          minimalCharacters: 0,
          disableSearch: false
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
          var _this2 = this;

          this.ngxMentionConfig = Object.assign(Object.assign({}, this.defaultConfig), this.ngxMentionConfig);
          this.nativeElement = this.elementRef.nativeElement;
          this.input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'input').subscribe(function () {
            var mentionDenotationCharacter = _this2.ngxMentionConfig.denotationCharacter;

            if (_this2.nativeElement.value.endsWith(mentionDenotationCharacter)) {
              _this2.startIndex = _this2.nativeElement.value.length;
              _this2.searching = true;
            }

            var endIndex = _this2.nativeElement.value.length;

            if (_this2.searching) {
              if (endIndex < _this2.startIndex) {
                _this2.stopSearch();
              } else {
                _this2.startSearching(endIndex);
              }
            }
          });
          this.keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function ($event) {
            return $event.key !== 'Shift';
          })).subscribe(function ($event) {
            var _a;

            if (!((_a = _this2.mentionList) === null || _a === void 0 ? void 0 : _a.hidden)) {
              switch ($event.key) {
                case 'Tab':
                case 'Enter':
                  _this2.stopEvent($event);

                  _this2.onItemSelect();

                  break;

                case 'Escape':
                  _this2.stopSearch();

                  break;

                case 'ArrowDown':
                  _this2.stopEvent($event);

                  _this2.mentionList.activateNextItem();

                  break;

                case 'ArrowUp':
                  _this2.stopEvent($event);

                  _this2.mentionList.activatePreviousItem();

                  break;

                default:
              }
            }
          });
          this.blur$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.nativeElement, 'blur').subscribe(function ($event) {
            if ($event instanceof KeyboardEvent) {
              _this2.stopEvent($event);

              _this2.stopSearch();
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
        value: function startSearching(endIndex) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var matches, searchValue;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    searchValue = this.nativeElement.value.substring(this.startIndex, endIndex);

                    if (searchValue.length >= this.ngxMentionConfig.minimalCharacters) {
                      this.searchTerm.emit(searchValue);
                      this.showMentionList();

                      if (!this.ngxMentionConfig.disableSearch) {
                        matches = this.items.filter(function (item) {
                          return item.value.toLowerCase().startsWith(searchValue.toLowerCase());
                        });
                        this.updateMentionListItems(matches);
                      }
                    }

                  case 2:
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
          var selectedItem = this.mentionList.items[this.mentionList.activeIndex];
          this.nativeElement.value = this.nativeElement.value.substring(0, this.startIndex) + selectedItem.value + ' ';
          this.nativeElement.focus();
          var valueLength = this.nativeElement.value.length;
          this.nativeElement.setSelectionRange(valueLength, valueLength);
          this.selectItem.emit(selectedItem);
          this.stopSearch();
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
          var _this3 = this;

          if (this.mentionList === null) {
            var componentFactory = this.componentResolver.resolveComponentFactory(_ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_4__["NgxMentionListComponent"]);
            var componentRef = this.viewContainerRef.createComponent(componentFactory);
            this.mentionList = componentRef.instance;
          }

          this.mentionList.activeIndex = 0;
          this.mentionList.position(this.nativeElement);
          this.mentionList.resetScrollTop();
          this.mentionList.ngxMentionConfig = this.ngxMentionConfig;

          if (!this.mentionListItemClick$) {
            this.mentionListItemClick$ = this.mentionList.itemClick.subscribe(function () {
              _this3.onItemSelect();
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
        ngxMentionConfig: "ngxMentionConfig"
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
  "../ngx-mention/src/lib/ngx-mention.module.ts":
  /*!****************************************************!*\
    !*** ../ngx-mention/src/lib/ngx-mention.module.ts ***!
    \****************************************************/

  /*! exports provided: NgxMentionModule */

  /***/
  function ngxMentionSrcLibNgxMentionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMentionModule", function () {
      return NgxMentionModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_mention_list_ngx_mention_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ngx-mention-list/ngx-mention-list.component */
    "../ngx-mention/src/lib/ngx-mention-list/ngx-mention-list.component.ts");
    /* harmony import */


    var _ngx_mention_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ngx-mention.directive */
    "../ngx-mention/src/lib/ngx-mention.directive.ts");

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
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../ngx-mention/src/lib/ngx-mention.directive */
    "../ngx-mention/src/lib/ngx-mention.directive.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'demo-app';
        this.items = [{
          id: 1,
          value: 'user'
        }, {
          id: 2,
          value: 'tekstschrijver'
        }, {
          id: 3,
          value: 'admin'
        }, {
          id: 4,
          value: 'abominablejustine'
        }, {
          id: 5,
          value: 'abominable_justine'
        }, {
          id: 6,
          value: 'abominable'
        }, {
          id: 7,
          value: 'alarmingjustine'
        }, {
          id: 8,
          value: 'alarming_justine'
        }, {
          id: 9,
          value: 'appallingjustine'
        }, {
          id: 10,
          value: 'appalling_justine'
        }, {
          id: 11,
          value: 'atrociousjustine'
        }, {
          id: 12,
          value: 'atrocious_justine'
        }, {
          id: 13,
          value: 'awfuljustine'
        }, {
          id: 14,
          value: 'awful_justine'
        }];
        this.ngxMentionConfig = {
          minimalCharacters: 0
        };
      }

      _createClass(AppComponent, [{
        key: "onMentionSearch",
        value: function onMentionSearch($event) {// this.items.push({
          //     id: 4,
          //     value: 'crew',
          // });
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
      decls: 9,
      vars: 4,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["type", "text", 2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "search"], [2, "position", "relative", "line-height", "20px", 3, "ncNgxMention", "ngxMentionConfig", "search"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ngx mention demo app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AppComponent_Template_input_search_7_listener($event) {
            return ctx.onMentionSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AppComponent_Template_textarea_search_8_listener($event) {
            return ctx.onMentionSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.items)("ngxMentionConfig", ctx.ngxMentionConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ncNgxMention", ctx.items)("ngxMentionConfig", ctx.ngxMentionConfig);
        }
      },
      directives: [_ngx_mention_src_lib_ngx_mention_directive__WEBPACK_IMPORTED_MODULE_1__["NgxMentionDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! projects/ngx-mention/src/lib/ngx-mention.module */
    "../ngx-mention/src/lib/ngx-mention.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_2__["NgxMentionModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_2__["NgxMentionModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], projects_ngx_mention_src_lib_ngx_mention_module__WEBPACK_IMPORTED_MODULE_2__["NgxMentionModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/bsbip/repositories/ngx-mention/projects/demo-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map