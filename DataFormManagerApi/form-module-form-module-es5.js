function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-module-form-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/assign-forms/assign-forms.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/assign-forms/assign-forms.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormModuleComponentsAssignFormsAssignFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"users\">\n    <h2>Assign Forms</h2>\n    <ol class=\"assignform\">\n        <li *ngFor=\"let form of forms\">\n            <span class=\"badge\"> {{form.FormData[0].Value | uppercase}} </span>\n            <select class=\"selectuser\" [(ngModel)]=\"itemSet[form.FormId]\" >\n                <option value=\"null\" selected disabled hidden> Select </option>\n                <option *ngFor=\"let user of users\" value=\"{{user.UserId}}\">{{user.Username}}\n                </option>\n            </select>\n        </li>\n    </ol>\n    <button *ngIf=\"isEnabled()\" (click)=\"onSubmit()\">Submit</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formdetails/formdetails.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formdetails/formdetails.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormModuleComponentsFormdetailsFormdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"form\">\n    <br>\n    <h2>{{form.FormType | titlecase}} Details : </h2>\n    <ul class=\"formdetails\">\n        <li *ngFor=\"let formData of form.FormData\">\n            <span class=\"badge\"> {{formData.Name}} :</span> {{formData.Value}}<br />\n        </li>\n    </ul>\n    <a [routerLink]=\"['../form']\" [queryParams]=\"{ id:form.FormType , formId:form.FormId}\"><button\n            id=add>Edit</button></a>&nbsp;\n    <button (click)=\"onDelete()\">Delete</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formtype/formtype.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formtype/formtype.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormModuleComponentsFormtypeFormtypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"formType\">\n    <form>\n        <h2>{{formType.FormType}}</h2>\n        <ul class=\"FormFields\">\n            <li *ngFor=\"let formField of formType.FormFields\">\n                <span class=\"badge\">{{formField.Name}} </span>\n                <input required *ngIf=\"formField.Type !== 'select' \" type={{formField.Type}} id={{formField.Id}}\n                    [(ngModel)]=\"itemSet[formField.Id]\" [ngModelOptions]=\"{standalone: true}\">\n\n                <select *ngIf=\"formField.Type == 'select' \" [(ngModel)]=\"itemSet[formField.Id]\"\n                    [ngModelOptions]=\"{standalone: true}\">\n                    <option value=\"null\" selected disabled hidden> Select </option>\n                    <option *ngFor=\"let item of formField.Values\" value={{item}}>{{item}}</option>\n                </select>\n            </li>\n        </ul>\n    </form>\n</div>\n<button (click)=\"onSubmit()\" *ngIf=\"isEnabled()==false\"> Submit</button>\n<button (click)=\"onSubmit()\" *ngIf=\"isEnabled()\">Save</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/userspecificform/userspecificform.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/userspecificform/userspecificform.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormModuleComponentsUserspecificformUserspecificformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<h2>{{formName | titlecase}} Forms</h2>\n<ol class=\"userspecificform\">\n    <li *ngFor=\"let form of forms\" [class.selected]=\"form === selectedForm\" (click)=\"onSelect(form)\">\n        <span class=\"badge\"> {{form.FormName | titlecase}} </span>\n    </li>\n</ol>\n<app-formdetails [form]=\"selectedForm\"></app-formdetails>";
    /***/
  },

  /***/
  "./src/app/form-module/components/assign-forms/assign-forms.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/form-module/components/assign-forms/assign-forms.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormModuleComponentsAssignFormsAssignFormsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background-color: #587f8f;\n  border: slategrey;\n  color: white;\n  padding: 2px 5px 4px 5px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  height: 1.7em;\n  margin-left: 25px;\n  border-radius: 4px 4px 4px 4px;\n  margin-bottom: 10px;\n}\n\n.selectuser {\n  cursor: pointer;\n  margin-left: 10px;\n  width: 200px;\n  height: 35px;\n}\n\n.assignform {\n  margin: 0 0 2em 0;\n  list-style-type: \"\";\n  padding: 0;\n  width: 170px;\n}\n\n.assignform li {\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 2.6em;\n  width: 400px;\n  border-radius: 4px;\n}\n\n.assignform li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: 0.1em;\n}\n\n.assignform li.selected {\n  background-color: #CFD8DC;\n  color: white;\n}\n\n.assignform li.selected:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n\n.assignform .badge {\n  display: inline-block;\n  font-size: small;\n  text-align: left;\n  width: 170px;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #587f8f;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 4px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy9hc3NpZ24tZm9ybXMvWjpcXERGTVxcRGF0YUZvcm1NYW5hZ2VyLUxvZ2luRmVhdHVyZXNcXERhdGFGb3JtTWFuYWdlckFwcC9zcmNcXGFwcFxcZm9ybS1tb2R1bGVcXGNvbXBvbmVudHNcXGFzc2lnbi1mb3Jtc1xcYXNzaWduLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL2Fzc2lnbi1mb3Jtcy9hc3NpZ24tZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQU47O0FERUU7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREdJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREVJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNFTjs7QURBSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL2Fzc2lnbi1mb3Jtcy9hc3NpZ24tZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gICAgYm9yZGVyOiBzbGF0ZWdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCA1cHggNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiAxLjdlbTtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBcbiAgfVxuXG4gIC5zZWxlY3R1c2VyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLmFzc2lnbmZvcm0ge1xuICAgICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IHVuaXQoJG51bWJlcjogMTAwKTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgICBcbiAgICB9XG4gICAgLmFzc2lnbmZvcm0gbGkge1xuICAgICAgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICAgIG1hcmdpbjogLjVlbTtcbiAgICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICAgIGhlaWdodDogMi42ZW07XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBcbiAgICB9XG4gICAgLmFzc2lnbmZvcm0gbGk6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdEOEI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgICAgbGVmdDogLjFlbTtcbiAgICB9XG4gICAgLmFzc2lnbmZvcm0gbGkuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmFzc2lnbmZvcm0gbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmFzc2lnbmZvcm0gLmJhZGdlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6MTcwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNTg3ZjhmO1xuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICB0b3A6IC00cHg7XG4gICAgICBoZWlnaHQ6IDIuOGVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICAgIH1cbiAgICAiLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3ZjhmO1xuICBib3JkZXI6IHNsYXRlZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4IDRweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlbGVjdHVzZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmFzc2lnbmZvcm0ge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBcIlwiO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5hc3NpZ25mb3JtIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAwLjNlbSAwO1xuICBoZWlnaHQ6IDIuNmVtO1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFzc2lnbmZvcm0gbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogMC4xZW07XG59XG5cbi5hc3NpZ25mb3JtIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXNzaWduZm9ybSBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFzc2lnbmZvcm0gLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTcwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4N2Y4ZjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMi44ZW07XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/form-module/components/assign-forms/assign-forms.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/form-module/components/assign-forms/assign-forms.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AssignFormsComponent */

  /***/
  function srcAppFormModuleComponentsAssignFormsAssignFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignFormsComponent", function () {
      return AssignFormsComponent;
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


    var _services_formtype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/formtype.service */
    "./src/app/form-module/services/formtype.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_assignformmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/assignformmodel */
    "./src/app/form-module/models/assignformmodel.ts");

    var AssignFormsComponent =
    /*#__PURE__*/
    function () {
      function AssignFormsComponent(formTypeService, route, router) {
        _classCallCheck(this, AssignFormsComponent);

        this.formTypeService = formTypeService;
        this.route = route;
        this.router = router;
        this.itemSet = {};
      }

      _createClass(AssignFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFormsToAssign();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          // tslint:disable-next-line: triple-equals
          if (this.forms.length != 0) {
            return true;
          }
        }
      }, {
        key: "getFormsToAssign",
        value: function getFormsToAssign() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.formName = params.id || null;
          });
          this.formTypeService.getFormsToAssign(this.formName).subscribe(function (result) {
            _this.forms = result;

            _this.forms.forEach(function (item) {
              _this.itemSet[item.FormId] = null;
            });
          });
          this.formTypeService.getUsersToAssign(this.formName).subscribe(function (result) {
            _this.users = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.assignValues = [];
          this.forms.forEach(function (item) {
            _this2.assignValues.push(new _models_assignformmodel__WEBPACK_IMPORTED_MODULE_4__["Assignformmodel"](item.FormId, _this2.itemSet[item.FormId]));
          });
          this.formTypeService.postUserFormsData(this.assignValues);
          window.location.reload();
        }
      }]);

      return AssignFormsComponent;
    }();

    AssignFormsComponent.ctorParameters = function () {
      return [{
        type: _services_formtype_service__WEBPACK_IMPORTED_MODULE_2__["FormtypeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AssignFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assign-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./assign-forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/assign-forms/assign-forms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./assign-forms.component.scss */
      "./src/app/form-module/components/assign-forms/assign-forms.component.scss")).default]
    })], AssignFormsComponent);
    /***/
  },

  /***/
  "./src/app/form-module/components/formdetails/formdetails.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/form-module/components/formdetails/formdetails.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormModuleComponentsFormdetailsFormdetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background-color: #587f8f;\n  border: slategrey;\n  color: white;\n  padding: 2px 5px 4px 5px;\n  text-align: center;\n  width: 90px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  height: 1.7em;\n  margin-left: 100px;\n  border-radius: 4px 4px 4px 4px;\n  margin-bottom: 10px;\n}\n\n.formdetails {\n  margin: 0 0 2em 0;\n  list-style-type: \"\";\n  padding: 0;\n  width: 25em;\n}\n\n.formdetails li {\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 2.4em;\n  border-radius: 4px;\n}\n\n.formdetails .badge {\n  display: inline-block;\n  font-size: small;\n  text-align: left;\n  text-indent: 10px;\n  width: 170px;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #587f8f;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy9mb3JtZGV0YWlscy9aOlxcREZNXFxEYXRhRm9ybU1hbmFnZXItTG9naW5GZWF0dXJlc1xcRGF0YUZvcm1NYW5hZ2VyQXBwL3NyY1xcYXBwXFxmb3JtLW1vZHVsZVxcY29tcG9uZW50c1xcZm9ybWRldGFpbHNcXGZvcm1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL2Zvcm1kZXRhaWxzL2Zvcm1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRGVFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy9mb3JtZGV0YWlscy9mb3JtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGJvcmRlcjogc2xhdGVncmV5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA1cHggNHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxufVxuXG4uZm9ybWRldGFpbHMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogdW5pdCgkbnVtYmVyOiAxMDApO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1ZW07XG4gIH1cbiAgLmZvcm1kZXRhaWxzIGxpIHtcbiAgICAvL2N1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAyLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbi8vICAgLmZvcm1kZXRhaWxzIGxpOmhvdmVyIHtcbi8vICAgICBjb2xvcjogIzYwN0Q4Qjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuLy8gICAgIGxlZnQ6IC4xZW07XG4vLyAgIH1cbi8vICAgLmZvcm1kZXRhaWxzIGxpLnNlbGVjdGVkIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgfVxuLy8gICAuZm9ybWRldGFpbHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICB9XG4gIC5mb3JtZGV0YWlscyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgd2lkdGg6MTcwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg3ZjhmO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG4gICIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGJvcmRlcjogc2xhdGVncmV5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA1cHggNHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtZGV0YWlscyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IFwiXCI7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyNWVtO1xufVxuXG4uZm9ybWRldGFpbHMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMi40ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmZvcm1kZXRhaWxzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIHdpZHRoOiAxNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3ZjhmO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAyLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/form-module/components/formdetails/formdetails.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/form-module/components/formdetails/formdetails.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FormdetailsComponent */

  /***/
  function srcAppFormModuleComponentsFormdetailsFormdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormdetailsComponent", function () {
      return FormdetailsComponent;
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


    var _services_formtype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/formtype.service */
    "./src/app/form-module/services/formtype.service.ts");

    var FormdetailsComponent =
    /*#__PURE__*/
    function () {
      function FormdetailsComponent(formTypeService) {
        _classCallCheck(this, FormdetailsComponent);

        this.formTypeService = formTypeService;
      }

      _createClass(FormdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.formTypeService.deleteFormData(this.form.FormId);
          window.location.reload();
        }
      }]);

      return FormdetailsComponent;
    }();

    FormdetailsComponent.ctorParameters = function () {
      return [{
        type: _services_formtype_service__WEBPACK_IMPORTED_MODULE_2__["FormtypeService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormdetailsComponent.prototype, "form", void 0);
    FormdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formdetails/formdetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formdetails.component.scss */
      "./src/app/form-module/components/formdetails/formdetails.component.scss")).default]
    })], FormdetailsComponent);
    /***/
  },

  /***/
  "./src/app/form-module/components/formtype/formtype.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/form-module/components/formtype/formtype.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormModuleComponentsFormtypeFormtypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background-color: #587f8f;\n  border: slategrey;\n  color: white;\n  padding: 3px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 25px;\n  height: 2em;\n  margin-left: 250px;\n  border-radius: 4px 4px 4px 4px;\n  margin-bottom: 10px;\n}\n\n.FormFields {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 25em;\n}\n\n.FormFields input {\n  margin-left: 10px;\n  float: right;\n  width: 200px;\n}\n\n.FormFields select {\n  margin-left: 10px;\n  float: right;\n  width: 200px;\n  height: 30px;\n}\n\n.FormFields li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 2.4em;\n  border-radius: 4px;\n}\n\n.FormFields li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: 0.1em;\n}\n\n.userspecificform li.selected:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n\n.FormFields .badge {\n  display: inline-block;\n  font-size: small;\n  width: 150px;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #587f8f;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy9mb3JtdHlwZS9aOlxcREZNXFxEYXRhRm9ybU1hbmFnZXItTG9naW5GZWF0dXJlc1xcRGF0YUZvcm1NYW5hZ2VyQXBwL3NyY1xcYXBwXFxmb3JtLW1vZHVsZVxcY29tcG9uZW50c1xcZm9ybXR5cGVcXGZvcm10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL2Zvcm10eXBlL2Zvcm10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FER0E7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDTjs7QURHRTtFQUNFLGlCQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQU47O0FERUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL2Zvcm10eXBlL2Zvcm10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4N2Y4ZjtcbiAgYm9yZGVyOiBzbGF0ZWdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbn1cblxuLkZvcm1GaWVsZHMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAyNWVtO1xuICB9XG4gIC5Gb3JtRmllbGRzIGlucHV0e1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB3aWR0aDogMjAwcHg7XG5cbiAgfVxuXG4gIC5Gb3JtRmllbGRzIHNlbGVjdHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuRm9ybUZpZWxkcyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICBoZWlnaHQ6IDIuNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuRm9ybUZpZWxkcyBsaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICBsZWZ0OiAuMWVtO1xuICB9XG5cbiAgLnVzZXJzcGVjaWZpY2Zvcm0gbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5Gb3JtRmllbGRzIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N2Y4ZjtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDIuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICAiLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3ZjhmO1xuICBib3JkZXI6IHNsYXRlZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5Gb3JtRmllbGRzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1ZW07XG59XG5cbi5Gb3JtRmllbGRzIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uRm9ybUZpZWxkcyBzZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLkZvcm1GaWVsZHMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAyLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uRm9ybUZpZWxkcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLnVzZXJzcGVjaWZpY2Zvcm0gbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5Gb3JtRmllbGRzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgd2lkdGg6IDE1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDIuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/form-module/components/formtype/formtype.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/form-module/components/formtype/formtype.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FormtypeComponent */

  /***/
  function srcAppFormModuleComponentsFormtypeFormtypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormtypeComponent", function () {
      return FormtypeComponent;
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


    var _services_formtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/formtype.service */
    "./src/app/form-module/services/formtype.service.ts");
    /* harmony import */


    var _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/userspecificform.service */
    "./src/app/form-module/services/userspecificform.service.ts");
    /* harmony import */


    var _models_data_value_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/data-value-model */
    "./src/app/form-module/models/data-value-model.ts");
    /* harmony import */


    var _models_form_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/form-data-model */
    "./src/app/form-module/models/form-data-model.ts");
    /* harmony import */


    var _models_datesmodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/datesmodel */
    "./src/app/form-module/models/datesmodel.ts");

    var FormtypeComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line: max-line-length
      function FormtypeComponent(formTypeService, userSpecificFormService, route, router) {
        _classCallCheck(this, FormtypeComponent);

        this.formTypeService = formTypeService;
        this.userSpecificFormService = userSpecificFormService;
        this.route = route;
        this.router = router;
        this.itemSet = {};
      }

      _createClass(FormtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFormType();
        }
      }, {
        key: "getFormType",
        value: function getFormType() {
          var _this3 = this;

          this.route.queryParams.subscribe(function (params) {
            _this3.formTypeId = params.id || 0;
            _this3.FormId = params.formId || 0;
          });
          this.formTypeService.getFormType(this.formTypeId).subscribe(function (result) {
            _this3.formType = result;
            _this3.FormName = _this3.formType.FormName;

            if (_this3.FormId == 0) {
              _this3.formType.FormFields.forEach(function (item) {
                _this3.itemSet[item.Id] = null;
                _this3.savemode = false;
              });
            } else {
              _this3.userSpecificFormService.getForms(_this3.formTypeId).subscribe(function (result) {
                result.forEach(function (item) {
                  if (item.FormId == _this3.FormId) {
                    _this3.form = item;
                  }
                });

                _this3.form.FormData.forEach(function (item) {
                  _this3.itemSet[item.Name] = item.Value;
                });
              });

              _this3.savemode = true;
            }
          });
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.savemode;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.dataValue = [];
          this.formType.FormFields.forEach(function (item) {
            _this4.dataValue.push(new _models_data_value_model__WEBPACK_IMPORTED_MODULE_5__["DataValueModel"](item.Id, _this4.itemSet[item.Id]));
          });
          this.dataValue.forEach(function (item) {
            if (item.Name == _this4.formType.EffectiveDate.StartDate) {
              _this4.StartDate = item.Value;
            }

            if (item.Name == _this4.formType.EffectiveDate.EndDate) {
              _this4.EndDate = item.Value;
            }
          });
          this.effectiveDates = new _models_datesmodel__WEBPACK_IMPORTED_MODULE_7__["Datesmodel"](this.StartDate, this.EndDate);

          if (this.savemode == false) {
            this.formData = new _models_form_data_model__WEBPACK_IMPORTED_MODULE_6__["FormDataModel"](this.formType.FormType, this.itemSet[this.FormName], this.dataValue, this.effectiveDates);
            this.formTypeService.postFormData(this.formData);
            window.location.reload();
          } else {
            // tslint:disable-next-line: max-line-length
            this.formData = new _models_form_data_model__WEBPACK_IMPORTED_MODULE_6__["FormDataModel"](this.formType.FormType, this.itemSet[this.FormName], this.dataValue, this.effectiveDates, this.form.FormId);
            this.formTypeService.putFormData(this.formData);
            this.router.navigate(['dashboard/forms/userspecificform'], {
              queryParams: {
                id: this.formTypeId
              }
            });
          }
        }
      }]);

      return FormtypeComponent;
    }();

    FormtypeComponent.ctorParameters = function () {
      return [{
        type: _services_formtype_service__WEBPACK_IMPORTED_MODULE_3__["FormtypeService"]
      }, {
        type: _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_4__["UserSpecificFormsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FormtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formtype',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formtype.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/formtype/formtype.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formtype.component.scss */
      "./src/app/form-module/components/formtype/formtype.component.scss")).default]
    })], FormtypeComponent);
    /***/
  },

  /***/
  "./src/app/form-module/components/userspecificform/userspecificform.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/form-module/components/userspecificform/userspecificform.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormModuleComponentsUserspecificformUserspecificformComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background-color: #587f8f;\n  border: slategrey;\n  color: white;\n  padding: 2px 5px 4px 5px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  height: 1.7em;\n  margin-left: 25px;\n  border-radius: 4px 4px 4px 4px;\n  margin-bottom: 10px;\n}\n\n.userspecificform {\n  margin: 0 0 2em 0;\n  list-style-type: \"\";\n  padding: 0;\n  width: 170px;\n}\n\n.userspecificform li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 2.4em;\n  border-radius: 4px;\n}\n\n.userspecificform li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: 0.1em;\n}\n\n.userspecificform li.selected {\n  background-color: #CFD8DC;\n  color: white;\n}\n\n.userspecificform li.selected:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n\n.userspecificform .badge {\n  display: inline-block;\n  font-size: small;\n  text-align: left;\n  width: 170px;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #587f8f;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 4px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy91c2Vyc3BlY2lmaWNmb3JtL1o6XFxERk1cXERhdGFGb3JtTWFuYWdlci1Mb2dpbkZlYXR1cmVzXFxEYXRhRm9ybU1hbmFnZXJBcHAvc3JjXFxhcHBcXGZvcm0tbW9kdWxlXFxjb21wb25lbnRzXFx1c2Vyc3BlY2lmaWNmb3JtXFx1c2Vyc3BlY2lmaWNmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLW1vZHVsZS9jb21wb25lbnRzL3VzZXJzcGVjaWZpY2Zvcm0vdXNlcnNwZWNpZmljZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1tb2R1bGUvY29tcG9uZW50cy91c2Vyc3BlY2lmaWNmb3JtL3VzZXJzcGVjaWZpY2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3ZjhmO1xuICBib3JkZXI6IHNsYXRlZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4IDRweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG59XG4udXNlcnNwZWNpZmljZm9ybSB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiB1bml0KCRudW1iZXI6IDEwMCk7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbiAgLnVzZXJzcGVjaWZpY2Zvcm0gbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAyLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnVzZXJzcGVjaWZpY2Zvcm0gbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuICAudXNlcnNwZWNpZmljZm9ybSBsaS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnVzZXJzcGVjaWZpY2Zvcm0gbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC51c2Vyc3BlY2lmaWNmb3JtIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDoxNzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ODdmOGY7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC00cHg7XG4gICAgaGVpZ2h0OiAyLjhlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICB9XG4gICIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGJvcmRlcjogc2xhdGVncmV5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA1cHggNHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEuN2VtO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udXNlcnNwZWNpZmljZm9ybSB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IFwiXCI7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnVzZXJzcGVjaWZpY2Zvcm0gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAyLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlcnNwZWNpZmljZm9ybSBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLnVzZXJzcGVjaWZpY2Zvcm0gbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2Vyc3BlY2lmaWNmb3JtIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlcnNwZWNpZmljZm9ybSAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3ZjhmO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAyLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/form-module/components/userspecificform/userspecificform.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/form-module/components/userspecificform/userspecificform.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: UserspecificformComponent */

  /***/
  function srcAppFormModuleComponentsUserspecificformUserspecificformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserspecificformComponent", function () {
      return UserspecificformComponent;
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


    var _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/userspecificform.service */
    "./src/app/form-module/services/userspecificform.service.ts");

    var UserspecificformComponent =
    /*#__PURE__*/
    function () {
      function UserspecificformComponent(userSpecificFormService, route, router) {
        _classCallCheck(this, UserspecificformComponent);

        this.userSpecificFormService = userSpecificFormService;
        this.route = route;
        this.router = router;
        this.username = localStorage.getItem('Username');
      }

      _createClass(UserspecificformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getForms();
        }
      }, {
        key: "getForms",
        value: function getForms() {
          var _this5 = this;

          this.route.queryParams.subscribe(function (params) {
            _this5.formName = params.id || null;
          });
          this.userSpecificFormService.getForms(this.formName).subscribe(function (result) {
            _this5.forms = result;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(form) {
          this.selectedForm = form;
        }
      }]);

      return UserspecificformComponent;
    }();

    UserspecificformComponent.ctorParameters = function () {
      return [{
        type: _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_3__["UserSpecificFormsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserspecificformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userspecificform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userspecificform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-module/components/userspecificform/userspecificform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userspecificform.component.scss */
      "./src/app/form-module/components/userspecificform/userspecificform.component.scss")).default]
    })], UserspecificformComponent);
    /***/
  },

  /***/
  "./src/app/form-module/form-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/form-module/form-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: FormRoutingModule */

  /***/
  function srcAppFormModuleFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function () {
      return FormRoutingModule;
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


    var _components_formtype_formtype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/formtype/formtype.component */
    "./src/app/form-module/components/formtype/formtype.component.ts");
    /* harmony import */


    var _components_userspecificform_userspecificform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/userspecificform/userspecificform.component */
    "./src/app/form-module/components/userspecificform/userspecificform.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_assign_forms_assign_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/assign-forms/assign-forms.component */
    "./src/app/form-module/components/assign-forms/assign-forms.component.ts");

    var routes = [{
      path: 'form',
      component: _components_formtype_formtype_component__WEBPACK_IMPORTED_MODULE_2__["FormtypeComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'userspecificform',
      component: _components_userspecificform_userspecificform_component__WEBPACK_IMPORTED_MODULE_3__["UserspecificformComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'assignform',
      component: _components_assign_forms_assign_forms_component__WEBPACK_IMPORTED_MODULE_6__["AssignFormsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'form',
      pathMatch: 'full'
    }];

    var FormRoutingModule = function FormRoutingModule() {
      _classCallCheck(this, FormRoutingModule);
    };

    FormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], FormRoutingModule);
    /***/
  },

  /***/
  "./src/app/form-module/form.module.ts":
  /*!********************************************!*\
    !*** ./src/app/form-module/form.module.ts ***!
    \********************************************/

  /*! exports provided: FormModule */

  /***/
  function srcAppFormModuleFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return FormModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_userspecificform_userspecificform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/userspecificform/userspecificform.component */
    "./src/app/form-module/components/userspecificform/userspecificform.component.ts");
    /* harmony import */


    var _components_formdetails_formdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/formdetails/formdetails.component */
    "./src/app/form-module/components/formdetails/formdetails.component.ts");
    /* harmony import */


    var _components_formtype_formtype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/formtype/formtype.component */
    "./src/app/form-module/components/formtype/formtype.component.ts");
    /* harmony import */


    var _form_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form-routing.module */
    "./src/app/form-module/form-routing.module.ts");
    /* harmony import */


    var _services_formtype_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/formtype.service */
    "./src/app/form-module/services/formtype.service.ts");
    /* harmony import */


    var _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/userspecificform.service */
    "./src/app/form-module/services/userspecificform.service.ts");
    /* harmony import */


    var _common_components_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common-components/common.module */
    "./src/app/common-components/common.module.ts");
    /* harmony import */


    var _components_assign_forms_assign_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/assign-forms/assign-forms.component */
    "./src/app/form-module/components/assign-forms/assign-forms.component.ts");

    var FormModule = function FormModule() {
      _classCallCheck(this, FormModule);
    };

    FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_userspecificform_userspecificform_component__WEBPACK_IMPORTED_MODULE_4__["UserspecificformComponent"], _components_formdetails_formdetails_component__WEBPACK_IMPORTED_MODULE_5__["FormdetailsComponent"], _components_formtype_formtype_component__WEBPACK_IMPORTED_MODULE_6__["FormtypeComponent"], _components_assign_forms_assign_forms_component__WEBPACK_IMPORTED_MODULE_11__["AssignFormsComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _form_routing_module__WEBPACK_IMPORTED_MODULE_7__["FormRoutingModule"], _common_components_common_module__WEBPACK_IMPORTED_MODULE_10__["CommonComponentModule"]],
      providers: [_services_formtype_service__WEBPACK_IMPORTED_MODULE_8__["FormtypeService"], _services_userspecificform_service__WEBPACK_IMPORTED_MODULE_9__["UserSpecificFormsService"]]
    })], FormModule);
    /***/
  },

  /***/
  "./src/app/form-module/models/assignformmodel.ts":
  /*!*******************************************************!*\
    !*** ./src/app/form-module/models/assignformmodel.ts ***!
    \*******************************************************/

  /*! exports provided: Assignformmodel */

  /***/
  function srcAppFormModuleModelsAssignformmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Assignformmodel", function () {
      return Assignformmodel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Assignformmodel = function Assignformmodel(formId, userId) {
      _classCallCheck(this, Assignformmodel);

      this.UserId = userId;
      this.FormId = formId;
    };
    /***/

  },

  /***/
  "./src/app/form-module/models/data-value-model.ts":
  /*!********************************************************!*\
    !*** ./src/app/form-module/models/data-value-model.ts ***!
    \********************************************************/

  /*! exports provided: DataValueModel */

  /***/
  function srcAppFormModuleModelsDataValueModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataValueModel", function () {
      return DataValueModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DataValueModel = function DataValueModel(name, value) {
      _classCallCheck(this, DataValueModel);

      this.Name = name;
      this.Value = value;
    };
    /***/

  },

  /***/
  "./src/app/form-module/models/datesmodel.ts":
  /*!**************************************************!*\
    !*** ./src/app/form-module/models/datesmodel.ts ***!
    \**************************************************/

  /*! exports provided: Datesmodel */

  /***/
  function srcAppFormModuleModelsDatesmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Datesmodel", function () {
      return Datesmodel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Datesmodel = function Datesmodel(startDate, endDate) {
      _classCallCheck(this, Datesmodel);

      this.StartDate = startDate;
      this.EndDate = endDate;
    };
    /***/

  },

  /***/
  "./src/app/form-module/models/form-data-model.ts":
  /*!*******************************************************!*\
    !*** ./src/app/form-module/models/form-data-model.ts ***!
    \*******************************************************/

  /*! exports provided: FormDataModel */

  /***/
  function srcAppFormModuleModelsFormDataModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormDataModel", function () {
      return FormDataModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormDataModel = function FormDataModel(formType, formName, formData, effectiveDate) {
      var formId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      _classCallCheck(this, FormDataModel);

      this.FormId = formId;
      this.FormType = formType;
      this.FormName = formName;
      this.FormData = formData;
      this.EffectiveDate = effectiveDate;
    };
    /***/

  }
}]);
//# sourceMappingURL=form-module-form-module-es5.js.map