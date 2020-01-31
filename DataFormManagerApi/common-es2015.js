(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/form-module/services/formtype.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/form-module/services/formtype.service.ts ***!
  \**********************************************************/
/*! exports provided: FormtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormtypeService", function() { return FormtypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/app-settings */ "./src/app/utils/app-settings.ts");




let FormtypeService = class FormtypeService {
    constructor(http) {
        this.http = http;
        this.formTypeUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'formtype/';
        this.formDataUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'form/';
        this.userFormsUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'userforms';
    }
    getFormType(id) {
        return this.http.get(this.formTypeUrl + id);
    }
    postFormData(formData) {
        this.http.post(this.formDataUrl + 'add', formData).subscribe((response) => {
            window.alert(response);
        });
    }
    putFormData(formData) {
        this.http.put(this.formDataUrl + 'update', formData).subscribe((response) => {
            window.alert(response);
        });
    }
    deleteFormData(id) {
        this.http.delete(this.formDataUrl + id).subscribe((response) => {
            window.alert(response);
        });
    }
    getFormsToAssign(formName) {
        return this.http.get(this.formDataUrl + formName);
    }
    getUsersToAssign(formType) {
        return this.http.get(this.formDataUrl + 'users/' + formType);
    }
    postUserFormsData(userFormsData) {
        this.http.post(this.userFormsUrl, userFormsData).subscribe((response) => {
            window.alert(response);
        });
    }
};
FormtypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FormtypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormtypeService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map