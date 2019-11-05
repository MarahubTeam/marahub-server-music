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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:30px\">\r\n    <div class=\"pricing-header mx-auto text-center\">\r\n        <h1 class=\"display-4\">Âm Nhạc và Cuộc Sống</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <form name=\"addMusic\" (ngSubmit)=\"search()\">\r\n                <div class=\"input-group mb-2\">\r\n                    <input [(ngModel)]=\"music\" name=\"music\" class=\"form-control\" placeholder=\"Tìm gì cũng được\">\r\n                    <span class=\"mdi mdi-magnify\"></span>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <div class=\"card shadow-sm mb-1\" *ngFor=\"let music of musicList$ | async\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title pricing-card-title\">{{ music.title }} <small class=\"text-muted\">/\r\n                            {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img class=\"img-thumbnail\" [src]=\"music.thumbnails.default.url\" (click)=\"add(music)\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"add(music)\">Add</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-5\">\r\n            <youtube-player [videoId]=\"''\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\r\n            </youtube-player>\r\n            <p>\r\n                <button *ngIf=\"(currentMusicList$ | async)[1]\" (click)=\"next()\"\r\n                    class=\"btn btn-primary my-2\">Next</button>\r\n            </p>\r\n            <div class=\"card shadow-sm mb-2\" *ngFor=\"let music of (currentMusicList$ | async); let i = index\"\r\n                [ngClass]=\"{'active-music': i === 0}\">\r\n                <div class=\"card-body\">\r\n                    <button type=\"button\" class=\"close\" *ngIf=\"i > 0\" (click)=\"remove(i)\">\r\n                        <span aria-hidden=\"true\">×</span>\r\n                    </button>\r\n                    <h5 class=\"card-title pricing-card-title\">{{ music.title }} <small class=\"text-muted\">/\r\n                            {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img [src]=\"music.thumbnails.default.url\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:30px\">\r\n    <div class=\"pricing-header mx-auto text-center\">\r\n        <h1 class=\"display-4\">Âm Nhạc và Cuộc Sống</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <form name=\"addMusic\" (ngSubmit)=\"search()\">\r\n                <div class=\"input-group mb-2\">\r\n                    <input [(ngModel)]=\"music\" name=\"music\" class=\"form-control\" placeholder=\"Tìm gì cũng được\">\r\n                    <span class=\"mdi mdi-magnify\"></span>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-5\">\r\n            <p *ngIf=\"(currentMusicList$ | async).length > 1\">\r\n                <button (click)=\"next()\" class=\"btn btn-primary my-2\">Next</button>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <div class=\"card shadow-sm mb-1\" *ngFor=\"let music of musicList$ | async\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title pricing-card-title\">{{ music.title }} <small class=\"text-muted\">/\r\n                            {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img class=\"img-thumbnail\" [src]=\"music.thumbnails.default.url\" (click)=\"add(music)\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"add(music)\">Add</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-5\">\r\n            <div class=\"card shadow-sm mb-2\" *ngFor=\"let music of (currentMusicList$ | async); let i = index\"\r\n                [ngClass]=\"{'active-music': i === 0}\">\r\n                <div class=\"card-body\">\r\n                    <button type=\"button\" class=\"close\" *ngIf=\"i > 0\" (click)=\"remove(i)\">\r\n                        <span aria-hidden=\"true\">×</span>\r\n                    </button>\r\n                    <h5 class=\"card-title pricing-card-title\">{{ music.title }} <small class=\"text-muted\">/\r\n                            {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img [src]=\"music.thumbnails.default.url\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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

/***/ "./src/app/action/current.action.ts":
/*!******************************************!*\
  !*** ./src/app/action/current.action.ts ***!
  \******************************************/
/*! exports provided: AddCurrentMusicAction, AddListCurrentMusicActionAPI, RemoveCurrentMusicAction, RemoveCurrentMusicActionAPI, ListCurrentMusicAction, LisCurrentMusicActionAPI, SocketMusicAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCurrentMusicAction", function() { return AddCurrentMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListCurrentMusicActionAPI", function() { return AddListCurrentMusicActionAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCurrentMusicAction", function() { return RemoveCurrentMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCurrentMusicActionAPI", function() { return RemoveCurrentMusicActionAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCurrentMusicAction", function() { return ListCurrentMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisCurrentMusicActionAPI", function() { return LisCurrentMusicActionAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketMusicAction", function() { return SocketMusicAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const AddCurrentMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - Add CurrentMusic Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddListCurrentMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - Add CurrentMusic ', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const RemoveCurrentMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - Remove CurrentMusic Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const RemoveCurrentMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - Remove CurrentMusic');
const ListCurrentMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - List CurrentMusic');
const LisCurrentMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - List CurrentMusic Sucess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const SocketMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Socket] - Add CurrentMusic', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/action/music.action.ts":
/*!****************************************!*\
  !*** ./src/app/action/music.action.ts ***!
  \****************************************/
/*! exports provided: GetMusicAction, SearchMusicActionAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMusicAction", function() { return GetMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMusicActionAPI", function() { return SearchMusicActionAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const GetMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music] - Get Music', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const SearchMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Musics API] Musics Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


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
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");





const routes = [
    { path: 'client', component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: '',
        redirectTo: '/client',
        pathMatch: 'full'
    },
    { path: '**', component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'server-music';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_reducer_music_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/reducer/music.reducer */ "./src/app/reducer/music.reducer.ts");
/* harmony import */ var _app_reducer_currentMusic_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/reducer/currentMusic.reducer */ "./src/app/reducer/currentMusic.reducer.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _effect_music_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effect/music.effect */ "./src/app/effect/music.effect.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");















 // Angular CLI environment


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _components_client_client_component__WEBPACK_IMPORTED_MODULE_11__["ClientComponent"]
        ],
        imports: [
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_16__["NgxYoutubePlayerModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ musics: _app_reducer_music_reducer__WEBPACK_IMPORTED_MODULE_8__["MusicReducer"], currentMusics: _app_reducer_currentMusic_reducer__WEBPACK_IMPORTED_MODULE_9__["CurrentMusicReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effect_music_effect__WEBPACK_IMPORTED_MODULE_13__["MusicEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_17__["SocketService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _action_music_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action/music.action */ "./src/app/action/music.action.ts");
/* harmony import */ var _action_current_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../action/current.action */ "./src/app/action/current.action.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");






let AdminComponent = class AdminComponent {
    constructor(store, socketService) {
        this.store = store;
        this.socketService = socketService;
        this.url = '';
    }
    ngOnInit() {
        this.musicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('musics'));
        this.currentMusicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('currentMusics'));
        this.currentMusicList$.subscribe((data) => {
            if (data.length === 1 && this.player) {
                this.player.loadVideoById(data[0].id);
            }
        });
        this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        this.socketService.listen('add-music')
            .subscribe((data) => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('next-music')
            .subscribe((data) => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
            if (data.length > 0 && this.player) {
                this.player.loadVideoById(data[0].id);
            }
        });
        this.socketService.listen('remove-music')
            .subscribe((data) => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
            if (data.length > 1 && this.player) {
                this.player.loadVideoById(data[0].id);
            }
        });
    }
    add(music) {
        this.socketService.emit('add-music', music);
    }
    search() {
        if (!this.music) {
            return;
        }
        this.store.dispatch(_action_music_action__WEBPACK_IMPORTED_MODULE_3__["GetMusicAction"]({ id: this.music }));
    }
    remove() {
        this.socketService.emit('remove-music');
    }
    next() {
        this.socketService.emit('next-music');
    }
    savePlayer(player) {
        this.player = player;
        this.currentMusicList$.subscribe((data) => {
            if (data.length === 1) {
                this.player.loadVideoById(data[0].id);
            }
        });
    }
    onStateChange(event) {
        if (event.data == 0) {
            this.remove();
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/client/client.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _action_music_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action/music.action */ "./src/app/action/music.action.ts");
/* harmony import */ var _action_current_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../action/current.action */ "./src/app/action/current.action.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");






let ClientComponent = class ClientComponent {
    constructor(store, socketService) {
        this.store = store;
        this.socketService = socketService;
        this.url = '';
    }
    ngOnInit() {
        this.musicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('musics'));
        this.currentMusicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('currentMusics'));
        this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        this.socketService.listen('add-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('next-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('remove-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
    }
    add(music) {
        this.socketService.emit('add-music', music);
    }
    next() {
        this.socketService.emit('next-music');
    }
    remove(i) {
        this.socketService.emit('remove-music', i);
    }
    search() {
        if (!this.music) {
            return;
        }
        this.store.dispatch(_action_music_action__WEBPACK_IMPORTED_MODULE_3__["GetMusicAction"]({ id: this.music }));
    }
};
ClientComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }
];
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/components/client/client.component.scss")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/effect/music.effect.ts":
/*!****************************************!*\
  !*** ./src/app/effect/music.effect.ts ***!
  \****************************************/
/*! exports provided: MusicEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicEffects", function() { return MusicEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _action_music_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/music.action */ "./src/app/action/music.action.ts");
/* harmony import */ var _action_current_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action/current.action */ "./src/app/action/current.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MusicEffects = class MusicEffects {
    constructor(actions$, musicsService) {
        this.actions$ = actions$;
        this.musicsService = musicsService;
        this.searchMusics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetMusicAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.musicsService.search(action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_music_action__WEBPACK_IMPORTED_MODULE_5__["SearchMusicActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"])))));
        this.loadMusics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_current_action__WEBPACK_IMPORTED_MODULE_6__["ListCurrentMusicAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.musicsService.getlist()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_current_action__WEBPACK_IMPORTED_MODULE_6__["LisCurrentMusicActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"])))));
    }
};
MusicEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] }
];
MusicEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MusicEffects);



/***/ }),

/***/ "./src/app/reducer/currentMusic.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/reducer/currentMusic.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, CurrentMusicReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentMusicReducer", function() { return CurrentMusicReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _action_current_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/current.action */ "./src/app/action/current.action.ts");



const initialState = [];
const currentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_current_action__WEBPACK_IMPORTED_MODULE_2__["AddCurrentMusicAction"], (state, { payload }) => {
    return [...payload];
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_current_action__WEBPACK_IMPORTED_MODULE_2__["LisCurrentMusicActionAPI"], (state, { payload }) => {
    return [...payload];
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_current_action__WEBPACK_IMPORTED_MODULE_2__["RemoveCurrentMusicAction"], (state, { payload }) => {
    return state.filter(element => element !== payload);
}));
function CurrentMusicReducer(state, action) {
    return currentReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducer/music.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducer/music.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, MusicReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReducer", function() { return MusicReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _action_music_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/music.action */ "./src/app/action/music.action.ts");



const initialState = [];
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_music_action__WEBPACK_IMPORTED_MODULE_2__["SearchMusicActionAPI"], (state, { payload }) => {
    return [...payload];
}));
function MusicReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/services/music.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/music.service.ts ***!
  \*******************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MusicService = class MusicService {
    constructor(http) {
        this.http = http;
        this.url = '/api/';
    }
    search(text) {
        return this.http.get(`${this.url}search?q=${text}`);
    }
    getlist() {
        return this.http.get(`${this.url}list`);
    }
    addMusic(music) {
        return this.http.post(`${this.url}add`, music);
    }
    removeMusic() {
        return this.http.get(`${this.url}shift`);
    }
};
MusicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MusicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicService);



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SocketService = class SocketService {
    constructor() {
        this.connected$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('/');
        this.socket.on('connect', () => this.connected$.next(true));
        this.socket.on('disconnect', () => this.connected$.next(false));
    }
    disconnect() {
        this.socket.disconnect();
        this.connected$.next(false);
    }
    emit(event, data) {
        console.group();
        console.log('----- SOCKET OUTGOING -----');
        console.log('Action: ', event);
        console.log('Payload: ', data);
        console.groupEnd();
        this.socket.emit(event, data);
    }
    listen(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on(event, data => {
                console.group();
                console.log('----- SOCKET INBOUND -----');
                console.log('Action: ', event);
                console.log('Payload: ', data);
                console.groupEnd();
                observer.next(data);
            });
            // dispose of the event listener when unsubscribed
            return () => this.socket.off(event);
        });
    }
};
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SocketService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Marahub\products\server-music\server-music\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map