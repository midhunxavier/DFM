function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-module-login-module-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-module/login/login.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-module/login/login.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <button type=\"button\" class=\"google-button\" (click)=\"onLogin()\">\n    <span class=\"google-button__icon\">\n      <svg viewBox=\"0 0 366 372\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z\"\n          id=\"Shape\" fill=\"#EA4335\" />\n        <path\n          d=\"M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z\"\n          id=\"Shape\" fill=\"#FBBC05\" />\n        <path\n          d=\"M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z\"\n          id=\"Shape\" fill=\"#4285F4\" />\n        <path\n          d=\"M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z\"\n          fill=\"#34A853\" /></svg>\n    </span>\n    <span class=\"google-button__text\">Sign in with Google</span>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/login-module/login-module-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/login-module/login-module-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LoginModuleRoutingModule */

  /***/
  function srcAppLoginModuleLoginModuleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModuleRoutingModule", function () {
      return LoginModuleRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login-module/login/login.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var LoginModuleRoutingModule = function LoginModuleRoutingModule() {
      _classCallCheck(this, LoginModuleRoutingModule);
    };

    LoginModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginModuleRoutingModule);
    /***/
  },

  /***/
  "./src/app/login-module/login-module.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/login-module/login-module.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginModuleModule */

  /***/
  function srcAppLoginModuleLoginModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModuleModule", function () {
      return LoginModuleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login-module/login/login.component.ts");
    /* harmony import */


    var _login_module_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-module-routing.module */
    "./src/app/login-module/login-module-routing.module.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _common_components_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common-components/common.module */
    "./src/app/common-components/common.module.ts");

    var LoginModuleModule = function LoginModuleModule() {
      _classCallCheck(this, LoginModuleModule);
    };

    LoginModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_module_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginModuleRoutingModule"], _common_components_common_module__WEBPACK_IMPORTED_MODULE_6__["CommonComponentModule"]],
      providers: [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    })], LoginModuleModule);
    /***/
  },

  /***/
  "./src/app/login-module/login/login.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/login-module/login/login.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginModuleLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".google-button {\n  height: 40px;\n  border-width: 0;\n  background: #257ea1;\n  color: turquoise;\n  border-radius: 5px;\n  white-space: nowrap;\n  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);\n  -webkit-transition-property: background-color, box-shadow;\n  transition-property: background-color, box-shadow;\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  padding: 0;\n}\n.google-button:focus, .google-button:hover {\n  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);\n}\n.google-button:active {\n  background-color: #e5e5e5;\n  box-shadow: none;\n  -webkit-transition-duration: 10ms;\n          transition-duration: 10ms;\n}\n.google-button__icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 4px 8px 8px 16px;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n}\n.google-button__icon--plus {\n  width: 27px;\n}\n.google-button__text {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: \"Roboto\", arial, sans-serif;\n}\nhtml, body {\n  height: 100%;\n}\nbody {\n  background-color: #1fabc4;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrapper {\n  text-align: center;\n  width: 1300px;\n  border: 0px solid;\n  padding: 100px;\n  margin: 100px;\n}\n.button {\n  width: 150px;\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tbW9kdWxlL2xvZ2luL1o6XFxERk1cXERhdGFGb3JtTWFuYWdlci1Mb2dpbkZlYXR1cmVzXFxEYXRhRm9ybU1hbmFnZXJBcHAvc3JjXFxhcHBcXGxvZ2luLW1vZHVsZVxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi1tb2R1bGUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSx5REFBQTtFQUFBLGlEQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxVQUFBO0FDRko7QURJSTtFQUVFLDhDQUFBO0FDSE47QURNSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSk47QURRRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNMSjtBRFFFO0VBQ0UsV0FBQTtBQ0xKO0FEUUU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FDTEo7QURVRTtFQUNFLFlBQUE7QUNQSjtBRFVFO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1BKO0FEWUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDVEo7QURhQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLW1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdvb2dsZSBJZGVudGl0eSBhbmQgR29vZ2xlKyBTaWduIGluIGJ1dHRvbnNcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tLysvYnJhbmRpbmctZ3VpZGVsaW5lc1xuXG4uZ29vZ2xlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMjU3ZWExO1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMG1zO1xuICAgIH1cbiAgfVxuICAgICAgXG4gIC5nb29nbGUtYnV0dG9uX19pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDRweCA4cHggOHB4IDE2cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5nb29nbGUtYnV0dG9uX19pY29uLS1wbHVzIHtcbiAgICB3aWR0aDogMjdweDtcbiAgfVxuICBcbiAgLmdvb2dsZS1idXR0b25fX3RleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLGFyaWFsLHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8vIEJvaWxlcnBsYXRlIHN0dWZmXG4gIFxuICBodG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmFiYzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuIFxuXG4ud3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMzAwcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQ7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cblxuXG4uYnV0dG9uXG57XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46MCBhdXRvO1xuXG59XG5cbiIsIi5nb29nbGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6ICMyNTdlYTE7XG4gIGNvbG9yOiB0dXJxdW9pc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDA7XG59XG4uZ29vZ2xlLWJ1dHRvbjpmb2N1cywgLmdvb2dsZS1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmdvb2dsZS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTBtcztcbn1cblxuLmdvb2dsZS1idXR0b25fX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogNHB4IDhweCA4cHggMTZweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmdvb2dsZS1idXR0b25fX2ljb24tLXBsdXMge1xuICB3aWR0aDogMjdweDtcbn1cblxuLmdvb2dsZS1idXR0b25fX3RleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmYWJjNDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTMwMHB4O1xuICBib3JkZXI6IDBweCBzb2xpZDtcbiAgcGFkZGluZzogMTAwcHg7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login-module/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/login-module/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginModuleLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _models_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/token */
    "./src/app/models/token.ts");
    /* harmony import */


    var src_app_utils_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/utils/app-settings */
    "./src/app/utils/app-settings.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(httpClient, authService, cookie, router) {
        _classCallCheck(this, LoginComponent);

        this.httpClient = httpClient;
        this.authService = authService;
        this.cookie = cookie;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var authorizationCode = window.location.href.split('code=')[1];

          if (authorizationCode) {
            var tokenObj = new _models_token__WEBPACK_IMPORTED_MODULE_6__["Token"]();
            var codeObj = new _models_token__WEBPACK_IMPORTED_MODULE_6__["CodeObject"]();
            codeObj.code = authorizationCode;
            this.authService.getAccessTokenByCode(codeObj).subscribe(function (token) {
              tokenObj = token;
              localStorage.setItem('accessToken', tokenObj.AccessToken);
              localStorage.setItem('refreshToken', tokenObj.RefreshToken);
              localStorage.setItem('expiresIn', tokenObj.ExpiresIn);
              localStorage.setItem('userId', tokenObj.UserId.toString());
              localStorage.setItem('Username', tokenObj.Username);
              localStorage.setItem('EmailId', tokenObj.EmailId);

              _this.router.navigate(['dashboard']);
            });
          }

          if (this.authService.loggedIn()) {
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          window.location.href = src_app_utils_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].baseUrl + 'login/getauthcode';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-module/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login-module/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  }
}]);
//# sourceMappingURL=login-module-login-module-module-es5.js.map