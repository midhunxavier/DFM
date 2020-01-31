(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../form-module/form.module": [
		"./src/app/form-module/form.module.ts",
		"common",
		"form-module-form-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard-dashboard-module"
	],
	"./login-module/login-module.module": [
		"./src/app/login-module/login-module.module.ts",
		"login-module-login-module-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/calendar/calendar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/calendar/calendar.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data\" class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Previous\n        </div>\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\"\n        >\n          Today\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\"\n        >\n          Month\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\"\n        >\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\"\n        >\n          Day\n        </div>\n        \n      </div>\n      \n    </div>\n    \n  </div>\n  \n  <br />\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"CalendarView.Month\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"CalendarView.Week\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"CalendarView.Day\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-day-view>\n    \n  </div>\n  \n  <ng-template #modalContent let-close=\"close\">\n    <div class=\"modal-header\">\n      <!-- <h5 class=\"modal-title\"></h5> -->\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div *ngFor = \"let dt of data\">\n        \n        <!-- <pre *ngIf = \"modalData.event.id === data.FormId\">{{ data | json }}</pre> -->\n        <div *ngIf=\"modalData.event.id === dt.FormId\">\n          <br>\n          <h2>{{data.FormType | titlecase}} Details : </h2>\n          <ul class=\"formdetails\">\n              <li *ngFor=\"let formData of dt.FormData\">\n                  <span class=\"badge\"> {{formData.Name}} :</span> {{formData.Value}}<br />\n              </li>\n          </ul>\n         \n      </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n        OK\n      </button>\n    </div>\n  </ng-template>\n  \n   <!--Everything you see below is just for the demo, you don't need to include it in your app\n  \n  <br /><br /><br />\n \n  \n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Primary color</th>\n          <th>Secondary color</th>\n          <th>Starts at</th>\n          <th>Ends at</th>\n          <th>Remove</th>\n        </tr>\n      </thead>\n  \n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [(ngModel)]=\"event.title\"\n              (keyup)=\"refresh.next()\"\n            />\n          </td>\n          <td>\n            <input\n              type=\"color\"\n              [(ngModel)]=\"event.color.primary\"\n              (change)=\"refresh.next()\"\n            />\n          </td>\n          <td>\n            <input\n              type=\"color\"\n              [(ngModel)]=\"event.color.secondary\"\n              (change)=\"refresh.next()\"\n            />\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              mwlFlatpickr\n              [(ngModel)]=\"event.start\"\n              (ngModelChange)=\"refresh.next()\"\n              [altInput]=\"true\"\n              [convertModelValue]=\"true\"\n              [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\"\n              altFormat=\"F j, Y H:i\"\n              placeholder=\"Not set\"\n            />\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              mwlFlatpickr\n              [(ngModel)]=\"event.end\"\n              (ngModelChange)=\"refresh.next()\"\n              [altInput]=\"true\"\n              [convertModelValue]=\"true\"\n              [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\"\n              altFormat=\"F j, Y H:i\"\n              placeholder=\"Not set\"\n            />\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\n              Delete\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  <ng-template #modalContent let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Event action occurred</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        Action:\n        <pre>{{ modalData?.action }}</pre>\n      </div>\n      <div>\n        Event:\n        <pre>{{ modalData?.event | json }}</pre>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n        OK\n      </button>\n    </div>\n  </ng-template> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/error/error.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/error/error.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-danger\">Error</h2>\n<p class=\"text-danger\"> An error occured while processing your request</p>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"page-footer font-small indigo\">\n\n  <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n    <a href=\"#\"> Dataformmanager.com</a>\n  </div>\n\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-info justify-content-between\">\n\n  <a class=\"navbar-brand\"><span class=\"entypo-dribbble\"></span> DFM</a>\n\n  <ul class=\"nav justify-content-end\" *ngIf=\"isUserLoggedIn()\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#\">Welcome {{name}}</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/\">Dashboard</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/profile\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"Logout()\">Logout</button>\n\n    </li>\n  </ul>\n\n</nav>\n<div>\n  <app-sidenav></app-sidenav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/profile/profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/profile/profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br>\n<h2 class=\"title-pen\"> User Profile <span></span></h2>\n<div class=\"user-profile\">\n  <img class=\"avatar\" />\n  <div class=\"username\">{{name}}</div>\n  <div class=\"bio\">\n    {{role}}\n  </div>\n  <div class=\"description\">\n    {{email}}\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/sidenav/sidenav.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/sidenav/sidenav.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sidebar-main\" class=\"sidebar sidebar-default sidebar-separate sidebar-fixed\"\n\t*ngIf=\"isUserLoggedIn()\">\n\t<div class=\"sidebar-content\">\n\t\t<div class=\"sidebar-category sidebar-default\">\n\t\t\t<div class=\"sidebar-user\">\n\t\t\t\t<div class=\"category-content\">\n\t\t\t\t\t<h6>{{name}}</h6>\n\t\t\t\t\t<small>{{role}}</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"sidebar-category sidebar-default\">\n\t\t\t<div class=\"category-title\">\n\t\t\t\t<span>Forms</span>\n\t\t\t</div>\n\t\t\t<div class=\"category-content\">\n\t\t\t\t<ul id=\"fruits-nav\" class=\"nav flex-column\">\n\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#Release_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tRelease\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"Release_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\" *ngIf=\"this.authService.getPermission('Release','FullAccess')\">\n\t\t\t\t\t\t\t\t<a href=\"dashboard/forms/form?id=Release\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t<a href=\"dashboard/forms/userspecificform?id=Release\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#Leave_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tLeave\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"Leave_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a href=\"dashboard/forms/form?id=Leave\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t<a href=\"dashboard/forms/userspecificform?id=Leave\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" *ngIf=\"this.authService.isAdmin()\">\n\t\t\t\t\t\t<a href=\"#Assign_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tAssign Forms\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"Assign_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a href=\"dashboard/forms/assignform?id=Release\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tRelease\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<div class=\"sidebar-category sidebar-default\" *ngIf=\"this.authService.isAdmin()\">\n\t\t\t<div class=\"category-title\">\n\t\t\t\t<span>Manage Users</span>\n\t\t\t</div>\n\t\t\t<div class=\"category-content\">\n\t\t\t\t<ul id=\"fruits-nav\" class=\"nav flex-column\">\n\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#User_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tUser\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"User_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAssign Role to User\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tDelete User\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#Role_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tRole\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"Role_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAdd Role\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAssign Role to Form\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#Permission_actions\" class=\"nav-link\" data-toggle=\"collapse\" role=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"other-fruits\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tPermission\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul id=\"Permission_actions\" class=\"flex-column collapse\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tAdd Permission\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tDelete Permission\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t<div class=\"sidebar-category sidebar-default\">\n\t\t\t<div class=\"category-title\">\n\t\t\t\t<span>Settings</span>\n\t\t\t</div>\n\t\t\t<div class=\"category-content\">\n\t\t\t\t<ul id=\"sidebar-editable-nav\" class=\"nav flex-column\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"/\" class=\"nav-link\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tDashboard\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"calendar\" class=\"nav-link\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tCalendar\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"/profile\" class=\"nav-link\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tProfile\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"/\" class=\"nav-link\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>\n\n\n\n<div class=\"content-wrapper\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #googleLogin>\n\n\t<router-outlet></router-outlet>\n\n</ng-template>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '',
        loadChildren: './login-module/login-module.module#LoginModuleModule' },
    { path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody {\n  margin: 2em;\n}\n\nbody, input[type=text], button {\n  color: #333;\n  font-family: Cambria, Georgia;\n}\n\n/* everywhere else */\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.content-wrapper {\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWjpcXERGTVxcRGF0YUZvcm1NYW5hZ2VyLUxvZ2luRmVhdHVyZXNcXERhdGFGb3JtTWFuYWdlckFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDSUY7O0FERkEsb0JBQUE7O0FBQ0E7RUFDRSx5Q0FBQTtBQ0tGOztBREZBO0VBQ0UsbUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgY29sb3I6ICMzNjk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1MCU7XG59XG5oMiwgaDMge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cbi8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn0iLCJoMSB7XG4gIGNvbG9yOiAjMzY5O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNTAlO1xufVxuXG5oMiwgaDMge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbmJvZHksIGlucHV0W3R5cGU9dGV4dF0sIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuLyogZXZlcnl3aGVyZSBlbHNlICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DataFormManager';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _common_components_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-components/common.module */ "./src/app/common-components/common.module.ts");
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global-error-handler.service */ "./src/app/global-error-handler.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _common_components_common_module__WEBPACK_IMPORTED_MODULE_10__["CommonComponentModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                useClass: _global_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["GlobalErrorHandler"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let AuthGuard = class AuthGuard {
    constructor(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/app-settings */ "./src/app/utils/app-settings.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isRoleSet = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$isRoleSet = this.isRoleSet.asObservable();
        this.isNameSet = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$isNameSet = this.isNameSet.asObservable();
        this.permissionValueObj = {
            // tslint:disable-next-line: object-literal-key-quotes
            'Read': 1,
            // tslint:disable-next-line: object-literal-key-quotes
            'Write': 2,
            // tslint:disable-next-line: object-literal-key-quotes
            'FullAccess': 4
        };
    }
    loggedIn() {
        return (!!localStorage.getItem('accessToken') || !!localStorage.getItem('refreshToken'));
    }
    verifyCookie() {
        return this.http.get(_utils_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + 'login/verifyCookie');
    }
    getAccessTokenByCode(codeObj) {
        return this.http.post(_utils_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + 'login/AccessToken', codeObj);
    }
    getAccesTokenByRefreshToken(RefreshTokenObj) {
        return this.http.post(_utils_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + 'login/RefreshToken', RefreshTokenObj);
    }
    getAccessTokenFromLocalStorage() {
        return localStorage.getItem('accessToken');
    }
    getRefreshTokenFromLocalStorage() {
        return localStorage.getItem('refreshToken');
    }
    getRole() {
        const token = this.getAccessTokenFromLocalStorage();
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        const decodedToken = helper.decodeToken(token);
        for (const formPermission of decodedToken.role) {
            const jsonObj = JSON.parse(formPermission);
            this.isRoleSet.next(jsonObj.RoleName);
            this.isNameSet.next(jsonObj.Username);
            if (jsonObj.RoleName) {
                return jsonObj.RoleName;
            }
            else {
                return 'No role is assigned';
            }
        }
    }
    isAdmin() {
        const role = this.getRole();
        if (role.toLowerCase() == 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
    getPermission(formname, permission) {
        const token = this.getAccessTokenFromLocalStorage();
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        const decodedToken = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);
        var permissionValue = 0;
        for (const formPermission of decodedToken.role) {
            const jsonObj = JSON.parse(formPermission);
            if (jsonObj.FormName.toLowerCase() == formname.toLowerCase()) {
                permissionValue = permissionValue + this.permissionValueObj[jsonObj.Permission];
            }
        }
        if (permissionValue >= this.permissionValueObj[permission]) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/common-components/calendar/calendar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/common-components/calendar/calendar.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.formdetails {\n  margin: 0 0 2em 0;\n  list-style-type: \"\";\n  padding: 0;\n  width: 25em;\n}\n\n.formdetails li {\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 2.4em;\n  border-radius: 4px;\n}\n\n.formdetails .badge {\n  display: inline-block;\n  font-size: small;\n  text-align: left;\n  text-indent: 10px;\n  width: 170px;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #587f8f;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY2FsZW5kYXIvWjpcXERGTVxcRGF0YUZvcm1NYW5hZ2VyLUxvZ2luRmVhdHVyZXNcXERhdGFGb3JtTWFuYWdlckFwcC9zcmNcXGFwcFxcY29tbW9uLWNvbXBvbmVudHNcXGNhbGVuZGFyXFxjYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FES0U7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNGTjs7QURJSTtFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRk47O0FEaUJJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgfVxuICBcbiAgcHJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuXG5cbiAgXG4gIC5mb3JtZGV0YWlscyB7XG4gICAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogdW5pdCgkbnVtYmVyOiAxMDApO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAyNWVtO1xuICAgIH1cbiAgICAuZm9ybWRldGFpbHMgbGkge1xuICAgICAgLy9jdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICAgIG1hcmdpbjogLjVlbTtcbiAgICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICAgIGhlaWdodDogMi40ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAvLyAgIC5mb3JtZGV0YWlscyBsaTpob3ZlciB7XG4gIC8vICAgICBjb2xvcjogIzYwN0Q4QjtcbiAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIC8vICAgICBsZWZ0OiAuMWVtO1xuICAvLyAgIH1cbiAgLy8gICAuZm9ybWRldGFpbHMgbGkuc2VsZWN0ZWQge1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcbiAgLy8gICB9XG4gIC8vICAgLmZvcm1kZXRhaWxzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4gIC8vICAgICBjb2xvcjogd2hpdGU7XG4gIC8vICAgfVxuICAgIC5mb3JtZGV0YWlscyAuYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgIHdpZHRoOjE3MHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzU4N2Y4ZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAtMXB4O1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgaGVpZ2h0OiAyLjhlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICAgIH1cbiAgICBcbiIsImgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZvcm1kZXRhaWxzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogXCJcIjtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1ZW07XG59XG5cbi5mb3JtZGV0YWlscyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAyLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZm9ybWRldGFpbHMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgd2lkdGg6IDE3MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDIuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common-components/calendar/calendar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common-components/calendar/calendar.component.ts ***!
  \******************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var src_app_form_module_services_userspecificform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/form-module/services/userspecificform.service */ "./src/app/form-module/services/userspecificform.service.ts");







const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    green: {
        primary: '#32CD32'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let CalendarComponent = class CalendarComponent {
    constructor(modal, userSpecificFormService) {
        this.modal = modal;
        this.userSpecificFormService = userSpecificFormService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
        // {
        //   label: '<i class="fa fa-fw fa-pencil"></i>',
        //   a11yLabel: 'Click',
        //   onClick: ({ event }: { event: CalendarEvent }): void => {
        //     this.handleEvent('clicked', event);
        //   }
        // },
        // {
        //   label: '<i class="fa fa-fw fa-times"></i>',
        //   a11yLabel: 'Delete',
        //   onClick: ({ event }: { event: CalendarEvent }): void => {
        //     this.events = this.events.filter(iEvent => iEvent !== event);
        //     this.handleEvent('Deleted', event);
        //   }
        // }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.userSpecificFormService.getForms('all')
            .subscribe((res) => {
            this.data = res;
            this.data.forEach(element => {
                if (element.FormType == 'Release') {
                    this.event = {
                        id: element.FormId,
                        title: element.FormName,
                        allDay: true,
                        start: new Date(element.EffectiveDate.StartDate),
                        end: new Date(element.EffectiveDate.EndDate),
                        color: colors.green
                    };
                }
                if (element.FormType == 'Leave') {
                    this.event = {
                        id: element.FormId,
                        title: element.FormName,
                        allDay: true,
                        start: new Date(element.EffectiveDate.StartDate),
                        end: new Date(element.EffectiveDate.EndDate),
                        color: colors.red
                    };
                }
                this.events.push(this.event);
            });
            this.refresh.next(this.events);
        });
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    // addEvent(): void {
    //   this.events = [
    //     ...this.events,
    //     {
    //       title: 'New event',
    //       start: startOfDay(new Date()),
    //       end: endOfDay(new Date()),
    //       color: colors.red,
    //       draggable: true,
    //       resizable: {
    //         beforeStart: true,
    //         afterEnd: true
    //       }
    //     }
    //   ];
    // }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: src_app_form_module_services_userspecificform_service__WEBPACK_IMPORTED_MODULE_6__["UserSpecificFormsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], CalendarComponent.prototype, "modalContent", void 0);
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.scss */ "./src/app/common-components/calendar/calendar.component.scss")).default]
    })
], CalendarComponent);



/***/ }),

/***/ "./src/app/common-components/common-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/common-components/common-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CommonComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentRoutingModule", function() { return CommonComponentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/common-components/profile/profile.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/common-components/error/error.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/common-components/calendar/calendar.component.ts");






const routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"] },
];
let CommonComponentRoutingModule = class CommonComponentRoutingModule {
};
CommonComponentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CommonComponentRoutingModule);



/***/ }),

/***/ "./src/app/common-components/common.module.ts":
/*!****************************************************!*\
  !*** ./src/app/common-components/common.module.ts ***!
  \****************************************************/
/*! exports provided: CommonComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentModule", function() { return CommonComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _common_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common-routing.module */ "./src/app/common-components/common-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/common-components/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/common-components/footer/footer.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/common-components/sidenav/sidenav.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/common-components/profile/profile.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/common-components/error/error.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/common-components/calendar/calendar.component.ts");















let CommonComponentModule = class CommonComponentModule {
};
CommonComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
            }),
            _common_routing_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentRoutingModule"]
        ],
        exports: [
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
        ]
    })
], CommonComponentModule);



/***/ }),

/***/ "./src/app/common-components/error/error.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/common-components/error/error.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/common-components/error/error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common-components/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/common-components/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/common-components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common-components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL1o6XFxERk1cXERhdGFGb3JtTWFuYWdlci1Mb2dpbkZlYXR1cmVzXFxEYXRhRm9ybU1hbmFnZXJBcHAvc3JjXFxhcHBcXGNvbW1vbi1jb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common-components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/common-components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common-components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common-components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Raleway|Varela+Round|Coda);\n@import url(http://weloveiconfonts.com/api/?family=entypo);\n[class*=entypo-]:before {\n  font-family: \"entypo\", sans-serif;\n}\n.nav-link {\n  color: #b9dbe9;\n}\n.btn {\n  color: #b9dbe9;\n  background-color: #587f8f;\n  border-color: #b9dbe9;\n}\n.navbar {\n  color: turquoise;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvaGVhZGVyL1o6XFxERk1cXERhdGFGb3JtTWFuYWdlci1Mb2dpbkZlYXR1cmVzXFxEYXRhRm9ybU1hbmFnZXJBcHAvc3JjXFxhcHBcXGNvbW1vbi1jb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNBLDBEQUFBO0FBRVI7RUFDRSxpQ0FBQTtBQ0FGO0FER0E7RUFDSSxjQUFBO0FDQUo7QURFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDQTtFQUNJLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXl8VmFyZWxhK1JvdW5kfENvZGEpO1xuQGltcG9ydCB1cmwoaHR0cDovL3dlbG92ZWljb25mb250cy5jb20vYXBpLz9mYW1pbHk9ZW50eXBvKTtcblxuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdlbnR5cG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6IHJnYigxODUsIDIxOSwgMjMzKTtcbn1cbi5idG4ge1xuICAgIGNvbG9yOiByZ2IoMTg1LCAyMTksIDIzMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg3ZjhmO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4NSwgMjE5LCAyMzMpO1xufVxuLm5hdmJhcntcbiAgICBjb2xvcjp0dXJxdW9pc2U7XG59IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXl8VmFyZWxhK1JvdW5kfENvZGEpO1xuQGltcG9ydCB1cmwoaHR0cDovL3dlbG92ZWljb25mb250cy5jb20vYXBpLz9mYW1pbHk9ZW50eXBvKTtcbltjbGFzcyo9ZW50eXBvLV06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiZW50eXBvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiAjYjlkYmU5O1xufVxuXG4uYnRuIHtcbiAgY29sb3I6ICNiOWRiZTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODdmOGY7XG4gIGJvcmRlci1jb2xvcjogI2I5ZGJlOTtcbn1cblxuLm5hdmJhciB7XG4gIGNvbG9yOiB0dXJxdW9pc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/common-components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.name = localStorage.getItem('Username');
    }
    ngOnInit() {
        this.isLoggedIn = this._authService.loggedIn();
    }
    Logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this._router.navigate(['/login']);
    }
    isUserLoggedIn() {
        return this._authService.loggedIn();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/common-components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/common-components/profile/profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/common-components/profile/profile.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(https://fonts.googleapis.com/css?family=Raleway|Varela+Round|Coda);\n@import url(http://weloveiconfonts.com/api/?family=entypo);\n/* CSS design by @jofpin */\n[class*=entypo-]:before {\n  font-family: \"entypo\", sans-serif;\n}\nbody {\n  background: #fffcdd;\n  padding: 2.23em;\n}\n.title-pen {\n  color: #333;\n  font-family: \"Coda\", sans-serif;\n  text-align: center;\n}\n.title-pen span {\n  color: #55acee;\n}\n.user-profile {\n  margin: auto;\n  width: 25em;\n  height: 11em;\n  background: #fff;\n  border-radius: 0.3em;\n}\n.user-profile .username {\n  margin: auto;\n  margin-top: -4.4em;\n  margin-left: 5.8em;\n  color: #658585;\n  font-size: 1.53em;\n  font-family: \"Coda\", sans-serif;\n  font-weight: bold;\n}\n.user-profile .bio {\n  margin: auto;\n  display: inline-block;\n  margin-left: 10.43em;\n  color: #e76043;\n  font-size: 0.87em;\n  font-family: \"varela round\", sans-serif;\n}\n.user-profile > .description {\n  margin: auto;\n  margin-top: 1.35em;\n  margin-right: 4.43em;\n  width: 14em;\n  color: #c0c5c5;\n  font-size: 0.87em;\n  font-family: \"varela round\", sans-serif;\n}\n.user-profile > img.avatar {\n  padding: 0.7em;\n  margin-left: 0.3em;\n  margin-top: 0.3em;\n  height: 6.23em;\n  width: 6.23em;\n  border-radius: 18em;\n}\n.user-profile ul.data {\n  margin: 2em auto;\n  height: 3.7em;\n  background: #4eb6b6;\n  text-align: center;\n  border-radius: 0 0 0.3em 0.3em;\n}\n.user-profile li {\n  margin: 0 auto;\n  padding: 1.3em;\n  width: 33.33334%;\n  display: table-cell;\n  text-align: center;\n}\n.user-profile span {\n  font-family: \"varela round\", sans-serif;\n  color: #e3eeee;\n  white-space: nowrap;\n  font-size: 1.27em;\n  font-weight: bold;\n}\n.user-profile span:hover {\n  color: #daebea;\n}\nfooter > h1 {\n  display: block;\n  text-align: center;\n  clear: both;\n  font-family: \"Coda\", sans-serif;\n  color: #343f3d;\n  line-height: 6;\n  font-size: 1.6em;\n}\nfooter > h1 a {\n  text-decoration: none;\n  color: #ea4c89;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvcHJvZmlsZS9aOlxcREZNXFxEYXRhRm9ybU1hbmFnZXItTG9naW5GZWF0dXJlc1xcRGF0YUZvcm1NYW5hZ2VyQXBwL3NyY1xcYXBwXFxjb21tb24tY29tcG9uZW50c1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSw4RUFBQTtBQUNBLDBEQUFBO0FBRlIsMEJBQUE7QUFJQTtFQUNFLGlDQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDRCxXQUFBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUNFRjtBREFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUNHRjtBRERBO0VBQ0MsY0FBQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSUY7QUREQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0lGO0FERkE7RUFDQyxjQUFBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0tGO0FERkE7RUFDQyx1Q0FBQTtFQUNBLGNBQUE7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNLRjtBREhBO0VBQ0UsY0FBQTtBQ01GO0FESEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTUY7QURKQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ1NTIGRlc2lnbiBieSBAam9mcGluICovXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheXxWYXJlbGErUm91bmR8Q29kYSk7XG5AaW1wb3J0IHVybChodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1lbnR5cG8pO1xuXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmY2RkO1xuICBwYWRkaW5nOiAyLjIzZW07XG59XG5cbi50aXRsZS1wZW4ge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IFwiQ29kYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUtcGVuIHNwYW4ge1xuICBjb2xvcjogIzU1YWNlZTtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gIG1hcmdpbjogYXV0bztcblx0d2lkdGg6IDI1ZW07IFxuICBoZWlnaHQ6IDExZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG59XG5cbi51c2VyLXByb2ZpbGUgIC51c2VybmFtZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogLTQuNDBlbTtcbiAgbWFyZ2luLWxlZnQ6IDUuODBlbTtcbiAgY29sb3I6ICM2NTg1ODU7XG4gIGZvbnQtc2l6ZTogMS41M2VtO1xuICBmb250LWZhbWlseTogXCJDb2RhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVzZXItcHJvZmlsZSAgLmJpbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTAuNDNlbTtcbiAgY29sb3I6ICNlNzYwNDM7IFxuICBmb250LXNpemU6IC44N2VtO1xuICBmb250LWZhbWlseTogXCJ2YXJlbGEgcm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cbi51c2VyLXByb2ZpbGUgPiAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEuMzVlbTtcbiAgbWFyZ2luLXJpZ2h0OiA0LjQzZW07XG4gIHdpZHRoOiAxNGVtO1xuICBjb2xvcjogI2MwYzVjNTsgXG4gIGZvbnQtc2l6ZTogLjg3ZW07XG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xufVxuLnVzZXItcHJvZmlsZSA+IGltZy5hdmF0YXIge1xuXHRwYWRkaW5nOiAuN2VtO1xuICBtYXJnaW4tbGVmdDogLjNlbTtcbiAgbWFyZ2luLXRvcDogLjNlbTtcbiAgaGVpZ2h0OiA2LjIzZW07XG4gIHdpZHRoOiA2LjIzZW07XG4gIGJvcmRlci1yYWRpdXM6IDE4ZW07XG59XG5cbi51c2VyLXByb2ZpbGUgdWwuZGF0YSB7XG5cdG1hcmdpbjogMmVtIGF1dG87XG5cdGhlaWdodDogMy43MGVtO1xuICBiYWNrZ3JvdW5kOiAjNGViNmI2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAuM2VtIC4zZW07XG59XG4udXNlci1wcm9maWxlIGxpIHtcblx0bWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuMzBlbTsgXG4gIHdpZHRoOiAzMy4zMzMzNCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcHJvZmlsZSBzcGFuIHtcblx0Zm9udC1mYW1pbHk6IFwidmFyZWxhIHJvdW5kXCIsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiAjZTNlZWVlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udXNlci1wcm9maWxlIHNwYW46aG92ZXIge1xuICBjb2xvcjogI2RhZWJlYTtcbn1cblxuZm9vdGVyID4gaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1mYW1pbHk6IFwiQ29kYVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzM0M2YzZDtcbiAgbGluZS1oZWlnaHQ6IDY7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5mb290ZXIgPiBoMSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2VhNGM4OTtcbn0iLCIvKiBDU1MgZGVzaWduIGJ5IEBqb2ZwaW4gKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5fFZhcmVsYStSb3VuZHxDb2RhKTtcbkBpbXBvcnQgdXJsKGh0dHA6Ly93ZWxvdmVpY29uZm9udHMuY29tL2FwaS8/ZmFtaWx5PWVudHlwbyk7XG5bY2xhc3MqPWVudHlwby1dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVudHlwb1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmZmNkZDtcbiAgcGFkZGluZzogMi4yM2VtO1xufVxuXG4udGl0bGUtcGVuIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGFcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtcGVuIHNwYW4ge1xuICBjb2xvcjogIzU1YWNlZTtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDI1ZW07XG4gIGhlaWdodDogMTFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi51c2VyLXByb2ZpbGUgLnVzZXJuYW1lIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNC40ZW07XG4gIG1hcmdpbi1sZWZ0OiA1LjhlbTtcbiAgY29sb3I6ICM2NTg1ODU7XG4gIGZvbnQtc2l6ZTogMS41M2VtO1xuICBmb250LWZhbWlseTogXCJDb2RhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXNlci1wcm9maWxlIC5iaW8ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwLjQzZW07XG4gIGNvbG9yOiAjZTc2MDQzO1xuICBmb250LXNpemU6IDAuODdlbTtcbiAgZm9udC1mYW1pbHk6IFwidmFyZWxhIHJvdW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbi51c2VyLXByb2ZpbGUgPiAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEuMzVlbTtcbiAgbWFyZ2luLXJpZ2h0OiA0LjQzZW07XG4gIHdpZHRoOiAxNGVtO1xuICBjb2xvcjogI2MwYzVjNTtcbiAgZm9udC1zaXplOiAwLjg3ZW07XG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4udXNlci1wcm9maWxlID4gaW1nLmF2YXRhciB7XG4gIHBhZGRpbmc6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMC4zZW07XG4gIG1hcmdpbi10b3A6IDAuM2VtO1xuICBoZWlnaHQ6IDYuMjNlbTtcbiAgd2lkdGg6IDYuMjNlbTtcbiAgYm9yZGVyLXJhZGl1czogMThlbTtcbn1cblxuLnVzZXItcHJvZmlsZSB1bC5kYXRhIHtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgaGVpZ2h0OiAzLjdlbTtcbiAgYmFja2dyb3VuZDogIzRlYjZiNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMC4zZW0gMC4zZW07XG59XG5cbi51c2VyLXByb2ZpbGUgbGkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMS4zZW07XG4gIHdpZHRoOiAzMy4zMzMzNCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcHJvZmlsZSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwidmFyZWxhIHJvdW5kXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZTNlZWVlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyLXByb2ZpbGUgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjZGFlYmVhO1xufVxuXG5mb290ZXIgPiBoMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LWZhbWlseTogXCJDb2RhXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzQzZjNkO1xuICBsaW5lLWhlaWdodDogNjtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuZm9vdGVyID4gaDEgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlYTRjODk7XG59Il19 */");

/***/ }),

/***/ "./src/app/common-components/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.name = localStorage.getItem('Username');
        this.email = localStorage.getItem('EmailId');
        this.role = "";
    }
    ngOnInit() {
        this.role = this._authService.getRole();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/common-components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/common-components/sidenav/sidenav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/common-components/sidenav/sidenav.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n4px:  $spacer * 0.25\n8px:  $spacer * 0.5\n16px: $spacer\n20px: $spacer * 1.25\n24px: $spacer * 1.5\n*/\nhtml,\nbody {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #2a5c96;\n  background-color: #eeeded;\n  height: 100%;\n}\n.sidebar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.sidebar-toggler .sidebar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf8,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/></svg>\");\n  cursor: pointer;\n}\n.sidebar {\n  position: relative;\n  width: 100%;\n  z-index: 99;\n}\n.sidebar .sidebar-user .category-content {\n  padding: 1rem;\n  text-align: center;\n  color: #fff;\n  background: url(https://picsum.photos/260/80?image=652&blur) center center no-repeat;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n.sidebar .sidebar-user .category-content:first-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.sidebar .sidebar-user .category-content:last-child {\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n.sidebar .sidebar-content {\n  position: relative;\n  border-radius: 0.25rem;\n  margin-bottom: 1.25rem;\n}\n.sidebar .category-title {\n  position: relative;\n  margin: 0;\n  padding: 12px 20px;\n  padding-right: 46px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar.sidebar-default .category-title {\n  border-bottom-color: #b7df96;\n}\n.sidebar.sidebar-default .category-title > span {\n  display: block;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.sidebar.sidebar-default .category-content .nav li > a {\n  color: #2a5c96;\n}\n.sidebar.sidebar-default .category-content .nav li > a.active, .sidebar.sidebar-default .category-content .nav li > a[aria-expanded=true], .sidebar.sidebar-default .category-content .nav li > a:hover, .sidebar.sidebar-default .category-content .nav li > a:focus {\n  background-color: #f4f4f4;\n}\n.sidebar .category-content {\n  position: relative;\n}\n.sidebar .category-content .nav {\n  position: relative;\n  margin: 0;\n  padding: 0.5rem 0;\n}\n.sidebar .category-content .nav li {\n  position: relative;\n  list-style: none;\n}\n.sidebar .category-content .nav li > a {\n  font-size: 0.875rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  -webkit-transition: background 0.15s linear, color 0.15s linear;\n  transition: background 0.15s linear, color 0.15s linear;\n}\n.sidebar .category-content .nav li > a[data-toggle=collapse] {\n  padding-right: 2rem;\n}\n.sidebar .category-content .nav li > a[data-toggle=collapse]:after {\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  display: block;\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 1.5rem;\n  font-weight: normal;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform 0.2s ease-in-out;\n}\n.sidebar .category-content .nav li > a[data-toggle=collapse][aria-expanded=true]:after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.sidebar .category-content .nav li > a > i {\n  float: left;\n  top: 0;\n  margin-top: 2px;\n  margin-right: 15px;\n  -webkit-transition: opacity 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out;\n}\n.sidebar .category-content .nav li ul {\n  padding: 0;\n}\n.sidebar .category-content .nav li ul > li a {\n  padding-left: 2.75rem;\n}\n.sidebar .category-content .nav > li > a {\n  font-weight: 500;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    padding-top: 2rem !important;\n    display: table-cell;\n    vertical-align: top;\n    width: 280px;\n    padding: 0 1.25rem;\n  }\n  .sidebar.sidebar-fixed {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 5.5rem;\n  }\n  .sidebar.sidebar-default .sidebar-category {\n    background-color: #fff;\n  }\n  .sidebar.sidebar-separate .sidebar-content {\n    box-shadow: none;\n  }\n  .sidebar.sidebar-separate .sidebar-category {\n    margin-bottom: 1.25rem;\n    border-radius: 0.25rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n\n  .content-wrapper {\n    display: table-cell;\n    padding: 50px;\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24tY29tcG9uZW50cy9zaWRlbmF2L1o6XFxERk1cXERhdGFGb3JtTWFuYWdlci1Mb2dpbkZlYXR1cmVzXFxEYXRhRm9ybU1hbmFnZXJBcHAvc3JjXFxhcHBcXGNvbW1vbi1jb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ09oQjs7Ozs7O0NBQUE7QUFrQkE7O0VBRUMscUVBQUE7RUFDQSxjQTNCWTtFQTRCWix5QkFBQTtFQUNBLFlBQUE7QURoQkQ7QUNtQkE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QURoQkQ7QUNpQkM7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlQQUFBO0VBQ0EsZUFBQTtBRGZGO0FDbUJBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRGhCRDtBQ2lCQztFQUNDLGFBdERPO0VBdURQLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9GQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FEaEJGO0FDaUJFO0VBQ0MsbUNBaEVhO0VBaUViLGtDQWpFYTtBRGtEaEI7QUNpQkU7RUFDQyxnQ0FwRWE7RUFxRWIsK0JBckVhO0FEc0RoQjtBQ2tCQztFQUNDLGtCQUFBO0VBQ0Esc0JBMUVjO0VBMkVkLHNCQUFBO0FEaEJGO0FDa0JDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FEaEJGO0FDbUJFO0VBQ0MsNEJBekZRO0FEd0VYO0FDa0JHO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBMUVtQjtFQTJFbkIsa0JBNUVXO0FENERmO0FDbUJFO0VBQ0MsY0FuR1U7QURrRmI7QUNrQkc7RUFJQyx5QkFBQTtBRG5CSjtBQ3VCQztFQUNDLGtCQUFBO0FEckJGO0FDc0JFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURwQkg7QUNxQkc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FEbkJKO0FDb0JJO0VBQ0MsbUJBbkhVO0VBb0hWLGlEQUFBO0VBQ0EsK0RBQUE7RUFBQSx1REFBQTtBRGxCTDtBQ21CSztFQUNDLG1CQUFBO0FEakJOO0FDa0JNO0VBQ0Msa0JBQUE7RUFDQSxXQTNHWTtFQTRHWixXQXpIRTtFQTBIRixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4Q0FBQTtBRGhCUDtBQ2tCTTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QURoQlA7QUNtQks7RUFDQyxXQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QURqQk47QUNvQkk7RUFDQyxVQUFBO0FEbEJMO0FDbUJLO0VBQ0MscUJBQUE7QURqQk47QUNxQkc7RUFDQyxnQkF6SW1CO0FEc0h2QjtBQ3dCQTtFQUNDO0lBS0MsNEJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUEzSm1CO0lBNEpuQixrQkFBQTtFRHpCQTtFQ2lCQTtJQUNDLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxXQUFBO0VEZkQ7RUN1QkE7SUFDQyxzQkFBQTtFRHJCRDtFQ3lCQztJQUNDLGdCQUFBO0VEdkJGO0VDeUJDO0lBQ0Msc0JBQUE7SUFDQSxzQkFwTFk7SUFxTFosd0VBcEtpQjtFRDZJbkI7O0VDMkJEO0lBQ0MsbUJBQUE7SUFDRSxhQUFBO0lBQ0QsWUFBQTtFRHhCRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbjRweDogICRzcGFjZXIgKiAwLjI1XG44cHg6ICAkc3BhY2VyICogMC41XG4xNnB4OiAkc3BhY2VyXG4yMHB4OiAkc3BhY2VyICogMS4yNVxuMjRweDogJHNwYWNlciAqIDEuNVxuKi9cbmh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyYTVjOTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGViYXItdG9nZ2xlciB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zaWRlYmFyLXRvZ2dsZXIgLnNpZGViYXItdG9nZ2xlci1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCw8c3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBzdHJva2U9J3JnYmEoMCwgMCwgMCwgMC41KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXVzZXIgLmNhdGVnb3J5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzI2MC84MD9pbWFnZT02NTImYmx1cikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2lkZWJhciAuc2lkZWJhci11c2VyIC5jYXRlZ29yeS1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG4uc2lkZWJhciAuc2lkZWJhci11c2VyIC5jYXRlZ29yeS1jb250ZW50Omxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uc2lkZWJhciAuY2F0ZWdvcnktdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLnNpZGViYXIuc2lkZWJhci1kZWZhdWx0IC5jYXRlZ29yeS10aXRsZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiN2RmOTY7XG59XG4uc2lkZWJhci5zaWRlYmFyLWRlZmF1bHQgLmNhdGVnb3J5LXRpdGxlID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uc2lkZWJhci5zaWRlYmFyLWRlZmF1bHQgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSA+IGEge1xuICBjb2xvcjogIzJhNWM5Njtcbn1cbi5zaWRlYmFyLnNpZGViYXItZGVmYXVsdCAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpID4gYS5hY3RpdmUsIC5zaWRlYmFyLnNpZGViYXItZGVmYXVsdCAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpID4gYVthcmlhLWV4cGFuZGVkPXRydWVdLCAuc2lkZWJhci5zaWRlYmFyLWRlZmF1bHQgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSA+IGE6aG92ZXIsIC5zaWRlYmFyLnNpZGViYXItZGVmYXVsdCAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG4uc2lkZWJhciAuY2F0ZWdvcnktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlYmFyIC5jYXRlZ29yeS1jb250ZW50IC5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG4uc2lkZWJhciAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpZGViYXIgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSA+IGEge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGxpbmVhciwgY29sb3IgMC4xNXMgbGluZWFyO1xufVxuLnNpZGViYXIgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSA+IGFbZGF0YS10b2dnbGU9Y29sbGFwc2VdIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5zaWRlYmFyIC5jYXRlZ29yeS1jb250ZW50IC5uYXYgbGkgPiBhW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjVyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSA+IGFbZGF0YS10b2dnbGU9Y29sbGFwc2VdW2FyaWEtZXhwYW5kZWQ9dHJ1ZV06YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uc2lkZWJhciAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpID4gYSA+IGkge1xuICBmbG9hdDogbGVmdDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLmNhdGVnb3J5LWNvbnRlbnQgLm5hdiBsaSB1bCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2lkZWJhciAuY2F0ZWdvcnktY29udGVudCAubmF2IGxpIHVsID4gbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogMi43NXJlbTtcbn1cbi5zaWRlYmFyIC5jYXRlZ29yeS1jb250ZW50IC5uYXYgPiBsaSA+IGEge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gIH1cbiAgLnNpZGViYXIuc2lkZWJhci1maXhlZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDUuNXJlbTtcbiAgfVxuICAuc2lkZWJhci5zaWRlYmFyLWRlZmF1bHQgLnNpZGViYXItY2F0ZWdvcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNpZGViYXIuc2lkZWJhci1zZXBhcmF0ZSAuc2lkZWJhci1jb250ZW50IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5zaWRlYmFyLnNpZGViYXItc2VwYXJhdGUgLnNpZGViYXItY2F0ZWdvcnkge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIH1cblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59IiwiLy8gQm9vdHN0cmFwIDQgdmFyaWFibGVzXG4kYm9keS1jb2xvcjogcmdiKDQyLCA5MiwgMTUwKTtcbiRncmF5LTMwMDogI2I3ZGY5NjtcbiRmb250LXNpemUtYmFzZTogMXJlbTtcbiRmb250LXNpemUtc206ICgkZm9udC1zaXplLWJhc2UgKiAwLjg3NSk7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRzcGFjZXI6IDFyZW07IC8vIDE2cHhcbi8qXG40cHg6ICAkc3BhY2VyICogMC4yNVxuOHB4OiAgJHNwYWNlciAqIDAuNVxuMTZweDogJHNwYWNlclxuMjBweDogJHNwYWNlciAqIDEuMjVcbjI0cHg6ICRzcGFjZXIgKiAxLjVcbiovXG5cbi8vIGN1c3RvbSB2YXJpYWJsZXNcbiRzaWRlYmFyLWJyZWFrcG9pbnQ6IDc2OHB4O1xuJHNpZGViYXItYmFzZS13aWR0aDogMjgwcHg7XG4kaGVhZGVyLW1kLWhlaWdodDogNC41cmVtO1xuJHNpZGViYXItc3BhY2VyLXk6ICRzcGFjZXIgKiAwLjU7XG4kZm9udC1zaXplLXhzOiAoJGZvbnQtc2l6ZS1iYXNlICogMC43NSk7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDUwMDtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuXHQwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuaHRtbCxcbmJvZHkge1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogJGJvZHktY29sb3I7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWQ7XG5cdGhlaWdodDogMTAwJTsgLy8gcmVxdWlyZWQgZm9yIHN0aWNreSBzaWRlYmFyXG59XG5cbi5zaWRlYmFyLXRvZ2dsZXIge1xuXHRwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0bGluZS1oZWlnaHQ6IDE7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdC5zaWRlYmFyLXRvZ2dsZXItaWNvbiB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHdpZHRoOiAxLjVlbTtcblx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LDxzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIHN0cm9rZT0ncmdiYSgwLCAwLCAwLCAwLjUpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cblxuLnNpZGViYXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHR6LWluZGV4OiA5OTtcblx0LnNpZGViYXItdXNlciAuY2F0ZWdvcnktY29udGVudCB7XG5cdFx0cGFkZGluZzogJHNwYWNlcjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy8yNjAvODA/aW1hZ2U9NjUyJmJsdXIpIGNlbnRlciBjZW50ZXJcblx0XHRcdG5vLXJlcGVhdDtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcblx0XHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXHRcdH1cblx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG5cdFx0fVxuXHR9XG5cdC5zaWRlYmFyLWNvbnRlbnQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcblx0XHRtYXJnaW4tYm90dG9tOiAkc3BhY2VyICogMS4yNTtcblx0fVxuXHQuY2F0ZWdvcnktdGl0bGUge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDQ2cHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblx0fVxuXHQmLnNpZGViYXItZGVmYXVsdCB7XG5cdFx0LmNhdGVnb3J5LXRpdGxlIHtcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICRncmF5LTMwMDtcblx0XHRcdD4gc3BhbiB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuXHRcdFx0XHRmb250LXNpemU6ICRmb250LXNpemUteHM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jYXRlZ29yeS1jb250ZW50IC5uYXYgbGkgPiBhIHtcblx0XHRcdGNvbG9yOiAkYm9keS1jb2xvcjtcblx0XHRcdCYuYWN0aXZlLFxuXHRcdFx0JlthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSxcblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmNhdGVnb3J5LWNvbnRlbnQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQubmF2IHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6ICRzaWRlYmFyLXNwYWNlci15IDA7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0PiBhIHtcblx0XHRcdFx0XHRmb250LXNpemU6ICRmb250LXNpemUtc207XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGxpbmVhciwgY29sb3IgMC4xNXMgbGluZWFyO1xuXHRcdFx0XHRcdCZbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAkc3BhY2VyICogMjtcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogJHNpZGViYXItc3BhY2VyLXk7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAkc3BhY2VyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JlthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTphZnRlciB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PiBpIHtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHQ+IGxpIGEge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAkc3BhY2VyICogMi43NTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdD4gbGkgPiBhIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1zZW1pYm9sZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAkc2lkZWJhci1icmVha3BvaW50KSB7XG5cdC5zaWRlYmFyIHtcblx0XHQmLnNpZGViYXItZml4ZWQge1xuXHRcdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRcdHRvcDogJGhlYWRlci1tZC1oZWlnaHQgKyAkc3BhY2VyO1xuXHRcdH1cblx0XHRwYWRkaW5nLXRvcDogJHNwYWNlciAqIDIgIWltcG9ydGFudDtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0d2lkdGg6ICRzaWRlYmFyLWJhc2Utd2lkdGg7XG5cdFx0cGFkZGluZzogMCAkc3BhY2VyICogMS4yNTtcblxuXHRcdCYuc2lkZWJhci1kZWZhdWx0IC5zaWRlYmFyLWNhdGVnb3J5IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0fVxuXG5cdFx0Ji5zaWRlYmFyLXNlcGFyYXRlIHtcblx0XHRcdC5zaWRlYmFyLWNvbnRlbnQge1xuXHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0fVxuXHRcdFx0LnNpZGViYXItY2F0ZWdvcnkge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAkc3BhY2VyICogMS4yNTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG5cdFx0XHRcdGJveC1zaGFkb3c6ICRkZWZhdWx0LWJveC1zaGFkb3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5jb250ZW50LXdyYXBwZXIge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIFx0XHRwYWRkaW5nOiA1MHB4O1xuIFx0XHRtYXJnaW46IDIwcHg7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/common-components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");



let SidenavComponent = class SidenavComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.$isRoleSet.subscribe(res => {
            this.role = res;
        });
        this.authService.$isNameSet.subscribe(res => {
            this.name = res;
        });
    }
    isUserLoggedIn() {
        return this.authService.loggedIn();
    }
};
SidenavComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/common-components/sidenav/sidenav.component.scss")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/form-module/services/userspecificform.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/form-module/services/userspecificform.service.ts ***!
  \******************************************************************/
/*! exports provided: UserSpecificFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSpecificFormsService", function() { return UserSpecificFormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/app-settings */ "./src/app/utils/app-settings.ts");




let UserSpecificFormsService = class UserSpecificFormsService {
    constructor(http) {
        this.http = http;
        this.usfUrl = _utils_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseUrl + 'userSpecificforms/';
    }
    getForms(formName) {
        return this.http.get(this.usfUrl + formName);
    }
};
UserSpecificFormsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserSpecificFormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserSpecificFormsService);



/***/ }),

/***/ "./src/app/global-error-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/global-error-handler.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let GlobalErrorHandler = class GlobalErrorHandler {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        console.log('Request URL: ${router.url');
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
            console.error('BackEnd returned status code:', error.status);
            console.error('Response body:', error.message);
        }
        else {
            console.error('An error occured', error.message);
        }
        window.alert(error.message);
        router.navigate(['error']);
    }
};
GlobalErrorHandler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
GlobalErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalErrorHandler);



/***/ }),

/***/ "./src/app/models/token.ts":
/*!*********************************!*\
  !*** ./src/app/models/token.ts ***!
  \*********************************/
/*! exports provided: Token, CodeObject, RefreshTokenObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeObject", function() { return CodeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenObject", function() { return RefreshTokenObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Token {
}
class CodeObject {
}
class RefreshTokenObject {
}


/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/token */ "./src/app/models/token.ts");
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/app-settings */ "./src/app/utils/app-settings.ts");









let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        const authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        if (authService.getAccessTokenFromLocalStorage()) {
            request = this.addToken(request, authService.getAccessTokenFromLocalStorage());
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401) {
                return this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            }
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                // tslint:disable-next-line: object-literal-key-quotes
                'Authorization': `Bearer ${token}`
            }
        });
    }
    handle401Error(request, next) {
        const authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        const url = window.location.href;
        if (authService.getRefreshTokenFromLocalStorage() && url.includes('RefreshToken')) {
            var refreshTokenObj = new _models_token__WEBPACK_IMPORTED_MODULE_6__["RefreshTokenObject"]();
            var tokenObj = new _models_token__WEBPACK_IMPORTED_MODULE_6__["Token"]();
            refreshTokenObj.RefreshToken = authService.getRefreshTokenFromLocalStorage();
            return authService.getAccesTokenByRefreshToken(refreshTokenObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((token) => {
                tokenObj = token;
                localStorage.setItem('accessToken', tokenObj.AccessToken);
                localStorage.setItem('refreshToken', tokenObj.RefreshToken);
                localStorage.setItem('expiresIn', tokenObj.ExpiresIn);
                localStorage.setItem('Username', tokenObj.Username);
                localStorage.setItem('EmailId', tokenObj.EmailId);
                return next.handle(this.addToken(request, authService.getAccessTokenFromLocalStorage()));
            }));
        }
        else {
            window.location.href = _utils_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].baseUrl + 'login/getauthcode';
        }
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/utils/app-settings.ts":
/*!***************************************!*\
  !*** ./src/app/utils/app-settings.ts ***!
  \***************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppSettings {
}
AppSettings.baseUrl = 'http://dataformmanager.dev37.grcdev.com/api/';


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\DFM\DataFormManager-LoginFeatures\DataFormManagerApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map