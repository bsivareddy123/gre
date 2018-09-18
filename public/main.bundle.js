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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_components_onlinevideos_video1_service__ = __webpack_require__("../../../../../src/app/components/onlinevideos/video1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_helper_service__ = __webpack_require__("../../../../../src/app/services/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_start_start_component__ = __webpack_require__("../../../../../src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_practicetest_practicetest_component__ = __webpack_require__("../../../../../src/app/components/practicetest/practicetest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_full_length_full_length_component__ = __webpack_require__("../../../../../src/app/components/full-length/full-length.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_feedback_feedback_component__ = __webpack_require__("../../../../../src/app/components/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tips_tips_component__ = __webpack_require__("../../../../../src/app/components/tips/tips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_onlinevideos_video1_video1_component__ = __webpack_require__("../../../../../src/app/components/onlinevideos/video1/video1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_onlinevideos_video2_video2_component__ = __webpack_require__("../../../../../src/app/components/onlinevideos/video2/video2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_onlinevideos_exam_exam_component__ = __webpack_require__("../../../../../src/app/components/onlinevideos/exam/exam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_timer_timer_component__ = __webpack_require__("../../../../../src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/components/forgot/forgot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// services

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_18__components_start_start_component__["a" /* StartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'practicetest', component: __WEBPACK_IMPORTED_MODULE_19__components_practicetest_practicetest_component__["a" /* PracticetestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'full-length', component: __WEBPACK_IMPORTED_MODULE_20__components_full_length_full_length_component__["a" /* FullLengthComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_21__components_feedback_feedback_component__["a" /* FeedbackComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'tips', component: __WEBPACK_IMPORTED_MODULE_23__components_tips_tips_component__["a" /* TipsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_22__components_videos_videos_component__["a" /* VideosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_27__components_test_test_component__["a" /* TestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_28__components_timer_timer_component__["a" /* TimerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_29__components_forgot_forgot_component__["a" /* ForgotComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_practicetest_practicetest_component__["a" /* PracticetestComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_full_length_full_length_component__["a" /* FullLengthComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_tips_tips_component__["a" /* TipsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_onlinevideos_video1_video1_component__["a" /* Video1Component */],
                __WEBPACK_IMPORTED_MODULE_25__components_onlinevideos_video2_video2_component__["a" /* Video2Component */],
                __WEBPACK_IMPORTED_MODULE_26__components_onlinevideos_exam_exam_component__["a" /* ExamComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_forgot_forgot_component__["a" /* ForgotComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__services_feedback_service__["a" /* FeedbackService */],
                __WEBPACK_IMPORTED_MODULE_10__services_navbar_service__["a" /* NavbarService */],
                __WEBPACK_IMPORTED_MODULE_11__app_components_onlinevideos_video1_service__["a" /* Video1Service */],
                __WEBPACK_IMPORTED_MODULE_12__services_quiz_service__["a" /* QuizService */],
                __WEBPACK_IMPORTED_MODULE_13__services_helper_service__["a" /* HelperService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-header></app-header>\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\" style=\"min-height: 637px; height: auto;\">\n    <section class=\"content-header\">\n        <h1>\n          \n          <small></small>\n        </h1>\n        <ol class=\"breadcrumb\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fa fa-dashboard\"></i> Level</a>\n          </li>\n          <li class=\"active\">feedBackForm</li>\n        </ol>\n      </section>\n                  <div class=\"container-fluid\" id=\"page-body\">\n                        <div class=\"col-lg-7 col-md-offset-2\" id=\"form\">\n                          <div class=\"box box-primary\" style=\"position: relative;top: 35px;\">\n                            <div class=\"box-header\">\n                              <h3 class=\"box-title\">FeedBack Form</h3>\n                            </div>\n                            <hr><br>\n                            <div class=\"box-body\">\n                           <form (submit)=\"addFeedback()\" class=\"bs-example form-horizontal\">\n                              \n                                <div class=\"form-group\">\n                                  <label class=\"col-lg-3 control-label\">Name</label>\n                                  <div class=\"col-lg-5\">\n                                    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Enter Name\" required=\"true\" value=\"\" class=\"form-control t-alphabets\" id=\"name\">\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"col-lg-3 control-label\">Email</label>\n                                  <div class=\"col-lg-5\">\n                                    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter E-mail\"  class=\"form-control t-email\">\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"col-lg-3 control-label\">Mobile</label>\n                                  <div class=\"col-lg-5\">\n                                  <input type=\"number\" [(ngModel)]=\"mobile\" name=\"mobile\" placeholder=\"Enter Mobile Number\" required=\"true\" class=\"form-control t-numeric\">\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"col-lg-3 control-label\">Subject</label>\n                                  <div class=\"col-lg-5\">\n                                    <input type=\"text\" [(ngModel)]=\"subject\" name=\"subject\" placeholder=\"Enter Subject\" required=\"true\" class=\"form-control\">\n                                  </div>\n                                 </div>\n                                 <div class=\"form-group\">\n                                  <label class=\"col-lg-3 control-label\">Message</label>\n                                  <div class=\"col-lg-5\">\n                                    <textarea name=\"message\" [(ngModel)]=\"message\" placeholder=\"Enter Message\" required=\"true\" class=\"form-control\"></textarea>\n                                  </div>\n                                 </div>\n                                <div class=\"form-group box-footer\">\n                                  <div class=\"col-lg-offset-3 col-lg-5\">\n                                    <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit FeedBack</button>\n                                    <button class=\"btn btn-sm btn-default\" type=\"reset\" style=\"border-color: #666;\">Reset</button>\n                                  </div>\n                                </div>\n                               \n                                <p *ngIf=\"msg\">Send your details Successfully.contact soon....... </p>\n                             </form>\n                         \n                           </div>\n                          \n                          </div>\n                        </div>\n                      </div>\n              \n                 \n        <!-- /.content -->\n        </div>\n    <!-- /.content-wrapper -->\n  \n    <!-- Add the sidebar's background. This div must be placed\n         immediately after the control sidebar -->\n    <div class=\"control-sidebar-bg\"></div>\n  </div>\n  <!-- ./wrapper -->\n \n</body>"

/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = (function () {
    function FeedbackComponent(authService, router, http, feedbackService) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.feedbackService = feedbackService;
        this.msg = false;
        this.isDev = true;
    }
    FeedbackComponent.prototype.addFeedback = function () {
        var _this = this;
        var newFeedback = {
            email: this.email,
            name: this.name,
            mobile: this.mobile,
            subject: this.subject,
            message: this.message,
            date: this.date
        };
        this.msg = true;
        this.feedbackService.addFeedback(newFeedback).subscribe(function (feedback) {
            _this.feedbacks.push(feedback);
            _this.feedbackService.getFeedbacks()
                .subscribe(function (feedbacks) {
                return _this.feedbacks = feedbacks;
            });
        });
        console.log("send details");
    };
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackService.getFeedbacks()
            .subscribe(function (feedbacks) {
            return _this.feedbacks = feedbacks;
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__("../../../../../src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skins {\r\n    position: fixed;\r\n    top: 140px;\r\n    right: -160px;\r\n    transition: .3s ease-in-out;\r\n    z-index: 9999;\r\n}\r\n\r\n.skins:hover {\r\n    right: 0;\r\n}\r\n\r\n.skin-colors,\r\n.layout-select,\r\n.sidebar-select{\r\n    list-style: none;\r\n    padding: 20px;\r\n    margin: 0;\r\n    background-color: #fff;\r\n    width: 160px;\r\n    border: 1px solid #e7e7e7;\r\n}\r\n\r\n.skin-colors li {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    cursor: pointer;\r\n    margin: -3px;\r\n    line-height: 0;\r\n    transition: .3s ease-in-out;\r\n}\r\n\r\n.layout-select li,\r\n.sidebar-select li{\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    padding: 1px;\r\n}\r\n.skin-colors li.active::before {\r\n    content: \"\\F00C\";\r\n    font-family: FontAwesome;\r\n    font-size: 20px;\r\n    width: 32px;\r\n    line-height: 32px;\r\n    text-align: center;\r\n    position: absolute;\r\n    color: #fff;\r\n}\r\n\r\n.skin-toggler {\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    left: -49px;\r\n    top: 0;\r\n    background-color: #fff;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    color: #888;\r\n    border: 1px solid #e7e7e7;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .layout-select,\r\n    .sidebar-select{\r\n        display:none;\r\n    }\r\n}\r\n\r\n.layout-boxed body,.layout-boxed html,.wrapper,body,html{\r\n    height:100%\r\n}\r\n.wrapper,body{\r\n    overflow-x:hidden;\r\n    overflow-y:auto\r\n}\r\n.box-comments .box-comment:after,.contacts-list>li:after,.control-sidebar-menu>li>a:after,.direct-chat-msg:after,.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:after,.navbar-nav>.user-menu>.dropdown-menu>.user-body:after,.navbar-nav>.user-menu>.dropdown-menu>.user-footer:after,.price-car,.timeline>li:after,.user-block:after,.user-panel:after,.wrapper:after{\r\n    clear:both\r\n}\r\n\r\n.wrapper{\r\n    position:relative\r\n}\r\n.wrapper:after,.wrapper:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.layout-boxed .wrapper{\r\n    max-width:1250px;\r\n    margin:0 auto;\r\n    min-height:100%;\r\n    box-shadow:0 0 8px rgba(0,0,0,.5);\r\n    position:relative\r\n}\r\n\r\n.fixed .left-side,.fixed .sidebar-left,.fixed .top-menu-header{\r\n    position:fixed\r\n}\r\n.fixed .top-menu-header{\r\n    top:0;\r\n    right:0;\r\n    left:0\r\n}\r\n.fixed .content-wrapper{\r\n    padding-top:50px\r\n}\r\n.fixed.layout-boxed .wrapper{\r\n    max-width:100%\r\n}\r\nbody.hold-transition .content-wrapper,body.hold-transition .left-side,body.hold-transition .main-footer,body.hold-transition .sidebar-left,body.hold-transition .top-menu-header .logo,body.hold-transition .top-menu-header .navbar{\r\n    transition:none\r\n}\r\n.content-wrapper,.main-footer{\r\n    transition:transform .3s ease-in-out,margin .3s ease-in-out;\r\n    margin-left:230px;\r\n    z-index:820\r\n}\r\n.layout-top-nav .content-wrapper,.layout-top-nav .main-footer{\r\n    margin-left:0\r\n}\r\n@media (min-width:768px){\r\n    .sidebar-collapse .content-wrapper,.sidebar-collapse .main-footer{\r\n        margin-left:0\r\n    }\r\n}\r\n@media (max-width:767px){\r\n    .fixed .content-wrapper{\r\n        padding-top:100px\r\n    }\r\n    .content-wrapper,.main-footer{\r\n        margin-left:0\r\n    }\r\n    .sidebar-open .content-wrapper,.sidebar-open .main-footer{\r\n        transform:translate(230px,0)\r\n    }\r\n}\r\n.content-wrapper{\r\n    min-height:100%;\r\n    background-color:#f1f1f1;\r\n    z-index:800\r\n}\r\n.main-footer{\r\n    background:#fff;\r\n    padding:15px;\r\n    color:#444;\r\n    box-shadow:0 5px 25px #888\r\n}\r\n.content{\r\n    min-height:250px;\r\n    padding:15px;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n}\r\n.page-header{\r\n    margin:10px 0 20px;\r\n    font-size:22px\r\n}\r\n.page-header>small{\r\n    color:#666;\r\n    display:block;\r\n    margin-top:5px\r\n}\r\na{\r\n    color:#00c0ef\r\n}\r\na:active,a:focus,a:hover{\r\n    outline:0;\r\n    text-decoration:none;\r\n    color:#4FC3F7\r\n}\r\n.top-menu-header{\r\n    position:relative;\r\n    max-height:100px;\r\n    z-index:1030;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.26)\r\n}\r\n.top-menu-header .navbar{\r\n    transition:margin-left .3s ease-in-out;\r\n    margin-bottom:0;\r\n    margin-left:230px;\r\n    border:none;\r\n    min-height:50px;\r\n    border-radius:0\r\n}\r\n#navbar-search{\r\n    max-height:50px;\r\n    height:50px;\r\n    border:none!important;\r\n    padding:0 20px;\r\n    background-image:none\r\n}\r\n.input-group .input-group-addon{\r\n    border:0;\r\n    background:0 0;\r\n    padding:0 15px\r\n}\r\n.top-menu-navbar-search .form-group{\r\n    margin-bottom:0;\r\n    margin-top:0;\r\n    padding-bottom:0\r\n}\r\n.top-menu-navbar-search{\r\n    background-color:#fff;\r\n    left:0;\r\n    position:absolute!important;\r\n    right:0;\r\n    top:0;\r\n    bottom:0\r\n}\r\n.top-menu-header .navbar-right,.top-menu-header .navbar-top-menu{\r\n    float:right;\r\n    font-size:15px\r\n}\r\n@media (max-width:991px){\r\n    .top-menu-header .navbar-right a,.top-menu-header .navbar-top-menu a{\r\n        color:inherit;\r\n        background:0 0\r\n    }\r\n}\r\n@media (max-width:767px){\r\n    .top-menu-header .navbar-right{\r\n        float:none\r\n    }\r\n    .navbar-collapse .top-menu-header .navbar-right{\r\n        margin:7.5px -15px\r\n    }\r\n    .top-menu-header .navbar-right>li{\r\n        color:inherit;\r\n        border:0\r\n    }\r\n}\r\n.top-menu-header .navbar-brand,.top-menu-header .sidebar-toggle:hover{\r\n    color:#fff\r\n}\r\n.top-menu-header .sidebar-toggle{\r\n    float:left;\r\n    background-color:transparent;\r\n    background-image:none;\r\n    padding:15px;\r\n    font-family:fontAwesome\r\n}\r\n.top-menu-header .sidebar-toggle:before{\r\n    content:\"\\F0C9\"\r\n}\r\n.top-menu-header .sidebar-toggle:active,.top-menu-header .sidebar-toggle:focus{\r\n    background:0 0\r\n}\r\n.top-menu-header .sidebar-toggle .icon-bar{\r\n    display:none\r\n}\r\n.top-menu-header .navbar .nav>li.user>a>.fa,.top-menu-header .navbar .nav>li.user>a>.glyphicon,.top-menu-header .navbar .nav>li.user>a>.ion{\r\n    margin-right:5px\r\n}\r\n.top-menu-header .navbar .nav>li>a>.label{\r\n    position:absolute;\r\n    top:9px;\r\n    right:7px;\r\n    text-align:center;\r\n    font-size:9px;\r\n    padding:2px 3px;\r\n    line-height:.9\r\n}\r\n.top-menu-header .logo{\r\n    transition:width .3s ease-in-out;\r\n    display:block;\r\n    float:left;\r\n    height:50px;\r\n    font-size:20px;\r\n    line-height:50px;\r\n    text-align:center;\r\n    width:230px;\r\n    padding:0 15px;\r\n    font-weight:300;\r\n    overflow:hidden\r\n}\r\n.top-menu-header .logo .logo-lg{\r\n    display:block\r\n}\r\n.top-menu-header .logo .logo-mini{\r\n    display:none\r\n}\r\n.content-title{\r\n    position:relative;\r\n    padding:17px;\r\n    background-color:#fff;\r\n    box-shadow:0 0 10px rgba(0,0,0,.15)\r\n}\r\n.content-title>h1{\r\n    margin:0;\r\n    font-size:16px;\r\n    font-weight:700;\r\n    text-transform:uppercase\r\n}\r\n.content-title>h1>small{\r\n    font-size:15px;\r\n    display:inline-block;\r\n    padding-left:4px;\r\n    font-weight:300\r\n}\r\n.content-title>.breadcrumb{\r\n    float:right;\r\n    background:#e4e4e4;\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    font-size:12px;\r\n    padding:5px 10px;\r\n    position:absolute;\r\n    top:15px;\r\n    right:10px;\r\n    border-radius:2px\r\n}\r\n.content-title>.breadcrumb>li>a{\r\n    color:#444;\r\n    text-decoration:none;\r\n    display:inline-block\r\n}\r\n.content-title>.breadcrumb>li>a>.fa,.content-title>.breadcrumb>li>a>.glyphicon,.content-title>.breadcrumb>li>a>.ion{\r\n    margin-right:5px\r\n}\r\n.content-title>.breadcrumb>li+li:before{\r\n    content:'>\\A0'\r\n}\r\n@media (max-width:991px){\r\n    .content-title>.breadcrumb{\r\n        position:relative;\r\n        margin-top:5px;\r\n        top:0;\r\n        right:0;\r\n        float:none;\r\n        background:#d2d6de;\r\n        padding-left:10px\r\n    }\r\n    .content-title>.breadcrumb li:before{\r\n        color:#97a0b3\r\n    }\r\n    .navbar-top-menu .navbar-nav>li{\r\n        float:left\r\n    }\r\n    .navbar-top-menu .navbar-nav{\r\n        margin:0;\r\n        float:left\r\n    }\r\n    .navbar-top-menu .navbar-nav>li>a{\r\n        padding-top:15px;\r\n        padding-bottom:15px;\r\n        line-height:20px\r\n    }\r\n}\r\n.navbar-toggle{\r\n    color:#fff;\r\n    border:0;\r\n    margin:0;\r\n    padding:15px\r\n}\r\n@media (max-width:767px){\r\n    .top-menu-header{\r\n        position:relative\r\n    }\r\n    .top-menu-header .logo,.top-menu-header .navbar{\r\n        width:100%;\r\n        float:none\r\n    }\r\n    .top-menu-header .navbar{\r\n        margin:0\r\n    }\r\n    .top-menu-header .navbar-top-menu{\r\n        float:right\r\n    }\r\n}\r\n@media (max-width:991px){\r\n    .navbar-collapse.pull-left{\r\n        float:none!important\r\n    }\r\n    .navbar-collapse.pull-left+.navbar-top-menu{\r\n        display:block;\r\n        position:absolute;\r\n        top:0;\r\n        right:40px\r\n    }\r\n}\r\n.left-side,.sidebar-left{\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    padding-top:50px;\r\n    min-height:100%;\r\n    width:230px;\r\n    z-index:810;\r\n    transition:transform .3s ease-in-out,width .3s ease-in-out\r\n}\r\n@media (max-width:767px){\r\n    .left-side,.sidebar-left{\r\n        padding-top:100px;\r\n        transform:translate(-230px,0)\r\n    }\r\n}\r\n@media (min-width:768px){\r\n    .sidebar-collapse .left-side,.sidebar-collapse .sidebar-left{\r\n        transform:translate(-230px,0)\r\n    }\r\n}\r\n@media (max-width:767px){\r\n    .sidebar-open .left-side,.sidebar-open .sidebar-left{\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n.sidebar{\r\n    padding-bottom:10px\r\n}\r\n.sidebar-form input:focus{\r\n    border-color:transparent\r\n}\r\n.user-panel{\r\n    position:relative;\r\n    width:100%;\r\n    padding:10px;\r\n    overflow:hidden;\r\n    margin-bottom:10px\r\n}\r\n.user-panel:after,.user-panel:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.user-panel>.image>img{\r\n    width:100%;\r\n    max-width:90px;\r\n    height:auto;\r\n    margin-top:10px\r\n}\r\n.user-panel>.info{\r\n    padding:5px 5px 5px 15px;\r\n    line-height:1;\r\n    position:absolute;\r\n    left:105px;\r\n    margin-top:15px\r\n}\r\n.user-panel>.info>p{\r\n    font-weight:600;\r\n    margin-bottom:9px\r\n}\r\n.user-panel>.info>a{\r\n    text-decoration:none;\r\n    padding-right:5px;\r\n    margin-top:3px;\r\n    font-size:11px\r\n}\r\n.user-panel>.info>a>.fa,.user-panel>.info>a>.glyphicon,.user-panel>.info>a>.ion{\r\n    margin-right:3px\r\n}\r\n.user-panel>.info>ul{\r\n    float:left;\r\n    list-style:none;\r\n    margin:5px 0 0 -5px;\r\n    padding:0;\r\n    width:100%\r\n}\r\n.user-panel>.info>ul>li{\r\n    float:left;\r\n    margin-right:1px\r\n}\r\n.user-panel>.info>ul>li a{\r\n    color:#fff;\r\n    float:left;\r\n    font-size:16px;\r\n    height:20px;\r\n    line-height:30px;\r\n    text-align:center;\r\n    width:25px\r\n}\r\n.user-panel .report-today{\r\n    float:left;\r\n    width:100%\r\n}\r\n.user-panel .report-today h5{\r\n    color:#fff;\r\n    font-weight:700\r\n}\r\n.user-panel .report-today ul{\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0\r\n}\r\n.user-panel .report-today ul li{\r\n    float:left;\r\n    padding:0 1px;\r\n    width:33.333%\r\n}\r\n.user-panel .report-today ul li span{\r\n    color:#fff;\r\n    background:#698896;\r\n    float:left;\r\n    font-size:15px;\r\n    padding:5px 0 7px;\r\n    text-align:center;\r\n    width:100%;\r\n    font-weight:700\r\n}\r\n.user-panel .report-today ul li span i{\r\n    color:#fff;\r\n    float:left;\r\n    font-size:12px;\r\n    font-style:normal;\r\n    letter-spacing:.3px;\r\n    line-height:14px;\r\n    width:100%\r\n}\r\n.sidebar-menu{\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0\r\n}\r\n.sidebar-menu>li{\r\n    position:relative;\r\n    margin:0;\r\n    padding:0\r\n}\r\n.sidebar-menu>li>a{\r\n    padding:12px 5px 12px 15px;\r\n    display:block\r\n}\r\n.sidebar-menu>li>a>.fa,.sidebar-menu>li>a>.glyphicon,.sidebar-menu>li>a>.ion{\r\n    width:20px\r\n}\r\n.sidebar-menu>li .badge,.sidebar-menu>li .label{\r\n    margin-right:5px\r\n}\r\n.sidebar-menu>li .badge{\r\n    margin-top:3px\r\n}\r\n.sidebar-menu li.header{\r\n    padding:10px 25px 10px 15px;\r\n    font-size:12px\r\n}\r\n.sidebar-menu li>a>.fa-angle-right,.sidebar-menu li>a>.pull-right-container>.fa-angle-right{\r\n    width:auto;\r\n    height:auto;\r\n    padding:0;\r\n    margin-right:10px\r\n}\r\n.sidebar-menu li>a>.fa-angle-right{\r\n    position:absolute;\r\n    top:50%;\r\n    right:10px;\r\n    margin-top:-8px\r\n}\r\n.sidebar-menu li.active>a>.fa-angle-right,.sidebar-menu li.active>a>.pull-right-container>.fa-angle-right{\r\n    transform:rotate(90deg)\r\n}\r\n.sidebar-menu li.active>.treeview-menu{\r\n    display:block\r\n}\r\n.sidebar-menu .treeview-menu{\r\n    display:none;\r\n    list-style:none;\r\n    padding:0 0 0 5px;\r\n    margin:0\r\n}\r\n.sidebar-menu .treeview-menu .treeview-menu{\r\n    padding-left:20px\r\n}\r\n.sidebar-menu .treeview-menu>li{\r\n    margin:0\r\n}\r\n.sidebar-menu .treeview-menu>li>a{\r\n    padding:5px 5px 5px 15px;\r\n    display:block;\r\n    font-size:14px\r\n}\r\n.sidebar-menu .treeview-menu>li>a>.fa,.sidebar-menu .treeview-menu>li>a>.glyphicon,.sidebar-menu .treeview-menu>li>a>.ion{\r\n    width:20px\r\n}\r\n.sidebar-menu .treeview-menu>li>a>.fa-angle-down,.sidebar-menu .treeview-menu>li>a>.fa-angle-right,.sidebar-menu .treeview-menu>li>a>.pull-right-container>.fa-angle-down,.sidebar-menu .treeview-menu>li>a>.pull-right-container>.fa-angle-right{\r\n    width:auto\r\n}\r\n@media (min-width:768px){\r\n    .sidebar-mini.sidebar-collapse .content-wrapper,.sidebar-mini.sidebar-collapse .main-footer{\r\n        margin-left:50px!important;\r\n        z-index:840\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-left{\r\n        transform:translate(0,0);\r\n        width:50px!important;\r\n        z-index:850\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li{\r\n        position:relative\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li>a{\r\n        margin-right:0\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li>a>span{\r\n        border-top-right-radius:4px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:not(.treeview)>a>span{\r\n        border-bottom-right-radius:4px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li>.treeview-menu{\r\n        padding-top:5px;\r\n        padding-bottom:5px;\r\n        border-bottom-right-radius:4px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>.treeview-menu,.sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>a>span:not(.pull-right){\r\n        display:block!important;\r\n        position:absolute;\r\n        width:180px;\r\n        left:50px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>a>span{\r\n        top:0;\r\n        margin-left:-3px;\r\n        padding:12px 5px 12px 20px;\r\n        background-color:inherit\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>a>.pull-right-container{\r\n        position:relative!important;\r\n        float:right;\r\n        width:auto!important;\r\n        left:180px!important;\r\n        top:-22px!important;\r\n        z-index:900\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>a>.pull-right-container>.label:not(:first-of-type){\r\n        display:none\r\n    }\r\n    .sidebar-mini.sidebar-collapse .sidebar-menu>li:hover>.treeview-menu{\r\n        top:44px;\r\n        margin-left:0\r\n    }\r\n  \r\n    .sidebar-mini.sidebar-collapse .top-menu-header .logo{\r\n        width:50px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .top-menu-header .logo>.logo-mini{\r\n        display:block;\r\n        margin-left:-15px;\r\n        margin-right:-15px;\r\n        font-size:18px\r\n    }\r\n    .sidebar-mini.sidebar-collapse .top-menu-header .logo>.logo-lg{\r\n        display:none\r\n    }\r\n    .sidebar-mini.sidebar-collapse .top-menu-header .navbar{\r\n        margin-left:50px\r\n    }\r\n    .control-sidebar-open .content-wrapper,.control-sidebar-open .main-footer{\r\n        margin-right:230px\r\n    }\r\n}\r\n.sidebar-collapse .sidebar .user-panel{\r\n    display:none\r\n}\r\n.sidebar-left .user-panel,.sidebar-menu,.sidebar-menu>li.header{\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n    padding-bottom:10px\r\n}\r\n.sidebar-menu:hover{\r\n    overflow:visible\r\n}\r\n.sidebar-form,.sidebar-menu>li.header{\r\n    overflow:hidden;\r\n    text-overflow:clip\r\n}\r\n.btn-social,.btn-social-icon,.info-box-text{\r\n    text-overflow:ellipsis\r\n}\r\n.sidebar-menu li>a{\r\n    position:relative\r\n}\r\n.sidebar-menu li>a>.pull-right-container{\r\n    position:absolute;\r\n    right:10px;\r\n    top:50%;\r\n    margin-top:-7px\r\n}\r\n.control-sidebar-bg{\r\n    position:fixed;\r\n    z-index:1000;\r\n    bottom:0\r\n}\r\n.control-sidebar,.control-sidebar-bg{\r\n    top:0;\r\n    right:-230px;\r\n    width:230px;\r\n    transition:right .3s ease-in-out\r\n}\r\n.control-sidebar{\r\n    position:absolute;\r\n    padding-top:50px;\r\n    z-index:1010\r\n}\r\n@media (max-width:768px){\r\n    .control-sidebar{\r\n        padding-top:100px\r\n    }\r\n    .nav-tabs.control-sidebar-tabs{\r\n        display:table\r\n    }\r\n    .nav-tabs.control-sidebar-tabs>li{\r\n        display:table-cell\r\n    }\r\n}\r\n.control-sidebar>.tab-content{\r\n    padding:10px 15px\r\n}\r\n.control-sidebar-open .control-sidebar,.control-sidebar-open .control-sidebar-bg,.control-sidebar.control-sidebar-open,.control-sidebar.control-sidebar-open+.control-sidebar-bg{\r\n    right:0\r\n}\r\n.nav-tabs.control-sidebar-tabs>li:first-of-type>a,.nav-tabs.control-sidebar-tabs>li:first-of-type>a:focus,.nav-tabs.control-sidebar-tabs>li:first-of-type>a:hover{\r\n    border-left-width:0\r\n}\r\n.nav-tabs.control-sidebar-tabs>li>a{\r\n    border-radius:0\r\n}\r\n.nav-tabs.control-sidebar-tabs>li>a,.nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    border-top:none;\r\n    border-right:none;\r\n    border-left:1px solid transparent;\r\n    border-bottom:1px solid transparent\r\n}\r\n.nav-tabs.control-sidebar-tabs>li>a .icon{\r\n    font-size:16px\r\n}\r\n.nav-tabs.control-sidebar-tabs>li.active>a,.nav-tabs.control-sidebar-tabs>li.active>a:active,.nav-tabs.control-sidebar-tabs>li.active>a:focus,.nav-tabs.control-sidebar-tabs>li.active>a:hover{\r\n    border-top:none;\r\n    border-right:none;\r\n    border-bottom:2px\r\n}\r\n.control-sidebar-heading{\r\n    font-weight:700;\r\n    margin-top:2px;\r\n    font-size:14px;\r\n    margin-bottom:10px;\r\n    text-transform:uppercase\r\n}\r\n.control-sidebar-subheading{\r\n    display:block;\r\n    font-weight:400;\r\n    font-size:14px\r\n}\r\n.control-sidebar .list-group-item{\r\n    background-color:transparent!important;\r\n    border:none!important;\r\n    padding:13px\r\n}\r\n.control-sidebar-menu{\r\n    list-style:none;\r\n    padding:0;\r\n    margin:0 -15px\r\n}\r\n.control-sidebar-menu>li>a{\r\n    display:block;\r\n    padding:10px 15px\r\n}\r\n.control-sidebar-menu>li>a:after,.control-sidebar-menu>li>a:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.control-sidebar-menu>li>a>.control-sidebar-subheading{\r\n    margin-top:0\r\n}\r\n.control-sidebar-menu .menu-icon{\r\n    float:left;\r\n    width:35px;\r\n    height:35px;\r\n    border-radius:50%;\r\n    text-align:center;\r\n    line-height:35px\r\n}\r\n.control-sidebar-menu .menu-info{\r\n    margin-left:45px;\r\n    margin-top:3px\r\n}\r\n.control-sidebar-menu .menu-info>.control-sidebar-subheading,.control-sidebar-menu .progress{\r\n    margin:0\r\n}\r\n.control-sidebar-menu .menu-info>p{\r\n    margin:0;\r\n    font-size:11px\r\n}\r\n.control-sidebar-dark{\r\n    color:#b8c7ce\r\n}\r\n.control-sidebar-dark,.control-sidebar-dark+.control-sidebar-bg{\r\n    background:#37474F\r\n}\r\n.control-sidebar-dark .nav-tabs.control-sidebar-tabs{\r\n    border-bottom:#1c2529\r\n}\r\n.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a{\r\n    background:#1c2529;\r\n    color:#CFD8DC;\r\n    font-weight:700\r\n}\r\n.control-sidebar-dark .control-sidebar-heading,.control-sidebar-dark .control-sidebar-subheading,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    color:#fff\r\n}\r\n.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:focus,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    border-left-color:#141a1d;\r\n    border-bottom-color:#141a1d\r\n}\r\n.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:active,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:focus,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    background:#181f23\r\n}\r\n.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li.active>a,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li.active>a:active,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li.active>a:focus,.control-sidebar-dark .nav-tabs.control-sidebar-tabs>li.active>a:hover{\r\n    background:#181f23;\r\n    color:#fff;\r\n    font-weight:700\r\n}\r\n.control-sidebar-dark .control-sidebar-menu>li>a:hover{\r\n    background:#1e282c\r\n}\r\n.control-sidebar-dark .control-sidebar-menu>li>a .menu-info>p{\r\n    color:#b8c7ce\r\n}\r\n.control-sidebar-light{\r\n    color:#5e5e5e\r\n}\r\n.control-sidebar-light,.control-sidebar-light+.control-sidebar-bg{\r\n    background:#f9fafc;\r\n    border-left:1px solid #d2d6de\r\n}\r\n.control-sidebar-light .nav-tabs.control-sidebar-tabs{\r\n    border-bottom:#d2d6de\r\n}\r\n.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a{\r\n    background:#e8ecf4;\r\n    color:#444\r\n}\r\n.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a:focus,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    border-left-color:#d2d6de;\r\n    border-bottom-color:#d2d6de\r\n}\r\n.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a:active,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a:focus,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li>a:hover{\r\n    background:#eff1f7\r\n}\r\n.control-sidebar-light .nav-tabs.control-sidebar-tabs>li.active>a,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li.active>a:active,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li.active>a:focus,.control-sidebar-light .nav-tabs.control-sidebar-tabs>li.active>a:hover{\r\n    background:#f9fafc;\r\n    color:#111\r\n}\r\n.control-sidebar-light .control-sidebar-heading,.control-sidebar-light .control-sidebar-subheading{\r\n    color:#111\r\n}\r\n.control-sidebar-light .control-sidebar-menu{\r\n    margin-left:-14px\r\n}\r\n.control-sidebar-light .control-sidebar-menu>li>a:hover{\r\n    background:#f4f4f5\r\n}\r\n.control-sidebar-light .control-sidebar-menu>li>a .menu-info>p{\r\n    color:#5e5e5e\r\n}\r\n.dropdown-menu{\r\n    box-shadow:none;\r\n    border-color:#eee\r\n}\r\n.dropdown-menu>li>a{\r\n    color:#777\r\n}\r\n.dropdown-menu>li>a>.fa,.dropdown-menu>li>a>.glyphicon,.dropdown-menu>li>a>.ion{\r\n    margin-right:10px\r\n}\r\n.dropdown-menu>li>a:hover{\r\n    background-color:#e1e3e9;\r\n    color:#333\r\n}\r\n.dropdown-menu>.divider{\r\n    background-color:#eee;\r\n    margin:0\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu,.navbar-nav>.notifications-menu>.dropdown-menu,.navbar-nav>.tasks-menu>.dropdown-menu{\r\n    width:280px;\r\n    padding:0;\r\n    margin:0;\r\n    top:100%\r\n}\r\nul.dropdown-menu.user-menu{\r\n    width:20px!important\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li,.navbar-nav>.notifications-menu>.dropdown-menu>li,.navbar-nav>.tasks-menu>.dropdown-menu>li{\r\n    position:relative\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li.header,.navbar-nav>.notifications-menu>.dropdown-menu>li.header,.navbar-nav>.tasks-menu>.dropdown-menu>li.header{\r\n    background-color:#fff;\r\n    padding:7px 10px;\r\n    border-bottom:1px solid #f4f4f4;\r\n    color:#444;\r\n    font-size:14px;\r\n    text-align:center;\r\n    font-weight:700;\r\n    border-radius:4px 4px 0 0\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li.footer>a,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a{\r\n    font-size:12px;\r\n    background-color:#fff;\r\n    padding:7px 10px;\r\n    border-bottom:1px solid #eee;\r\n    color:#444!important;\r\n    text-align:center;\r\n    border-radius:0 0 4px 4px\r\n}\r\n@media (max-width:991px){\r\n    .navbar-nav>.messages-menu>.dropdown-menu>li.footer>a,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a{\r\n        background:#fff!important;\r\n        color:#444!important\r\n    }\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li.footer>a:hover,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a:hover,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a:hover{\r\n    text-decoration:none;\r\n    font-weight:400\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu{\r\n    max-height:200px;\r\n    margin:0;\r\n    padding:0;\r\n    list-style:none;\r\n    overflow-x:hidden\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a{\r\n    display:block;\r\n    white-space:nowrap;\r\n    border-bottom:1px solid #f4f4f4\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:hover,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a:hover,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a:hover{\r\n    background:#f4f4f4;\r\n    text-decoration:none\r\n}\r\n.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a{\r\n    color:#444;\r\n    overflow:hidden;\r\n    text-overflow:ellipsis;\r\n    padding:10px\r\n}\r\n.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.fa,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.glyphicon,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.ion{\r\n    width:20px\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a{\r\n    margin:0;\r\n    padding:10px\r\n}\r\nul.dropdown-menu.user-menu a{\r\n    padding:8px 10px\r\n}\r\nul.dropdown-menu.user-menu a .fa{\r\n    margin-right:0\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>div>img{\r\n    margin:auto 10px auto auto;\r\n    width:40px;\r\n    height:40px\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>h4{\r\n    padding:0;\r\n    margin:0 0 0 45px;\r\n    color:#444;\r\n    font-size:15px;\r\n    position:relative\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>h4>small{\r\n    color:#999;\r\n    font-size:10px;\r\n    position:absolute;\r\n    top:0;\r\n    right:0\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>p{\r\n    margin:0 0 0 45px;\r\n    font-size:12px;\r\n    color:#888\r\n}\r\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:after,.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a{\r\n    padding:10px\r\n}\r\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a>h3{\r\n    font-size:14px;\r\n    padding:0;\r\n    margin:0 0 10px;\r\n    color:#666\r\n}\r\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a>.progress{\r\n    padding:0;\r\n    margin:0\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu{\r\n    border-top-right-radius:0;\r\n    border-top-left-radius:0;\r\n    padding:1px 0 0;\r\n    border-top-width:0;\r\n    width:280px\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu,.navbar-nav>.user-menu>.dropdown-menu>.user-body{\r\n    border-bottom-right-radius:4px;\r\n    border-bottom-left-radius:4px\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header{\r\n    height:118px;\r\n    padding:10px;\r\n    text-align:center\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>img{\r\n    z-index:5;\r\n    height:90px;\r\n    width:90px;\r\n    border:3px solid transparent;\r\n    border-color:rgba(255,255,255,.2)\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p{\r\n    z-index:5;\r\n    color:#fff;\r\n    color:rgba(255,255,255,.8);\r\n    font-size:17px;\r\n    margin-top:10px\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p>small{\r\n    display:block;\r\n    font-size:12px\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-body:after,.navbar-nav>.user-menu>.dropdown-menu>.user-body:before,.navbar-nav>.user-menu>.dropdown-menu>.user-footer:after,.navbar-nav>.user-menu>.dropdown-menu>.user-footer:before{\r\n    display:table;\r\n    content:\" \"\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-body{\r\n    padding:15px;\r\n    border-bottom:1px solid #f4f4f4;\r\n    border-top:1px solid #ddd\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-body a{\r\n    color:#444!important\r\n}\r\n@media (max-width:991px){\r\n    .navbar-nav>.user-menu>.dropdown-menu>.user-body a{\r\n        background:#fff!important;\r\n        color:#444!important\r\n    }\r\n    .navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default:hover{\r\n        background-color:#f9f9f9\r\n    }\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer{\r\n    background-color:#f9f9f9;\r\n    padding:10px\r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default{\r\n    color:#666\r\n}\r\n.navbar-nav>.user-menu .user-image{\r\n    float:left;\r\n    width:25px;\r\n    height:25px;\r\n    border-radius:50%;\r\n    margin-right:10px;\r\n    margin-top:-2px\r\n}\r\n@media screen and (min-width:768px),screen\\9{\r\n    .user-menu .user-image{\r\n        display:none\r\n    }\r\n}\r\n@media (max-width:767px){\r\n    .navbar-nav>.user-menu .user-image{\r\n        float:none;\r\n        margin-right:0;\r\n        margin-top:-8px;\r\n        line-height:10px\r\n    }\r\n}\r\n.navbar-top-menu>.navbar-nav>li{\r\n    position:relative\r\n}\r\n.navbar-top-menu>.navbar-nav>li>.dropdown-menu{\r\n    position:absolute;\r\n    right:0;\r\n    left:auto\r\n}\r\n@media (max-width:991px){\r\n    .navbar-top-menu>.navbar-nav{\r\n        float:right\r\n    }\r\n    .navbar-top-menu>.navbar-nav>li{\r\n        position:static\r\n    }\r\n    .navbar-top-menu>.navbar-nav>li>.dropdown-menu{\r\n        position:absolute;\r\n        right:0;\r\n        left:auto;\r\n        border:1px solid #ddd;\r\n        background:#fff\r\n    }\r\n}\r\n.invoice-box{\r\n    padding:30px;\r\n    color:#555;\r\n    position:relative;\r\n    border-radius:3px;\r\n    background:#fff;\r\n    margin-bottom:20px;\r\n    width:100%;\r\n    box-shadow:0 0 10px rgba(0,0,0,.15)\r\n}\r\n.invoice-box table{\r\n    width:100%;\r\n    line-height:inherit;\r\n    text-align:left\r\n}\r\n.invoice-box table td{\r\n    padding:5px;\r\n    vertical-align:top\r\n}\r\n.invoice-box table tr td:nth-child(2){\r\n    text-align:right\r\n}\r\n.invoice-box table tr.top table td{\r\n    padding-bottom:20px\r\n}\r\n.invoice-box table tr.top table td.title{\r\n    font-size:45px;\r\n    line-height:45px;\r\n    color:#333\r\n}\r\n.invoice-box table tr.information table td{\r\n    padding-bottom:40px\r\n}\r\n.invoice-box table tr.heading td{\r\n    background:#eee;\r\n    border-bottom:1px solid #ddd;\r\n    font-weight:700\r\n}\r\n.invoice-box table tr.details td{\r\n    padding-bottom:20px\r\n}\r\n.invoice-box table tr.item td{\r\n    border-bottom:1px solid #eee\r\n}\r\n.invoice-box table tr.item.last td{\r\n    border-bottom:none\r\n}\r\n.invoice-box table tr.total td:nth-child(2){\r\n    border-top:2px solid #eee;\r\n    font-weight:700\r\n}\r\n@media only screen and (max-width:600px){\r\n    .invoice-box table tr.information table td,.invoice-box table tr.top table td{\r\n        width:100%;\r\n        display:block;\r\n        text-align:center\r\n    }\r\n}\r\n.pricing-header{\r\n    text-align:center;\r\n    margin-top:19px\r\n}\r\n.pricing-header h1{\r\n    color:#666;\r\n    margin:0;\r\n    padding:0 0 30px\r\n}\r\n.pricing-box{\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -ms-flex-wrap:wrap;\r\n        flex-wrap:wrap;\r\n    -ms-flex-pack:center;\r\n        justify-content:center;\r\n    width:100%;\r\n    margin:20px auto\r\n}\r\n.pricing-item{\r\n    position:relative;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -ms-flex-direction:column;\r\n        flex-direction:column;\r\n    -ms-flex-align:stretch;\r\n        align-items:stretch;\r\n    text-align:center;\r\n    -ms-flex:0 1 330px;\r\n        flex:0 1 330px\r\n}\r\n.pricing-action{\r\n    color:inherit;\r\n    border:none;\r\n    background:0 0\r\n}\r\n.pricing-action:focus{\r\n    outline:0\r\n}\r\n.pricing-feature-list{\r\n    text-align:left\r\n}\r\n.pricing-container .pricing-item{\r\n    font-family:'Open Sans',sans-serif;\r\n    cursor:default;\r\n    color:#333;\r\n    background:#fff;\r\n    box-shadow:0 0 10px rgba(46,59,125,.23);\r\n    border-radius:20px 20px 10px 10px;\r\n    margin:1em\r\n}\r\n@media screen and (min-width:66.25em){\r\n    .pricing-container .pricing-item{\r\n        margin:1em -.5em\r\n    }\r\n    .pricing-container .pricing-item-featured{\r\n        margin:0;\r\n        z-index:10;\r\n        box-shadow:0 0 20px rgba(46,59,125,.23)\r\n    }\r\n}\r\n.pricing-container .pricing-deco{\r\n    border-radius:10px 10px 0 0;\r\n    background:#3c8dbc;\r\n    padding:4em 0 9em;\r\n    position:relative\r\n}\r\n.pricing-container .pricing-deco-img{\r\n    position:absolute;\r\n    bottom:0;\r\n    left:0;\r\n    width:100%;\r\n    height:160px\r\n}\r\n.pricing-container .pricing-title{\r\n    font-size:.75em;\r\n    margin:0;\r\n    text-transform:uppercase;\r\n    letter-spacing:5px;\r\n    color:#fff\r\n}\r\n.pricing-container .deco-layer{\r\n    transition:transform .5s\r\n}\r\n.pricing-container .pricing-item:hover .deco-layer--1{\r\n    transform:translate3d(15px,0,0)\r\n}\r\n.pricing-container .pricing-item:hover .deco-layer--2{\r\n    transform:translate3d(-15px,0,0)\r\n}\r\n.pricing-container .icon{\r\n    font-size:2.5em\r\n}\r\n.pricing-container .pricing-price{\r\n    font-size:5em;\r\n    font-weight:700;\r\n    padding:0;\r\n    color:#fff;\r\n    margin:0 0 .25em;\r\n    line-height:.75\r\n}\r\n.pricing-container .pricing-currency{\r\n    font-size:.15em;\r\n    vertical-align:top\r\n}\r\n.pricing-container .pricing-period{\r\n    font-size:.15em;\r\n    padding:0 0 0 .5em;\r\n    font-style:italic\r\n}\r\n.pricing-container .pricing-sentence{\r\n    font-weight:700;\r\n    margin:0 0 1em;\r\n    padding:0 0 .5em\r\n}\r\n.pricing-container .pricing-feature-list{\r\n    margin:0;\r\n    padding:.25em 0 2.5em;\r\n    list-style:none;\r\n    text-align:center\r\n}\r\n.pricing-container .pricing-feature{\r\n    padding:1em 0\r\n}\r\n.pricing-container .pricing-action{\r\n    font-weight:700;\r\n    margin:auto 3em 2em;\r\n    padding:1em 2em;\r\n    color:#fff;\r\n    border-radius:3px;\r\n    background:#3c8dbc;\r\n    transition:background-color .3s\r\n}\r\n.progress-striped .progress-bar-green,.progress-striped .progress-bar-light-blue,.progress-striped .progress-bar-primary,.progress-striped .progress-bar-success{\r\n    background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.pricing-container .pricing-action:focus,.pricing-container .pricing-action:hover{\r\n    background-color:#262626\r\n}\r\n.pricing-container .pricing-item-featured .pricing-deco{\r\n    padding:5em 0 8.885em\r\n}\r\n#generic-price-table{\r\n    background-color:#f0eded;\r\n    width:80%;\r\n    margin:auto\r\n}\r\n#generic-price-table .generic-content{\r\n    background-color:#fff;\r\n    overflow:hidden;\r\n    position:relative;\r\n    text-align:center\r\n}\r\n#generic-price-table .generic-content .generic-head-price{\r\n    background-color:#f6f6f6;\r\n    margin:0 0 20px\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content .head_bg{\r\n    border-color:#e4e4e4 transparent transparent #e4e4e4\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content .head span{\r\n    color:#525252\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .month,#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .cent,#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .currency,#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .sign{\r\n    color:#414141\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li{\r\n    color:#a7a7a7\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li span{\r\n    color:#414141\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li:hover{\r\n    background-color:#E4E4E4;\r\n    border-left:5px solid #3c8dbc;\r\n    color:#fff\r\n}\r\n#generic-price-table .generic-content .generic-price-btn a{\r\n    border:1px solid #3c8dbc;\r\n    color:#3c8dbc\r\n}\r\n#generic-price-table .generic-content.active .generic-head-price .generic-head-content .head_bg,#generic-price-table .generic-content:hover .generic-head-price .generic-head-content .head_bg{\r\n    border-color:#3c8dbc transparent transparent #3c8dbc;\r\n    color:#fff\r\n}\r\n#generic-price-table .generic-content.active .generic-head-price .generic-head-content .head span,#generic-price-table .generic-content:hover .generic-head-price .generic-head-content .head span{\r\n    color:#fff\r\n}\r\n#generic-price-table .generic-content.active .generic-price-btn a,#generic-price-table .generic-content:hover .generic-price-btn a{\r\n    background-color:#3c8dbc;\r\n    color:#fff\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content{\r\n    margin:0 0 50px\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content .head_bg{\r\n    border-style:solid;\r\n    border-width:90px 1411px 23px 399px;\r\n    position:absolute\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content .head{\r\n    padding-top:40px;\r\n    position:relative;\r\n    z-index:1\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-head-content .head span{\r\n    font-family:Raleway,sans-serif;\r\n    font-size:28px;\r\n    font-weight:400;\r\n    letter-spacing:2px;\r\n    margin:0;\r\n    padding:0;\r\n    text-transform:uppercase\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag{\r\n    padding:0 0 20px\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .price{\r\n    display:block\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .sign{\r\n    display:inline-block;\r\n    font-size:28px;\r\n    font-weight:400;\r\n    vertical-align:middle\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .currency{\r\n    font-size:60px;\r\n    font-weight:300;\r\n    letter-spacing:-2px;\r\n    line-height:60px;\r\n    padding:0;\r\n    vertical-align:middle\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .price .cent{\r\n    display:inline-block;\r\n    font-size:24px;\r\n    font-weight:400;\r\n    vertical-align:bottom\r\n}\r\n#generic-price-table .generic-content .generic-head-price .generic-price-tag .month{\r\n    font-family:Lato,sans-serif;\r\n    font-size:18px;\r\n    font-weight:400;\r\n    letter-spacing:3px;\r\n    vertical-align:bottom\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul{\r\n    list-style:none;\r\n    padding:0;\r\n    margin:0\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li{\r\n    font-family:Lato,sans-serif;\r\n    font-size:18px;\r\n    padding:15px 0;\r\n    transition:all .3s ease-in-out 0s\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li:hover{\r\n    transition:all .3s ease-in-out 0s;\r\n    -moz-transition:all .3s ease-in-out 0s;\r\n    -ms-transition:all .3s ease-in-out 0s;\r\n    -o-transition:all .3s ease-in-out 0s;\r\n    -webkit-transition:all .3s ease-in-out 0s\r\n}\r\n#generic-price-table .generic-content .generic-feature-list ul li .fa{\r\n    padding:0 10px\r\n}\r\n#generic-price-table .generic-content .generic-price-btn{\r\n    margin:20px 0 32px\r\n}\r\n#generic-price-table .generic-content .generic-price-btn a{\r\n    border-radius:50px;\r\n    -moz-border-radius:50px;\r\n    -ms-border-radius:50px;\r\n    -o-border-radius:50px;\r\n    -webkit-border-radius:50px;\r\n    display:inline-block;\r\n    font-family:Lato,sans-serif;\r\n    font-size:18px;\r\n    outline:0;\r\n    padding:12px 30px;\r\n    text-decoration:none;\r\n    text-transform:uppercase\r\n}\r\n.btn-group-vertical .btn.btn-flat:first-of-type,.btn-group-vertical .btn.btn-flat:last-of-type,.form-control{\r\n    border-radius:0\r\n}\r\n#generic-price-table .generic-content,#generic-price-table .generic-content .generic-head-price .generic-head-content .head h2,#generic-price-table .generic-content .generic-head-price .generic-head-content .head_bg,#generic-price-table .generic-content .generic-price-btn a,#generic-price-table .generic-content .price,#generic-price-table .generic-content:hover,#generic-price-table .generic-content:hover .generic-head-price .generic-head-content .head h2,#generic-price-table .generic-content:hover .generic-head-price .generic-head-content .head_bg,#generic-price-table .generic-content:hover .generic-price-btn a,#generic-price-table .generic-content:hover .price{\r\n    transition:all .3s ease-in-out 0s;\r\n    -moz-transition:all .3s ease-in-out 0s;\r\n    -ms-transition:all .3s ease-in-out 0s;\r\n    -o-transition:all .3s ease-in-out 0s;\r\n    -webkit-transition:all .3s ease-in-out 0s\r\n}\r\n@media (max-width:767px){\r\n    #generic-price-table .generic-content{\r\n        margin-bottom:75px\r\n    }\r\n}\r\n@media (min-width:768px) and (max-width:991px){\r\n    #generic-price-table .col-md-3,#generic-price-table .col-md-4{\r\n        float:left;\r\n        width:50%\r\n    }\r\n    #generic-price-table .generic-content{\r\n        margin-bottom:75px\r\n    }\r\n}\r\n.demo-pic{\r\n    margin:0 auto\r\n}\r\n.demo-pic:hover{\r\n    opacity:.7\r\n}\r\n.price-heading{\r\n    text-align:center\r\n}\r\n.price-heading h1{\r\n    color:#666;\r\n    margin:0;\r\n    padding:0 0 50px\r\n}\r\n.bottom_btn{\r\n    background-color:#333;\r\n    color:#fff;\r\n    display:table;\r\n    font-size:28px;\r\n    margin:60px auto 20px;\r\n    padding:10px 25px;\r\n    text-align:center;\r\n    text-transform:uppercase\r\n}\r\n.bottom_btn:hover{\r\n    background-color:#666;\r\n    color:#FFF;\r\n    text-decoration:none\r\n}\r\n.form-control{\r\n    box-shadow:none;\r\n    border-color:#d2d6de\r\n}\r\n.form-control:focus{\r\n    border-color:#ffc824;\r\n    box-shadow:none\r\n}\r\n.form-control:-ms-input-placeholder,.form-control::-moz-placeholder,.form-control::-webkit-input-placeholder{\r\n    color:#bbb;\r\n    opacity:1\r\n}\r\n.form-group.has-success .help-block,.form-group.has-success label{\r\n    color:#00a65a\r\n}\r\n.form-control:not(select){\r\n    -webkit-appearance:none;\r\n    -moz-appearance:none;\r\n}\r\n.form-group.has-success .form-control,.form-group.has-success .input-group-addon{\r\n    border-color:#00a65a;\r\n    box-shadow:none\r\n}\r\n.form-group.has-warning .help-block,.form-group.has-warning label{\r\n    color:#f39c12\r\n}\r\n.form-group.has-warning .form-control,.form-group.has-warning .input-group-addon{\r\n    border-color:#f39c12;\r\n    box-shadow:none\r\n}\r\n.form-group.has-error .help-block,.form-group.has-error label{\r\n    color:#dd4b39\r\n}\r\n.form-group.has-error .form-control,.form-group.has-error .input-group-addon{\r\n    border-color:#dd4b39;\r\n    box-shadow:none\r\n}\r\n.input-group .input-group-addon{\r\n    border-radius:0;\r\n    border-color: #275186;\r\n    background-color: #275186;\r\n}\r\n.progress,.progress .progress-bar,.progress-sm,.progress-sm .progress-bar,.progress-xs,.progress-xs .progress-bar,.progress-xxs,.progress-xxs .progress-bar,.progress.sm,.progress.sm .progress-bar,.progress.xs,.progress.xs .progress-bar,.progress.xxs,.progress.xxs .progress-bar,.progress>.progress-bar,.progress>.progress-bar .progress-bar{\r\n    border-radius:1px\r\n}\r\n.icheck>label{\r\n    padding-left:0\r\n}\r\n.form-control-feedback.fa{\r\n    line-height:34px\r\n}\r\n.form-group-lg .form-control+.form-control-feedback.fa,.input-group-lg+.form-control-feedback.fa,.input-lg+.form-control-feedback.fa{\r\n    line-height:46px\r\n}\r\n.form-group-sm .form-control+.form-control-feedback.fa,.input-group-sm+.form-control-feedback.fa,.input-sm+.form-control-feedback.fa{\r\n    line-height:30px\r\n}\r\n.progress,.progress>.progress-bar{\r\n    box-shadow:none\r\n}\r\n.progress-sm,.progress.sm{\r\n    height:10px\r\n}\r\n.progress-xs,.progress.xs{\r\n    height:7px\r\n}\r\n.progress-xxs,.progress.xxs{\r\n    height:3px\r\n}\r\n.progress.vertical{\r\n    position:relative;\r\n    width:30px;\r\n    height:200px;\r\n    display:inline-block;\r\n    margin-right:10px\r\n}\r\n.progress.vertical>.progress-bar{\r\n    width:100%;\r\n    position:absolute;\r\n    bottom:0\r\n}\r\n.progress.vertical.progress-sm,.progress.vertical.sm{\r\n    width:20px\r\n}\r\n.progress.vertical.progress-xs,.progress.vertical.xs{\r\n    width:10px\r\n}\r\n.progress.vertical.progress-xxs,.progress.vertical.xxs{\r\n    width:3px\r\n}\r\n.progress-group .progress-text{\r\n    font-weight:600\r\n}\r\n.progress-group .progress-number{\r\n    float:right\r\n}\r\n.table tr>td .progress{\r\n    margin:0\r\n}\r\n.progress-bar-light-blue,.progress-bar-primary{\r\n    background-color:#ffc824\r\n}\r\n.progress-striped .progress-bar-light-blue,.progress-striped .progress-bar-primary{\r\n    background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.progress-bar-green,.progress-bar-success{\r\n    background-color:#00a65a\r\n}\r\n.progress-striped .progress-bar-green,.progress-striped .progress-bar-success{\r\n    background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.progress-striped .progress-bar-aqua,.progress-striped .progress-bar-info,.progress-striped .progress-bar-warning,.progress-striped .progress-bar-yellow{\r\n    background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.progress-bar-aqua,.progress-bar-info{\r\n    background-color:#00c0ef\r\n}\r\n.progress-striped .progress-bar-aqua,.progress-striped .progress-bar-info{\r\n    background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.progress-bar-warning,.progress-bar-yellow{\r\n    background-color:#f39c12\r\n}\r\n.progress-striped .progress-bar-warning,.progress-striped .progress-bar-yellow{\r\n    background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.progress-bar-danger,.progress-bar-red{\r\n    background-color:#dd4b39\r\n}\r\n.progress-striped .progress-bar-danger,.progress-striped .progress-bar-red{\r\n    background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)\r\n}\r\n.box{\r\n    position:relative;\r\n    border-radius:3px;\r\n    background:#fff;\r\n    margin-bottom:20px;\r\n    width:100%;\r\n    box-shadow:0 0 10px rgba(0,0,0,.15)\r\n}\r\n.box.collapsed-box .box-body,.box.collapsed-box .box-footer{\r\n    display:none\r\n}\r\n.box .nav-stacked>li{\r\n    border-bottom:1px solid #f4f4f4;\r\n    margin:0\r\n}\r\n.box .nav-stacked>li:last-of-type{\r\n    border-bottom:none\r\n}\r\n.box.height-control .box-body{\r\n    max-height:300px;\r\n    overflow:auto\r\n}\r\n.box .box-title small{\r\n    display:block;\r\n    margin-top:10px\r\n}\r\n.box .socials-networks{\r\n    padding:10px\r\n}\r\n.box .socials-networks ul{\r\n    margin:0;\r\n    padding:0;\r\n    list-style-type:none;\r\n    text-align:center\r\n}\r\n.box .socials-networks ul li{\r\n    display:inline\r\n}\r\n.box .socials-networks ul li a{\r\n    text-decoration:none;\r\n    padding:3px;\r\n    font-size:18px;\r\n    color:#999\r\n}\r\n.box .socials-networks li a:hover{\r\n    color:#666\r\n}\r\n.box.box-form .box-body{\r\n    padding:20px\r\n}\r\n.box .knob-label{\r\n    text-align:center;\r\n    color:#333;\r\n    font-weight:100;\r\n    font-size:12px;\r\n    margin-bottom:.3em\r\n}\r\n.box>.loading-img,.box>.overlay,.overlay-wrapper>.loading-img,.overlay-wrapper>.overlay{\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%\r\n}\r\n.box .overlay,.overlay-wrapper .overlay{\r\n    z-index:50;\r\n    background:rgba(255,255,255,.7);\r\n    border-radius:3px\r\n}\r\n.box .overlay>.fa,.overlay-wrapper .overlay>.fa{\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    margin-left:-15px;\r\n    margin-top:-15px;\r\n    color:#000;\r\n    font-size:30px\r\n}\r\n.box .overlay.dark,.overlay-wrapper .overlay.dark{\r\n    background:rgba(0,0,0,.5)\r\n}\r\n.box-body:after,.box-body:before,.box-footer:after,.box-footer:before,.box-header:after,.box-header:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.box-body:after,.box-footer:after,.box-header:after{\r\n    clear:both\r\n}\r\n.box-header{\r\n    color:#444;\r\n    display:block;\r\n    padding:10px;\r\n    position:relative\r\n}\r\n.box-header.with-border{\r\n    border-bottom:1px solid #f4f4f4\r\n}\r\n.collapsed-box .box-header.with-border{\r\n    border-bottom:none\r\n}\r\n.box-header .box-title,.box-header>.fa,.box-header>.glyphicon,.box-header>.ion{\r\n    display:inline-block;\r\n    font-size:16px;\r\n    margin:0;\r\n    line-height:1;\r\n    padding-top:4px;\r\n    font-weight:700\r\n}\r\n.box-header>.fa,.box-header>.glyphicon,.box-header>.ion{\r\n    margin-right:5px\r\n}\r\n.box-header>.box-tools{\r\n    position:absolute;\r\n    right:10px;\r\n    top:5px\r\n}\r\n.box-header>.box-tools [data-toggle=tooltip],.timeline{\r\n    position:relative\r\n}\r\n.box-header>.box-tools.pull-right .dropdown-menu{\r\n    right:0;\r\n    left:auto\r\n}\r\n.box-header>.box-tools .dropdown-menu>li>a{\r\n    color:#444!important\r\n}\r\n.btn-box-tool{\r\n    padding:5px;\r\n    font-size:12px;\r\n    background:0 0;\r\n    color:#97a0b3!important\r\n}\r\n.box-tool-size16{\r\n    font-size:16px\r\n}\r\n.btn-box-tool:hover,.open .btn-box-tool{\r\n    color:#606c84!important\r\n}\r\n.btn-box-tool.btn:active{\r\n    box-shadow:none\r\n}\r\n.box-body{\r\n    padding:10px;\r\n    border-radius:0 0 3px 3px\r\n}\r\n.no-header .box-body{\r\n    border-top-right-radius:3px;\r\n    border-top-left-radius:3px\r\n}\r\n.box-body>.table{\r\n    margin-bottom:0\r\n}\r\n.box-body .fc{\r\n    margin-top:5px\r\n}\r\n.box-body .full-width-chart{\r\n    margin:-19px\r\n}\r\n.box-body.no-padding .full-width-chart{\r\n    margin:-9px\r\n}\r\n.box-body .box-pane{\r\n    border-radius:0 0 0 3px\r\n}\r\n.box-body .box-pane-right{\r\n    border-radius:0 0 3px\r\n}\r\n.box-footer{\r\n    border-top:1px solid #f4f4f4;\r\n    padding:10px;\r\n    background-color:#fff;\r\n    border-radius:0 0 3px 3px\r\n}\r\n@media (max-width:991px){\r\n    .chart-legend>li{\r\n        float:left;\r\n        margin-right:10px\r\n    }\r\n}\r\n.box-comments{\r\n    background:#f7f7f7\r\n}\r\n.box-comments .box-comment{\r\n    padding:8px 0;\r\n    border-bottom:1px solid #eee\r\n}\r\n.box-comments .box-comment:after,.box-comments .box-comment:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.box-comments .box-comment:last-of-type{\r\n    border-bottom:0\r\n}\r\n.box-comments .box-comment:first-of-type{\r\n    padding-top:0\r\n}\r\n.box-comments .box-comment img{\r\n    float:left\r\n}\r\n.box-comments .comment-text{\r\n    margin-left:40px;\r\n    color:#555\r\n}\r\n.box-comments .username{\r\n    color:#444;\r\n    display:block;\r\n    font-weight:600\r\n}\r\n.box-comments .text-muted{\r\n    font-weight:400;\r\n    font-size:12px\r\n}\r\n.all-clients .name,.all-drivers .name{\r\n    font-size:16px;\r\n    font-weight:700\r\n}\r\n.all-drivers img{\r\n    width:130px;\r\n    height:130px;\r\n    margin:0 auto 15px;\r\n    display:block\r\n}\r\n.all-drivers .information,.all-drivers .name,.all-drivers a{\r\n    text-align:center\r\n}\r\n.all-drivers.box-body .action-profile{\r\n    margin:15px\r\n}\r\n.all-drivers .box-body .action-profile a{\r\n    color:#000\r\n}\r\n@media (max-width:767px){\r\n    .all-clients img{\r\n        width:115px;\r\n        height:115px;\r\n        margin:0 auto 15px;\r\n        display:block\r\n    }\r\n}\r\n.todo-list{\r\n    margin:0;\r\n    padding:0;\r\n    list-style:none;\r\n    overflow:auto\r\n}\r\n.todo-list>li{\r\n    border-radius:2px;\r\n    padding:10px;\r\n    background:#f4f4f4;\r\n    margin-bottom:2px;\r\n    border-left:2px solid #e6e7e8;\r\n    color:#444\r\n}\r\n.todo-list>li:last-of-type{\r\n    margin-bottom:0\r\n}\r\n.todo-list>li>input[type=checkbox]{\r\n    margin:0 10px 0 5px\r\n}\r\n.todo-list>li .text{\r\n    display:inline-block;\r\n    margin-left:5px;\r\n    font-weight:600\r\n}\r\n.todo-list>li .label{\r\n    margin-left:10px;\r\n    font-size:9px\r\n}\r\n.info-box small,.info-box-text{\r\n    font-size:14px\r\n}\r\n.todo-list>li .tools{\r\n    display:none;\r\n    float:right;\r\n    color:#dd4b39\r\n}\r\n.todo-list .handle,.todo-list>li:hover .tools{\r\n    display:inline-block\r\n}\r\n.todo-list>li .tools>.fa,.todo-list>li .tools>.glyphicon,.todo-list>li .tools>.ion{\r\n    margin-right:5px;\r\n    cursor:pointer\r\n}\r\n.todo-list>li.done{\r\n    color:#999\r\n}\r\n.todo-list>li.done .text{\r\n    text-decoration:line-through;\r\n    font-weight:500\r\n}\r\n.todo-list>li.done .label{\r\n    background:#d2d6de!important\r\n}\r\n.todo-list .danger{\r\n    border-left-color:#dd4b39\r\n}\r\n.todo-list .warning{\r\n    border-left-color:#f39c12\r\n}\r\n.todo-list .info{\r\n    border-left-color:#00c0ef\r\n}\r\n.todo-list .success{\r\n    border-left-color:#00a65a\r\n}\r\n.todo-list .primary{\r\n    border-left-color:#ffc824\r\n}\r\n.todo-list .handle{\r\n    cursor:move;\r\n    margin:0 5px\r\n}\r\n.info-box,.info-box2{\r\n    position:relative;\r\n    border-radius:3px;\r\n    background:#fff;\r\n    margin-bottom:20px;\r\n    width:100%;\r\n    box-shadow:0 0 10px rgba(0,0,0,.15)\r\n}\r\n.info-box-text{\r\n    text-transform:uppercase;\r\n    display:block;\r\n    white-space:nowrap;\r\n    overflow:hidden\r\n}\r\n.info-box-number{\r\n    display:block;\r\n    font-weight:700;\r\n    font-size:18px\r\n}\r\n.info-box2 .progress{\r\n    background:rgba(0,0,0,.2);\r\n    margin:5px -10px;\r\n    height:2px\r\n}\r\n.info-box2 .progress,.info-box2 .progress .progress-bar{\r\n    border-radius:0\r\n}\r\n.info-box2 .progress .progress-bar{\r\n    background:#fff\r\n}\r\n.info-box-content{\r\n    padding:25px!important;\r\n    border-radius:0 0 3px 3px\r\n}\r\n.info-box-content .fa{\r\n    font-size:35px;\r\n    float:left;\r\n    max-width:100%;\r\n    transition:all .3s\r\n}\r\n.info-box-content .value{\r\n    font-size:22px;\r\n    font-weight:700\r\n}\r\n.info-box-content:hover .fa{\r\n    transform:scale(1.6)\r\n}\r\n.timeline{\r\n    margin:0 0 30px;\r\n    padding:0;\r\n    list-style:none\r\n}\r\n.timeline:before{\r\n    content:'';\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    width:4px;\r\n    background:#ddd;\r\n    left:31px;\r\n    margin:0;\r\n    border-radius:2px\r\n}\r\n.timeline>li{\r\n    position:relative;\r\n    margin-right:10px;\r\n    margin-bottom:15px\r\n}\r\n.timeline>li:after,.timeline>li:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.timeline>li>.timeline-item{\r\n    box-shadow:0 1px 1px rgba(0,0,0,.1);\r\n    border-radius:3px;\r\n    margin-top:0;\r\n    background:#fff;\r\n    color:#444;\r\n    margin-left:60px;\r\n    margin-right:15px;\r\n    padding:0;\r\n    position:relative\r\n}\r\n.timeline>li>.timeline-item>.time{\r\n    color:#999;\r\n    float:right;\r\n    padding:10px;\r\n    font-size:12px\r\n}\r\n.timeline>li>.timeline-item>.timeline-header{\r\n    margin:0;\r\n    color:#555;\r\n    border-bottom:1px solid #f4f4f4;\r\n    padding:10px;\r\n    font-size:16px;\r\n    line-height:1.1\r\n}\r\n.timeline>li>.timeline-item>.timeline-header>a{\r\n    font-weight:600\r\n}\r\n.timeline>li>.timeline-item>.timeline-body,.timeline>li>.timeline-item>.timeline-footer{\r\n    padding:10px\r\n}\r\n.timeline>li>.fa,.timeline>li>.glyphicon,.timeline>li>.ion{\r\n    width:30px;\r\n    height:30px;\r\n    font-size:15px;\r\n    line-height:30px;\r\n    position:absolute;\r\n    color:#666;\r\n    background:#d2d6de;\r\n    border-radius:50%;\r\n    text-align:center;\r\n    left:18px;\r\n    top:0\r\n}\r\n.timeline>.time-label>span{\r\n    font-weight:600;\r\n    padding:5px;\r\n    display:inline-block;\r\n    background-color:#fff;\r\n    border-radius:4px\r\n}\r\n.timeline-inverse>li>.timeline-item{\r\n    background:#f0f0f0;\r\n    border:1px solid #ddd;\r\n    box-shadow:none\r\n}\r\n.timeline-inverse>li>.timeline-item>.timeline-header{\r\n    border-bottom-color:#ddd\r\n}\r\n.btn{\r\n    font-family:Roboto,'Helvetica Neue, Helvetica, Arial',sans-serif;\r\n    font-size:14px;\r\n    font-weight:400;\r\n    line-height:1.1;\r\n    text-transform:uppercase;\r\n    letter-spacing:inherit;\r\n    color:rgba(255,255,255,.87);\r\n    outline:0;\r\n    outline-offset:0;\r\n    border:0;\r\n    border-radius:2px;\r\n    transition:all .15s ease-in-out;\r\n    -o-transition:all .15s ease-in-out;\r\n    -moz-transition:all .15s ease-in-out;\r\n    -webkit-transition:all .15s ease-in-out\r\n}\r\n.btn-default,.btn-link{\r\n    color:rgba(0,0,0,.87)\r\n}\r\n.btn.active,.btn.active:focus,.btn:active,.btn:active:focus,.btn:focus{\r\n    outline:0;\r\n    outline-offset:0;\r\n    box-shadow:none;\r\n    -moz-box-shadow:none;\r\n    -webkit-box-shadow:none\r\n}\r\n.btn-raised{\r\n    box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24)\r\n}\r\n.btn-raised.active,.btn-raised.active:focus,.btn-raised:active,.btn-raised:active:focus,.btn-raised:focus{\r\n    box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)\r\n}\r\n.btn.btn-circle{\r\n    padding:0;\r\n    border-radius:50%\r\n}\r\n.btn-default,.dropdown-toggle.btn-default{\r\n    background-color:#f1f1f1\r\n}\r\n.btn-default.active,.btn-default:active,.btn-default:hover,.dropdown-toggle.btn-default.active,.dropdown-toggle.btn-default:active,.dropdown-toggle.btn-default:hover{\r\n    background-color:#e5e5e5\r\n}\r\n.btn-default:focus,.dropdown-toggle.btn-default:focus{\r\n    background-color:#ccc\r\n}\r\n.btn-default.disabled,.btn-default:disabled,.btn-default[disabled],.dropdown-toggle.btn-default.disabled,.dropdown-toggle.btn-default:disabled,.dropdown-toggle.btn-default[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-default .ink,.dropdown-toggle.btn-default .ink{\r\n    background-color:#b8b8b8\r\n}\r\n.btn-flat.btn-default{\r\n    color:#212121\r\n}\r\n.btn-flat.btn-default:hover{\r\n    color:#141414;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-default.active,.btn-flat.btn-default:active{\r\n    color:#020202;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-default:focus{\r\n    color:#000;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-default .ink{\r\n    background-color:grey\r\n}\r\n.btn-primary,.btn-primary:hover,.dropdown-toggle.btn-primary,.dropdown-toggle.btn-primary:hover{\r\n    background-color:#ffc824;\r\n    color:#fff!important\r\n}\r\n.btn-primary.active,.btn-primary:active,.btn-primary:focus,.dropdown-toggle.btn-primary.active,.dropdown-toggle.btn-primary:active,.dropdown-toggle.btn-primary:focus{\r\n    background-color:#ffc824\r\n}\r\n.btn-primary.disabled,.btn-primary:disabled,.btn-primary[disabled],.dropdown-toggle.btn-primary.disabled,.dropdown-toggle.btn-primary:disabled,.dropdown-toggle.btn-primary[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-primary .ink,.dropdown-toggle.btn-primary .ink{\r\n    background-color:#0277bd\r\n}\r\n.btn-flat.btn-primary{\r\n    color:#ffc824\r\n}\r\n.btn-flat.btn-primary:hover{\r\n    color:#ffc824;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-primary.active,.btn-flat.btn-primary:active,.btn-flat.btn-primary:focus{\r\n    color:#ffc824;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-primary .ink{\r\n    background-color:grey\r\n}\r\n.btn-success,.dropdown-toggle.btn-success{\r\n    background-color:#259b24;\r\n    color:#fff!important\r\n}\r\n.btn-success.active,.btn-success:active,.btn-success:hover,.dropdown-toggle.btn-success.active,.dropdown-toggle.btn-success:active,.dropdown-toggle.btn-success:hover{\r\n    background-color:#0a8f08\r\n}\r\n.btn-success:focus,.dropdown-toggle.btn-success:focus{\r\n    background-color:#0a7e07\r\n}\r\n.btn-success.disabled,.btn-success:disabled,.btn-success[disabled],.dropdown-toggle.btn-success.disabled,.dropdown-toggle.btn-success:disabled,.dropdown-toggle.btn-success[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-success .ink,.dropdown-toggle.btn-success .ink{\r\n    background-color:#056f00\r\n}\r\n.btn-flat.btn-success{\r\n    color:#259b24\r\n}\r\n.btn-flat.btn-success:hover{\r\n    color:#0a8f08;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-success.active,.btn-flat.btn-success:active{\r\n    color:#0a7e07;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-success:focus{\r\n    color:#056f00;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-success .ink{\r\n    background-color:grey\r\n}\r\n.btn-info,.dropdown-toggle.btn-info{\r\n    background-color:#03a9f4;\r\n    color:#fff!important\r\n}\r\n.btn-info.active,.btn-info:active,.btn-info:hover,.dropdown-toggle.btn-info.active,.dropdown-toggle.btn-info:active,.dropdown-toggle.btn-info:hover{\r\n    background-color:#039be5\r\n}\r\n.btn-info:focus,.dropdown-toggle.btn-info:focus{\r\n    background-color:#0288d1\r\n}\r\n.btn-info.disabled,.btn-info:disabled,.btn-info[disabled],.dropdown-toggle.btn-info.disabled,.dropdown-toggle.btn-info:disabled,.dropdown-toggle.btn-info[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-info .ink,.dropdown-toggle.btn-info .ink{\r\n    background-color:#0277bd\r\n}\r\n.btn-flat.btn-info{\r\n    color:#03a9f4\r\n}\r\n.btn-flat.btn-info:hover{\r\n    color:#039be5;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-info.active,.btn-flat.btn-info:active{\r\n    color:#0288d1;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-info:focus{\r\n    color:#0277bd;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-info .ink{\r\n    background-color:grey\r\n}\r\n.btn-warning,.dropdown-toggle.btn-warning{\r\n    background-color:#ffc107;\r\n    color:#fff!important\r\n}\r\n.btn-warning.active,.btn-warning:active,.btn-warning:hover,.dropdown-toggle.btn-warning.active,.dropdown-toggle.btn-warning:active,.dropdown-toggle.btn-warning:hover{\r\n    background-color:#ffb300\r\n}\r\n.btn-warning:focus,.dropdown-toggle.btn-warning:focus{\r\n    background-color:#ffa000\r\n}\r\n.btn-warning.disabled,.btn-warning:disabled,.btn-warning[disabled],.dropdown-toggle.btn-warning.disabled,.dropdown-toggle.btn-warning:disabled,.dropdown-toggle.btn-warning[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-warning .ink,.dropdown-toggle.btn-warning .ink{\r\n    background-color:#ff8f00\r\n}\r\n.btn-flat.btn-warning{\r\n    color:#ffc107\r\n}\r\n.btn-flat.btn-warning:hover{\r\n    color:#ffb300;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-warning.active,.btn-flat.btn-warning:active{\r\n    color:#ffa000;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-warning:focus{\r\n    color:#ff8f00;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-warning .ink{\r\n    background-color:grey\r\n}\r\n.btn-danger,.dropdown-toggle.btn-danger{\r\n    background-color:#d43f3a;\r\n    color:#fff!important\r\n}\r\n.btn-danger.active,.btn-danger:active,.btn-danger:focus,.btn-danger:hover,.dropdown-toggle.btn-danger.active,.dropdown-toggle.btn-danger:active,.dropdown-toggle.btn-danger:focus,.dropdown-toggle.btn-danger:hover{\r\n    background-color:#d43f3a\r\n}\r\n.btn-danger.disabled,.btn-danger:disabled,.btn-danger[disabled],.dropdown-toggle.btn-danger.disabled,.dropdown-toggle.btn-danger:disabled,.dropdown-toggle.btn-danger[disabled]{\r\n    background-color:#b3b3b3\r\n}\r\n.btn-danger .ink,.dropdown-toggle.btn-danger .ink{\r\n    background-color:#d43f3a\r\n}\r\n.btn-flat.btn-danger{\r\n    color:#d43f3a\r\n}\r\n.btn-flat.btn-danger:hover{\r\n    color:#f4511e;\r\n    background-color:#e5e5e5\r\n}\r\n.btn-flat.btn-danger.active,.btn-flat.btn-danger:active{\r\n    color:#e64a19;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-danger:focus{\r\n    color:#d84315;\r\n    background-color:#ccc\r\n}\r\n.btn-flat.btn-danger .ink{\r\n    background-color:grey\r\n}\r\n.btn{\r\n    min-width:88px;\r\n    padding:10px 14px\r\n}\r\n.btn-group-lg>.btn,.btn-lg{\r\n    min-width:122px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.3\r\n}\r\n.btn-group-sm>.btn,.btn-sm{\r\n    min-width:64px;\r\n    padding:4px 12px;\r\n    font-size:12px;\r\n    line-height:1.5\r\n}\r\n.btn-group-xs>.btn,.btn-xs{\r\n    min-width:46px;\r\n    padding:2px 10px;\r\n    font-size:10px;\r\n    line-height:1.5\r\n}\r\n.btn-circle{\r\n    width:56px;\r\n    height:56px;\r\n    min-width:56px\r\n}\r\n.btn-circle span{\r\n    line-height:56px\r\n}\r\n.btn-circle.btn-lg{\r\n    width:78px;\r\n    height:78px;\r\n    min-width:78px\r\n}\r\n.btn-circle.btn-lg span{\r\n    line-height:78px\r\n}\r\n.btn-circle.btn-sm{\r\n    width:40px;\r\n    height:40px;\r\n    min-width:40px\r\n}\r\n.btn-circle.btn-sm span{\r\n    line-height:40px\r\n}\r\n.btn-circle.btn-xs{\r\n    width:30px;\r\n    height:30px;\r\n    min-width:30px\r\n}\r\n.btn-circle.btn-xs span{\r\n    line-height:30px\r\n}\r\n.btn-group .btn{\r\n    border-radius:2px\r\n}\r\n.btn-group.open .dropdown-toggle{\r\n    outline:0;\r\n    outline-offset:0;\r\n    box-shadow:none;\r\n    -moz-box-shadow:none;\r\n    -webkit-box-shadow:none\r\n}\r\n.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{\r\n    margin-left:0\r\n}\r\n.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{\r\n    z-index:0\r\n}\r\n.btn-group-vertical>.btn.active:hover,.btn-group-vertical>.btn:active:hover,.btn-group-vertical>.btn:focus:hover,.btn-group>.btn.active:hover,.btn-group>.btn:active:hover,.btn-group>.btn:focus:hover{\r\n    z-index:2\r\n}\r\n\r\n.ink{\r\n    display:block;\r\n    position:absolute;\r\n    pointer-events:none;\r\n    border-radius:50%;\r\n    transform:scale(0);\r\n    background:#fff;\r\n    opacity:1\r\n}\r\n.ink.animate{\r\n    animation:ripple .5s linear\r\n}\r\n@keyframes ripple{\r\n    100%{\r\n        opacity:0;\r\n        transform:scale(2.5)\r\n    }\r\n}\r\n.btn-outline{\r\n    border:1px solid #fff;\r\n    background:0 0;\r\n    color:#fff\r\n}\r\n.btn-outline:active,.btn-outline:focus,.btn-outline:hover{\r\n    color:rgba(255,255,255,.7);\r\n    border-color:rgba(255,255,255,.7)\r\n}\r\n.btn-link{\r\n    box-shadow:none\r\n}\r\n.btn[class*=bg-]:hover{\r\n    box-shadow:inset 0 0 100px rgba(0,0,0,.2)\r\n}\r\n.btn-app{\r\n    border-radius:3px;\r\n    position:relative;\r\n    padding:15px 5px;\r\n    margin:0 0 10px 10px;\r\n    min-width:80px;\r\n    height:60px;\r\n    text-align:center;\r\n    color:#666;\r\n    border:1px solid #ddd;\r\n    background-color:#f4f4f4;\r\n    font-size:12px\r\n}\r\n.alert,.nav-pills>li>a{\r\n    border-radius:0\r\n}\r\n.btn-app>.fa,.btn-app>.glyphicon,.btn-app>.ion{\r\n    font-size:20px;\r\n    display:block\r\n}\r\n.btn-app:hover{\r\n    background:#f4f4f4;\r\n    color:#444;\r\n    border-color:#aaa\r\n}\r\n.btn-app:active,.btn-app:focus{\r\n    box-shadow:inset 0 3px 5px rgba(0,0,0,.125)\r\n}\r\n.external-event,.nav-tabs-custom{\r\n    box-shadow:0 1px 1px rgba(0,0,0,.1)\r\n}\r\n.btn-app>.badge{\r\n    position:absolute;\r\n    top:-3px;\r\n    right:-10px;\r\n    font-size:10px;\r\n    font-weight:400\r\n}\r\n.alert h4,.contacts-list-name,.direct-chat-name,.nav-pills>li.active>a{\r\n    font-weight:600\r\n}\r\n.btn.btn-file{\r\n    position:relative;\r\n    overflow:hidden\r\n}\r\n.btn.btn-file>input[type=file]{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    min-width:100%;\r\n    min-height:100%;\r\n    font-size:100px;\r\n    text-align:right;\r\n    opacity:0;\r\n    filter:alpha(opacity=0);\r\n    outline:0;\r\n    background:#fff;\r\n    cursor:inherit;\r\n    display:block\r\n}\r\n.alert .icon{\r\n    margin-right:10px\r\n}\r\n.alert .close{\r\n    color:#000;\r\n    opacity:.2;\r\n    filter:alpha(opacity=20)\r\n}\r\n.alert .close:hover{\r\n    opacity:.5;\r\n    filter:alpha(opacity=50)\r\n}\r\n.alert a{\r\n    color:#fff!important;\r\n    text-decoration:underline\r\n}\r\n.alert-success{\r\n    border-color:#00a65a\r\n}\r\n.alert-danger,.alert-error{\r\n    border-color:#E5343D\r\n}\r\n.alert-warning{\r\n    border-color:#e08e0b\r\n}\r\n.alert-info{\r\n    border-color:#3cf\r\n}\r\n.alert>.alert-link{\r\n    color:#fff\r\n}\r\n.panel-danger>.panel-heading{\r\n    color:#fff;\r\n    background-color:#E5343D;\r\n    border-color:#E5343D\r\n}\r\n.panelement-detail>.panel-heading{\r\n    color:#fff;\r\n    background-color:#3cf;\r\n    border-color:#3cf\r\n}\r\n.panel-warning>.panel-heading{\r\n    color:#fff;\r\n    background-color:#ff7701;\r\n    border-color:#ff7701\r\n}\r\n.panel-success>.panel-heading{\r\n    color:#fff;\r\n    background-color:#00a65a;\r\n    border-color:#00a65a\r\n}\r\n.panel-default>.panel-heading{\r\n    color:#fff;\r\n    background-color:#bfbfbf;\r\n    border-color:#bfbfbf\r\n}\r\n.panel-primary>.panel-heading{\r\n    color:#fff;\r\n    background-color:#09c;\r\n    border-color:#09c\r\n}\r\n.panel-primary{\r\n    border-color:#09c\r\n}\r\n.nav>li>a:active,.nav>li>a:focus,.nav>li>a:hover{\r\n    color:#444;\r\n    background:#f7f7f7\r\n}\r\n.nav-pills>li>a{\r\n    border-top:3px solid transparent;\r\n    color:#444\r\n}\r\n.nav-pills>li>a>.fa,.nav-pills>li>a>.glyphicon,.nav-pills>li>a>.ion{\r\n    margin-right:5px\r\n}\r\n.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{\r\n    border-top-color:#ffc824\r\n}\r\n.nav-stacked>li>a{\r\n    border-radius:0;\r\n    border-top:0;\r\n    border-left:3px solid transparent;\r\n    color:#444\r\n}\r\n.nav-stacked>li.active>a,.nav-stacked>li.active>a:hover{\r\n    background:0 0;\r\n    color:#444;\r\n    border-top:0;\r\n    border-left-color:#ffc824\r\n}\r\n.nav-stacked>li.header{\r\n    border-bottom:1px solid #ddd;\r\n    color:#777;\r\n    margin-bottom:10px;\r\n    padding:5px 10px;\r\n    text-transform:uppercase\r\n}\r\n.nav-tabs-custom{\r\n    margin-bottom:20px;\r\n    background:#fff;\r\n    border-radius:3px\r\n}\r\n.nav-tabs-custom>.nav-tabs{\r\n    margin:0;\r\n    border-bottom-color:#f4f4f4;\r\n    border-top-right-radius:3px;\r\n    border-top-left-radius:3px\r\n}\r\n.nav-tabs-custom>.nav-tabs>li{\r\n    border-top:3px solid transparent;\r\n    margin-bottom:-2px;\r\n    margin-right:5px\r\n}\r\n.nav-tabs-custom>.nav-tabs>li>a{\r\n    color:#444;\r\n    border-radius:0\r\n}\r\n.nav-tabs-custom>.nav-tabs>li>a.text-muted,.nav-tabs-custom>.nav-tabs>li>a:hover{\r\n    color:#999\r\n}\r\n.nav-tabs-custom>.nav-tabs>li>a,.nav-tabs-custom>.nav-tabs>li>a:hover{\r\n    background:0 0;\r\n    margin:0\r\n}\r\n.nav-tabs-custom>.nav-tabs>li:not(.active)>a:active,.nav-tabs-custom>.nav-tabs>li:not(.active)>a:focus,.nav-tabs-custom>.nav-tabs>li:not(.active)>a:hover{\r\n    border-color:transparent\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active{\r\n    border-top-color:#ffc824\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active:hover>a,.nav-tabs-custom>.nav-tabs>li.active>a{\r\n    background-color:#fff;\r\n    color:#444\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active>a{\r\n    border-top-color:transparent;\r\n    border-left-color:#f4f4f4;\r\n    border-right-color:#f4f4f4\r\n}\r\n.nav-tabs-custom>.nav-tabs>li:first-of-type{\r\n    margin-left:0\r\n}\r\n.nav-tabs-custom>.nav-tabs>li:first-of-type.active>a{\r\n    border-left-color:transparent\r\n}\r\n.nav-tabs-custom>.nav-tabs.pull-right{\r\n    float:none!important\r\n}\r\n.nav-tabs-custom>.nav-tabs.pull-right>li{\r\n    float:right\r\n}\r\n.nav-tabs-custom>.nav-tabs.pull-right>li:first-of-type{\r\n    margin-right:0\r\n}\r\n.nav-tabs-custom>.nav-tabs.pull-right>li:first-of-type>a{\r\n    border-left-width:1px\r\n}\r\n.nav-tabs-custom>.nav-tabs.pull-right>li:first-of-type.active>a{\r\n    border-left-color:#f4f4f4;\r\n    border-right-color:transparent\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.header{\r\n    line-height:35px;\r\n    padding:0 10px;\r\n    font-size:20px;\r\n    color:#444\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.header>.fa,.nav-tabs-custom>.nav-tabs>li.header>.glyphicon,.nav-tabs-custom>.nav-tabs>li.header>.ion{\r\n    margin-right:5px\r\n}\r\n.nav-tabs-custom>.tab-content{\r\n    background:#fff;\r\n    padding:10px;\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n.nav-tabs-custom .dropdown.open>a:active,.nav-tabs-custom .dropdown.open>a:focus{\r\n    background:0 0;\r\n    color:#999\r\n}\r\n.nav-tabs-custom.tab-primary>.nav-tabs>li.active{\r\n    border-top-color:#ffc824\r\n}\r\n.nav-tabs-custom.tab-info>.nav-tabs>li.active{\r\n    border-top-color:#00c0ef\r\n}\r\n.nav-tabs-custom.tab-danger>.nav-tabs>li.active{\r\n    border-top-color:#dd4b39\r\n}\r\n.nav-tabs-custom.tab-warning>.nav-tabs>li.active{\r\n    border-top-color:#f39c12\r\n}\r\n.nav-tabs-custom.tab-success>.nav-tabs>li.active{\r\n    border-top-color:#00a65a\r\n}\r\n.nav-tabs-custom.tab-default>.nav-tabs>li.active{\r\n    border-top-color:#d2d6de\r\n}\r\n.pagination>li>a{\r\n    background:#fafafa;\r\n    color:#666\r\n}\r\n.pagination.pagination-flat>li>a{\r\n    border-radius:0!important\r\n}\r\n.dataTable_search{\r\n    border-radius:4px\r\n}\r\n.dataTables_paginate .pagination .active a{\r\n    background-color:#ffc824;\r\n    border-color:#ffc824\r\n}\r\n.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{\r\n    border-top:1px solid #f4f4f4;\r\n    padding:12px\r\n}\r\n.table>thead>tr>th{\r\n    border-bottom:2px solid #f4f4f4\r\n}\r\n.table tr td .progress{\r\n    margin-top:5px\r\n}\r\n.table-bordered,.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{\r\n    border:1px solid #f4f4f4\r\n}\r\n.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{\r\n    border-bottom-width:2px\r\n}\r\n.table.no-border,.table.no-border td,.table.no-border th{\r\n    border:0\r\n}\r\ntable.text-center,table.text-center td,table.text-center th{\r\n    text-align:center\r\n}\r\n.table.align th{\r\n    text-align:left\r\n}\r\n.table.align td{\r\n    text-align:right\r\n}\r\n.label-default{\r\n    background-color:#d2d6de;\r\n    color:#444\r\n}\r\n.direct-chat .box-body{\r\n    border-bottom-right-radius:0;\r\n    border-bottom-left-radius:0;\r\n    position:relative;\r\n    overflow-x:hidden;\r\n    padding:0\r\n}\r\n.direct-chat.chat-pane-open .direct-chat-contacts{\r\n    transform:translate(0,0)\r\n}\r\n.direct-chat-messages{\r\n    transform:translate(0,0);\r\n    padding:10px;\r\n    height:250px;\r\n    overflow:auto\r\n}\r\n.direct-chat-msg,.direct-chat-text{\r\n    display:block\r\n}\r\n.direct-chat-msg{\r\n    margin-bottom:10px\r\n}\r\n.direct-chat-msg:after,.direct-chat-msg:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.direct-chat-contacts,.direct-chat-messages{\r\n    transition:transform .5s ease-in-out\r\n}\r\n.direct-chat-text{\r\n    border-radius:5px;\r\n    position:relative;\r\n    padding:5px 10px;\r\n    background:#d2d6de;\r\n    border:1px solid #d2d6de;\r\n    margin:5px 0 0 50px;\r\n    color:#444\r\n}\r\n.direct-chat-text:after,.direct-chat-text:before{\r\n    position:absolute;\r\n    right:100%;\r\n    top:15px;\r\n    border:solid transparent;\r\n    border-right-color:#d2d6de;\r\n    content:' ';\r\n    height:0;\r\n    width:0;\r\n    pointer-events:none\r\n}\r\n.direct-chat-text:after{\r\n    border-width:5px;\r\n    margin-top:-5px\r\n}\r\n.direct-chat-text:before{\r\n    border-width:6px;\r\n    margin-top:-6px\r\n}\r\n.right .direct-chat-text{\r\n    margin-right:50px;\r\n    margin-left:0\r\n}\r\n.right .direct-chat-text:after,.right .direct-chat-text:before{\r\n    right:auto;\r\n    left:100%;\r\n    border-right-color:transparent;\r\n    border-left-color:#d2d6de\r\n}\r\n.direct-chat-img{\r\n    border-radius:50%;\r\n    float:left;\r\n    width:40px;\r\n    height:40px\r\n}\r\n.right .direct-chat-img{\r\n    float:right\r\n}\r\n.direct-chat-info{\r\n    display:block;\r\n    margin-bottom:2px;\r\n    font-size:12px\r\n}\r\n.direct-chat-timestamp{\r\n    color:#999\r\n}\r\n.direct-chat-contacts-open .direct-chat-contacts{\r\n    transform:translate(0,0)\r\n}\r\n.direct-chat-contacts{\r\n    transform:translate(101%,0);\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    height:250px;\r\n    width:100%;\r\n    background:#222d32;\r\n    color:#fff;\r\n    overflow:auto\r\n}\r\n.contacts-list>li{\r\n    border-bottom:1px solid rgba(0,0,0,.2);\r\n    padding:10px;\r\n    margin:0\r\n}\r\n.contacts-list>li:after,.contacts-list>li:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.contacts-list>li:last-of-type{\r\n    border-bottom:none\r\n}\r\n.contacts-list-img{\r\n    border-radius:50%;\r\n    width:40px;\r\n    float:left\r\n}\r\n.contacts-list-info{\r\n    margin-left:45px;\r\n    color:#fff\r\n}\r\n.contacts-list-name,.contacts-list-status{\r\n    display:block\r\n}\r\n.contacts-list-status{\r\n    font-size:12px\r\n}\r\n.contacts-list-date{\r\n    color:#aaa;\r\n    font-weight:400\r\n}\r\n.contacts-list-msg{\r\n    color:#999\r\n}\r\n.direct-chat-danger .right>.direct-chat-text{\r\n    background:#dd4b39;\r\n    border-color:#dd4b39;\r\n    color:#fff\r\n}\r\n.direct-chat-danger .right>.direct-chat-text:after,.direct-chat-danger .right>.direct-chat-text:before{\r\n    border-left-color:#dd4b39\r\n}\r\n.direct-chat-primary .right>.direct-chat-text{\r\n    background:#ffc824;\r\n    border-color:#ffc824;\r\n    color:#fff\r\n}\r\n.direct-chat-primary .right>.direct-chat-text:after,.direct-chat-primary .right>.direct-chat-text:before{\r\n    border-left-color:#ffc824\r\n}\r\n.direct-chat-warning .right>.direct-chat-text{\r\n    background:#f39c12;\r\n    border-color:#f39c12;\r\n    color:#fff\r\n}\r\n.direct-chat-warning .right>.direct-chat-text:after,.direct-chat-warning .right>.direct-chat-text:before{\r\n    border-left-color:#f39c12\r\n}\r\n.direct-chat-info .right>.direct-chat-text{\r\n    background:#00c0ef;\r\n    border-color:#00c0ef;\r\n    color:#fff\r\n}\r\n.direct-chat-info .right>.direct-chat-text:after,.direct-chat-info .right>.direct-chat-text:before{\r\n    border-left-color:#00c0ef\r\n}\r\n.direct-chat-success .right>.direct-chat-text{\r\n    background:#00a65a;\r\n    border-color:#00a65a;\r\n    color:#fff\r\n}\r\n.direct-chat-success .right>.direct-chat-text:after,.direct-chat-success .right>.direct-chat-text:before{\r\n    border-left-color:#00a65a\r\n}\r\n.carousel-control.left,.carousel-control.right{\r\n    background-image:none\r\n}\r\n.carousel-control>.fa{\r\n    font-size:40px;\r\n    position:absolute;\r\n    top:50%;\r\n    z-index:5;\r\n    display:inline-block;\r\n    margin-top:-20px\r\n}\r\n.fc-event,.mailbox-attachment-icon,.mailbox-attachment-info,.mailbox-attachment-size{\r\n    display:block\r\n}\r\n.dropzone{\r\n    background-color:#f1f1f1\r\n}\r\n.dropzone .dz-message .drag-icon-cph{\r\n    font-size:58px;\r\n    color:#777\r\n}\r\n.box-widget{\r\n    border:none;\r\n    position:relative\r\n}\r\n.widget-user .widget-user-header{\r\n    padding:20px;\r\n    height:120px;\r\n    border-top-right-radius:3px;\r\n    border-top-left-radius:3px;\r\n    color:#fff\r\n}\r\n.widget-user .widget-user-username{\r\n    margin-top:0;\r\n    margin-bottom:5px;\r\n    font-size:25px;\r\n    font-weight:300;\r\n    text-shadow:0 1px 1px rgba(0,0,0,.2)\r\n}\r\n.widget-user .widget-user-desc{\r\n    margin-top:0\r\n}\r\n.widget-user .widget-user-image{\r\n    position:absolute;\r\n    top:65px;\r\n    left:50%;\r\n    margin-left:-45px\r\n}\r\n.widget-user .widget-user-image>img{\r\n    width:90px;\r\n    height:auto;\r\n    border:3px solid #fff\r\n}\r\n.widget-user .box-footer{\r\n    padding-top:30px\r\n}\r\n.widget-user-2 .widget-user-header{\r\n    padding:20px;\r\n    border-top-right-radius:3px;\r\n    border-top-left-radius:3px\r\n}\r\n.widget-user-2 .widget-user-username{\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n    font-size:25px;\r\n    font-weight:300\r\n}\r\n.widget-user-2 .widget-user-desc{\r\n    margin-top:0\r\n}\r\n.widget-user-2 .widget-user-desc,.widget-user-2 .widget-user-username{\r\n    margin-left:75px\r\n}\r\n.widget-user-2 .widget-user-image>img{\r\n    width:65px;\r\n    height:auto;\r\n    float:left\r\n}\r\n.mailbox .mailbox-messages .table>tbody>tr>td{\r\n    padding:18px;\r\n    font-size:15px\r\n}\r\n.mailbox .mailbox-messages .table>tbody tr.unread{\r\n    border:0;\r\n    border-left:3px solid grey\r\n}\r\n.mailbox-controls.with-border,.mailbox-read-info{\r\n    border-bottom:1px solid #f4f4f4\r\n}\r\n.mailbox .mailbox-messages .table>tbody tr.unread>td a{\r\n    font-weight:700;\r\n    color:#4e4e4e\r\n}\r\n.mailbox .mailbox-messages .table>tbody>tr>td a,.mailbox-subject a{\r\n    color:#333\r\n}\r\n.mailbox .mailbox-messages>.table{\r\n    margin:0\r\n}\r\n.mailbox-controls{\r\n    padding:5px\r\n}\r\n.mailbox-read-info{\r\n    padding:10px\r\n}\r\n.mailbox-read-info h3{\r\n    font-size:20px;\r\n    margin-bottom:6px;\r\n    margin-top:0;\r\n    font-weight:700\r\n}\r\n.mailbox-read-info h5{\r\n    margin:0;\r\n    padding:5px 0 0\r\n}\r\n.mailbox-read-time{\r\n    color:#999;\r\n    font-size:13px\r\n}\r\n.mailbox-read-message{\r\n    padding:10px;\r\n    line-height:16pt\r\n}\r\n.mailbox-attachments li{\r\n    float:left;\r\n    width:200px;\r\n    border:1px solid #eee;\r\n    margin-bottom:10px;\r\n    margin-right:10px\r\n}\r\n.mailbox-attachment-name{\r\n    font-weight:700;\r\n    color:#333!important\r\n}\r\n.mailbox-attachment-info{\r\n    padding:10px;\r\n    background:#f4f4f4\r\n}\r\n.mailbox-attachment-size{\r\n    color:#999;\r\n    font-size:12px\r\n}\r\n.mailbox-attachment-icon{\r\n    text-align:center;\r\n    font-size:65px;\r\n    color:#666;\r\n    padding:20px 10px\r\n}\r\n.mailbox-attachment-icon.has-img{\r\n    padding:0\r\n}\r\n.mailbox-attachment-icon.has-img>img{\r\n    max-width:100%;\r\n    height:auto\r\n}\r\n.lockscreen-page{\r\n    background-color:#e8e8e8;\r\n    background-size:cover\r\n}\r\n.lockscreen-page .box-lockscreen{\r\n    width:360px;\r\n    background-color:#fff;\r\n    margin:6% auto;\r\n    position:absolute;\r\n    right:0;\r\n    left:0;\r\n    border-top:3px solid #ffc824\r\n}\r\n@media (max-width:768px){\r\n    .lockscreen-page .box-lockscreen{\r\n        width:90%;\r\n        margin-top:20px\r\n    }\r\n}\r\n.lockscreen-page .box-lockscreen h3{\r\n    text-align:center\r\n}\r\n.lockscreen-page .box-lockscreen-body{\r\n    background:#fff;\r\n    padding:20px;\r\n    border-top:0;\r\n    color:#666\r\n}\r\n.lockscreen-page .box-lockscreen-msg{\r\n    margin:0;\r\n    text-align:center;\r\n    padding:0 20px 20px\r\n}\r\n.lockscreen-page .lockscreen-form .form-action{\r\n    border-top:1px solid #e4e9f0;\r\n    padding-top:1.42rem;\r\n    margin:1.42rem 0\r\n}\r\n.lockscreen-page .lockscreen-form .form-action button{\r\n    background-color:#DDD;\r\n    color:#000\r\n}\r\n.lockscreen-page .lockscreen-form .form-action button:hover{\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.lockscreen-page .user-image img{\r\n    float:left;\r\n    width:110px;\r\n    padding:10px;\r\n    border-radius:20px;\r\n    margin:-20px 20px 7px 48px\r\n}\r\n.login-page,.register-page{\r\n    background-color:#e8e8e8;\r\n    background-size:cover\r\n}\r\n.login-page .box-login,.register-page .box-register{\r\n    width:360px;\r\n    background-color:#fff;\r\n    margin:6% auto;\r\n    position:absolute;\r\n    right:0;\r\n    left:0;\r\n    border-top:3px solid #ffc824\r\n}\r\n@media (max-width:768px){\r\n    .login-page .box-login,.register-page .box-register{\r\n        width:90%;\r\n        margin-top:20px\r\n    }\r\n}\r\n.login-page .box-login h3,.register-page .box-register h3{\r\n    text-align:center\r\n}\r\n.login-page .box-login-body,.register-page .box-register-body{\r\n    background:#fff;\r\n    padding:20px;\r\n    border-top:0;\r\n    color:#666\r\n}\r\n.login-page .box-login-msg,.register-page .box-register-msg{\r\n    margin:0;\r\n    text-align:center;\r\n    padding:0 20px 20px\r\n}\r\n.login-page .login-form .form-action,.register-page .register-form .form-action{\r\n    border-top:1px solid #e4e9f0;\r\n    padding-top:1.42rem;\r\n    margin:1.42rem 0\r\n}\r\n.login-page .login-form .form-action button,.register-page .register-form .form-action button{\r\n    color:#000\r\n}\r\n.login-page .login-form .form-action button:hover,.register-page .register-form .form-action button:hover{\r\n    background-color:#DDD;\r\n    color:#000\r\n}\r\n.login-page .login-form .form-action input[type=submit]:hover,.register-page .register-form .form-action input[type=submit]:hover{\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.forgot-page{\r\n    background-color:#e8e8e8;\r\n    background-size:cover\r\n}\r\n.forgot-page .box-forgot{\r\n    width:360px;\r\n    /* background-color:#fff; */\r\n    margin:6% auto;\r\n    position:absolute;\r\n    right:0;\r\n    left:0;\r\n    border-top: 3px solid #00c0ef   \r\n}\r\n@media (max-width:768px){\r\n    .forgot-page .box-forgot{\r\n        width:90%;\r\n        margin-top:20px\r\n    }\r\n}\r\n.forgot-page .box-forgot h3{\r\n    text-align:center\r\n}\r\n.forgot-page .box-forgot-body{\r\n    background:#ddddddc4;\r\n    padding:20px;\r\n    border-top:0;\r\n    color: black\r\n}\r\n.forgot-page .box-forgot-msg{\r\n    margin:0;\r\n    text-align:center;\r\n    padding:0 20px 20px\r\n}\r\n.forgot-page .forgot-form .form-action{\r\n    border-top:1px solid #e4e9f0;\r\n    padding-top:1.42rem;\r\n    margin:1.42rem 0\r\n}\r\n.forgot-page .forgot-form .form-action button{\r\n    background-color: #ab2a1a;\r\n    color: ghostwhite;\r\n}\r\n.forgot-page .forgot-form .form-action button:hover{\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.offline-page{\r\n    background-color:#e8e8e8;\r\n    background-size:cover\r\n}\r\n.offline-page .box-offline{\r\n    width:360px;\r\n    background-color:#fff;\r\n    margin:6% auto;\r\n    position:absolute;\r\n    right:0;\r\n    left:0;\r\n    border-top:3px solid #ffc824\r\n}\r\n@media (max-width:768px){\r\n    .offline-page .box-offline{\r\n        width:90%;\r\n        margin-top:20px\r\n    }\r\n}\r\n.offline-page .box-offline h3{\r\n    text-align:center\r\n}\r\n.offline-page .box-offline-body{\r\n    background:#fff;\r\n    padding:20px;\r\n    border-top:0;\r\n    color:#666\r\n}\r\n.offline-page .box-offline-msg{\r\n    margin:0;\r\n    text-align:center;\r\n    padding:0 20px 20px\r\n}\r\n.offline-page .offline-form .form-action{\r\n    border-top:1px solid #e4e9f0;\r\n    padding-top:1.42rem;\r\n    margin:1.42rem 0\r\n}\r\n.offline-page .offline-form .form-action button{\r\n    background-color:#DDD;\r\n    color:#000\r\n}\r\n.offline-page .offline-form .form-action button:hover{\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.error-page{\r\n    background-color:#e8e8e8;\r\n    background-size:cover\r\n}\r\n.error-page .box-error{\r\n    width:360px;\r\n    background-color:#fff;\r\n    margin:6% auto;\r\n    position:absolute;\r\n    right:0;\r\n    left:0;\r\n    border-top:3px solid #ffc824\r\n}\r\n@media (max-width:768px){\r\n    .error-page .box-error{\r\n        width:90%;\r\n        margin-top:20px\r\n    }\r\n}\r\n.error-page .box-error h3{\r\n    text-align:center\r\n}\r\n.error-page .box-error-body{\r\n    background:#fff;\r\n    padding:20px;\r\n    border-top:0;\r\n    color:#666\r\n}\r\n.btn-adn.active,.btn-adn:active,.btn-bitbucket.active,.btn-bitbucket:active,.btn-dropbox.active,.btn-dropbox:active,.btn-facebook.active,.btn-facebook:active,.btn-flickr.active,.btn-flickr:active,.btn-foursquare.active,.btn-foursquare:active,.btn-github.active,.btn-github:active,.btn-google.active,.btn-google:active,.btn-instagram.active,.btn-instagram:active,.btn-microsoft.active,.btn-microsoft:active,.btn-openid.active,.btn-openid:active,.btn-pinterest.active,.btn-pinterest:active,.btn-reddit.active,.btn-reddit:active,.btn-soundcloud.active,.btn-soundcloud:active,.btn-tumblr.active,.btn-tumblr:active,.btn-twitter.active,.btn-twitter:active,.btn-vimeo.active,.btn-vimeo:active,.btn-vk.active,.btn-vk:active,.btn-yahoo.active,.btn-yahoo:active,.open>.dropdown-toggle.btn-adn,.open>.dropdown-toggle.btn-bitbucket,.open>.dropdown-toggle.btn-dropbox,.open>.dropdown-toggle.btn-facebook,.open>.dropdown-toggle.btn-flickr,.open>.dropdown-toggle.btn-foursquare,.open>.dropdown-toggle.btn-github,.open>.dropdown-toggle.btn-google,.open>.dropdown-toggle.btn-instagram,.open>.dropdown-toggle.btn-microsoft,.open>.dropdown-toggle.btn-openid,.open>.dropdown-toggle.btn-pinterest,.open>.dropdown-toggle.btn-reddit,.open>.dropdown-toggle.btn-soundcloud,.open>.dropdown-toggle.btn-tumblr,.open>.dropdown-toggle.btn-twitter,.open>.dropdown-toggle.btn-vimeo,.open>.dropdown-toggle.btn-vk,.open>.dropdown-toggle.btn-yahoo{\r\n    background-image:none\r\n}\r\n.error-page .box-error-msg{\r\n    margin:0;\r\n    text-align:center;\r\n    padding:0 20px 20px\r\n}\r\n.error-page .error-form .form-action{\r\n    border-top:1px solid #e4e9f0;\r\n    padding-top:1.42rem;\r\n    margin:1.42rem 0\r\n}\r\n.error-page .error-form .form-action button{\r\n    background-color:#DDD;\r\n    color:#000\r\n}\r\n.error-page .error-form .form-action button:hover{\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-social{\r\n    position:relative;\r\n    padding-left:44px;\r\n    text-align:left;\r\n    white-space:nowrap;\r\n    overflow:hidden\r\n}\r\na.btn-social,a.btn-social-icon{\r\n    color:#fff!important\r\n}\r\n.btn-social>:first-child{\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    bottom:0;\r\n    width:32px;\r\n    line-height:34px;\r\n    font-size:1.6em;\r\n    text-align:center;\r\n    border-right:1px solid rgba(0,0,0,.2)\r\n}\r\n.btn-social.btn-lg{\r\n    padding-left:61px\r\n}\r\n.btn-social.btn-lg>:first-child{\r\n    line-height:45px;\r\n    width:45px;\r\n    font-size:1.8em\r\n}\r\n.btn-social.btn-sm{\r\n    padding-left:38px\r\n}\r\n.btn-social.btn-sm>:first-child{\r\n    line-height:28px;\r\n    width:28px;\r\n    font-size:1.4em\r\n}\r\n.btn-social.btn-xs{\r\n    padding-left:30px\r\n}\r\n.btn-social.btn-xs>:first-child{\r\n    line-height:20px;\r\n    width:20px;\r\n    font-size:1.2em\r\n}\r\n.btn-social-icon{\r\n    position:relative;\r\n    text-align:left;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n    height:34px;\r\n    width:34px;\r\n    padding:0\r\n}\r\n.btn-social-icon>:first-child{\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    bottom:0;\r\n    line-height:34px;\r\n    font-size:1.6em\r\n}\r\n.btn-social-icon.btn-lg>:first-child{\r\n    line-height:45px;\r\n    width:45px;\r\n    font-size:1.8em\r\n}\r\n.btn-social-icon.btn-sm>:first-child{\r\n    line-height:28px;\r\n    width:28px;\r\n    font-size:1.4em\r\n}\r\n.btn-social-icon.btn-xs>:first-child{\r\n    line-height:20px;\r\n    width:20px;\r\n    font-size:1.2em\r\n}\r\n.btn-social-icon>:first-child{\r\n    border:none;\r\n    text-align:center;\r\n    width:100%\r\n}\r\n.btn-social-icon.btn-lg{\r\n    height:45px;\r\n    width:45px;\r\n    padding-left:0;\r\n    padding-right:0\r\n}\r\n.btn-social-icon.btn-sm{\r\n    height:30px;\r\n    width:30px;\r\n    padding-left:0;\r\n    padding-right:0\r\n}\r\n.btn-social-icon.btn-xs{\r\n    height:22px;\r\n    width:22px;\r\n    padding-left:0;\r\n    padding-right:0\r\n}\r\n.fc-day-number,.fc-header-right{\r\n    padding-right:10px\r\n}\r\n.btn-adn{\r\n    color:#fff;\r\n    background-color:#d87a68;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-adn.active,.btn-adn.focus,.btn-adn:active,.btn-adn:focus,.btn-adn:hover,.open>.dropdown-toggle.btn-adn{\r\n    color:#fff;\r\n    background-color:#ce563f;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-adn .badge{\r\n    color:#d87a68;\r\n    background-color:#fff\r\n}\r\n.btn-bitbucket{\r\n    color:#fff;\r\n    background-color:#205081;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-bitbucket.active,.btn-bitbucket.focus,.btn-bitbucket:active,.btn-bitbucket:focus,.btn-bitbucket:hover,.open>.dropdown-toggle.btn-bitbucket{\r\n    color:#fff;\r\n    background-color:#163758;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-bitbucket .badge{\r\n    color:#205081;\r\n    background-color:#fff\r\n}\r\n.btn-dropbox{\r\n    color:#fff;\r\n    background-color:#1087dd;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-dropbox.active,.btn-dropbox.focus,.btn-dropbox:active,.btn-dropbox:focus,.btn-dropbox:hover,.open>.dropdown-toggle.btn-dropbox{\r\n    color:#fff;\r\n    background-color:#0d6aad;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-dropbox .badge{\r\n    color:#1087dd;\r\n    background-color:#fff\r\n}\r\n.btn-facebook{\r\n    color:#fff;\r\n    background-color:#3b5998;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-facebook.active,.btn-facebook.focus,.btn-facebook:active,.btn-facebook:focus,.btn-facebook:hover,.open>.dropdown-toggle.btn-facebook{\r\n    color:#fff;\r\n    background-color:#2d4373;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-facebook .badge{\r\n    color:#3b5998;\r\n    background-color:#fff\r\n}\r\n.btn-flickr{\r\n    color:#fff;\r\n    background-color:#ff0084;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-flickr.active,.btn-flickr.focus,.btn-flickr:active,.btn-flickr:focus,.btn-flickr:hover,.open>.dropdown-toggle.btn-flickr{\r\n    color:#fff;\r\n    background-color:#cc006a;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-flickr .badge{\r\n    color:#ff0084;\r\n    background-color:#fff\r\n}\r\n.btn-foursquare{\r\n    color:#fff;\r\n    background-color:#f94877;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-foursquare.active,.btn-foursquare.focus,.btn-foursquare:active,.btn-foursquare:focus,.btn-foursquare:hover,.open>.dropdown-toggle.btn-foursquare{\r\n    color:#fff;\r\n    background-color:#f71752;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-foursquare .badge{\r\n    color:#f94877;\r\n    background-color:#fff\r\n}\r\n.btn-github{\r\n    color:#fff;\r\n    background-color:#444;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-github.active,.btn-github.focus,.btn-github:active,.btn-github:focus,.btn-github:hover,.open>.dropdown-toggle.btn-github{\r\n    color:#fff;\r\n    background-color:#2b2b2b;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-github .badge{\r\n    color:#444;\r\n    background-color:#fff\r\n}\r\n.btn-google{\r\n    color:#fff;\r\n    background-color:#dd4b39;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-google.active,.btn-google.focus,.btn-google:active,.btn-google:focus,.btn-google:hover,.open>.dropdown-toggle.btn-google{\r\n    color:#fff;\r\n    background-color:#c23321;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-google .badge{\r\n    color:#dd4b39;\r\n    background-color:#fff\r\n}\r\n.btn-instagram{\r\n    color:#fff;\r\n    background-color:#3f729b;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-instagram.active,.btn-instagram.focus,.btn-instagram:active,.btn-instagram:focus,.btn-instagram:hover,.open>.dropdown-toggle.btn-instagram{\r\n    color:#fff;\r\n    background-color:#305777;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-instagram .badge{\r\n    color:#3f729b;\r\n    background-color:#fff\r\n}\r\n.btn-linkedin{\r\n    color:#fff;\r\n    background-color:#007bb6;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-linkedin.active,.btn-linkedin.focus,.btn-linkedin:active,.btn-linkedin:focus,.btn-linkedin:hover,.open>.dropdown-toggle.btn-linkedin{\r\n    color:#fff;\r\n    background-color:#005983;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-linkedin.active,.btn-linkedin:active,.open>.dropdown-toggle.btn-linkedin{\r\n    background-image:none\r\n}\r\n.btn-linkedin .badge{\r\n    color:#007bb6;\r\n    background-color:#fff\r\n}\r\n.btn-microsoft{\r\n    color:#fff;\r\n    background-color:#2672ec;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-microsoft.active,.btn-microsoft.focus,.btn-microsoft:active,.btn-microsoft:focus,.btn-microsoft:hover,.open>.dropdown-toggle.btn-microsoft{\r\n    color:#fff;\r\n    background-color:#125acd;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-microsoft .badge{\r\n    color:#2672ec;\r\n    background-color:#fff\r\n}\r\n.btn-openid{\r\n    color:#fff;\r\n    background-color:#f7931e;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-openid.active,.btn-openid.focus,.btn-openid:active,.btn-openid:focus,.btn-openid:hover,.open>.dropdown-toggle.btn-openid{\r\n    color:#fff;\r\n    background-color:#da7908;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-openid .badge{\r\n    color:#f7931e;\r\n    background-color:#fff\r\n}\r\n.btn-pinterest{\r\n    color:#fff;\r\n    background-color:#cb2027;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-pinterest.active,.btn-pinterest.focus,.btn-pinterest:active,.btn-pinterest:focus,.btn-pinterest:hover,.open>.dropdown-toggle.btn-pinterest{\r\n    color:#fff;\r\n    background-color:#9f191f;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-pinterest .badge{\r\n    color:#cb2027;\r\n    background-color:#fff\r\n}\r\n.btn-reddit{\r\n    color:#000;\r\n    background-color:#eff7ff;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-reddit.active,.btn-reddit.focus,.btn-reddit:active,.btn-reddit:focus,.btn-reddit:hover,.open>.dropdown-toggle.btn-reddit{\r\n    color:#000;\r\n    background-color:#bcddff;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-reddit .badge{\r\n    color:#eff7ff;\r\n    background-color:#000\r\n}\r\n.btn-soundcloud{\r\n    color:#fff;\r\n    background-color:#f50;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-soundcloud.active,.btn-soundcloud.focus,.btn-soundcloud:active,.btn-soundcloud:focus,.btn-soundcloud:hover,.open>.dropdown-toggle.btn-soundcloud{\r\n    color:#fff;\r\n    background-color:#c40;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-soundcloud .badge{\r\n    color:#f50;\r\n    background-color:#fff\r\n}\r\n.btn-tumblr{\r\n    color:#fff;\r\n    background-color:#2c4762;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-tumblr.active,.btn-tumblr.focus,.btn-tumblr:active,.btn-tumblr:focus,.btn-tumblr:hover,.open>.dropdown-toggle.btn-tumblr{\r\n    color:#fff;\r\n    background-color:#1c2d3f;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-tumblr .badge{\r\n    color:#2c4762;\r\n    background-color:#fff\r\n}\r\n.btn-twitter{\r\n    color:#fff;\r\n    background-color:#55acee;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-twitter.active,.btn-twitter.focus,.btn-twitter:active,.btn-twitter:focus,.btn-twitter:hover,.open>.dropdown-toggle.btn-twitter{\r\n    color:#fff;\r\n    background-color:#2795e9;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-twitter .badge{\r\n    color:#55acee;\r\n    background-color:#fff\r\n}\r\n.btn-vimeo{\r\n    color:#fff;\r\n    background-color:#1ab7ea;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-vimeo.active,.btn-vimeo.focus,.btn-vimeo:active,.btn-vimeo:focus,.btn-vimeo:hover,.open>.dropdown-toggle.btn-vimeo{\r\n    color:#fff;\r\n    background-color:#1295bf;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-vimeo .badge{\r\n    color:#1ab7ea;\r\n    background-color:#fff\r\n}\r\n.btn-vk{\r\n    color:#fff;\r\n    background-color:#587ea3;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-vk.active,.btn-vk.focus,.btn-vk:active,.btn-vk:focus,.btn-vk:hover,.open>.dropdown-toggle.btn-vk{\r\n    color:#fff;\r\n    background-color:#466482;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-vk .badge{\r\n    color:#587ea3;\r\n    background-color:#fff\r\n}\r\n.btn-yahoo{\r\n    color:#fff;\r\n    background-color:#720e9e;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-yahoo.active,.btn-yahoo.focus,.btn-yahoo:active,.btn-yahoo:focus,.btn-yahoo:hover,.open>.dropdown-toggle.btn-yahoo{\r\n    color:#fff;\r\n    background-color:#500a6f;\r\n    border-color:rgba(0,0,0,.2)\r\n}\r\n.btn-yahoo .badge{\r\n    color:#720e9e;\r\n    background-color:#fff\r\n}\r\n.fc-button{\r\n    background:#f4f4f4;\r\n    color:#444;\r\n    border-color:#ddd\r\n}\r\n.fc-button.hover,.fc-button:active,.fc-button:hover{\r\n    background-color:#e9e9e9\r\n}\r\n.fc-header-title h2{\r\n    font-size:15px;\r\n    line-height:1.6em;\r\n    color:#666;\r\n    margin-left:10px\r\n}\r\n.fc-header-left{\r\n    padding-left:10px\r\n}\r\n.fc-widget-header{\r\n    background:#fafafa\r\n}\r\n.fc-grid{\r\n    width:100%;\r\n    border:0\r\n}\r\n.fc-widget-content:first-of-type,.fc-widget-header:first-of-type{\r\n    border-left:0;\r\n    border-right:0\r\n}\r\n.fc-widget-content:last-of-type,.fc-widget-header:last-of-type{\r\n    border-right:0\r\n}\r\n.fc-toolbar{\r\n    padding:10px;\r\n    margin:0\r\n}\r\n.fc-day-number{\r\n    font-size:20px;\r\n    font-weight:300\r\n}\r\n.fc-color-picker{\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0\r\n}\r\n.fc-color-picker>li{\r\n    float:left;\r\n    font-size:30px;\r\n    margin-right:5px;\r\n    line-height:30px\r\n}\r\n.fc-color-picker>li .fa{\r\n    transition:transform linear .3s\r\n}\r\n.fc-color-picker>li .fa:hover{\r\n    transform:rotate(30deg)\r\n}\r\n#add-new-event{\r\n    transition:all linear .3s\r\n}\r\n.external-event{\r\n    padding:5px 10px;\r\n    font-weight:700;\r\n    margin-bottom:4px;\r\n    text-shadow:0 1px 1px rgba(0,0,0,.1);\r\n    border-radius:3px;\r\n    cursor:move\r\n}\r\n.external-event:hover{\r\n    box-shadow:inset 0 0 90px rgba(0,0,0,.2)\r\n}\r\n.event-title{\r\n    background-color:#f6f6f6;\r\n    padding:10px;\r\n    margin:6px 0;\r\n    border-left:4px solid;\r\n    border-radius:0\r\n}\r\n.event-title .b-red{\r\n    border-color:red\r\n}\r\n.event-title:active,.event-title:hover{\r\n    background-color:#f1f1f1\r\n}\r\n.external-event .b-red{\r\n    border-color:#d2d6de\r\n}\r\n.fc-content{\r\n    padding:5px;\r\n    background:#f1f1f1;\r\n    color:#000\r\n}\r\n.fc-event{\r\n    position:relative;\r\n    font-size:11px;\r\n    line-height:1.3;\r\n    border-radius:0;\r\n    border:none;\r\n    background-color:#fff;\r\n    font-weight:400;\r\n    border-left:3px solid\r\n}\r\n.select2-container--default.select2-container--focus,.select2-container--default:active,.select2-container--default:focus,.select2-selection.select2-container--focus,.select2-selection:active,.select2-selection:focus{\r\n    outline:0\r\n}\r\n.select2-container--default .select2-selection--single,.select2-selection .select2-selection--single{\r\n    border:1px solid #d2d6de;\r\n    border-radius:0;\r\n    padding:6px 12px;\r\n    height:34px\r\n}\r\n.select2-container--default.select2-container--open{\r\n    border-color:#ffc824\r\n}\r\n.select2-dropdown{\r\n    border:1px solid #d2d6de;\r\n    border-radius:0\r\n}\r\n.select2-container--default .select2-results__option--highlighted[aria-selected]{\r\n    background-color:#ffc824;\r\n    color:#fff\r\n}\r\n.select2-results__option{\r\n    padding:6px 12px;\r\n    -moz-user-select:none;\r\n     -ms-user-select:none;\r\n         user-select:none;\r\n    -webkit-user-select:none\r\n}\r\n.select2-container .select2-selection--single .select2-selection__rendered{\r\n    padding-left:0;\r\n    height:auto;\r\n    margin-top:-4px\r\n}\r\n.select2-container[dir=rtl] .select2-selection--single .select2-selection__rendered{\r\n    padding-right:6px;\r\n    padding-left:20px\r\n}\r\n.select2-container--default .select2-selection--single .select2-selection__arrow{\r\n    height:28px;\r\n    right:3px\r\n}\r\n.select2-container--default .select2-selection--single .select2-selection__arrow b{\r\n    margin-top:0\r\n}\r\n.select2-dropdown .select2-search__field,.select2-search--inline .select2-search__field{\r\n    border:1px solid #d2d6de\r\n}\r\n.select2-dropdown .select2-search__field:focus,.select2-search--inline .select2-search__field:focus{\r\n    outline:0;\r\n    border:1px solid #ffc824\r\n}\r\n.select2-container--default .select2-results__option[aria-disabled=true]{\r\n    color:#999\r\n}\r\n.select2-container--default .select2-results__option[aria-selected=true]{\r\n    background-color:#ddd\r\n}\r\n.select2-container--default .select2-results__option[aria-selected=true],.select2-container--default .select2-results__option[aria-selected=true]:hover{\r\n    color:#444\r\n}\r\n.select2-container--default .select2-selection--multiple{\r\n    border:1px solid #d2d6de;\r\n    border-radius:0\r\n}\r\n.select2-container--default .select2-selection--multiple:focus{\r\n    border-color:#ffc824\r\n}\r\n.select2-container--default.select2-container--focus .select2-selection--multiple{\r\n    border-color:#d2d6de\r\n}\r\n.select2-container--default .select2-selection--multiple .select2-selection__choice{\r\n    padding:1px 10px;\r\n    color:#fff\r\n}\r\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{\r\n    margin-right:5px;\r\n    color:rgba(255,255,255,.7)\r\n}\r\n.car-title,.price-car,.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{\r\n    color:#fff\r\n}\r\n.select2-container .select2-selection--single .select2-selection__rendered{\r\n    padding-right:10px\r\n}\r\n.page-loader-wrapper{\r\n    z-index:9999;\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    bottom:0;\r\n    right:0;\r\n    width:100%;\r\n    height:100%;\r\n    background:#f1f1f1;\r\n    overflow:hidden\r\n}\r\n.page-loader-wrapper .loader{\r\n    position:relative;\r\n    top:calc(50% - 30px)\r\n}\r\n.spinner{\r\n    width:45px;\r\n    height:45px;\r\n    background-color:#e91e63;\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin:auto;\r\n    animation:rotateplane 1.2s infinite ease-in-out\r\n}\r\n@keyframes rotateplane{\r\n    0%{\r\n        transform:perspective(120px) rotateX(0) rotateY(0);\r\n        -webkit-transform:perspective(120px) rotateX(0) rotateY(0)\r\n    }\r\n    50%{\r\n        transform:perspective(120px) rotateX(-180.1deg) rotateY(0);\r\n        -webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0)\r\n    }\r\n    100%{\r\n        transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)\r\n    }\r\n}\r\n@media only screen and (max-width:750px){\r\n    .no-more-tables table,.no-more-tables tbody,.no-more-tables td,.no-more-tables th,.no-more-tables thead,.no-more-tables tr{\r\n        display:block\r\n    }\r\n    .no-more-tables thead tr{\r\n        position:absolute;\r\n        top:-9999px;\r\n        left:-9999px\r\n    }\r\n    .no-more-tables tr{\r\n        border:1px solid #ccc\r\n    }\r\n    .no-more-tables td{\r\n        border:none;\r\n        border-bottom:1px solid #eee;\r\n        position:relative;\r\n        padding-left:50%!important;\r\n        white-space:normal;\r\n        text-align:left\r\n    }\r\n    .no-more-tables td:before{\r\n        position:absolute;\r\n        top:6px;\r\n        left:6px;\r\n        width:45%;\r\n        padding-right:10px;\r\n        white-space:nowrap;\r\n        text-align:left;\r\n        font-weight:700;\r\n        content:attr(data-title)\r\n    }\r\n}\r\n.car-title{\r\n    background-color:#525252;\r\n    padding:16px;\r\n    margin-top:-5px\r\n}\r\n.body-car{\r\n    padding:5px 0 0\r\n}\r\n.body-car .btn-block{\r\n    background-color:#d8d8d8;\r\n    color:#333;\r\n    font-weight:700;\r\n    padding:15px;\r\n    border-radius:0\r\n}\r\n.body-car .btn-block:hover{\r\n    background-color:#ccc;\r\n    color:#333\r\n}\r\n.car-information{\r\n    padding:24px;\r\n    font-size:16px;\r\n    margin-top:-10px\r\n}\r\n.price-car{\r\n    font-size:26px;\r\n    font-style:italic;\r\n    background-color:#ffc824;\r\n    padding:8px;\r\n    margin:100px -9px -24px\r\n}\r\n.add-icon,.return-up{\r\n    display:none;\r\n    background:#024959;\r\n    font-size:20px;\r\n    color:#fff;\r\n    cursor:pointer;\r\n    position:fixed;\r\n    bottom:30px;\r\n    width:45px;\r\n    height:45px;\r\n    z-index:9999\r\n}\r\n.return-up{\r\n    padding:7px 12px;\r\n    right:20px\r\n}\r\n.add-icon{\r\n    padding:9px 14px;\r\n    right:73px\r\n}\r\n.elements-overlay a{\r\n    color:#686868\r\n}\r\n.elements-overlay a:hover{\r\n    color:#fff\r\n}\r\n.elements-overlay .element-overlay{\r\n    width:100%;\r\n    height:100%;\r\n    overflow:hidden;\r\n    position:relative;\r\n    text-align:center;\r\n    cursor:default\r\n}\r\n.elements-overlay .element-overlay img{\r\n    display:block;\r\n    position:relative;\r\n    transition:all .4s linear;\r\n    width:100%;\r\n    height:auto\r\n}\r\n\r\n.elements-overlay .element-overlay .element-detail{\r\n    text-decoration:none;\r\n    display:inline-block;\r\n    text-transform:uppercase;\r\n    color:#fff;\r\n    background-color:transparent;\r\n    filter:alpha(opacity=0);\r\n    transition:all .2s ease-in-out;\r\n    padding:0;\r\n    margin:auto;\r\n    position:absolute;\r\n    top:50%;\r\n    left:0;\r\n    right:0;\r\n    transform:translateY(-50%) translateZ(0);\r\n    -webkit-transform:translateY(-50%) translateZ(0);\r\n    -ms-transform:translateY(-50%) translateZ(0)\r\n}\r\n.elements-overlay .element-overlay .element-detail>li{\r\n    list-style:none;\r\n    display:inline-block;\r\n    margin:0 3px\r\n}\r\n.elements-overlay .element-overlay .element-detail>li a{\r\n    border-color:#fff;\r\n    color:#fff;\r\n    padding:12px 15px 10px\r\n}\r\n.elements-overlay .element-overlay .element-detail>li a:hover{\r\n    background:#fff;\r\n    border-color:#fff\r\n}\r\n.elements-overlay .element-overlay .element-detail>li a:hover i{\r\n    color:#000\r\n}\r\n.elements-overlay .element-overlay-info{\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    overflow:hidden;\r\n    top:0;\r\n    left:0;\r\n    opacity:0;\r\n    background-color:rgba(0,0,0,.7);\r\n    transition:all .3s ease-in-out\r\n}\r\n.elements-overlay .element-overlay:hover .element-overlay-info{\r\n    opacity:1;\r\n    filter:alpha(opacity=100);\r\n    transform:translateZ(0)\r\n}\r\n.wysihtml5-toolbar .btn,.wysihtml5-toolbar .btn:active,.wysihtml5-toolbar .btn:focus,.wysihtml5-toolbar .btn:hover{\r\n    color:#333\r\n}\r\n.icon-list i.fa,.pad{\r\n    padding:10px\r\n}\r\n.margin{\r\n    margin:10px\r\n}\r\n.margin-25{\r\n    margin:25px\r\n}\r\n.margin-bottom{\r\n    margin-bottom:20px\r\n}\r\n.margin-bottom-none{\r\n    margin-bottom:0\r\n}\r\n.margin-r-5{\r\n    margin-right:5px\r\n}\r\n.inline{\r\n    display:inline\r\n}\r\n.description-block{\r\n    display:block;\r\n    margin:10px 0;\r\n    text-align:center\r\n}\r\n.description-block.margin-bottom{\r\n    margin-bottom:25px\r\n}\r\n.description-block>.description-header{\r\n    margin:0;\r\n    padding:0;\r\n    font-weight:600;\r\n    font-size:16px\r\n}\r\n.list-header,.text-bold,.text-bold.table td,.text-bold.table th{\r\n    font-weight:700\r\n}\r\n.description-block>.description-text{\r\n    text-transform:uppercase\r\n}\r\n.alert-danger,.alert-error,.alert-info,.alert-success,.alert-warning,.bg-aqua,.bg-aqua-active,.bg-black,.bg-black-active,.bg-blue,.bg-blue-active,.bg-fuchsia,.bg-fuchsia-active,.bg-green,.bg-green-active,.bg-light-blue,.bg-light-blue-active,.bg-lime,.bg-lime-active,.bg-maroon,.bg-maroon-active,.bg-navy,.bg-navy-active,.bg-olive,.bg-olive-active,.bg-orange,.bg-orange-active,.bg-purple,.bg-purple-active,.bg-red,.bg-red-active,.bg-teal,.bg-teal-active,.bg-yellow,.bg-yellow-active,.callout.callout-danger,.callout.callout-info,.callout.callout-success,.callout.callout-warning,.label-danger,.label-primary,.label-success,.label-warning,.labelement-detail,.modal-danger .modal-body,.modal-danger .modal-footer,.modal-danger .modal-header,.modal-info .modal-body,.modal-info .modal-footer,.modal-info .modal-header,.modal-primary .modal-body,.modal-primary .modal-footer,.modal-primary .modal-header,.modal-success .modal-body,.modal-success .modal-footer,.modal-success .modal-header,.modal-warning .modal-body,.modal-warning .modal-footer,.modal-warning .modal-header{\r\n    color:#fff!important\r\n}\r\n.bg-gray{\r\n    color:#000;\r\n    background-color:#d2d6de!important\r\n}\r\n.bg-gray-light{\r\n    background-color:#f7f7f7\r\n}\r\n.bg-black{\r\n    background-color:#111!important\r\n}\r\n.alert-danger,.alert-error,.bg-red,.callout.callout-danger,.label-danger,.modal-danger .modal-body{\r\n    background-color:#dd4b39!important\r\n}\r\n.alert-warning,.bg-yellow,.callout.callout-warning,.label-warning,.modal-warning .modal-body{\r\n    background-color:#f39c12!important\r\n}\r\n.alert-info,.bg-aqua,.callout.callout-info,.labelement-detail,.modal-info .modal-body{\r\n    background-color:#00c0ef!important\r\n}\r\n.bg-blue{\r\n    background-color:#0073b7!important\r\n}\r\n.bg-light-blue,.label-primary,.modal-primary .modal-body{\r\n    background-color:#3c8dbc!important\r\n}\r\n.alert-success,.bg-green,.callout.callout-success,.label-success,.modal-success .modal-body{\r\n    background-color:#00a65a!important\r\n}\r\n.bg-white{\r\n    background-color:#fff!important\r\n}\r\n.bg-navy{\r\n    background-color:#001f3f!important\r\n}\r\n.bg-teal{\r\n    background-color:#39cccc!important\r\n}\r\n.bg-olive{\r\n    background-color:#3d9970!important\r\n}\r\n.bg-lime{\r\n    background-color:#01ff70!important\r\n}\r\n.bg-orange{\r\n    background-color:#ff851b!important\r\n}\r\n.bg-fuchsia{\r\n    background-color:#f012be!important\r\n}\r\n.bg-purple{\r\n    background-color:#605ca8!important\r\n}\r\n.bg-maroon{\r\n    background-color:#d81b60!important\r\n}\r\n.bg-gray-active{\r\n    color:#000;\r\n    background-color:#b5bbc8!important\r\n}\r\n.bg-black-active{\r\n    background-color:#000!important\r\n}\r\n.b-red{\r\n    border-color:red!important\r\n}\r\n.b-teal{\r\n    border-color:#39cccc!important\r\n}\r\n.b-olive{\r\n    border-color:#3d9970!important\r\n}\r\n.b-lime{\r\n    border-color:#01ff70!important\r\n}\r\n.b-orange{\r\n    border-color:#ff851b!important\r\n}\r\n.b-fuchsia{\r\n    border-color:#f012be!important\r\n}\r\n.b-purple{\r\n    border-color:#605ca8!important\r\n}\r\n.b-maroon{\r\n    border-color:#d81b60!important\r\n}\r\n.modal-footer,.modal-header{\r\n    border:none\r\n}\r\n.bg-red-active,.modal-danger .modal-body,.modal-danger .modal-header{\r\n    background-color:#E5343D!important\r\n}\r\n.modal-danger .modal-footer{\r\n    background-color:#e21d27!important\r\n}\r\n.bg-yellow-active,.modal-warning .modal-body,.modal-warning .modal-header{\r\n    background-color:#db8b0b!important\r\n}\r\n.modal-warning .modal-footer{\r\n    background-color:#c27b0a!important\r\n}\r\n.bg-aqua-active,.modal-info .modal-body,.modal-info .modal-header{\r\n    background-color:#00a7d0!important\r\n}\r\n.modal-info .modal-footer{\r\n    background-color:#008fb3!important\r\n}\r\n.bg-blue-active{\r\n    background-color:#005384!important\r\n}\r\n.bg-light-blue-active,.modal-primary .modal-body,.modal-primary .modal-header{\r\n    background-color:#357ca5!important\r\n}\r\n.bg-green-active,.modal-success .modal-body,.modal-success .modal-header{\r\n    background-color:#008d4c!important\r\n}\r\n.modal-success .modal-footer{\r\n    background-color:#006636!important\r\n}\r\n.bg-navy-active{\r\n    background-color:#001a35!important\r\n}\r\n.bg-teal-active{\r\n    background-color:#30bbbb!important\r\n}\r\n.bg-olive-active{\r\n    background-color:#368763!important\r\n}\r\n.bg-lime-active{\r\n    background-color:#00e765!important\r\n}\r\n.bg-orange-active{\r\n    background-color:#ff7701!important\r\n}\r\n.bg-fuchsia-active{\r\n    background-color:#db0ead!important\r\n}\r\n.bg-purple-active{\r\n    background-color:#555299!important\r\n}\r\n.bg-maroon-active{\r\n    background-color:#ca195a!important\r\n}\r\n[class^=bg-].disabled{\r\n    opacity:.65;\r\n    filter:alpha(opacity=65)\r\n}\r\n.text-red{\r\n    color:#dd4b39!important\r\n}\r\n.text-yellow{\r\n    color:#f39c12!important\r\n}\r\n.text-aqua{\r\n    color:#00c0ef!important\r\n}\r\n.text-blue{\r\n    color:#0073b7!important\r\n}\r\n.text-black{\r\n    color:#111!important\r\n}\r\n.text-light-blue{\r\n    color:#ffc824!important\r\n}\r\n.text-green{\r\n    color:#00a65a!important\r\n}\r\n.text-gray{\r\n    color:#d2d6de!important\r\n}\r\n.text-navy{\r\n    color:#001f3f!important\r\n}\r\n.text-teal{\r\n    color:#39cccc!important\r\n}\r\n.text-olive{\r\n    color:#3d9970!important\r\n}\r\n.text-lime{\r\n    color:#01ff70!important\r\n}\r\n.text-orange{\r\n    color:#ff851b!important\r\n}\r\n.text-fuchsia{\r\n    color:#f012be!important\r\n}\r\n.text-purple{\r\n    color:#605ca8!important\r\n}\r\n.text-maroon{\r\n    color:#d81b60!important\r\n}\r\n.link-muted{\r\n    color:#7a869d\r\n}\r\n.link-muted:focus,.link-muted:hover{\r\n    color:#606c84\r\n}\r\n.link-black{\r\n    color:#666\r\n}\r\n.link-black:focus,.link-black:hover{\r\n    color:#999\r\n}\r\n.hide{\r\n    display:none!important\r\n}\r\n.no-border{\r\n    border:0!important\r\n}\r\n.no-padding{\r\n    padding:0!important\r\n}\r\n.no-margin{\r\n    margin:0!important\r\n}\r\n.no-shadow{\r\n    box-shadow:none!important\r\n}\r\n.chart-legend,.contacts-list,.list-unstyled,.mailbox-attachments,.users-list{\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0\r\n}\r\n.list-group-unbordered>.list-group-item{\r\n    border-left:0;\r\n    border-right:0;\r\n    border-radius:0;\r\n    padding-left:0;\r\n    padding-right:0\r\n}\r\n.flat{\r\n    border-radius:0!important\r\n}\r\n.text-sm{\r\n    font-size:12px\r\n}\r\n.jqstooltip{\r\n    padding:5px!important;\r\n    width:auto!important;\r\n    height:auto!important\r\n}\r\n.bg-teal-gradient{\r\n    background:#39cccc!important;\r\n    background:-o-linear-gradient(#7adddd,#39cccc)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-blue-gradient,.bg-light-blue-gradient{\r\n    background:#0073b7!important;\r\n    background:-o-linear-gradient(#0089db,#0073b7)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-aqua-gradient{\r\n    background:#00c0ef!important;\r\n    background:-o-linear-gradient(#14d1ff,#00c0ef)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-yellow-gradient{\r\n    background:#f39c12!important;\r\n    background:-o-linear-gradient(#f7bc60,#f39c12)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-purple-gradient{\r\n    background:#605ca8!important;\r\n    background:-o-linear-gradient(#9491c4,#605ca8)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-green-gradient{\r\n    background:#00a65a!important;\r\n    background:-o-linear-gradient(#00ca6d,#00a65a)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-red-gradient{\r\n    background:#dd4b39!important;\r\n    background:-o-linear-gradient(#e47365,#dd4b39)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-black-gradient{\r\n    background:#111!important;\r\n    background:-o-linear-gradient(#2b2b2b,#111)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.bg-maroon-gradient{\r\n    background:#d81b60!important;\r\n    background:-o-linear-gradient(#e73f7c,#d81b60)!important;\r\n    filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0)!important;\r\n    color:#fff\r\n}\r\n.description-block .description-icon{\r\n    font-size:16px\r\n}\r\n.no-pad-top{\r\n    padding-top:0\r\n}\r\n.position-static{\r\n    position:static!important\r\n}\r\n.list-header{\r\n    font-size:15px;\r\n    padding:10px 4px;\r\n    color:#666\r\n}\r\n.list-seperator{\r\n    height:1px;\r\n    background:#f4f4f4;\r\n    margin:15px 0 9px\r\n}\r\n.list-link>a{\r\n    padding:4px;\r\n    color:#777\r\n}\r\n.list-link>a:hover{\r\n    color:#222\r\n}\r\n.font-light{\r\n    font-weight:300\r\n}\r\n.user-block:after,.user-block:before{\r\n    content:\" \";\r\n    display:table\r\n}\r\n.user-block img{\r\n    width:40px;\r\n    height:40px;\r\n    float:left\r\n}\r\n.user-block .comment,.user-block .description,.user-block .username{\r\n    display:block;\r\n    margin-left:50px\r\n}\r\n.img-sm+.img-push,.user-block.user-block-sm .comment,.user-block.user-block-sm .description,.user-block.user-block-sm .username{\r\n    margin-left:40px\r\n}\r\n.user-block .username{\r\n    font-size:16px;\r\n    font-weight:600\r\n}\r\n.user-block .description{\r\n    color:#999;\r\n    font-size:13px\r\n}\r\n.user-block.user-block-sm .username{\r\n    font-size:14px\r\n}\r\n.box-comments .box-comment img,.img-lg,.img-md,.img-sm,.user-block.user-block-sm img{\r\n    float:left\r\n}\r\n.box-comments .box-comment img,.img-sm,.user-block.user-block-sm img{\r\n    width:30px!important;\r\n    height:30px!important\r\n}\r\n.img-md{\r\n    width:60px;\r\n    height:60px\r\n}\r\n.img-md+.img-push{\r\n    margin-left:70px\r\n}\r\n.attachment-block .attachment-pushed,.img-lg+.img-push{\r\n    margin-left:110px\r\n}\r\n.img-lg{\r\n    width:100px;\r\n    height:100px\r\n}\r\n.img-bordered{\r\n    border:3px solid #d2d6de;\r\n    padding:3px\r\n}\r\n.img-bordered-sm{\r\n    border:2px solid #d2d6de;\r\n    padding:2px\r\n}\r\n.attachment-block{\r\n    border:1px solid #f4f4f4;\r\n    padding:5px;\r\n    margin-bottom:10px;\r\n    background:#f7f7f7\r\n}\r\n.attachment-block .attachment-img{\r\n    max-width:100px;\r\n    max-height:100px;\r\n    height:auto;\r\n    float:left\r\n}\r\n.attachment-block .attachment-heading{\r\n    margin:0\r\n}\r\n.attachment-block .attachment-text{\r\n    color:#555\r\n}\r\n.connectedSortable{\r\n    min-height:100px\r\n}\r\n.ui-helper-hidden-accessible{\r\n    border:0;\r\n    clip:rect(0 0 0 0);\r\n    height:1px;\r\n    margin:-1px;\r\n    overflow:hidden;\r\n    padding:0;\r\n    position:absolute;\r\n    width:1px\r\n}\r\n.sort-highlight{\r\n    background:#f4f4f4;\r\n    border:1px dashed #ddd;\r\n    margin-bottom:10px\r\n}\r\n.full-opacity-hover{\r\n    opacity:.65;\r\n    filter:alpha(opacity=65)\r\n}\r\n.full-opacity-hover:hover{\r\n    opacity:1;\r\n    filter:alpha(opacity=100)\r\n}\r\n.chart{\r\n    position:relative;\r\n    overflow:hidden;\r\n    width:100%\r\n}\r\n.chart canvas,.chart svg{\r\n    width:100%!important\r\n}\r\n.color-skin-red{\r\n    background-color:#ffc824\r\n}\r\n.color-skin-theme{\r\n    list-style:none\r\n}\r\n.member-online{\r\n    border:1px solid #093;\r\n    padding:4px\r\n}\r\n.member-busy{\r\n    border:1px solid #b30000;\r\n    padding:4px\r\n}\r\n.member-offline{\r\n    border:1px solid #999;\r\n    padding:4px\r\n}\r\n.clickable,.picker__input{\r\n    cursor:pointer\r\n}\r\n.stats-report{\r\n    padding:0 10px 10px;\r\n    margin-top:-14px;\r\n    border-top:1px solid #f1f1f1\r\n}\r\n.stat-item{\r\n    display:inline-block;\r\n    padding-right:15px\r\n}\r\n.sparkline{\r\n    margin-bottom:-13px;\r\n    padding-top:20px\r\n}\r\n.cars-stats,.clients-stats,.country-stats,.drivers-portfolio{\r\n    padding:0;\r\n    margin:0;\r\n    list-style:none\r\n}\r\n\r\n.mycolor{\r\n    color : white;\r\n}        \r\n\r\n.mybutton{\r\n    position: relative;\r\n    left: 50%;\r\n    top: 193px;\r\n\r\n}\r\n.margin-bottom-20 {\r\n    margin-bottom: 20px;\r\n\r\n}\r\n.btn-u:hover {\r\n    background: #5fb611;\r\n}\r\n.btn-u:hover, .btn-u:focus, .btn-u:active, .btn-u.active, .open .dropdown-toggle.btn-u {\r\n    background: #5fb611;\r\n}\r\n.btn-u:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.btn-u {\r\n    background: #72c02c;\r\n}\r\n.btn-u {\r\n    white-space: nowrap;\r\n    border: 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    padding: 6px 13px;\r\n    position: relative;\r\n    background: #72c02c;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n}\r\n.input-group-addon {\r\n    border-right: 0;\r\n    /*color: #b3b3b3;*/\r\n    font-size: 14px;\r\n    background: #fff;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    color: #555;\r\n    text-align: center;\r\n    background-color: #275186;\r\n    border: 1px solid #275186;\r\n   \r\n}\r\n.input-group .form-control {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.form-control {\r\n    box-shadow: none;\r\n}\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px !important;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid  #275186 !important;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row login-page\">\n  <div class=\"hold-transition lockscreen\">\n    <!-- Automatic element centering -->\n    <div class=\"skin-yellow forgot-page\">\n        <div class=\"box-forgot\">\n            <div class=\"box-forgot-body\">\n                <h3><span style=\"color: #0e2027;\"><b style=\"color: #ed1c24;\">GT</b>Softprep</span></h3>\n                <p class=\"box-forgot-msg\">Enter your e-mail address below to reset your password.</p>\n                <form (submit)=\"onRegisterSubmit()\" class=\"forgot-form\">\n                    <div class=\"input-group margin-bottom-20\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope mycolor\"></i></span>\n                        <input type=\"Email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Registration Email Id\">                                   \n                     </div>\n                    <div class=\"form-group form-action\">\n                        <button type=\"submit\" class=\"btn btn-block\">Reset My Password</button>\n                    </div>\n                    <div class=\"form-group text-center\">\n                        <a routerLink=\"/login\">Sign in</a>&nbsp;|&nbsp;<a href=\"#\">Support</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n      </div>   \n    </div>\n  </div>\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotComponent = (function () {
    function ForgotComponent(validateService, flashMessage, authService, nav, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.nav = nav;
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.nav.hide();
    };
    ForgotComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        // Required Fields
        if (!this.validateService.validateForgot(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.forgotUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/components/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/full-length/full-length.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/full-length/full-length.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n     <app-header></app-header>\n     <!-- Content Wrapper. Contains page content -->\n     <div class=\"content-wrapper\" id=\"content\" style=\"min-height: 284px;\">\n        <section class=\"content\">\n           <div class=\"container-fluid\" id=\"page-body\">\n              <div class=\"col-sm-12\">\n                 <div class=\"box\">\n                    <div class=\"box-header\"></div>\n                    <div class=\"box-body\" style=\"min-height: 558px;\">\n                       <div class=\"container-fluid\">\n                          <div class=\"row\" id=\"inst\">\n                             <div class=\"col-sm-8 col-sm-offset-2\">\n                                <h2 class=\"text-center\">Take a practice test and review your performance</h2>\n                                <br>\n                                Get comfortable with the test format by taking a practice exam under timed conditions; analyze and review your mistakes. Then come back and take a test again. Practice\n                                exams are scored just like the actual GRE exam so take a practice test and get access to detailed performance information.<br><br>\n                               \n                                <div class=\"col-md-12\" style=\"height: 300px; overflow: auto\" >\n                                          <ul *ngFor=\"let Test of fullTest\">\n                                              <li *ngIf=\"Test.test_type_id == 1\"> \n                                                      <span style=\"line-height: 23px;\">Test Name:</span>\n                                                  <b> {{Test.name}}</b>\n                                                  <div class=\"box-footer \">\n                                                      <div class=\"pull-right\">\n                                                          <button onclick=\"popup('/tips')\" class=\"btn btn-info btn-md\"> Start Test</button>\n                                                          <!-- <button  class=\"btn btn-success btn-md\"> Review</button>\n                                                          <button class=\"btn btn-danger btn-md\"> Resume</button> -->\n                                                      </div>\n                                                  </div>\n                                              </li>\n                                          </ul>\n                                          <h3 align=\"center\">You Cannot Write More Tests</h3>\n                                  </div>\n                             </div>\n                          </div>\n                       </div>\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </section>\n     </div>\n     <!-- /.content-wrapper -->\n  </div>\n  <!-- ./wrapper -->\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/full-length/full-length.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLengthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FullLengthComponent = (function () {
    function FullLengthComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.apiUrl = "http://localhost/services/softprep/api/Test/test_all_user_by_id";
        this.fullTest = [];
        this.currentUser = {};
        this.isDev = true;
        this.getData();
        this.getFullTest();
    }
    FullLengthComponent.prototype.getData = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    FullLengthComponent.prototype.getFullTest = function () {
        var _this = this;
        this.getData().subscribe(function (fullTest) {
            console.log(fullTest);
            _this.fullTest = fullTest;
        });
    };
    FullLengthComponent.prototype.ngOnInit = function () {
    };
    FullLengthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-full-length',
            template: __webpack_require__("../../../../../src/app/components/full-length/full-length.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/full-length/full-length.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], FullLengthComponent);
    return FullLengthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropbtn {\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 248px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: white;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n.dropdown-content a:hover {background-color: red;}\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a routerLink=\"/start\" class=\"logo\">\n       <!-- mini logo for sidebar mini 50x50 pixels -->\n       <span class=\"logo-mini\">\n       <img src=\"../assets/images/gtsoft.png\">\n       </span>\n       <!-- logo for regular state and mobile devices -->\n       <span class=\"logo-lg\">\n       <b>GT</b>SOFTPREP</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n       <!-- Sidebar toggle button-->\n       <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       </a>\n       <!-- Navbar Right Menu -->\n       <div class=\"navbar-custom-menu\">\n          <ul class=\"nav navbar-nav\" *ngIf=\"user\">\n           \n             <!-- User Account: style can be found in dropdown.less -->\n             <li class=\"dropdown user user-menu\">\n                <!-- Menu Toggle Button -->\n                <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                   <!-- hidden-xs hides the username on small devices so only the image appears. -->\n                   <span class=\"hidden-xs\">Hi {{user.email}}!\n  \n                   <i class=\"fa fa-angle-down pull-right\"></i>\n                   </span>\n                   <!-- The user image in the navbar-->\n                   <img src=\"../assets/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n                </a>\n                <ul class=\"dropdown-content\" style=\"background: rgb(30, 71, 104)\">\n                  <li>\n                     <a routerLink=\"/profile\">\n                     <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Profile</a>\n                  </li>\n                  <li>\n                     <a routerLink=\"/\">\n                     <i class=\"fa fa-fw fa-envelope-o\"></i> Inbox</a>\n                  </li>\n                  <li>\n                     <a routerLink=\"/lock-screen\">\n                     <i class=\"fa fa-lock\"></i> Lookscreen</a>\n                  </li>\n                  <li>\n                     <a href=\"#\">\n                     <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Setting</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li>\n                     <a data-toggle=\"modal\" data-target=\"#myModal\">\n                     <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Log Out</a>\n                  </li>\n               </ul>\n            </li>\n            <li>\n               <a id=\"fullscreen-page\" role=\"button\" onclick=\"toggleFullScreen(document.body)\">\n               <i class=\"fa fa-arrows-alt\"></i>\n               </a>\n            </li>\n         </ul>\n       </div>\n    </nav>\n  </header>\n  <!-- Modal -->\n  <div class=\"modal fade message-box\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"mb-container\">\n       <div class=\"mb-middle\">\n          <div class=\"mb-title\"><span class=\"fa fa-sign-out\"></span> Log <strong>Out</strong> ?</div>\n          <div class=\"mb-content\">\n             <p>Are you sure you want to log out?</p>\n             <p>Press No if youwant to continue work. Press Yes to logout current user.</p>\n          </div>\n          <div class=\"mb-footer\">\n             <div class=\"pull-right\">\n                <a (click)=\"logout()\" class=\"btn btn-success\">Yes</a>\n                <button class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n             </div>\n          </div>\n       </div>\n    </div>\n  </div>\n  <aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n       <!-- Sidebar user panel -->\n       <div class=\"user-panel\">\n          <div class=\"pull-left image\">\n             <img src=\"../assets/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n          </div>\n          <div class=\"pull-left info\" *ngIf=\"user\">\n             <p>{{user.username}}</p>\n             <p class=\"blink1\">\n                <span>\n                <i class=\"fa fa-circle text-success\"></i>\n                </span> Online\n             </p>\n          </div>\n       </div>\n       <!-- sidebar menu: : style can be found in sidebar.less -->\n       <ul class=\"sidebar-menu active\" data-widget=\"tree\">\n          <li class=\"header\">MAIN NAVIGATION</li>\n          <li class=\"treeview\">\n             <a routerLink=\"/start\">\n                <i class=\"fa fa-home\"></i>\n                <span>Home</span>\n             </a>\n          </li>\n        \n          <li>\n             <a routerLink=\"/videos\">\n                <i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n                <span>Videos</span>\n             </a>\n          </li>\n          <li class=\"treeview\">\n             <a routerLink=\"/practicetest\">\n                <i class=\"fa fa-bullhorn\"></i>\n                <span>Practice Test</span>\n             </a>\n          </li>\n          <li class=\"treeview\">\n             <a routerLink=\"/full-length\">\n                <i class=\"fa fa-edit\"></i>\n                <span>Full Length Test</span>\n             </a>\n          </li>\n         \n          <li class=\"treeview\">\n             <a routerLink=\"/feedback\">\n             <i class=\"fa fa-comment\"></i>\n             <span>Feed-Back Form</span>\n             </a>\n          </li>\n        \n       </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessage.show('You are now logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box-body, .register-box-body {\r\n    background: #ddddddcf;\r\n    padding: 30px;\r\n    border-top: 0;\r\n    color: #444;\r\n}\r\n.login-box, .register-box {\r\n    width: 360px;\r\n    margin: 7% auto;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    text-align: center;\r\n    /* font-weight: bold; */\r\n    background: #275186;\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    padding: 10px 20px 10px 20px;\r\n}\r\np {\r\n    margin: 0 0 10px;\r\n}\r\nform {\r\n    display: block;\r\n    margin-top: 0em;\r\n}\r\n.has-feedback {\r\n    position: relative;\r\n}\r\n.form-group {\r\n    margin-bottom: 15px;\r\n}\r\n.has-feedback .form-control {\r\n    padding-right: 42.5px;\r\n}\r\n.form-control {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-color: #d2d6de;\r\n}\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #275186;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n.btn{\r\n    border-radius: none;\r\n}\r\n.social-auth-links {\r\n    margin: 10px 0;\r\n}\r\n.btn.btn-flat {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-width: 1px;\r\n}\r\n\r\n.btn-facebook {\r\n    color: #ffffff;\r\n    background-color: #3b5998;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-social {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.btn-block+.btn-block {\r\n    margin-top: 5px;\r\n}\r\n.btn-google {\r\n    color: #ffffff;\r\n    background-color: #dd4b39;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-twitter {\r\n    color: #ffffff;\r\n    background-color: #55acee;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-linkedin {\r\n    color: #ffffff;\r\n    background-color: #007bb6;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-social > :first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n.fa-facebook-f:before, .fa-facebook:before {\r\n    content: \"\\F09A\";\r\n}\r\n.btn-facebook:active, .btn-facebook.active, .open > .dropdown-toggle.btn-facebook {\r\n    color: #ffffff;\r\n    background-color: #2d4373;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-facebook:hover {\r\n    color: #ffffff;\r\n    background-color: #2d4373;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-google:hover {\r\n    color: #ffffff;\r\n    background-color: #c23321;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-google:active, .btn-google.active, .open > .dropdown-toggle.btn-google {\r\n    color: #ffffff;\r\n    background-color: #c23321;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-twitter:active, .btn-twitter.active, .open > .dropdown-toggle.btn-twitter {\r\n    color: #ffffff;\r\n    background-color: #2795e9;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-twitter:hover {\r\n    color: #ffffff;\r\n    background-color: #2795e9;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-linkedin:active, .btn-linkedin.active, .open > .dropdown-toggle.btn-linkedin {\r\n    color: #ffffff;\r\n    background-color: #005983;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.btn-linkedin:hover {\r\n    color: #ffffff;\r\n    background-color: #005983;\r\n    border-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.white_text a {\r\n    color: #000;\r\n    /* list-style-type: none; */\r\n    text-decoration: none;\r\n}\r\n.white_text a:hover {\r\n    color: #337ab7;\r\n}\r\n.checkbox input[type=checkbox]{\r\n    position: absolute;\r\n    margin-top: 4px\\9;\r\n    width: 50%;\r\n    height: 15px;\r\n    margin: 3px 0px 0px -50px;\r\n}\r\n\r\n\r\n.txt{\r\n    position: relative;\r\n    padding-bottom: 90px;\r\n    background: #000000b0;\r\n\r\n}\r\n.links > a{\r\n    text-align: center;\r\n    padding-left: 50px;\r\n    width: 30%;\r\n    color: #fff;\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    font-family: 'Lobster', cursive;\r\n}\r\n\r\n\r\n.mycolor{\r\n    color : white;\r\n}        \r\n\r\n.mybutton{\r\n    position: relative;\r\n    left: 50%;\r\n    top: 193px;\r\n\r\n}\r\n.margin-bottom-20 {\r\n    margin-bottom: 20px;\r\n\r\n}\r\n.btn-u:hover {\r\n    background: #5fb611;\r\n}\r\n.btn-u:hover, .btn-u:focus, .btn-u:active, .btn-u.active, .open .dropdown-toggle.btn-u {\r\n    background: #5fb611;\r\n}\r\n.btn-u:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.btn-u {\r\n    background: #72c02c;\r\n}\r\n.btn-u {\r\n    white-space: nowrap;\r\n    border: 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    padding: 6px 13px;\r\n    position: relative;\r\n    background: #72c02c;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n}\r\n.input-group-addon {\r\n    border-right: 0;\r\n    /*color: #b3b3b3;*/\r\n    font-size: 14px;\r\n    background: #fff;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    color: #555;\r\n    text-align: center;\r\n    background-color: #275186;\r\n    border: 1px solid #275186;\r\n   \r\n}\r\n.input-group .form-control {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.form-control {\r\n    box-shadow: none;\r\n}\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px !important;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    /* border: 1px solid  #275186 !important; */\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n.change::-webkit-input-placeholder {\r\n    /* WebKit, Blink, Edge */\r\n    color: darkgrey;\r\n}\r\n.change:-moz-placeholder {\r\n    /* Mozilla Firefox 4 to 18 */\r\n    color: darkgrey;\r\n    opacity: 1;\r\n}\r\n.change::-moz-placeholder {\r\n    /* Mozilla Firefox 19+ */\r\n    color: darkgrey;\r\n    opacity: 1;\r\n}\r\n.change:-ms-input-placeholder {\r\n    /* Internet Explorer 10-11 */\r\n    color: darkgrey;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 23px;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #eee;\r\n    border: 1px solid #00c0ef;\r\n  }\r\n  \r\n  /* On mouse-over, add a grey background color */\r\n  .container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  /* When the checkbox is checked, add a blue background */\r\n  .container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  /* Create the checkmark/indicator (hidden when not checked) */\r\n  .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  \r\n  /* Show the checkmark when checked */\r\n  .container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n  \r\n  /* Style the checkmark/indicator */\r\n  .container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.row:before, .row:after {\r\n\tdisplay: table;\r\n\tcontent: \" \";\r\n}\r\n\r\n\r\n.row:before, .row:after {\r\n\tdisplay: table;\r\n\tcontent: \" \";\r\n}\r\n.b-box {\r\n\tbackground: #f4f4f4;\r\n\tborder: 8px solid #00c0ef;\r\n\tborder-radius: 50%;\r\n\tcolor: #666;\r\n\tdisplay: table;\r\n\tfont-size: 0.9em;\r\n\theight: 100px;\r\n\tline-height: 22px;\r\n\tmargin: 52px auto;\r\n\tpadding: 0 10px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tcursor: pointer;\r\n    width: 100px;\r\n    top: 190px;\r\n}\r\n.b-box:hover {\r\n\tbackground: #d4d4d4 none repeat scroll 0 0;\r\n\tborder: 8px solid #ebebeb;\r\n}\r\n.box-rt::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: 228px;\r\n\ttop: 50%;\r\n\theight: 1px;\r\n\twidth: 0px;\r\n\tborder-bottom: 2px solid white;\r\n\ttransition: all .3s ease;\r\n}\r\n.box-lf::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 50%;\r\n\theight: 1px;\r\n\twidth: 0px;\r\n\tborder-bottom: 2px solid white;\r\n\ttransition: all .3s ease;\r\n}\r\n.box-rt:hover::before {\r\n\tborder-bottom: 2px solid white;\r\n\tcontent: \"\";\r\n\theight: 1px;\r\n\tleft: 97px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\twidth: 130px;\r\n}\r\n.box-lf:hover::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: -50px;\r\n\ttop: 50%;\r\n\theight: 1px;\r\n\twidth: 130px;\r\n\tborder-bottom: 2px solid white;\r\n}\r\n.b-box i {\r\n\tcolor: black;\r\n\tdisplay: table-cell;\r\n\tfont-size: 24px;\r\n\ttext-transform: uppercase;\r\n\tvertical-align: middle;\r\n\tfont-style: normal;\r\n\tfont-weight: 600;\r\n\tcolor: #3f3e3e;\r\n}\r\n \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"hold-transition login-page\">\n    <div class=\"col-md-7 col-lg-7\">\n      <div class=\"gtimg\">\n        <div class=\"center\">\n          <img src=\"../assets/images/gt_soft_prep.png\" class=\"img-responsive center\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 col-lg-5\">\n      <div class=\"login-box\">\n  \n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n          <p class=\"login-box-msg\">Sign in to start your session</p>\n          <form (submit)=\"onLoginSubmit()\" id=\"register\">\n          <div class=\"row myborder\">\n             <div class=\"input-group margin-bottom-20\">\n                 <span class=\"input-group-addon\"><i class=\"fa fa-user-o mycolor\"></i></span>\n                 <input size=\"60\" maxlength=\"255\" class=\"form-control change\" placeholder=\"Enter User Name\" [(ngModel)]=\"username\" name=\"username\" type=\"text\">                                                       \n              </div>\n            \n             <div class=\"input-group margin-bottom-20\">\n                 <span class=\"input-group-addon\"><i class=\"fa fa-eye mycolor\"></i></span>\n                 <input size=\"60\" maxlength=\"255\" class=\"form-control change\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\">\n                 <div id=\"result\"></div>                               \n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div>\n                        <label class=\"container\">\n                          <input type=\"checkbox\">\n                            <span class=\"checkmark\"></span>I agree to the terms\n                        </label>\n                        </div>\n                  </div>\n                  \n                  <!-- /.col -->\n                  <div class=\"col-md-3\">\n                      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                  </div>\n                  <!-- /.col -->\n                </div>\n                <p *ngIf=\"loading\">Please Wait....</p>\n         \n         </div>\n         </form>\n      \n          <div class=\"social-auth-links text-center\">\n            <p style=\"text-align: center\">- OR -</p>\n            <a class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign in using\n              Facebook</a>\n            <a href=\"#\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign in using\n              Google+</a>\n            <a href=\"#\" class=\"btn btn-block btn-social btn-twitter btn-flat\"><i class=\"fa fa-twitter\"></i> Sign in using\n              Twitter</a>\n            <a href=\"#\" class=\"btn btn-block btn-social btn-linkedin btn-flat\"><i class=\"fa fa-linkedin\"></i> Sign in using\n              Linkedin</a>\n          </div>\n          <!-- /.social-auth-links -->\n      \n          <a routerLink=\"/forgot\" style=\"text-decoration: underline; color: black\">I forgot my password</a><br>\n        \n        </div>\n        <!-- /.login-box-body -->\n      </div>\n    </div>\n  </div>  \n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.loading = true;
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['start']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/exam/exam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/exam/exam.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  exam works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/exam/exam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamComponent; });
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

var ExamComponent = (function () {
    function ExamComponent() {
    }
    ExamComponent.prototype.ngOnInit = function () {
    };
    ExamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__("../../../../../src/app/components/onlinevideos/exam/exam.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onlinevideos/exam/exam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Video1Service = (function () {
    function Video1Service(http) {
        this.http = http;
    }
    Video1Service.prototype.getsubVideo = function () {
        return this.http.get('http://localhost/services/softprep/api/videos/subcatById_total_vedios/900425/417')
            .map(function (res) { return res.json(); });
    };
    Video1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], Video1Service);
    return Video1Service;
}());



/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video1/video1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video1/video1.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n     <app-header></app-header>\n     <!-- Content Wrapper. Contains page content -->\n     <div class=\"content-wrapper\" id=\"content\">\n        <section class=\"content\">\n           <div class=\"container-fluid\" id=\"page-body\">\n              <div class=\"box\" style=\"min-height: 521px;\">\n                 <div class=\"box-header\">\n                    <section class=\"content-header\">\n                       <h1>Category Wise Sub-Lessons</h1>\n                       <hr>\n                    </section>\n                 </div>\n                 <div class=\"col-md-1\">\n                    <button routerLink=\"/videos\" class=\"actionButton skipTextButton\" style=\"background-color: #337ab7; opacity: 1; transform: scaleX(1) scaleY(1);\"></button>\n                 </div>\n                 <div class=\"col-md-11\">\n                    <div id=\"lessonsView\" class=\"lessonPanel view\" style=\"z-index: 102; display: block;\">\n                       <div *ngFor =\"let lesson of videos\">\n                          <div *ngIf=\"lesson.is_open == true\">\n                             <div class=\"appLesson checkpoint active\" style=\"opacity: 1; transform: translateY(0px);\">\n                                <!-- <div class=\"number\">\n                                   <span class=\"label label-danger\">8</span>\n                                   </div> -->\n                                <div class=\"name\">{{lesson.titlelink}}</div>\n                                <div class=\"rating\">\n                                   <a [routerLink]=\"['/videoview/subcatid', lesson.id]\"><img class=\"gif\" src=\"https://zippy.gfycat.com/LameDisfiguredFawn.gif\" width=\"30\" height=\"30\"></a>\n                                </div>\n                                <div class=\"info\">\n                                   <span class=\"cl-effect-10\">\n                                   <a href=\"#\" data-hover=\"Start Test\"><span>{{lesson.titlelink}}  <i class=\"icon\"></i> </span></a>\n                                   </span>\n                                </div>\n                             </div>\n                          </div>\n                       </div>\n                       <div *ngFor =\"let lesson of videos\">\n                          <div *ngIf=\"lesson.is_open == false\">\n                             <div class=\"appLesson checkpoint disabled gray\" style=\"opacity: 1; transform: translateY(0px);\">\n                                <!-- <div class=\"number\">\n                                   <span class=\"label label-default\">8</span>\n                                   </div> -->\n                                <div class=\"name\">{{lesson.titlelink}}</div>\n                                <div class=\"rating\">\n                                   <a [routerLink]=\"['/videoview/subcatid', lesson.id]\"><img src=\"https://zippy.gfycat.com/LameDisfiguredFawn.gif\" width=\"30\" height=\"30\"></a>\n                                </div>\n                                <div class=\"info\">\n                                   <i class=\"icon\"></i>\n                                   <span>\n                                      {{lesson.titlelink}}\n                                      <!-- <a href=\"#\" data-hover=\"Start Test\"><span>{{lesson.titlelink}}  <i class=\"icon\"></i> </span></a> -->\n                                   </span>\n                                </div>\n                             </div>\n                          </div>\n                       </div>\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </section>\n     </div>\n  </div>\n  <!-- ./wrapper -->\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video1/video1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video1_service__ = __webpack_require__("../../../../../src/app/components/onlinevideos/video1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Video1Component = (function () {
    function Video1Component(videoService, router, authService) {
        this.videoService = videoService;
        this.router = router;
        this.authService = authService;
    }
    Video1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.getsubVideo()
            .subscribe(function (videos) {
            return _this.videos = videos;
        });
    };
    Video1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video1',
            template: __webpack_require__("../../../../../src/app/components/onlinevideos/video1/video1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onlinevideos/video1/video1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__video1_service__["a" /* Video1Service */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], Video1Component);
    return Video1Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video2/video2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video2/video2.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  video2 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/onlinevideos/video2/video2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video2Component; });
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

var Video2Component = (function () {
    function Video2Component() {
    }
    Video2Component.prototype.ngOnInit = function () {
    };
    Video2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video2',
            template: __webpack_require__("../../../../../src/app/components/onlinevideos/video2/video2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onlinevideos/video2/video2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Video2Component);
    return Video2Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/practicetest/practicetest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkbox {\r\n    position: relative;\r\n    margin-bottom: -8px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/practicetest/practicetest.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n      <app-header></app-header>\n   <!-- Content Wrapper. Contains page content -->\n   <div class=\"content-wrapper\"> \n          <section class=\"content\">\n             <div class=\"container-fluid\" id=\"page-body\">\n                  <div class=\"col-lg-12\" id=\"main-content\">\n                          <div class=\"box\">\n                              <div class=\"box-header\"></div>\n                              <section class=\"content-header\">\n                                      <h1>\n                                            Customize Test\n                                          <small></small>\n                                      </h1>\n                                      <ol class=\"breadcrumb\">\n                                          <li>\n                                              <a href=\"#\">\n                                                  <i class=\"fa fa-dashboard\"></i> Level</a>\n                                          </li>\n                                          <li class=\"active\">practicetest</li>\n                                      </ol>\n                                  </section>\n                                  <hr>\n<!-- Main content -->\n<section class=\"container-fluid\">\n\n  <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n          <ul class=\"nav nav-pills\" style=\"width: 183px;border: 2px solid #3478ad; border-radius: 5px;\">\n              <li class=\"active\"><a data-toggle=\"pill\" href=\"#home\"><i class=\"fa fa-pencil-square-o\" style=\"color: #fff\"></i>Math</a></li>\n              <li><a data-toggle=\"pill\" href=\"#menu1\"><i class=\"fa fa-gavel\" style=\"color: #fff\"></i>Verbal</a></li>\n          </ul>\n      </div>\n      <div class=\"col-md-8\">\n          <div class=\"tab-content\">\n              <div id=\"home\" class=\"tab-pane fade in active desc\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <h3>Select Question Type</h3>\n                          <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                                          <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                             <i></i>Quantitative Comparision</label>\n                                          <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                      </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                          \n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Data Interpretation</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-6\">\n                              <div class=\"checkbox i-checks\" id=\"example-0\">\n                                  <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul class=\"main\" >\n                                           \n                                        <li class=\"expanded\">\n                                               <span class=\"daredevel-tree-anchor ui-icon ui-icon-plus\" (click)=\"show=!show\">{{show ? 'hide' : 'show'}}></span>\n                                               <span id=\"mySpan\" style=\"display:none\"class=\"daredevel-tree-anchor ui-icon ui-icon-plus\"></span>\n                                           <label><input type=\"checkbox\" id=\"checkAll\" data-id=\"6\" class=\"parent\" id=\"parent-input-6\" data-value=\"13, 14, 15, 16\">\n                                              <i></i>Problem Solving</label>\n                                                <ul style=\"line-height: 40px;\" *ngIf=\"show\"> \n                                                   <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                      <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                          <input type=\"checkbox\" class=\"child-input-6\" id=\"checkItem\" data-value=\"13\"><i></i>Single Answer</label>\n                                                      </li>\n                                                    </div>\n                                                <ul>\n                                                  <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                     <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                         <input type=\"checkbox\" class=\"child-input-6\" id=\"checkItem\"data-value=\"14\"><i></i>Multiple Answer</label>\n                                                        </li>\n                                                   </div>\n                                               </ul>\n                                               <ul>\n                                                      <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                         <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                             <input type=\"checkbox\" class=\"child-input-6\" id=\"checkItem\" data-value=\"15,16\"><i></i>Numeric Entry</label>\n                                                            </li>\n                                                       </div>\n                                                   </ul>\n                                             </ul>\n                                             </li>\n                                       </ul>\n                                 </div>\n                              </div>\n                            </div>\n                       \n       \n                      </div>\n                      <div class=\"col-md-6\">\n                          <h3>Select Lessons</h3>\n                          <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label><input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Number Systems </label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Integer Properties</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Percentages</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Ratios and fractions </label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Algebra</label>\n                                            <span class=\"d-b-in  badge bg-success l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">100%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Word problems</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Quantitative Comparision</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Angles and triangles</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Quadrilaterals and circles</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>3D Geometry</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Coordinate geometry </label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Statistics </label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Data Interpretation </label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Permutations and combinations</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Probability</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                  </div>\n              </div>\n              <div id=\"menu1\" class=\"tab-pane fade desc\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                         <h3>Select Question Type</h3>\n                         <div class=\"mainParent\" id=\"parent-6\">\n                              <div class=\"checkbox i-checks\" id=\"example-0\">\n                                  <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul class=\"main\">\n                                           \n                                        <li class=\"expanded\">\n                                               <span class=\"daredevel-tree-anchor ui-icon ui-icon-minus\"></span>\n                                               <span id=\"mySpan\" style=\"display:none\"class=\"daredevel-tree-anchor ui-icon ui-icon-plus\"></span>\n                                           <label>\t<input type=\"checkbox\" data-id=\"6\" class=\"parent\" id=\"parent-input-6\" data-value=\"13, 14, 15, 16\">\n                                              <i></i>Text Completion</label>\n                                                <ul style=\"line-height: 40px;\"> \n                                                   <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                      <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                          <input type=\"checkbox\" class=\"child-input-6\" data-value=\"13\"><i></i>Single Blank</label>\n                                                      </li>\n                                                    </div>\n                                                <ul>\n                                                  <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                     <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                         <input type=\"checkbox\" class=\"child-input-6\" data-value=\"14\"><i></i>Double Blank</label>\n                                                        </li>\n                                                   </div>\n                                               </ul>\n                                               <ul>\n                                                      <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                         <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                             <input type=\"checkbox\" class=\"child-input-6\" data-value=\"15,16\"><i></i>Triple Blank</label>\n                                                            </li>\n                                                       </div>\n                                                   </ul>\n                                             </ul>\n                                       </ul>\n                                 </div>\n                              </div>\n                            </div>\n                       \n                       \n                          <div class=\"mainParent\" id=\"parent-4\">\n                              <div class=\"checkbox i-checks\" id=\"example-0\">\n                                  <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                       <ul>\n                                          <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                                              <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                              <i></i>Sentence Equivalence</label>\n                                              <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                          </li>\n                                      </ul>\n                                  </div>\n                              </div>\n                          </div>\n        \n                       \n                        <div class=\"mainParent\" id=\"parent-6\">\n                              <div class=\"checkbox i-checks\" id=\"example-0\">\n                                  <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul class=\"main\">\n                                           \n                                        <li class=\"expanded\">\n                                               <span class=\"daredevel-tree-anchor ui-icon ui-icon-minus\"></span>\n                                               <span id=\"mySpan\" style=\"display:none\"class=\"daredevel-tree-anchor ui-icon ui-icon-plus\"></span>\n                                           <label>\t<input type=\"checkbox\" data-id=\"6\" class=\"parent\" id=\"parent-input-6\" data-value=\"13, 14, 15, 16\">\n                                              <i></i>Reading Comprehension</label>\n                                                <ul style=\"line-height: 40px;\"> \n                                                   <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                      <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                          <input type=\"checkbox\" class=\"child-input-6\" data-value=\"13\"><i></i>Short</label>\n                                                      </li>\n                                                    </div>\n                                                <ul>\n                                                  <div class=\"checkbox i-checks ui-widget ui-widget-content daredevel-tree\">\n                                                     <li class=\"ul-tree leaf\"><span class=\"daredevel-tree-anchor ui-icon-bullet ui-icon\" style=\"position: relative;top: 10px;\"></span><label>\n                                                         <input type=\"checkbox\" class=\"child-input-6\" data-value=\"14\"><i></i>Long</label>\n                                                        </li>\n                                                   </div>\n                                               </ul>\n                                              \n                                             </ul>\n                                       </ul>\n                                 </div>\n                              </div>\n                            </div>\n                        <div class=\"mainParent\" id=\"parent-4\">\n                                <div class=\"checkbox i-checks\" id=\"example-0\">\n                                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                                     <ul>\n                                        <li class=\"leaf\">\n                                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                                               <i></i>Critical Reasoning</label>\n                                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                                        \n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                  </div>\n              </div>\n\n          </div>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon-minus daredevel-tree-label ui-draggable ui-draggable-handle ui-icon\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>All Questions</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\" style=\"position: relative;\n                        left: 20px;\"><span class=\"daredevel-tree-anchor ui-icon-minus daredevel-tree-label ui-draggable ui-draggable-handle ui-icon\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>Answered</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\" style=\"position: relative;\n                        left: 40px;\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>Correct</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\" style=\"position: relative;\n                        left: 40px;\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>Incorrect</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>UnAnswered</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>Flagged</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"mainParent\" id=\"parent-4\">\n                <div class=\"checkbox i-checks\" id=\"example-0\">\n                 <div class=\"tree_v ui-widget ui-widget-content daredevel-tree\">\n                     <ul>\n                        <li class=\"leaf\"><span class=\"daredevel-tree-anchor ui-icon ui-icon-bullet\"></span>\n                            <label>\t<input type=\"checkbox\" data-id=\"4\" class=\"parent\" id=\"parent-input-4\" data-value=\"8\">\n                               <i></i>Guessed</label>\n                            <span class=\"d-b-in  badge bg-danger l-s-p-c daredevel-tree-label ui-draggable ui-draggable-handle\" style=\"position: relative;\">0%</span><span class=\"droppable-label ui-droppable\"><br></span><span class=\"prepended ui-droppable\"><br></span>\n                        \n                        \n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n      \n  <div class=\"row\" style=\"padding-top: 20px; height: 210px; position: relative;\">\n      <div class=\"col-md-5\" style=\"padding-left: 20px;\">\n          <h3>Select Difficulty</h3>\n          <div class=\"form-check\" style=\"float:left;\">\n            <label class=\"checkbox-inline i-checks\" style=\"border-right: 1px dashed #ccc;\"><input type=\"checkbox\" class=\"adaptive\" data-value=\"Adaptive\"><i></i>Adaptive</label>\n          </div>\n          <div class=\"form-check\" style=\"float:left;\">\n            <label class=\"checkbox-inline i-checks\" style=\"border-right: 1px dashed #ccc;\"><input type=\"checkbox\" class=\"adaptive\" data-value=\"Adaptive\"><i></i>Easy</label>\n          </div>\n          <div class=\"form-check\" style=\"float:left;\">\n            <label class=\"checkbox-inline i-checks\" style=\"border-right: 1px dashed #ccc;\"><input type=\"checkbox\" class=\"adaptive\" data-value=\"Adaptive\"><i></i>Medium</label>\n          </div>\n          <div class=\"form-check\" style=\"float:left;\">\n            <label class=\"checkbox-inline i-checks\" style=\"border-right: 1px dashed #ccc;\"><input type=\"checkbox\" class=\"adaptive\" data-value=\"Adaptive\"><i></i>Hard</label>\n          </div>\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <div class=\"col-md-4\">\n                  <label>Time Taken</label>\n              </div>\n              <div class=\"col-md-8\">\n                  <select name=\"tTkn\" class=\"form-control\" id=\"tTkn\">\n                      <option value=\"all\">All</option>\n                      <option value=\"<1\">&lt;1 Minute</option>\n                      <option value=\"1-2\">1-2 Minutes</option>\n                      <option value=\">3\">&gt;3 Minutes</option>\n                  </select>\n              </div>\n          </div>\n          <!--end of time taken form group-->\n          <br>\n          <br>\n\n          <div class=\"form-group\">\n              <div class=\"col-md-4\">\n                  <label>No Of Questions</label>\n              </div>\n              <div class=\"col-md-8\">\n                  <select name=\"tQ\" class=\"form-control\" id=\"tQ\">\n                      <option value=\"0\">No Limit</option>\n                      <option value=\"5\">5 Questions</option>\n                      <option value=\"10\">10 Questions</option>\n                      <option value=\"15\">15 Questions</option>\n                      <option value=\"20\">20 Questions</option>\n                      <option value=\"25\">25 Questions</option>\n                      <option value=\"30\">30 Questions</option>\n                  </select>\n              </div>\n          </div>\n          <!--end of No of questions form group-->\n          <br>\n          <br>\n         \n         <div class=\"form-group\">\n              <div class=\"col-md-4\">\n                  <label>Time Mode</label>\n              </div>\n              <div class=\"col-md-8\">\n                  <select name=\"tm\" class=\"form-control\" id=\"tm\">\n                      <option value=\"00:00:00\">No Limit</option>\n                      <option value=\"00:05:00\">5 minutes</option>\n                      <option value=\"00:10:00\">10 minutes</option>\n                      <option value=\"00:15:00\">15 minutes</option>\n                      <option value=\"00:20:00\">20 minutes</option>\n                      <option value=\"00:25:00\">25 minutes</option>\n                      <option value=\"00:30:00\">30 minutes</option>\n                      <option value=\"00:35:00\">35 minutes</option>\n                      <option value=\"00:40:00\">40 minutes</option>\n                      <option value=\"00:45:00\">45 minutes</option>\n                      <option value=\"00:50:00\">50 minutes</option>\n                      <option value=\"00:55:00\">55 minutes</option>\n                      <option value=\"01:00:00\">60 minutes</option>\n                  </select>\n              </div>\n          </div>\n          <!--end of time taken form group-->\n\n      </div>\n  </div>\n</section>\n<div class=\"some-footer\">\n\n\n     \n      <style>\n         .some-footer {\n              position: fixed;\n              bottom: 0;\n              padding: 15px 90px;\n              width: 100%;\n              background: #fff;\n              /* z-index: 9999;*/\n          }\n      </style>\n\n      <div class=\"row\">\n\n          <form method=\"post\" class=\"bs-example form-horizontal\" id=\"_practiceForm\">\n              <!-- Update the count -->\n              <div id=\"count\" class=\"col-md-4\" style=\"padding-top: 10px\">\n                  Your practice test will contain\n                  <span style=\"font-size: 11px;\" class=\"label label-warning\">750</span> questions.\n                  <div id=\"msgs\">\n\n                  </div>\n              </div>\n              <div class=\"col-md-4\">\n                  <input type=\"text\" name=\"name\" class=\"form-control input-lg\" required=\"required\" placeholder=\"Enter Test Name\" style=\"height: 35px;\"\n                      value=\"\" id=\"name\">\n              </div>\n              <div class=\"col-md-4\">\n                      <button class=\"btn btn-warning btn-md\" style=\"float:left;font-size: 12px;\" routerLink=\"/practice/quant\">Start Practice</button>                        \n              </div>\n\n          </form>\n      </div>\n\n\n\n  </div>\n\n\n                      </div>\n                  </div>\n\n             </div>\n          </section>\n       </div>\n          <!-- /.content -->\n  \n  </div>\n  <!-- ./wrapper -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/practicetest/practicetest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticetestComponent; });
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

var PracticetestComponent = (function () {
    function PracticetestComponent() {
    }
    PracticetestComponent.prototype.ngOnInit = function () {
    };
    PracticetestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-practicetest',
            template: __webpack_require__("../../../../../src/app/components/practicetest/practicetest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/practicetest/practicetest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PracticetestComponent);
    return PracticetestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-header></app-header>\n    <!-- Content Wrapper. Contains page content -->\n    <div class=\"content-wrapper\" >\n      <section class=\"content-header\">\n\n      </section>\n      <div class=\"container\">\n\n\n        <div *ngIf=\"user\" class=\"container-fluid\" id=\"page-body\" style=\"position: relative; top: 50px;\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"box\">\n                <div class=\"box-header\">\n                  <h4>Profile Settings</h4>\n                  <hr>\n                </div>\n                <div class=\"box-body\">\n                  <div class=\"container-fluid mt-20\">\n                    <div class=\"row\">\n                      <div class=\"text\"  style=\"text-align: center;\">\n                        <div class=\"dib\" style=\"text-align: center\">Subscription Plan\n                          <span class=\"label bg-success\" style=\"font-size: 12px; margin-left: 5px;\">{{user.subscriptionPlan}}</span>\n                        </div>\n                        <div class=\"dib ml-20 pl_20 bl\" style=\"text-align: center\">Subscription Expires on\n                          <span class=\"label label-danger\">\n                            29-07-2018</span>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-8 col-sm-offset-2 mt-20\">\n                        <div class=\"panel with-nav-tabs panel-primary\" style=\"border: 1px solid #80808047;\">\n                          <div class=\"panel-heading\">\n                            <ul class=\"nav nav-tabs\">\n                              <li class=\"active\">\n                                <a href=\"#tab1primary\" data-toggle=\"tab\" aria-expanded=\"true\">Edit Settings</a>\n                              </li>\n                              <li class=\"\">\n                                <a href=\"#tab2primary\" data-toggle=\"tab\" aria-expanded=\"false\">Change Password</a>\n                              </li>\n                            </ul>\n                          </div>\n                          <div class=\"panel-body\">\n                            <div class=\"tab-content\">\n                              <div class=\"tab-pane fade active in\" id=\"tab1primary\">\n                                <div class=\"container\">\n  \n                                  <div class=\"row\">\n                          \n                                      <div class=\"col-md-4\">\n                                          <ul class=\"nav nav-pills nav-stacked admin-menu\" >\n                                              <li class=\"active\"><a href=\"\" data-target-id=\"profile\"><i class=\"fa fa-user\"></i> Profile</a></li>\n                                              <li><a href=\"\" data-target-id=\"change-password\"><i class=\"fa fa-lock\"></i> Change Password</a></li>\n                                              <li><a href=\"\" data-target-id=\"settings\"><i class=\"fa fa-cog\"></i> Settings</a></li>\n                                          </ul>\n                                      </div>\n                          \n                                      <div class=\"col-md-8  admin-content\" id=\"profile\">\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Name</h3>\n                                              </div>\n                                              <div class=\"panel-body\">\n                                                 {{user.username}}\n                                              </div>\n                                          </div>\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Email</h3>\n                                              </div>\n                                              <div class=\"panel-body\">\n                                                  {{user.email}}\n                                              </div>\n                                          </div>\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Last Password Change</h3>\n                          \n                                              </div>\n                                              <div class=\"panel-body\">\n                                                  4 days Ago\n                                              </div>\n                                          </div>\n                          \n                                      </div>\n                             <div class=\"col-md-8  admin-content\" id=\"settings\">\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Notification</h3>\n                                              </div>\n                                              <div class=\"panel-body\">\n                                                  <div class=\"label label-success\">allowed</div>\n                                              </div>\n                                          </div>\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Newsletter</h3>\n                                              </div>\n                                              <div class=\"panel-body\">\n                                                  <div class=\"badge\">Monthly</div>\n                                              </div>\n                                          </div>\n                                          <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                              <div class=\"panel-heading\">\n                                                  <h3 class=\"panel-title\">Admin</h3>\n                          \n                                              </div>\n                                              <div class=\"panel-body\">\n                                                   <div class=\"label label-success\">yes</div>\n                                              </div>\n                                          </div>\n                          \n                                      </div>\n                          \n                                      <div class=\"col-md-8  admin-content\" id=\"change-password\">\n                                          <form action=\"/password\" method=\"post\">\n                                              <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                                  <div class=\"panel-heading\">\n                                                      <h3 class=\"panel-title\"><label for=\"new_password\" class=\"control-label panel-title\">New Password</label></h3>\n                                                  </div>\n                                                  <div class=\"panel-body\">\n                                                      <div class=\"form-group\">\n                                                          <div class=\"col-sm-10\">\n                                                              <input type=\"password\" class=\"form-control\" name=\"password\" id=\"new_password\" >\n                                                          </div>\n                                                      </div>\n                          \n                                                  </div>\n                                              </div>\n                          \n                                       \n                                              <div class=\"panel panel-info\" style=\"margin: 1em;\">\n                                                  <div class=\"panel-heading\">\n                                                      <h3 class=\"panel-title\"><label for=\"confirm_password\" class=\"control-label panel-title\">Confirm password</label></h3>\n                                                  </div>\n                                                  <div class=\"panel-body\">\n                                                      <div class=\"form-group\">\n                                                          <div class=\"col-sm-10\">\n                                                              <input type=\"password\" class=\"form-control\" name=\"password_confirmation\" id=\"confirm_password\" >\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                          \n                                     \n                                              <div class=\"panel panel-info border\" style=\"margin: 1em;\">\n                                                  <div class=\"panel-body\">\n                                                      <div class=\"form-group\">\n                                                          <div class=\"pull-left\">\n                                                              <input type=\"submit\" class=\"form-control btn btn-primary\" name=\"submit\" id=\"submit\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                          \n                                          </form>\n                                      </div>\n                          \n                                  </div>\n                          </div>\n                              </div>\n                              <div class=\"tab-pane fade\" id=\"tab2primary\">\n                                <div class=\"col-sm-6 col-sm-offset-3\">\n                                  <form id=\"cpass\" class=\"bs-example form-horizontal\">\n                                    <div class=\"form-group\">\n                                      <label class=\"\">Current Password</label>\n                                      <div class=\"\">\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\" name=\"curpassword\" id=\"curpass\" required=\"true\">\n                                      </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                      <label class=\"\">New Password</label>\n                                      <div class=\"\">\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"password\" id=\"regpass\" required=\"true\">\n                                        <span id=\"regpassError\"></span>\n                                      </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                      <label class=\"\">Confirm Password</label>\n                                      <div class=\"\">\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"cpassword\" id=\"conformPassword\" required=\"true\">\n                                      </div>\n                                    </div>\n                                    <hr>\n                                    <div class=\"form-group\">\n                                      <div class=\"\">\n                                        <button type=\"button\" class=\"btn btn-success\" id=\"changepassword\">Change Password</button>\n                                      </div>\n                                    </div>\n                                    <div class=\"chnagepassalert text-center\" style=\"display: none\"></div>\n                                  </form>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n\n      <!-- /.content -->\n    </div>\n    <!-- /.content-wrapper -->\n   \n  </div>\n  <!-- ./wrapper -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-header></app-header>\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\"> \n      <section class=\"content\" style=\"position: relative;top: 50px;\">\n         <div class=\"container-fluid\" id=\"page-body\">\n\n            <!--- Maths and verbal boxes block -->\n            <div class=\"row\">\n               <!-- Maths box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <div class=\"box\">\n                     <div class=\"box-header\">\n                        <h3 class=\"box-title\">Math</h3>\n                     </div>\n                     <div class=\"box-body\">\n                        <div class=\"col-sm-12\">\n                           <div class=\"info-box bg-aqua\">\n                              <span class=\"info-box-icon\"><i class=\"fa fa-calculator\"></i></span>\n                              <div class=\"info-box-content\">\n                                 <span class=\"info-box-text\">Questions Unlocked</span>\n                                 <span class=\"info-box-number\">0.0%</span>\n                                 <div class=\"progress\">\n                                    <div class=\"progress-bar\" style=\"width: 1.1764705900%\"></div>\n                                 </div>\n                                 <span class=\"progress-description\">\n                                 </span>\n                              </div>\n                              <!-- /.info-box-content -->\n                           </div>\n                           <!-- /.info-box -->\n                        </div>\n                     </div>\n                     <div class=\"box-footer\">\n                        <div class=\"col-sm-4\">\n                           <p>Questions Correct</p>\n                           <h2 class=\"text-aqua\">\n                              0%\n                           </h2>\n                        </div>\n                        <div class=\"col-sm-4\">\n                           <p> Questions practiced</p>\n                           <h2 class=\"text-aqua\">\n                              00\n                           </h2>\n                        </div>\n                        <div class=\"col-sm-4\">\n                           <p> Avg Time Per Question</p>\n                           <h2 class=\"text-aqua\">\n                              00:00:00\n                           </h2>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /.box (chat box) -->\n               </div>\n               <!--End of math column-->\n               <!-- Verbal box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <div class=\"box\">\n                     <div class=\"box-header\">\n                        <h3 class=\"box-title\">Verbal</h3>\n                     </div>\n                     <div class=\"box-body\">\n                        <div class=\"col-md-12\">\n                           <div class=\"info-box bg-yellow\">\n                              <span class=\"info-box-icon\"><i class=\"fa fa-edit\"></i></span>\n                              <div class=\"info-box-content\">\n                                 <span class=\"info-box-text\">Questions Unlocked</span>\n                                 <span class=\"info-box-number\">0.0%</span>\n                                 <div class=\"progress\">\n                                    <div class=\"progress-bar\" style=\"width: 0%\"></div>\n                                 </div>\n                                 <span class=\"progress-description\">\n                                 </span>\n                              </div>\n                              <!-- /.info-box-content -->\n                           </div>\n                           <!-- /.info-box -->\n                        </div>\n                     </div>\n                     <div class=\"box-footer\">\n                        <div class=\"col-sm-4\">\n                           <p>Questions Correct</p>\n                           <h2 class=\"text-yellow\">\n                              0%\n                           </h2>\n                        </div>\n                        <div class=\"col-sm-4\">\n                           <p> Questions practiced</p>\n                           <h2 class=\"text-yellow\">\n                              0\n                           </h2>\n                        </div>\n                        <div class=\"col-sm-4\">\n                           <p> Avg Time Per Question</p>\n                           <h2 class=\"text-yellow\">\n                              00:00:00\n                           </h2>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /.box (chat box) -->\n               </div>\n               <!--End of math column-->\n            </div>\n            <!---row end for math and verbal box-->\n            <!---Strenghts and weakness block-->\n            <div class=\"row\">\n               <!-- Maths box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <div class=\"box\">\n                     <div class=\"box-header\">\n                        <h3 class=\"box-title\">Your Good At</h3>\n                     </div>\n                     <hr>\n                     <div class=\"box-body no-padding\">\n                        <div class=\"col-md-12\">\n                           <div class=\"progress-group\">\n                              <span class=\"progress-text\">Arithmetic</span>\n                              <span class=\"progress-number\"><b>38%</b></span>\n                              <!-- <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar bg-red\" style=\"width: 38%\"></div>\n                              </div> -->\n                              <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" role=\"progressbar\"  aria-valuenow=\"38\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:38%\">\n                                  38% Complete\n                                </div>\n                              </div>\n                           </div>\n                           <div class=\"progress-group\">\n                              <span class=\"progress-text\">geometry</span>\n                              <span class=\"progress-number\"><b>25%</b></span>\n                              <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"  aria-valuenow=\"25\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:25%\">\n                                  25% Complete\n                                </div>\n                              </div>\n                           </div>\n                           <div class=\"progress-group\">\n                              <span class=\"progress-text\">algebra</span>\n                              <span class=\"progress-number\"><b>0%</b></span>\n                              <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"  aria-valuenow=\"0\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                                  0% Complete\n                                </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               \n               <!-- /.box (chat box) -->\n               <!--End of math column-->\n               <!-- Verbal box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <div class=\"box\">\n                     <div class=\"box-header\">\n                        <h3 class=\"box-title\">Need To Concentrate On</h3>\n                     </div>\n                     <hr>\n                     <div class=\"box-body no-padding\">\n                        <div class=\"col-md-12\">\n                          \n                           <div class=\"progress-group\">\n                              <span class=\"progress-text\">data analysis</span>\n                              <span class=\"progress-number\"><b>25%</b></span>\n                              <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"  aria-valuenow=\"25\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:25%\">\n                                  25% Complete\n                                </div>\n                              </div>\n                           </div>\n                           <div class=\"progress-group\">\n                              <span class=\"progress-text\">algebra</span>\n                              <span class=\"progress-number\"><b>0%</b></span>\n                              <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"  aria-valuenow=\"0\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                                  0% Complete\n                                </div>\n                              </div>\n                           </div>\n                           <div class=\"progress-group\">\n                            <span class=\"progress-text\">Arithmetic</span>\n                            <span class=\"progress-number\"><b>0%</b></span>\n                            <div class=\"progress sm\">\n                              <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"  aria-valuenow=\"0\"\n                              aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                                0% Complete\n                              </div>\n                            </div>\n                         </div>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /.box (chat box) -->\n               </div>\n               <!--End of math column-->\n            </div>\n            <!--lessons recomended block-->\n            <div class=\"row\">\n               <!-- Maths box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <div class=\"box\">\n                     <div class=\"box-header\">\n                        <h3 class=\"box-title\">Recommended Lessons Based On Your Skills</h3>\n                     </div>\n                     <div class=\"box-body\">\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/lessons/word-problems\" id=\"16\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/lessons/word-problems\" style=\"font-size: 16px; padding: 0 0 4px;\">ages</a> in  Word problems\n                        </li>\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/lessons/lessonDetails\" id=\"14\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/lessons/lessonDetails\" style=\"font-size: 16px; padding: 0 0 4px;\">fractions</a> in  Number Systems\n                        </li>\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/\" id=\"55\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/\" style=\"font-size: 17px; padding: 0 0 4px;\">circles</a> in  Quadrilaterals and circles\n                        </li>\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/lessons/lessonDetails\" id=\"13\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/lessons/lessonDetails\" style=\"font-size: 16px; padding: 0 0 4px;\">integers</a> in  Number Systems\n                        </li>\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/lessons/lessonDetails\" id=\"12\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/lessons/lessonDetails\" style=\"font-size: 16px; padding: 0 0 4px;\">number line</a> in  Number Systems\n                        </li>\n                        <li class=\"list-group-item\">\n                           <span class=\"pull-right\">\n                           <a routerLink=\"/lessons/lessonDetails\" id=\"30\" params=\"\" class=\"subless\">\n                           Read now!\n                           </a>\n                           </span>Read <a class=\"btn link-lesson\" routerLink=\"/lessons/lessonDetails\" style=\"font-size: 16px; padding: 0 0 4px;\">Decimals</a> in  Number Systems\n                        </li>\n                     </div>\n                  </div>\n                  <!-- /.box (chat box) -->\n               </div>\n               <!--End of math column-->\n               <!-- Verbal box in dashboard-->\n               <div class=\"col-sm-6\">\n                  <!-- LINE CHART -->\n                  <div class=\"box\">\n                     <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">Full lengthTest Performance</h3>\n                     </div>\n                     <div class=\"box-body\">\n                        <div id=\"container\" style=\"min-width: 310px; height: 240px; margin: 0 auto;width:100%;margin-bottom: 15px;\" data-highcharts-chart=\"0\">\n                           <div class=\"highcharts-container\" id=\"highcharts-0\" style=\"position: relative; overflow: hidden; width: 557px; height: 240px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"557\" height=\"240\">\n                                 <desc>Created with Highcharts 4.0.1</desc>\n                                 <defs>\n                                    <clipPath id=\"highcharts-1\">\n                                       <rect x=\"0\" y=\"0\" width=\"384\" height=\"125\"></rect>\n                                    </clipPath>\n                                 </defs>\n                                 <rect x=\"0\" y=\"0\" width=\"557\" height=\"240\" strokeWidth=\"0\" fill=\"#FFFFFF\" class=\" highcharts-background\"></rect>\n                                 <g class=\"highcharts-grid\" zIndex=\"1\"></g>\n                                 <g class=\"highcharts-grid\" zIndex=\"1\">\n                                    <path fill=\"none\" d=\"M 74 74.5 L 458 74.5\" stroke=\"#C0C0C0\" stroke-width=\"1\" zIndex=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 74 117.5 L 458 117.5\" stroke=\"#C0C0C0\" stroke-width=\"1\" zIndex=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 74 158.5 L 458 158.5\" stroke=\"#C0C0C0\" stroke-width=\"1\" zIndex=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 74 200.5 L 458 200.5\" stroke=\"#C0C0C0\" stroke-width=\"1\" zIndex=\"1\" opacity=\"1\"></path>\n                                 </g>\n                                 <g class=\"highcharts-axis\" zIndex=\"2\">\n                                    <path fill=\"none\" d=\"M 202.5 200 L 202.5 210\" stroke=\"#C0D0E0\" stroke-width=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 328.5 200 L 328.5 210\" stroke=\"#C0D0E0\" stroke-width=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 453.5 200 L 453.5 210\" stroke=\"#C0D0E0\" stroke-width=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 77.5 200 L 77.5 210\" stroke=\"#C0D0E0\" stroke-width=\"1\" opacity=\"1\"></path>\n                                    <path fill=\"none\" d=\"M 74 200.5 L 458 200.5\" stroke=\"#C0D0E0\" stroke-width=\"1\" zIndex=\"7\" visibility=\"visible\"></path>\n                                 </g>\n                                 <g class=\"highcharts-axis\" zIndex=\"2\">\n                                    <text x=\"28.09375\" zIndex=\"7\" text-anchor=\"middle\" transform=\"translate(0,0) rotate(270 28.09375 137.5)\" class=\" highcharts-yaxis-title\" style=\"color:#707070;fill:#707070;\" visibility=\"visible\" y=\"137.5\">Score</text>\n                                 </g>\n                                 <g class=\"highcharts-series-group\" zIndex=\"3\">\n                                    <g class=\"highcharts-series\" visibility=\"visible\" zIndex=\"0.1\" transform=\"translate(74,75) scale(1 1)\" clip-path=\"url(#highcharts-1)\">\n                                       <path fill=\"none\" d=\"M 3.7647058823529416 110 L 129.25490196078434 111.25 L 254.74509803921572 112.5 L 380.23529411764713 110.83333333333333\" stroke=\"rgb(247, 163, 92)\" stroke-width=\"2\" zIndex=\"1\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path>\n                                       <path fill=\"none\" d=\"M -6.235294117647058 110 L 3.7647058823529416 110 L 129.25490196078434 111.25 L 254.74509803921572 112.5 L 380.23529411764713 110.83333333333333 L 390.23529411764713 110.83333333333333\" stroke-linejoin=\"round\" visibility=\"visible\" stroke=\"rgba(192,192,192,0.0001)\" stroke-width=\"22\" zIndex=\"2\" class=\" highcharts-tracker\"></path>\n                                    </g>\n                                    <g class=\"highcharts-markers highcharts-tracker\" visibility=\"visible\" zIndex=\"0.1\" transform=\"translate(74,75) scale(1 1)\" clip-path=\"none\">\n                                       <path fill=\"rgb(247, 163, 92)\" d=\"M 380 106.83333333333333 C 385.328 106.83333333333333 385.328 114.83333333333333 380 114.83333333333333 C 374.672 114.83333333333333 374.672 106.83333333333333 380 106.83333333333333 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(247, 163, 92)\" d=\"M 254 108.5 C 259.328 108.5 259.328 116.5 254 116.5 C 248.672 116.5 248.672 108.5 254 108.5 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(247, 163, 92)\" d=\"M 129 107.25 C 134.328 107.25 134.328 115.25 129 115.25 C 123.672 115.25 123.672 107.25 129 107.25 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(247, 163, 92)\" d=\"M 3 106 C 8.328 106 8.328 114 3 114 C -2.3280000000000003 114 -2.3280000000000003 106 3 106 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                    </g>\n                                    <g class=\"highcharts-series\" visibility=\"visible\" zIndex=\"0.1\" transform=\"translate(74,75) scale(1 1)\" clip-path=\"url(#highcharts-1)\">\n                                       <path fill=\"none\" d=\"M 3.7647058823529416 112.08333333333333 L 129.25490196078434 112.5 L 254.74509803921572 112.08333333333333 L 380.23529411764713 107.91666666666666\" stroke=\"rgb(124, 181, 236)\" stroke-width=\"2\" zIndex=\"1\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path>\n                                       <path fill=\"none\" d=\"M -6.235294117647058 112.08333333333333 L 3.7647058823529416 112.08333333333333 L 129.25490196078434 112.5 L 254.74509803921572 112.08333333333333 L 380.23529411764713 107.91666666666666 L 390.23529411764713 107.91666666666666\" stroke-linejoin=\"round\" visibility=\"visible\" stroke=\"rgba(192,192,192,0.0001)\" stroke-width=\"22\" zIndex=\"2\" class=\" highcharts-tracker\"></path>\n                                    </g>\n                                    <g class=\"highcharts-markers highcharts-tracker\" visibility=\"visible\" zIndex=\"0.1\" transform=\"translate(74,75) scale(1 1)\" clip-path=\"none\">\n                                       <path fill=\"rgb(124, 181, 236)\" d=\"M 380 103.91666666666666 L 384 107.91666666666666 380 111.91666666666666 376 107.91666666666666 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(124, 181, 236)\" d=\"M 254 108.08333333333333 L 258 112.08333333333333 254 116.08333333333333 250 112.08333333333333 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(124, 181, 236)\" d=\"M 129 108.5 L 133 112.5 129 116.5 125 112.5 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                       <path fill=\"rgb(124, 181, 236)\" d=\"M 3 108.08333333333333 L 7 112.08333333333333 3 116.08333333333333 -1 112.08333333333333 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                    </g>\n                                 </g>\n                                 <text x=\"279\" text-anchor=\"middle\" class=\"highcharts-title\" zIndex=\"4\" style=\"color:#333333;font-size:18px;fill:#333333;width:493px;\" y=\"25\">\n                                    <tspan>Math Min &amp; Max Scores: 130.0 &amp; 136.0 | Verbal Min &amp;</tspan>\n                                    <tspan dy=\"22\" x=\"279\">Max Scores: 130.0 &amp; 141.0</tspan>\n                                 </text>\n                                 <g class=\"highcharts-legend\" zIndex=\"7\" transform=\"translate(478,98)\">\n                                    <g zIndex=\"1\">\n                                       <g>\n                                          <g class=\"highcharts-legend-item\" zIndex=\"1\" transform=\"translate(8,3)\">\n                                             <path fill=\"none\" d=\"M 0 11 L 16 11\" stroke-width=\"2\" stroke=\"rgb(247, 163, 92)\"></path>\n                                             <path fill=\"rgb(247, 163, 92)\" d=\"M 8 7 C 13.328 7 13.328 15 8 15 C 2.6719999999999997 15 2.6719999999999997 7 8 7 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                             <text x=\"21\" y=\"15\" style=\"color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;\" text-anchor=\"start\" zIndex=\"2\">Quant</text>\n                                          </g>\n                                          <g class=\"highcharts-legend-item\" zIndex=\"1\" transform=\"translate(8,21)\">\n                                             <path fill=\"none\" d=\"M 0 11 L 16 11\" stroke-width=\"2\" stroke=\"rgb(124, 181, 236)\"></path>\n                                             <path fill=\"rgb(124, 181, 236)\" d=\"M 8 7 L 12 11 8 15 4 11 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.00001\"></path>\n                                             <text x=\"21\" y=\"15\" style=\"color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;\" text-anchor=\"start\" zIndex=\"2\">Verbal</text>\n                                          </g>\n                                       </g>\n                                    </g>\n                                 </g>\n                                 <g class=\"highcharts-axis-labels highcharts-xaxis-labels\" zIndex=\"7\">\n                                    <text x=\"77.76470588235294\" text-anchor=\"middle\" style=\"color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"220\" opacity=\"1\">0</text>\n                                    <text x=\"203.25490196078434\" text-anchor=\"middle\" style=\"color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"220\" opacity=\"1\">1</text>\n                                    <text x=\"328.7450980392157\" text-anchor=\"middle\" style=\"color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"220\" opacity=\"1\">2</text>\n                                    <text x=\"454.23529411764713\" text-anchor=\"middle\" style=\"color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"220\" opacity=\"1\">3</text>\n                                 </g>\n                                 <g class=\"highcharts-axis-labels highcharts-yaxis-labels\" zIndex=\"7\">\n                                    <text x=\"59\" text-anchor=\"end\" style=\"width:164px;color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"203.5\" opacity=\"1\">100</text>\n                                    <text x=\"59\" text-anchor=\"end\" style=\"width:164px;color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"161.83333333333331\" opacity=\"1\">200</text>\n                                    <text x=\"59\" text-anchor=\"end\" style=\"width:164px;color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"120.16666666666666\" opacity=\"1\">300</text>\n                                    <text x=\"59\" text-anchor=\"end\" style=\"width:164px;color:#606060;cursor:default;font-size:11px;fill:#606060;\" y=\"78.5\" opacity=\"1\">400</text>\n                                 </g>\n                                 <g class=\"highcharts-tooltip\" zIndex=\"8\" style=\"cursor:default;padding:0;white-space:nowrap;\" transform=\"translate(0,-9999)\">\n                                    <path fill=\"none\" d=\"M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0\" stroke-width=\"5\" isShadow=\"true\" stroke=\"black\" stroke-opacity=\"0.049999999999999996\" transform=\"translate(1, 1)\"></path>\n                                    <path fill=\"none\" d=\"M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0\" stroke-width=\"3\" isShadow=\"true\" stroke=\"black\" stroke-opacity=\"0.09999999999999999\" transform=\"translate(1, 1)\"></path>\n                                    <path fill=\"none\" d=\"M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0\" stroke-width=\"1\" isShadow=\"true\" stroke=\"black\" stroke-opacity=\"0.15\" transform=\"translate(1, 1)\"></path>\n                                    <path fill=\"rgba(249, 249, 249, .85)\" d=\"M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0\" stroke-width=\"1\"></path>\n                                    <text x=\"8\" zIndex=\"1\" style=\"font-size:12px;color:#333333;fill:#333333;\" y=\"21\"></text>\n                                 </g>\n                                 <text x=\"547\" text-anchor=\"end\" zIndex=\"8\" style=\"cursor:pointer;color:#909090;font-size:9px;fill:#909090;\" y=\"235\"></text>\n                              </svg>\n                           </div>\n                        </div>\n                     </div>\n                     <!-- /.box-body -->\n                  </div>\n                  <!-- /.box -->\n               </div>\n               <!--End of math column-->\n            </div>\n         </div>\n      </section>\n   </div>\n    <!-- /.content-wrapper -->\n   \n  </div>\n  <!-- ./wrapper -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StartComponent = (function () {
    function StartComponent(http, authService, router, flashMessage) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.today = Date.now();
        this.currentUser = {};
        this.isDev = true;
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/components/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\r\n    position: relative;\r\n    bottom: 16px;\r\n    padding: 0px 38px;\r\n}\r\n  label {\r\n      /* display: inline-block; */\r\n      max-width: 100%;\r\n      font-weight: 200 !important;\r\n    color: black;\r\n  }\r\n  \r\n  .slide {\r\n      display: none;\r\n  }\r\n  .active-slide {\r\n      display: block;\r\n  }\r\n  .slider-nav {\r\n      text-align: center;\r\n      margin-top: 20px;\r\n  }\r\n  .prev {\r\n      display: inline-block;\r\n      margin: 10px;\r\n  }\r\n  .next {\r\n      display: inline-block;\r\n      margin: 10px;\r\n  }\r\n  \r\n  input[type=checkbox], input[type=radio] {\r\n      /* margin: 4px 0 0; */\r\n      margin-top: 1px\\9;\r\n      line-height: normal;\r\n      /* border-radius: 78px; */\r\n      width: 40px !important;\r\n      height: 15px !important;\r\n  }\r\n  p {\r\n      margin: 0 0 10px;\r\n      text-align: justify;\r\n  \r\n  }\r\n  .container {\r\n      height: auto;\r\n      width: 100%;\r\n      padding: 0;\r\n  }\r\n  \r\n  .btn-primary {\r\n      color: #fff;\r\n      background-color: #2297bd !important;\r\n      border-color: #2297bd !important;\r\n  }\r\n  \r\n    .calc-card {\r\n      width: 280px;\r\n      padding: 0;\r\n    }\r\n    \r\n    .buttons {\r\n      margin: 0 auto;\r\n    }\r\n    \r\n    .row {\r\n      margin: 4px;\r\n    }\r\n    \r\n    .calc-button {\r\n      height: 37px !important;\r\n      font-size: 21px;\r\n      width: 54px;\r\n      background-color: lightpink;\r\n      border: 1px solid black;\r\n    }\r\n    \r\n    .calc-button-long {\r\n      width: 113px;\r\n    }\r\n    \r\n    .mdl-textfield {\r\n      width: 85% !important;\r\n      padding: 0px;\r\n    }\r\n    \r\n    .mdl-textfield input[type=\"text\"] {\r\n      text-align: right;\r\n      font-size: 3em;\r\n      padding: 0px;\r\n      width: 98%;\r\n    }\r\n    \r\n    .mdl-textfield input[type=\"text\"]:disabled {\r\n      color: #000;\r\n    }\r\n  \r\n    .row[_ngcontent-iru-22] {\r\n      margin: 6px !important;\r\n  }\r\n  .mdl-textfield[_ngcontent-rsf-22] input[type=\"text\"][_ngcontent-rsf-22]:disabled {\r\n      color: #000;\r\n      width: 98% !important;\r\n  }\r\n  .mdl-button--accent.mdl-button--accent {\r\n      background-color: rgb(255,64,129);\r\n      color: white;\r\n      border: 1px solid rgb(255,64,129);\r\n  \r\n  }\r\n  .mdl-button.mdl-button--colored {\r\n      background-color: rgb(63,81,181);\r\n      color: white;\r\n      border: 1px solid rgb(63,81,181);\r\n  }\r\n  \r\n  .btn[disabled] {\r\n      cursor: not-allowed;\r\n      filter: alpha(opacity=65);\r\n      box-shadow: none;\r\n      opacity: .65;\r\n      background: white;\r\n      padding: 7px 22px;\r\n      color: black;\r\n      font-size: 16px;\r\n      border: 1px solid darkgray;\r\n  }\r\n  .btn {\r\n      padding: 6px 22px;\r\n      background: #2297bd;\r\n\t  color: ghostwhite;\r\n  }\r\n\r\n  .badge {\r\n    color: black !important;\r\n    border-radius: 1px !important;\r\n}\r\n\r\n@media ( max-width :991px) {\r\n\t.some-footer {\r\n\t\tpadding: 0 20px 15px;\r\n\t}\r\n}\r\n\r\n@media ( max-width : 800px) {\r\n\t.some-footer {\r\n\t\twidth: 84% !important;\r\n\t}\r\n}\r\n\r\n@media ( max-width : 1024px) {\r\n\t.some-footer {\r\n\t\twidth: 86% !important;\r\n\t}\r\n}\r\n\r\nul {\r\n\tpadding: 0px !important;\r\n\tmargin: 0px !important;\r\n}\r\n\r\n.dashboard_main_icons {\r\n\tfont-size: 72px;\r\n\ttext-align: center;\r\n}\r\n\r\n.math_text {\r\n\tcolor: #6e3ec2;\r\n}\r\n\r\n.math_bg {\r\n\tbackground: #6e3ec2;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.verbal_text {\r\n\tcolor: #f4511e;\r\n}\r\n\r\n.verbal_bg {\r\n\tbackground: #f4511e;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*--- css for display inline block ---*/\r\n.dib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.height_34 {\r\n\theight: 34px;\r\n}\r\n\r\n\r\nul {\r\n\tpadding: 0px !important;\r\n\tmargin: 0px !important;\r\n}\r\n\r\nul li {\r\n\tlist-style: none;\r\n}\r\n\r\n.logo_img {\r\n\twidth: 168px;\r\n}\r\n\r\n.text_white {\r\n\tcolor: #fff;\r\n}\r\n\r\n/*this css is added for tree view in customize test page*/\r\n.tree_v ul li {\r\n\tmargin-left: 20px;\r\n}\r\n\r\n/* css for test pages */\r\n.test_header_bg {\r\n\tbackground: #30a5ff;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*---------------- boot strap toggle button for bookmark check box --------------*/\r\n\r\n/*-----------------------flag css--------------------*/\r\n.flag input[type=\"radio\"], .flag input[type=\"checkbox\"] {\r\n\tdisplay: none;\r\n}\r\n\r\n.flag input[type=\"radio\"]+span:before, .flag input[type=\"checkbox\"]+span:before\r\n\t{\r\n\tfont-family: 'FontAwesome';\r\n\tpadding-right: 3px;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.flag input[type=\"radio\"]+span:before {\r\n\tcontent: \"\\F10C\"; /* circle-blank */\r\n}\r\n\r\n.flag input[type=\"radio\"]:checked+span:before {\r\n\tcontent: \"\\F111\"; /* circle */\r\n}\r\n\r\n.flag input[type=\"checkbox\"]+span:before {\r\n\tcontent: \"\\F11D\"; /* check-empty */\r\n}\r\n\r\n.flag input[type=\"checkbox\"]:checked+span:before {\r\n\tcontent: \"\\F024\"; /* check */\r\n}\r\n\r\n/*--------------------------End of flag css-----------------------------------------*/\r\n\r\n/*--------------------------radio button like button-----------------------------------------*/\r\n#radio_button {\r\n\tmargin: 0px;\r\n\tfloat: left;\r\n}\r\n\r\n#radio_button label {\r\n\tfloat: left;\r\n\twidth: 100px;\r\n\t/* margin: 4px; */\r\n\tbackground-color: #EFEFEF;\r\n\t/* border-radius: 4px; */\r\n\t/* border: 1px solid #D0D0D0; */\r\n\toverflow: auto;\r\n}\r\n\r\n#radio_button label span {\r\n\ttext-align: center;\r\n\tfont-size: 18px;\r\n\tpadding: 2px 0px;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n}\r\n\r\n#radio_button label input {\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tdisplay: none;\r\n}\r\n\r\n#radio_button input:checked+span:before {\r\n\tfont-family: FontAwesome;\r\n\tfont-style: normal;\r\n\tfont-weight: lighter;\r\n\tcontent: \"\\F00C\";\r\n\tfont-size: 17px;\r\n}\r\n\r\n/*#radio_button input:checked + span {\r\n    background-color:#6C7A89;\r\n    color:#F7F7F7;\r\n}*/\r\n#radio_button .high {\r\n\tbackground-color: #00a65a;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .high input:checked+span {\r\n\tbackground-color: #16A085 !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .medium {\r\n\tbackground-color: #f39c12;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .medium input:checked+span {\r\n\tbackground-color: #F7CA18 !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .low {\r\n\tbackground-color: #dd4b39;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .low input:checked+span {\r\n\tbackground-color: #CF000F !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.bookmark {\r\n\tbackground-color: #dd4b39;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*--------------------------end of radio button like button-----------------------------------------*/\r\n.explination_area {\r\n\tbackground: #F2F1EF;\r\n\tpadding: 20px;\r\n\theight: 150px;\r\n\toverflow-y: auto !important;\r\n}\r\n\r\n.mt-40 {\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.pl_20 {\r\n\tpadding-left: 20px;\r\n}\r\n\r\n.bt_dotter {\r\n\tborder-top: #e1e2e3 1px dotted;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.dib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.btn-outline {\r\n\tbackground-color: transparent;\r\n\tcolor: inherit;\r\n\ttransition: all .5s;\r\n}\r\n\r\n.btn-primary.btn-outline {\r\n\tcolor: #FFF;\r\n}\r\n\r\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:active {\r\n\tcolor: #30a5ff;\r\n\tbackground: #fff;\r\n}\r\n\r\n.test_dashboard {\r\n\tbackground: #34495E;\r\n\tpadding: 0px;\r\n\tbottom: 0px;\r\n\tposition: absolute;\r\n\tleft: 12%;\r\n\tz-index: 999999;\r\n}\r\n\r\n.toggler {\r\n\tbackground: #34495E;\r\n\tpadding: 12px;\r\n\tcolor: #FFF;\r\n\tposition: relative;\r\n\ttop: -36px;\r\n\tleft: 60px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.question_block {\r\n\theight: 380px;\r\n\toverflow-y: auto;\r\n\tline-height: 2;\r\n\tpadding: 0px 40px;\r\n}\r\n\r\n/* css for custom scroll bar */\r\n.force-overflow {\r\n\tmin-height: 450px;\r\n}\r\n\r\n/*\r\n *  STYLE 5\r\n */\r\n#selectdata::-webkit-scrollbar-track, #scroller::-webkit-scrollbar-track,\r\n\t.qust::-webkit-scrollbar-track {\r\n\t/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#selectdata::-webkit-scrollbar, #scroller::-webkit-scrollbar, .qust::-webkit-scrollbar\r\n\t{\r\n\twidth: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#selectdata::-webkit-scrollbar-thumb, #scroller::-webkit-scrollbar-thumb,\r\n\t.qust::-webkit-scrollbar-thumb {\r\n\tbackground-color: #0ae;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 140%, color-stop(.5, rgba(255, 255, 255,\r\n\t\t.4)), color-stop(.5, transparent), to(transparent));\r\n}\r\n\r\n/* vertical hr css */\r\n.or-spacer {\r\n\tmargin-top: 100px;\r\n\tmargin-left: 100px;\r\n\twidth: 400px;\r\n\tposition: relative;\r\n}\r\n\r\n.or-spacer .mask {\r\n\toverflow: hidden;\r\n\theight: 20px;\r\n}\r\n\r\n.or-spacer .mask:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin: -25px auto 0;\r\n\twidth: 100%;\r\n\theight: 25px;\r\n\tborder-radius: 125px/12px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n.or-spacer span {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tposition: absolute;\r\n\tbottom: 100%;\r\n\tmargin-bottom: -25px;\r\n\tleft: 50%;\r\n\tmargin-left: -25px;\r\n\tborder-radius: 100%;\r\n\tbox-shadow: 0 2px 4px #999;\r\n\tbackground: white;\r\n}\r\n\r\n.or-spacer span i {\r\n\tposition: absolute;\r\n\ttop: 4px;\r\n\tbottom: 4px;\r\n\tleft: 4px;\r\n\tright: 4px;\r\n\tborder-radius: 100%;\r\n\tborder: 1px dashed #aaa;\r\n\ttext-align: center;\r\n\tline-height: 40px;\r\n\tfont-style: normal;\r\n\tcolor: #999;\r\n}\r\n\r\n.or-spacer-vertical {\r\n\tdisplay: inline-block;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 100px;\r\n\twidth: 100px;\r\n\tposition: relative;\r\n}\r\n\r\n.or-spacer-vertical .mask {\r\n\toverflow: hidden;\r\n\twidth: 20px;\r\n\theight: 200px;\r\n}\r\n\r\n.or-spacer-vertical.left .mask:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin-left: -20px;\r\n\twidth: 20px;\r\n\theight: 100%;\r\n\tborder-radius: 12px/125px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n.or-spacer-vertical.right .mask:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin-left: 20px;\r\n\twidth: 20px;\r\n\theight: 100%;\r\n\tborder-radius: 12px/125px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n/*--dashboard css--*/\r\n.dashboard_main_icons {\r\n\tfont-size: 72px;\r\n\ttext-align: center;\r\n}\r\n\r\n.math_text {\r\n\tcolor: #6e3ec2;\r\n}\r\n\r\n.math_bg {\r\n\tbackground: #6e3ec2;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.verbal_text {\r\n\tcolor: #f4511e;\r\n}\r\n\r\n.verbal_bg {\r\n\tbackground: #f4511e;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*--- css for display inline block ---*/\r\n.dib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.height_34 {\r\n\theight: 34px;\r\n}\r\n\r\n@media ( max-width :768px) {\r\n\t.test_dashboard {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n/*-custom css for ichecks-*/\r\n.i-checks input {\r\n\topacity: 0;\r\n}\r\n\r\n.i-checks input:checked+i {\r\n\tborder-color:#00c0ef;\r\n}\r\n\r\n.i-checks input:checked+i:before {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\twidth: 100%;\r\n\ttop: 2px;\r\n\ttext-align: center;\r\n\tfont-family: \"FontAwesome\";\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\t/* color: #00a65a; */\r\n}\r\n\r\n.i-checks input[type=\"radio\"]+i {\r\n\tborder-radius: 100%;\r\n}\r\n\r\n.i-checks input[type=\"checkbox\"]:checked+i:before {\r\n\tcontent: \"\\F00C\";\r\n}\r\n\r\n.i-checks input[type=\"radio\"]:checked+i:before {\r\n\tcontent: \"\\F111\";\r\n}\r\n\r\n.i-checks input[disabled]+i, fieldset[disabled] .i-checks input+i {\r\n\tborder-color: #30a5ff;\r\n}\r\n\r\n.i-checks input[disabled]+i:before, fieldset[disabled] .i-checks input+i:before\r\n\t{\r\n\tcolor: #1aae88;\r\n}\r\n\r\n.i-checks i {\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\tline-height: 1;\r\n\tborder: 2px solid #30a5ff;\r\n\tbackground-color: #fff;\r\n\tmargin-left: 20px;\r\n\tmargin-top: 1px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tmargin-right: 8px;\r\n\tposition: relative;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.ie8 .i-checks i {\r\n\tdisplay: none;\r\n}\r\n\r\n/*-custom css for ichecks-*/\r\n\r\n/*---sidebar css   side Menu----*/\r\n.main-sidebar {\r\n\tmargin-top: -1.4%;\r\n}\r\n/*---  ----*/\r\n\r\n/*---header image css Logo---*/\r\n\r\n/*-- ****************** Datatable Css*********************************-->*/\r\n\r\n.box .table td, .box .table th {\r\n\tpadding: 10px 15px;\r\n\tborder-top: 1px solid #eaeef1;\r\n}\r\n\r\n.box .table thead>tr>th {\r\n\tborder-bottom: 1px solid #eaeef1;\r\n}\r\n\r\n.box .table-striped>tbody>tr:nth-child(odd)>td, .box .table-striped>tbody>tr:nth-child(odd)>th\r\n\t{\r\n\tbackground-color: #f9fafc;\r\n}\r\n\r\n.box .table-striped>thead th:last-child {\r\n\tborder-right: none;\r\n}\r\n\r\n.box .table-striped>thead th {\r\n\tbackground-color: #f9fafc;\r\n\tborder-right: 1px solid #eaeef1;\r\n}\r\n\r\ntable tbody tr td {\r\n\tvertical-align: middle !important;\r\n}\r\n\r\n.text-success {\r\n\tcolor: #1aae88;\r\n}\r\n\r\n/*--Steps css--*/\r\nul[role=\"tablist\"] {\r\n\tdisplay: none;\r\n}\r\n/*----*/\r\n\r\n/*********Practice css***********/\r\n.pract.checkbox, .pract.radio {\r\n\tposition: relative;\r\n\tmargin-top: 0px;\r\n\t/* display: inline-block; */\r\n}\r\n\r\n.pract>label>p {\r\n\tdisplay: inline;\r\n}\r\n\r\n.options input[type=radio]:checked+label {\r\n\tbackground: #30A5FF;\r\n\tcolor: #FFF;\r\n\toutline: 0;\r\n}\r\n\r\n.options input[type=radio]+label, .options input[type=checkbox]+label {\r\n\tdisplay: inline-block;\r\n\tmargin: -1px;\r\n\tpadding: 6px 12px;\r\n\tmargin-bottom: 0% !important;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\tcolor: #666;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tcursor: pointer;\r\n\tbackground-color: none;\r\n\twidth: 100%;\r\n\tborder: #30a5ff 1px solid;\r\n}\r\n\r\n.text-blank-t-m {\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.options input[type=radio], .options input[type=checkbox] {\r\n\tdisplay: none !important;\r\n}\r\n\r\n#wizard .actions .buttons li a, #fullwizard .actions .buttons li a {\r\n\tdisplay: inline-block;\r\n\tpadding: 7px 15px;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tline-height: 1.42857143;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tbackground-image: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 4px;\r\n\tmin-width: 120px;\r\n\t/*color: #788288;\r\n\tbackground-color: #fcfcfd;*/\r\n\tcolor: #444 !important;\r\n\tbackground-color: #FFF !important;\r\n\tborder-color: #d2dae1;\r\n\tborder-bottom-color: #cbd5dd;\r\n\tbox-shadow: 0 1px 1px rgba(90, 90, 90, 0.1);\r\n}\r\n\r\n#wizard .actions .buttons li a:hover, #fullwizard .actions .buttons li a:hover {\r\n\t/*color: #788288 !important;\r\n\tbackground-color: #ebeef4;\r\n\tborder-color: #b9c6d0;*/\r\n\tcolor: #FFF !important;\r\n\tbackground-color: #30A5FF !important;\r\n\tborder-color: #b9c6d0;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(1).disabled a, #fullwizard .actions .buttons li:nth-of-type(1).disabled a\r\n\t{\r\n\tbackground-color: #fcfcfd;\r\n\tborder-color: #d2dae1;\r\n\tpointer-events: none;\r\n\tcursor: not-allowed;\r\n\tfilter: alpha(opacity = 65);\r\n\tbox-shadow: none;\r\n\topacity: .65;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(3) a.disabled {\r\n\tbackground-color: #fcfcfd;\r\n\tborder-color: #d2dae1;\r\n\tpointer-events: none;\r\n\tcursor: not-allowed;\r\n\tfilter: alpha(opacity = 65);\r\n\tbox-shadow: none;\r\n\topacity: .65;\r\n\tmargin-right: -5%\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(1) a.btn-sucess, #fullwizard .actions .buttons li:nth-of-type(1) a.btn-sucess\r\n\t{\r\n\tcolor: #fff;\r\n\tbackground-color: #1aae88;\r\n\tborder-color: #1aae88;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(1) a.btn-sucess:hover,\r\n\t#fullwizard .actions .buttons li:nth-of-type(1) a.btn-sucess:hover {\r\n\tcolor: #fff !important;\r\n\tbackground-color: #179877;\r\n\tborder-color: #158b6c;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(2) a.last-step, #fullwizard .actions .buttons li:nth-of-type(2) a.last-step\r\n\t{\r\n\tcolor: #fff !important;\r\n\tbackground-color: #F22613 !important;\r\n\tborder-color: #e33244;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(2), #fullwizard .actions .buttons li:nth-of-type(1)\r\n\t{\r\n\tfloat: left;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(1), #fullwizard .actions .buttons li:nth-of-type(2)\r\n\t{\r\n\tfloat: right;\r\n\tmargin-left: 13px !important;\r\n}\r\n\r\n#wizard .actions .buttons li:nth-of-type(3), #fullwizard .actions .buttons li:nth-of-type(3)\r\n\t{\r\n\tfloat: right;\r\n\tmargin-left: -5%;\r\n}\r\n\r\n.btn-success {\r\n  color: #fff !important;\r\n  background-color: #00a65a !important;\r\n  border-color: #008D4C !important;\r\n}\r\n\r\n.review-btn {\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n/***************Flag Css**********************/\r\n.text-active, .active>.text, .active>.auto .text {\r\n\tdisplay: none !important;\r\n}\r\n\r\n.active>.text-active, .active>.auto .text-active {\r\n\tdisplay: inline-block !important;\r\n}\r\n\r\n.flag-icon {\r\n\tcolor: #E9F4EE;\r\n\tfont-size: 170% !important;\r\n}\r\n\r\n.btn-link-toggler {\r\n\tcolor: #788288;\r\n}\r\n\r\n.btn-link-toggler, .btn-link-toggler:hover, .btn-link-toggler:focus,\r\n\t.btn-link-toggler:active {\r\n\tborder-color: none;\r\n\toutline: none;\r\n}\r\n\r\n.btn-link-toggler, .btn-link-toggler:active, .btn-link-toggler[disabled],\r\n\tfieldset[disabled] .btn-link-toggler {\r\n\tbackground-color: transparent;\r\n\t-webkit-box-shadow: none;\r\n\toutline: none;\r\n\tbox-shadow: none;\r\n}\r\n\r\n/***************************************/\r\n\r\n/*********Button Css**********************/\r\n.bg-success {\r\n\tbackground-color: #1aae88!important;\r\n\tcolor: #a3f1dd\r\n}\r\n\r\n.bg-danger {\r\n\tbackground-color: #e33244 !important;\r\n\tcolor: #fce5e8;\r\n}\r\n\r\n.bg-warning {\r\n\tbackground-color: #f0ad4e !important;\r\n\tcolor: #fffefc;\r\n}\r\n.btn-warning {\r\n   background-color: #f39c12 !important; \r\n   border-color: #e08e0b !important; \r\n     color: white !important;\r\n}\r\n\r\n#wait {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\tbottom: 0px;\r\n\tpadding: 2px;\r\n\tz-index: 10000;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n\tbackground: #ffffff;\r\n\topacity: 0.9;\r\n}\r\n\r\n.qust {\r\n\tmin-height: 118px;\r\n\toverflow-y: auto;\r\n\tmax-height: 250px;\r\n}\r\n\r\n.img-responsive {\r\n\tmax-width: 50%;\r\n}\r\n\r\n.ansSymbol {\r\n\tmargin-left: 5px !important;\r\n\tborder: 0px solid !important;\r\n\tdisplay: inline !important;\r\n}\r\n\r\n.borderhide {\r\n\tborder-color: rgb(236, 240, 245) !important;\r\n\theight: 128% !important;\r\n\tbackground-color: rgb(236, 240, 245) !important;\r\n}\r\n\r\n/* .optionsdata{\r\n\t  padding-left: 26%;\r\n} */\r\n\r\n/*/--general profile settings tab css--/*/\r\n.panel.with-nav-tabs .panel-heading {\r\n\tpadding: 5px 5px 0 5px;\r\n}\r\n\r\n.panel.with-nav-tabs .nav-tabs {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.panel.with-nav-tabs .nav-justified {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n/********************************************************************/\r\n/*** PANEL PRIMARY ***/\r\n.with-nav-tabs.panel-primary .nav-tabs>li>a, .with-nav-tabs.panel-primary .nav-tabs>li>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li>a:focus {\r\n\tcolor: #fff;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>.open>a, .with-nav-tabs.panel-primary .nav-tabs>.open>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>.open>a:focus, .with-nav-tabs.panel-primary .nav-tabs>li>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li>a:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #3071a9;\r\n\tborder-color: transparent;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>li.active>a, .with-nav-tabs.panel-primary .nav-tabs>li.active>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li.active>a:focus {\r\n\tcolor: #428bca;\r\n\tbackground-color: #fff;\r\n\tborder-color: #428bca;\r\n\tborder-bottom-color: transparent;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu {\r\n\tbackground-color: #428bca;\r\n\tborder-color: #3071a9;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>li>a {\r\n\tcolor: #fff;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>li>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>li>a:focus\r\n\t{\r\n\tbackground-color: #3071a9;\r\n}\r\n\r\n.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>.active>a,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>.active>a:hover,\r\n\t.with-nav-tabs.panel-primary .nav-tabs>li.dropdown .dropdown-menu>.active>a:focus\r\n\t{\r\n\tbackground-color: #4a9fe9;\r\n}\r\n\r\n/*/--general css--/*/\r\nul {\r\n\tpadding: 0px !important;\r\n\tmargin: 0px !important;\r\n}\r\n\r\nul li {\r\n\tlist-style: none;\r\n}\r\n\r\n.text_white {\r\n\tcolor: #fff;\r\n}\r\n\r\n/*this css is added for tree view in customize test page*/\r\n.tree_v ul li {\r\n\tmargin-left: 20px;\r\n\tmargin-bottom: 16px;\r\n}\r\n\r\n@media ( max-width :810px) {\r\n\t.mobile-view-content {\r\n\t\theight: 1400px !important;\r\n\t}\r\n}\r\n/* css for test pages */\r\n.test_header_bg {\r\n\tbackground: #30a5ff;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.logo_img {\r\n\twidth: 168px;\r\n\tfloat: left\r\n}\r\n\r\n/*---------------- boot strap toggle button for bookmark check box --------------*/\r\n\r\n/*-------full length test css-------*/\r\n.instr {\r\n\tbackground: #ECF0F1;\r\n\tpadding: 7px;\r\n}\r\n\r\n.mt-20 {\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.mt-420 {\r\n\tmargin-top: 420px;\r\n}\r\n\r\n@media (max-width:1024px) {\t\r\n\t.mt-420 { margin-top:200px;\r\n\t}\r\n}\r\n.ml-20 {\r\n\tmargin-left: 20px;\r\n}\r\n\r\n.bl {\r\n\tborder-left: rgba(102, 102, 102, 0.6) 1px dashed;\r\n}\r\n\r\n#tc {\r\n\tmargin: 4px;\r\n\tfloat: left;\r\n}\r\n\r\n#tc label {\r\n\tfloat: left;\r\n\twidth: 170px;\r\n\t/* margin: 4px; */\r\n\tbackground-color: #EFEFEF;\r\n\t/* border-radius: 4px; */\r\n\tborder: 1px solid #D0D0D0;\r\n\toverflow: auto;\r\n\tmargin-bottom: 0px !important;\r\n}\r\n\r\n#tc label span {\r\n\ttext-align: center;\r\n\tfont-size: 16px;\r\n\tpadding: 8px 0px;\r\n\tdisplay: block;\r\n}\r\n\r\n#tc label input {\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tdisplay: none;\r\n}\r\n\r\n#tc input:checked+span {\r\n\tbackground-color: #30a5ff;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#tc .unchecked {\r\n\tbackground-color: transparent;\r\n\tcolor: #30a5ff;\r\n\tborder: #30a5ff 1px solid;\r\n}\r\n\r\n.report_box {\r\n\t/* \twidth:100%; height:90px;\r\n\t\t\tbox-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n\t\t    -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  \t\t\t-moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  \t\t\tborder-radius: 2px; */\r\n\twidth: 100%;\r\n\theight: 115px;\r\n\tbox-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n\t-webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n\t-moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.report_info {\r\n\t/*   padding: 8px 80px;\r\n\t\t\t  text-align: center;\r\n\t\t\t  border: #fff 4px solid; */\r\n\tpadding: 7px 80px;\r\n\ttext-align: center;\r\n\tborder: #fff 4px solid;\r\n\tmargin-top: 1px;\r\n}\r\n\r\n.report_info .big_t {\r\n\tfont-weight: 600;\r\n\tfont-size: 32px;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 10px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/*-----------------------flag css--------------------*/\r\n.flag input[type=\"radio\"], .flag input[type=\"checkbox\"] {\r\n\tdisplay: none;\r\n}\r\n\r\n.flag input[type=\"radio\"]+span:before, .flag input[type=\"checkbox\"]+span:before\r\n\t{\r\n\tfont-family: 'FontAwesome';\r\n\tpadding-right: 3px;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.flag input[type=\"radio\"]+span:before {\r\n\tcontent: \"\\F10C\"; /* circle-blank */\r\n}\r\n\r\n.flag input[type=\"radio\"]:checked+span:before {\r\n\tcontent: \"\\F111\"; /* circle */\r\n}\r\n\r\n.flag input[type=\"checkbox\"]+span:before {\r\n\tcontent: \"\\F11D\"; /* check-empty */\r\n}\r\n\r\n.flag input[type=\"checkbox\"]:checked+span:before {\r\n\tcontent: \"\\F024\"; /* check */\r\n}\r\n\r\n/*--------------------------End of flag css-----------------------------------------*/\r\n\r\n/*--------------------------radio button like button-----------------------------------------*/\r\n#radio_button {\r\n\tmargin: 0px;\r\n\tfloat: left;\r\n}\r\n\r\n#radio_button label {\r\n\tfloat: left;\r\n\twidth: 100px;\r\n\t/* margin: 4px; */\r\n\tbackground-color: #EFEFEF;\r\n\t/* border-radius: 4px; */\r\n\t/* border: 1px solid #D0D0D0; */\r\n\toverflow: auto;\r\n}\r\n\r\n#radio_button label span {\r\n\ttext-align: center;\r\n\tfont-size: 18px;\r\n\tpadding: 2px 0px;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n}\r\n\r\n#radio_button label input {\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tdisplay: none;\r\n}\r\n\r\n#radio_button input:checked+span:before {\r\n\tfont-family: FontAwesome;\r\n\tfont-style: normal;\r\n\tfont-weight: lighter;\r\n\tcontent: \"\\F00C\";\r\n\tfont-size: 17px;\r\n}\r\n\r\n/*#radio_button input:checked + span {\r\n    background-color:#6C7A89;\r\n    color:#F7F7F7;\r\n}*/\r\n#radio_button .high {\r\n\tbackground-color: #00a65a;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .high input:checked+span {\r\n\tbackground-color: #16A085 !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .medium {\r\n\tbackground-color: #f39c12;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .medium input:checked+span {\r\n\tbackground-color: #F7CA18 !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .low {\r\n\tbackground-color: #dd4b39;\r\n\tcolor: #FFF;\r\n}\r\n\r\n#radio_button .low input:checked+span {\r\n\tbackground-color: #CF000F !important;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.bookmark {\r\n\tbackground-color: #dd4b39;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*--------------------------end of radio button like button-----------------------------------------*/\r\n.explination_area {\r\n\tbackground: #F2F1EF;\r\n\tpadding: 20px;\r\n}\r\n\r\n.mt-40 {\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.pl_20 {\r\n\tpadding-left: 20px;\r\n}\r\n\r\n.bt_dotter {\r\n\tborder-top: #e1e2e3 1px dotted;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.dib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.btn-outline {\r\n\tbackground-color: transparent;\r\n\tcolor: inherit;\r\n\ttransition: all .5s;\r\n}\r\n\r\n.btn-primary.btn-outline {\r\n\tcolor: #FFF;\r\n}\r\n\r\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:active {\r\n\tcolor: #30a5ff;\r\n\tbackground: #fff;\r\n}\r\n\r\n.test_dashboard {\r\n\tbackground: #34495E;\r\n\tpadding: 0px;\r\n\tbottom: 0px;\r\n\tposition: absolute;\r\n\tleft: 12%;\r\n\tz-index: 999999;\r\n}\r\n\r\n.toggler {\r\n\tbackground: #34495E;\r\n\tpadding: 12px;\r\n\tcolor: #FFF;\r\n\tposition: relative;\r\n\ttop: -36px;\r\n\tleft: 60px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* css for custom scroll bar */\r\n.force-overflow {\r\n\tmin-height: 450px;\r\n}\r\n\r\n/*\r\n *  STYLE 5\r\n */\r\n#scroller::-webkit-scrollbar-track {\r\n\t/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#scroller::-webkit-scrollbar {\r\n\twidth: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#scroller::-webkit-scrollbar-thumb {\r\n\tbackground-color: #0ae;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 140%, color-stop(.5, rgba(255, 255, 255,\r\n\t\t.4)), color-stop(.5, transparent), to(transparent));\r\n}\r\n\r\n/* vertical hr css */\r\n.or-spacer {\r\n\tmargin-top: 100px;\r\n\tmargin-left: 100px;\r\n\twidth: 400px;\r\n\tposition: relative;\r\n}\r\n\r\n.or-spacer .mask {\r\n\toverflow: hidden;\r\n\theight: 20px;\r\n}\r\n\r\n.or-spacer .mask:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin: -25px auto 0;\r\n\twidth: 100%;\r\n\theight: 25px;\r\n\tborder-radius: 125px/12px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n.or-spacer span {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tposition: absolute;\r\n\tbottom: 100%;\r\n\tmargin-bottom: -25px;\r\n\tleft: 50%;\r\n\tmargin-left: -25px;\r\n\tborder-radius: 100%;\r\n\tbox-shadow: 0 2px 4px #999;\r\n\tbackground: white;\r\n}\r\n\r\n.or-spacer span i {\r\n\tposition: absolute;\r\n\ttop: 4px;\r\n\tbottom: 4px;\r\n\tleft: 4px;\r\n\tright: 4px;\r\n\tborder-radius: 100%;\r\n\tborder: 1px dashed #aaa;\r\n\ttext-align: center;\r\n\tline-height: 40px;\r\n\tfont-style: normal;\r\n\tcolor: #999;\r\n}\r\n\r\n.or-spacer-vertical {\r\n\tdisplay: inline-block;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 100px;\r\n\twidth: 100px;\r\n\tposition: relative;\r\n}\r\n\r\n.or-spacer-vertical .mask {\r\n\toverflow: hidden;\r\n\twidth: 20px;\r\n\theight: 200px;\r\n}\r\n\r\n.or-spacer-vertical.left .mask:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin-left: -20px;\r\n\twidth: 20px;\r\n\theight: 100%;\r\n\tborder-radius: 12px/125px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n.or-spacer-vertical.right .mask:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tmargin-left: 20px;\r\n\twidth: 20px;\r\n\theight: 100%;\r\n\tborder-radius: 12px/125px;\r\n\tbox-shadow: 0 0 8px black;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nhr.mh {\r\n\tmargin-bottom: 22px !important;\r\n}\r\n\r\n.highlight {\r\n\tbackground-color: #4A9EFC;\r\n}\r\n\r\n.main-header .logo, .main-header .navbar {\r\n\twidth: inherit !important;\r\n\tfloat: none !important;\r\n\tposition: relative !important\r\n}\r\n\r\n#calculator {\r\n\twidth: 325px;\r\n\theight: auto;\r\n\tposition: absolute;\r\n\tmargin: 100px auto;\r\n\tpadding: 20px 20px 9px;\r\n\t\r\n\tbackground: #9dd2ea;\r\n\tbackground: linear-gradient(#9dd2ea, #8bceec);\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0px 4px #009de4, 0px 10px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Top portion */\r\n.top span.clear {\r\n\tfloat: left;\r\n}\r\n\r\n/* Inset shadow on the screen to create indent */\r\n.top .screen {\r\n\theight: 40px;\r\n\twidth: 212px;\r\n\t\r\n\tfloat: right;\r\n\t\r\n\tpadding: 0 10px;\r\n\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tborder-radius: 3px;\r\n\tbox-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);\r\n\t\r\n\t/* Typography */\r\n\tfont-size: 17px;\r\n\tline-height: 40px;\r\n\tcolor: white;\r\n\ttext-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n\ttext-align: right;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n/* Clear floats */\r\n.keys, .top {overflow: hidden;}\r\n\r\n/* Applying same to the keys */\r\n.keys span, .top span.clear {\r\n\tfloat: left;\r\n\tposition: relative;\r\n\ttop: 0;\r\n\t\r\n\tcursor: pointer;\r\n\t\r\n\twidth: 66px;\r\n\theight: 36px;\r\n\t\r\n\tbackground: white;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0px 4px rgba(0, 0, 0, 0.2);\r\n\t\r\n\tmargin: 0 7px 11px 0;\r\n\t\r\n\tcolor: #888;\r\n\tline-height: 36px;\r\n\ttext-align: center;\r\n\t\r\n\t/* prevent selection of text inside keys */\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n\t\r\n\t/* Smoothing out hover and active states using css3 transitions */\r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\n/* Remove right margins from operator keys */\r\n/* style different type of keys (operators/evaluate/clear) differently */\r\n.keys span.operator {\r\n\tbackground: #FFF0F5;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.keys span.eval {\r\n\tbackground: #f1ff92;\r\n\tbox-shadow: 0px 4px #9da853;\r\n\tcolor: #888e5f;\r\n}\r\n\r\n.top span.clear {\r\n\tbackground: #ff9fa8;\r\n\tbox-shadow: 0px 4px #ff7c87;\r\n\tcolor: white;\r\n}\r\n\r\n/* Some hover effects */\r\n.keys span:hover {\r\n\tbackground: #9c89f6;\r\n\tbox-shadow: 0px 4px #6b54d3;\r\n\tcolor: white;\r\n}\r\n\r\n.keys span.eval:hover {\r\n\tbackground: #abb850;\r\n\tbox-shadow: 0px 4px #717a33;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.top span.clear:hover {\r\n\tbackground: #f68991;\r\n\tbox-shadow: 0px 4px #d3545d;\r\n\tcolor: white;\r\n}\r\n\r\n/* Simulating \"pressed\" effect on active state of the keys by removing the box-shadow and moving the keys down a bit */\r\n.keys span:active {\r\n\tbox-shadow: 0px 0px #6b54d3;\r\n\ttop: 4px;\r\n}\r\n\r\n.keys span.eval:active {\r\n\tbox-shadow: 0px 0px #717a33;\r\n\ttop: 4px;\r\n}\r\n\r\n.top span.clear:active {\r\n\ttop: 4px;\r\n\tbox-shadow: 0px 0px #d3545d;\r\n}\r\n\r\n.answered{\r\n\tcolor: green;\r\n    font-weight: bold;\r\n}\r\n.not-answered{\r\n    color: red;\r\n}\r\n#calculator {\r\n    width: 280px; \r\n    padding: 10px 3px 0px 3px; \r\n    border: 1px solid #00c0ef; \r\n    background: #00c0ef;\r\n  }\r\n  .display {\r\n    min-height: 65px; background: #ffffff; border: 1px solid #a0a0a0; margin-bottom: 15px;\r\n    padding: 10px; text-align: right;\r\n  }\r\n  \r\n  .display .main {\r\n    font-size: 35px;\r\n  }\r\n  .display .sub {\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .numbers {\r\n    width: 165px;\r\n  }\r\n  .controlPanel {\r\n    position: relative; \r\n    padding-right: 40px;\r\n  }\r\n\r\n  .numbers span {\r\n    display: inline-block; padding: 4px 0px; background: #e5e5e5; color: blue;\r\n    border: 1px solid rgba(255,255,255,.15); font-weight: normal; margin-right: 10px;\r\n    margin-bottom: 10px; font-size: 20px; width: 40px; text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  .operation span {\r\n    display: block; padding: 4px 0px; background: #808080; color: white;\r\n    border: 1px solid rgba(255,255,255,.15); font-weight: normal; margin-bottom: 10px;\r\n    font-size: 20px; width: 50px; text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  #equalTo {\r\n    display:block; \r\n    background: blue; \r\n    font-size: 20px; \r\n    font-weight: bold;\r\n    color: #ffffff;\r\n     padding: 4px 0px; \r\n     width: 45px; \r\n     text-align: center;\r\n    position: absolute; \r\n    bottom: 10px; \r\n    right: 115px; \r\n    border: 1px solid blue;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .numbers span:hover, .operation span:hover, #equalTo:hover {\r\n    border-color: green;\r\n    box-shadow: gold;\r\n  }\r\n  \r\n  .f_l {float: left;}\r\n  .f_r {float: right;}\r\n  .clearfix:after {clear: both;}\r\n  .clearfix:before,\r\n  .clearfix:after {display: table; content: \" \";}\r\n\r\n\r\n  .calbody{  \r\n\tbackground: #097C9B;  \r\n\tborder: 1px solid #ff0;  \r\n\tpadding: 10px;  \r\n\tmargin-left: 450px;  \r\n\tmin-width: 27.4em;  \r\n\tmax-width: 27.4em;    \r\n   }\t \r\n   #lcd{  \r\n\ttext-align: right;  \r\n\twidth: 23em;  \r\n\theight: 40px;  \r\n\tfont-size: 18px;  \r\n   }  \r\n   #lcdu{  \r\n\tcolor: grey;  \r\n\ttext-align: right;  \r\n\twidth: 27.6em;  \r\n\theight: 35px;  \r\n\tfont-size: 15px;  \t  \r\n}\r\nimg {\r\n    width: 175px !important;\r\n}\r\n/* #bg-text {\r\n\tcolor: #b6d4d47a;\r\n    font-size: 120px;\r\n    transform: rotate(333deg);\r\n    position: absolute;\r\n    top: 39%;\r\n    left: 20%;\r\n} */\r\n\r\n.calculator {\r\n    background-color: #00c0ef;\r\n    width: 240px;\r\n    height: 280px;\r\n    margin: 20px auto 20px auto;\r\n\tborder: solid 1px #00c0ef;\r\n\tfloat: right;\r\n\t\r\n}\r\n\r\n.result {\r\n    margin: 10px;\r\n    width: 217px;\r\n    height: 75px;\r\n    border: solid 1px #00c0ef;\r\n    background-color: white;\r\n}\r\n\r\n.button1 {\r\n\tfont-size: 20px;\r\n    width: 40px;\r\n    margin: 5px;\r\n    background: #00c0ef;\r\n    border: 1px solid #f5f5f5;\r\n    color: white;\r\n}\r\n\r\n.result {\r\n    text-align: left;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n.selected {\r\n    color: white;\r\n    background:green\r\n}\r\nbutton#cssColorChange:active{\r\n    color: white;\r\n    background:red\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\" style=\"background: white;box-shadow: 0px 0px 23px 1px darkgrey;\">\n      <!-- <p id=\"bg-text\">Texas Review</p> -->\n     <div class=\"shadow\" style=\"position: relative; padding: 41px;border-bottom: 1px solid #a9a9a947;\">\n        <div class=\"col-md-8\">\n        </div>\n        <div class=\"col-md-4 button\">\n           <button class=\"btn\" [ngClass]=\"{disabled:pager.index === 0}\" (click)=\"goTo(pager.index - 1);\">&laquo; Prev</button>\n           <button class=\"btn\" *ngIf=\"pager.index + 1 != pager.count\" (click)=\"goTo(pager.index + 1);\">Next &raquo; </button>\n           <button class=\"btn\" *ngIf=\"pager.index + 1 === pager.count\" (click)=\"Timer();\" type=\"submit\">Finish&raquo; </button>\n        </div>\n     </div>\n     <div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding: 20px;\">\n           <p class=\"text-sm-center\" style=\"font-size: 15px;\">Section 1 of {{filteredQuestions.length}}</p>\n        </div>\n        <div class=\"col-md-4\" style=\"padding: 20px;\">\n           <p class=\"badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</p>\n        </div>\n        <div class=\"dib pl_20\">\t\t\t\t\t\t\t\t\t\t \t    \n              <span *ngIf=\"show\">\n                  {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}}\n              </span>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"show=!show\">\n                  <i class=\"fa fa-clock-o\" style=\"margin: 0px 6px 0px 1px;\"></i>{{show ? 'Hide' : 'Timer'}}</button>\n        </div>\n           <a class=\"btn btn-primary btn-outline btn-sm \" (click)=\"calc=!calc\">\n              <i class=\"fa fa-calculator\"></i> {{calc ? 'Calculator' : 'Calculator'}}\n           </a>\n           <span *ngIf=\"calc\">\n            <div class=\"calculator\">\n              <div class=\"result\">\n                  {{result}}\n              </div>\n             \n              <button class=\"button1\" (click)=\"addToCalculation('7')\">7</button>\n              <button  class=\"button1\" (click)=\"addToCalculation('8')\">8</button>\n              <button  class=\"button1\" (click)=\"addToCalculation('9')\">9</button>\n              <button  class=\"button1\" (click)=\"calculate('/')\">/</button>\n              <button class=\"button1\" (click)=\"addToCalculation('4')\">4</button>\n              <button class=\"button1\" (click)=\"addToCalculation('5')\">5</button>\n              <button class=\"button1\" (click)=\"addToCalculation('6')\">6</button>\n              <button class=\"button1\" (click)=\"calculate('*')\">X</button>\n              <button class=\"button1\" (click)=\"addToCalculation('1')\">1</button>\n              <button class=\"button1\" (click)=\"addToCalculation('2')\">2</button>\n              <button class=\"button1\" (click)=\"addToCalculation('3')\">3</button>\n              <button class=\"button1\" (click)=\"calculate('-')\">-</button>\n              <button class=\"button1\" (click)=\"addToCalculation('0')\">0</button>\n              <button class=\"button1\" (click)=\"addToCalculation('.')\">.</button>\n              <button class=\"button1\" (click)=\"getTotal()\">=</button>\n              <button class=\"button1\"(click)=\"calculate('+')\">+</button>\n            \n          </div>\n                  </span>\n     </div>\n     \n     <div class=\"col-md-12\">\n        <button class=\"btn btn-primary\" (click)=\"mode = 'quiz'\">Quick Test</button>\n        <button class=\"btn btn-primary\" routerLink=\"/test2\">Exit Section</button>\n        <button class=\"btn btn-primary\">Pause</button>\n        <button class=\"btn btn-primary\" style=\"padding: 5px 10px !important\">Mark\n        <input type=\"checkbox\">\n        </button>\n        <button class=\"btn btn-primary\" (click)=\"mode = 'review'\">Review</button>\n        <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit Test</button>\n     </div>\n     <div class=\"row\"></div>\n     <div id=\"quiz\">\n        <hr />\n       \n        <div *ngIf=\"mode=='quiz' && quiz\" style=\"min-height: 350px; height: auto; background: white;\">\n           <div *ngFor=\"let question of filteredQuestions;\">\n              <div class=\"col-md-12\">\n                  <div class=\"col-md-6 points_table_scrollbar\" *ngIf=\"question.question_type_id != 3\" style=\"height: 280px;\n                     font-size: 15px;\n                     position: relative;\n                     top: 17px;\">\n                     <div *ngIf=\"question.question_type_id != 4\">\n                     <div class=\"col-md-12\">\n                        <p>{{pager.index + 1}} )\n                            <span [innerHTML]=\"question.paragraph\" style=\"text-align: justify; line-height: 30px;height: 150px; position: relative; bottom: 30px; left: 20px;\"></span>\n                           <span [innerHTML]=\"question.name\" style=\"text-align: justify; line-height: 30px;height: 150px; position: relative; bottom: 30px; left: 20px;\"></span>\n                        </p>\n                     </div>\n                     </div>\n                     <div *ngIf=\"question.question_type_id == 4\" style=\"font-size: 15px;position: relative;\">\n                          <p>{{pager.index + 1}} )\n                            <span [innerHTML]=\"question.paragraph\" style=\"text-align: justify; line-height: 30px;height: 150px;position: relative; bottom: 30px; left: 20px;\"></span>\n                            <b [innerHTML]=\"question.name\" style=\"text-align: justify; line-height: 30px;\"></b>\n                          </p>\n                      </div>\n                  </div>\n                  <div class=\"col-md-12\" *ngIf=\"question.question_type_id == 3\" style=\"font-size: 15px;position: relative; position: relative; bottom: 30px; left: 20px;\">\n                    <div class=\"col-md-12\">\n                      <p>{{pager.index + 1}} )\n                        <span [innerHTML]=\"question.name\" style=\"text-align: justify; line-height: 30px;height: 150px\"></span>\n                      </p>\n                    </div>\n                  \n                  </div>\n                 \n              \n                  <div class=\"row text-left options\">\n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                        <div *ngIf=\"question.question_type_id == 1\">\n                           <div class=\"option\">\n                              <label class=\"\" [attr.for]=\"option.id\">\n                                 <div class= \"pract radio i-checks\">\n                              <label>\n                              <input type=\"radio\" name=\"173\" class=\"radioS\"><i></i><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                              <span style=\"position: relative;font-size: 15px;bottom: 19px; left: 20px;\" [innerHTML]=\"option.name\"></span>\n                              </label>\n                              </div>\n                              </label>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                        <div *ngIf=\"question.question_type_id == 2\">\n                           <div class=\"option\">\n                              <label class=\"\" [attr.for]=\"option.id\">\n                                 <div class=\"pract radio i-checks\">\n                              <label>\n                              <input id=\"{{option.id}}\" type=\"checkbox\" name=\"radio\" class=\"radioS\"><i></i><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                              <span style=\"position: relative;font-size: 15px;bottom: 19px; left: 20px;\" [innerHTML]=\"option.name\"></span>\n                              </label>\n                              </div>\n                              </label>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col-md-4\" *ngFor=\"let option of question.options\">\n                     <div *ngIf=\"question.question_type_id == 3\">\n                      \n                           <div class=\"pract radio i-checks\">\n                              <input type=\"radio\" name=\"radioTriple1\" class=\"radioD1\" id=\"116-D1\">\n                              <label for=\"116-D1\">\n                                 <span [innerHTML]=\"option.name\"></span>\n                              </label>\n                           </div>\n                        </div>\n                     </div>\n                   \n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                        <div *ngIf=\"question.question_type_id == 4\">\n                           <div class=\"option\">\n                              <label class=\"\" [attr.for]=\"option.id\">\n                                 <div class=\"pract radio i-checks\">\n                              <label>\n                              <input id=\"{{option.id}}\" type=\"radio\" name=\"radio\" class=\"radioS\" >\n                              <i></i><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                              <span style=\"position: relative;font-size: 15px;bottom: 19px; left: 20px;\" [innerHTML]=\"option.name\"></span>\n                              </label>\n                              </div>\n                              </label>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                        <div *ngIf=\"question.question_type_id == 5\">\n                           <div class=\"form-group\">\n                              <div class=\"pract\"><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                                 <input type=\"text\" class=\"ctext\">\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                       <div *ngIf=\"question.question_type_id == 6\">\n                          <div class=\"form-group\">\n                             <div class=\"pract\"><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                               <textarea class=\"ctext\"></textarea>\n                             </div>\n                          </div>\n                       </div>\n                    </div>\n                     <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                        <div *ngIf=\"question.question_type_id == 7\">\n                           <span [innerHTML]=\"question.paragraph\"></span>\n                           <div class=\"form-group\">\n                              <div class=\"pract\"><span style=\"color: #00c0ef;\">{{option.is_answer}}</span>\n                                 <textarea rows=\"15\" cols=\"80\" class=\"ctext\"></textarea>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n\n\n\n\n\n           </div>\n           <div class=\"text-sm-center\">\n              <!-- <pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination> -->\n           </div>\n        </div>\n        <div class=\"row review\" *ngIf=\"mode=='review'\" style=\"padding: 45px;line-height: 30px;\">\n           <div class=\"col-sm-2\" *ngFor=\"let question of quiz.questions; let index = index;\">\n              <div (click)=\"goTo(index)\" class=\"{{ isAnswered(index) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}. {{ isAnswered(index) }}</div>\n           </div>\n        </div>\n     </div>\n     <div class=\"result\" *ngIf=\"mode=='result'\">\n        <div *ngFor=\"let question of quiz.questions; let index = index\">\n           <div class=\"result-question\">\n              <p>{{index + 1}}. <span [innerHTML]=\"question.name\"></span></p>\n              <div class=\"row\">\n                 <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n                    <input id=\"{{Option.id}}\" type=\"checkbox\" name=\"radio\" class=\"radioS\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> \n                    <i></i>\n                    <span  style=\"position: relative;font-size: 15px;bottom: 19px; left: 20px;\" [innerHTML]=\"Option.name\"></span>\n                  \n                 </div>\n              </div>\n              <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\n           </div>\n        </div>\n        <p class=\"alert alert-info text-sm-center\">You may close this window now.</p>\n     </div>\n     <div *ngIf=\"mode!='result'\">\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TestComponent = (function () {
    function TestComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.secondsDisplay = 0;
        this.show = false;
        this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': true,
            'richText': false,
            'shuffleQuestions': true,
            'shuffleOptions': true,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.blanksAlp = ["A", "B", "C", "D", "E", "F"];
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
    }
    TestComponent.prototype.addToCalculation = function (value) {
        if (this.clear == true) {
            this.result = '';
            this.clear = false;
        }
        if (value == '.') {
            if (this.decimal == true) {
                return false;
            }
            this.decimal = true;
        }
        this.result += value;
    };
    TestComponent.prototype.calculate = function (operator) {
        this.total.push(this.result);
        this.result = '';
        if (this.total.length == 2) {
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);
            if (this.previous_operator == '+') {
                var total = a + b;
            }
            else if (this.previous_operator == '-') {
                var total = a - b;
            }
            else if (this.previous_operator == '*') {
                var total = a * b;
            }
            else {
                var total = a / b;
            }
            var answer = total;
            this.total = [];
            this.total.push(answer);
            this.result = total;
            this.clear = true;
        }
        else {
            this.clear = false;
        }
        this.decimal = false;
        this.previous_operator = operator;
    };
    TestComponent.prototype.getTotal = function () {
        var a = Number(this.total[0]);
        var b = Number(this.result);
        if (this.previous_operator == '+') {
            var total = a + b;
        }
        else if (this.previous_operator == '-') {
            var total = a - b;
        }
        else if (this.previous_operator == '*') {
            var total = a * b;
        }
        else {
            var total = a / b;
        }
        if (isNaN(total)) {
            return false;
        }
        this.result = total;
        this.total = [];
        this.clear = true;
    };
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
        // timer functionality
        this.startTimer();
        setTimeout(function (router) {
            _this.router.navigate(['timer']);
        }, 2100000); //35min
        // browser back button disabled
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            alert("Your, browsers back button is disabled!");
            history.go(1);
        };
    };
    TestComponent.prototype.startTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].timer(1, 1000);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
        });
    };
    TestComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    TestComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    TestComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    TestComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](res);
            _this.pager.count = _this.quiz.questions.length;
        });
    };
    Object.defineProperty(TestComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    TestComponent.prototype.onSelect = function (question, option) {
        if (question.question_type_id == 2) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    TestComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    TestComponent.prototype.isAnswered = function (index) {
        return this.quiz.questions[index].options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    TestComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    TestComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'QuizId': _this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    TestComponent.prototype.Timer = function () {
        this.router.navigateByUrl('/timer');
        alert("click Finish You are not allowd to back");
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clock{\r\n    text-align: center;\r\n    padding: 43px;\r\n    background: aliceblue;\r\n    height: 257px;\r\n    box-shadow: 0px 3px 33px -2px darkgrey;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clock\">\n  <i class=\"fa fa-clock-o\" style=\"font-size: 48px;color:#35a921\"></i>\n  <h3 style=\"color:#35a921;\">00:00:{{countDown | async}}</h3>\n  <p style=\"text-align: center;\">You can wait or click to Continue to get next section</p>\n  <button class=\"btn btn-primary\" (click)=\"btnClick()\">Continue</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimerComponent = (function () {
    function TimerComponent(router) {
        var _this = this;
        this.router = router;
        this.counter = 60;
        this.countDown = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(.0, 1000)
            .take(this.counter)
            .map(function () { return --_this.counter; });
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function (router) {
            _this.router.navigate(['test2']);
        }, 60000); //1min
    };
    TimerComponent.prototype.btnClick = function () {
        this.router.navigateByUrl('/test2');
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__("../../../../../src/app/components/timer/timer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tips/tips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh3{\r\n    text-align: center;\r\n}\r\n.btn {\r\n    border-radius: 0%;\r\n    text-align: center;\r\n    position: relative;\r\n    position: relative;\r\n    left: 623px;\r\n}\r\np{\r\n    line-height: 30px;\r\n}\r\n.text{\r\n    background: white;\r\n    padding: 20px;\r\n    position: relative;\r\n    top: 20px;\r\n    width: 98%;\r\n    left: 16px;\r\n    box-shadow: 0px 1px 17px 0px darkgrey;\r\n    font-family:sans-serif;\r\n}\r\n#popup_this {\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -50px;\r\n    margin-left: -100px;\r\n    position: fixed;\r\n    background: #fff;\r\n\tpadding: 40px;\r\n\twidth: 40%;\r\n}\r\n.b-close {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background: #30a5ff;\r\n    padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tips/tips.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background: #ECF0F5;\nheight: 635px;\">\n  <div class=\"text\">\n    <h1 style=\" font-size: 36px;\n                      text-align: center;\">AWA Section Instructions</h1>\n    <h3>2 Questions</h3>\n    <h3>60 Minutes</h3>\n    <p>2 essays, 30 minutes each The writing section of the GRE is meant to measure your analytical reasoning, organization,\n      and analysis skills. The two essays include an issue essay and an argument essay. There are no right or wrong answers\n      to the essay questions, and the essays will be read and scored by 2 (and possibly 3) readers. For more information\n      about the essay section, and for writing tips, go to the essay tutorial section.</p>\n\n    <a routerLink=\"/test\">\n      <button class=\"btn btn-primary\">start</button>\n    </a>\n  </div>\n\n</div>\n<!-- <div id=\"surveyElement\"></div>\n\n  <div id=\"result\"></div> -->"

/***/ }),

/***/ "../../../../../src/app/components/tips/tips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsComponent; });
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

var TipsComponent = (function () {
    function TipsComponent() {
    }
    TipsComponent.prototype.ngOnInit = function () {
    };
    TipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tips',
            template: __webpack_require__("../../../../../src/app/components/tips/tips.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tips/tips.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TipsComponent);
    return TipsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".appLesson:hover, .appLesson.active {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);\r\n}\r\n.appLesson {\r\n    position: relative;\r\n    height: 155px;\r\n    width: 155px;\r\n    margin: 4px;\r\n    float: left;\r\n    background: #f3f3f3;\r\n    color: #737373;\r\n    text-align: center;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n    overflow: hidden;\r\n    transition: box-shadow ease-in 100ms;\r\n    cursor: pointer;\r\n}\r\n.appLesson .number {\r\n    padding: 4px;\r\n    font-size: 12px;\r\n    float: right;\r\n}\r\n.appLesson .name {\r\n    padding: 20px 10px;\r\n    text-align: left;\r\n    height: 115px;\r\n}\r\n.appLesson .rating {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 50px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n.appLesson.active .info {\r\n    background: #36abcb;\r\n}\r\n.appLesson .info {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #36abcb;\r\n    color: #fff;\r\n}\r\n.icon {\r\n    background-position: -40px 0;\r\n}\r\n.appLesson .icon {\r\n    display: block;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    /* background-image: url('https://www.sololearn.com/Images/appSprite.png'); */\r\n}\r\n.appLesson .info span {\r\n    white-space: nowrap;\r\n    font-size: 14px;\r\n    line-height: 40px;\r\n    margin: 0 10px;\r\n}\r\n.fa {\r\n    color: crimson;\r\n}\r\n\r\n\r\n/* button effects */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-collapse sidebar-mini\">\n  <div class=\"wrapper\">\n      <app-header></app-header>\n     <!-- Content Wrapper. Contains page content -->\n     <div class=\"content-wrapper\" id=\"content\">\n\t\t\t<section class=\"content\">\n\t\t\t\t<div class=\"container-fluid\" id=\"page-body\">\n          \t<div class=\"box\" style=\"min-height: 521px;\">\n                <div class=\"box-header\">\n                    <section class=\"content-header\">\n                        <h1>Online Videos</h1>\n                        <hr>\n                    </section>\n                   \n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-10\">\n                    <div id=\"lessonsView\" class=\"lessonPanel view\" style=\"z-index: 102; display: block;\">\n                       <div *ngFor =\"let video of videoData\">\n                           <div>\n                        <div class=\"appLesson checkpoint active\" style=\"opacity: 1; transform: translateY(0px);\">\n                            <div class=\"number\">\n                                <span class=\"label label-danger\">{{video.total_vedios}}</span>\n                            </div>\n                            <div class=\"name\">{{video.title}}</div>\n                            <div class=\"rating\">\n                              <a [routerLink]=\"['/videoqus', video.trackid]\"><i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i></a>\n                            </div>\n                            <div class=\"info\">\n                                <i class=\"icon\"></i>\n                                <span>{{video.total_test_que}} questions</span>\n                            </div>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                  </div>\n                \n                </div>\n\n            </div>\n        </div>\n\n\t\t\t</section>\n\t\t</div>\n    \n  </div>\n  <!-- ./wrapper -->\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosComponent = (function () {
    function VideosComponent(router, authService, http) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.apiUrl = "http://localhost:8084/api/video_list";
        this.videoData = [];
        this.getVideo();
        this.getVideodata();
    }
    VideosComponent.prototype.getVideo = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    VideosComponent.prototype.getVideodata = function () {
        var _this = this;
        this.getVideo().subscribe(function (videoData) {
            console.log(videoData);
            _this.videoData = videoData;
        });
    };
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/components/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/models/option.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/models/question.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__("../../../../../src/app/models/quiz.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_config__ = __webpack_require__("../../../../../src/app/models/quiz-config.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/models/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.question_id = data.question_id;
        this.name = data.name;
        this.text = data.text;
        this.is_answer = data.is_answer;
        this.isAnswer = data.isAnswer;
        this.user_aws = data.user_aws;
        this.paragraph = data.paragraph;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
        this.solution = data.solution;
    }
    return Option;
}());



/***/ }),

/***/ "../../../../../src/app/models/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/models/option.ts");

var Question = (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.trackid = data.trackid;
        this.name = data.name;
        this.paragraph = data.paragraph;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
        this.text = data.text;
        this.is_answer = data.is_answer;
        this.solution = data.solution;
        this.question_type_id = data.question_type_id;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](o));
        });
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/models/quiz-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizConfig; });
var QuizConfig = (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    return QuizConfig;
}());



/***/ }),

/***/ "../../../../../src/app/models/quiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_config__ = __webpack_require__("../../../../../src/app/models/quiz-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/models/question.ts");


var Quiz = (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.trackid = data.trackid;
            this.name = data.name;
            this.paragraph = data.paragraph;
            this.title1 = data.title1;
            this.colA = data.colA;
            this.colB = data.colB;
            this.text = data.text;
            this.is_answer = data.is_answer;
            this.solution = data.solution;
            this.description = data.description;
            this.config = new __WEBPACK_IMPORTED_MODULE_0__quiz_config__["a" /* QuizConfig */](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */](q));
            });
        }
    }
    return Quiz;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgotUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/forgot', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.getFeedbacks = function () {
        return this.http.get('http://localhost:8080/api/feedbacks')
            .map(function (res) { return res.json(); });
    };
    // add contents
    FeedbackService.prototype.addFeedback = function (newFeedback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/feedback', newFeedback, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete method
    FeedbackService.prototype.deleteFeedback = function (id) {
        return this.http.delete('http://localhost:8080/api/content/' + id);
    };
    FeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "../../../../../src/app/services/helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelperService = (function () {
    function HelperService() {
    }
    HelperService.toBool = function (val) {
        if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
            return false;
        else
            return true;
    };
    ;
    HelperService.shuffle = function (array) {
        var currentIndex = array.length, temp, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    };
    HelperService.extend = function (out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }
        return out;
    };
    ;
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
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

var NavbarService = (function () {
    function NavbarService() {
        this.visible = false;
        this.myclass = "style1";
    }
    NavbarService.prototype.hide = function () { this.visible = false; this.myclass = "style1"; };
    NavbarService.prototype.show = function () { this.visible = true; this.myclass = "style2"; };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.get = function (url) {
        return this.http.get(url).map(function (res) { return res.text().length > 0 ? res.json() : null; });
    };
    QuizService.prototype.getAll = function () {
        return [
            { id: 'http://18.218.122.78:8080/softprep/api/Queoption/que_list', name: 'section 1' },
        ];
    };
    QuizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined || user.rollNo == undefined || user.subscriptionPlan == undefined || user.branch == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateForgot = function (user) {
        if (user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



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