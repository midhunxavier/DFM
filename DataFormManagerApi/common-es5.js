function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/form-module/services/formtype.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/form-module/services/formtype.service.ts ***!
    \**********************************************************/

  /*! exports provided: FormtypeService */

  /***/
  function srcAppFormModuleServicesFormtypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormtypeService", function () {
      return FormtypeService;
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


    var _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/app-settings */
    "./src/app/utils/app-settings.ts");

    var FormtypeService =
    /*#__PURE__*/
    function () {
      function FormtypeService(http) {
        _classCallCheck(this, FormtypeService);

        this.http = http;
        this.formTypeUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'formtype/';
        this.formDataUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'form/';
        this.userFormsUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'userforms';
      }

      _createClass(FormtypeService, [{
        key: "getFormType",
        value: function getFormType(id) {
          return this.http.get(this.formTypeUrl + id);
        }
      }, {
        key: "postFormData",
        value: function postFormData(formData) {
          this.http.post(this.formDataUrl + 'add', formData).subscribe(function (response) {
            window.alert(response);
          });
        }
      }, {
        key: "putFormData",
        value: function putFormData(formData) {
          this.http.put(this.formDataUrl + 'update', formData).subscribe(function (response) {
            window.alert(response);
          });
        }
      }, {
        key: "deleteFormData",
        value: function deleteFormData(id) {
          this.http.delete(this.formDataUrl + id).subscribe(function (response) {
            window.alert(response);
          });
        }
      }, {
        key: "getFormsToAssign",
        value: function getFormsToAssign(formName) {
          return this.http.get(this.formDataUrl + formName);
        }
      }, {
        key: "getUsersToAssign",
        value: function getUsersToAssign(formType) {
          return this.http.get(this.formDataUrl + 'users/' + formType);
        }
      }, {
        key: "postUserFormsData",
        value: function postUserFormsData(userFormsData) {
          this.http.post(this.userFormsUrl, userFormsData).subscribe(function (response) {
            window.alert(response);
          });
        }
      }]);

      return FormtypeService;
    }();

    FormtypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FormtypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FormtypeService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map