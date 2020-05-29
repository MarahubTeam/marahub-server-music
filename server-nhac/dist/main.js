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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:30px\">\r\n    <div class=\"pricing-header mx-auto text-center\">\r\n        <h1 class=\"display-4\">Âm Nhạc và Cuộc Sống</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <form name=\"addMusic\" (ngSubmit)=\"search()\">\r\n                <div class=\"input-group mb-2\">\r\n                    <input [(ngModel)]=\"music\" name=\"music\" class=\"form-control\" placeholder=\"Tìm gì cũng được\">\r\n                    <span class=\"mdi mdi-magnify\"></span>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-5\">\r\n            <div class=\"card shadow-sm mb-1\" *ngFor=\"let music of musicList$ | async\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title pricing-card-title\">{{ music.title }} <small class=\"text-muted\">/ {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img class=\"img-thumbnail\" [src]=\"music.thumbnails.default.url\" (click)=\"add(music)\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"add(music)\">Add</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-2\"></div>\r\n\r\n        <div class=\"col-5\">\r\n            <youtube-player [videoId]=\"url\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\"></youtube-player>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-6\">\r\n                    <button *ngIf=\"currentMusicList[1]\" (click)=\"next()\" class=\"btn btn-primary my-2\">Next</button>\r\n                </div>\r\n\r\n                <div class=\"col-6 text-right\">\r\n                    <button *ngIf=\"currentMusicList[0]\" (click)=\"clearAll()\" class=\"btn btn-danger my-2\">Clear All</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card shadow-sm mb-2\" *ngFor=\"let music of currentMusicList; let i = index\"\r\n                [ngClass]=\"{'active-music': i === 0}\">\r\n                <div class=\"card-body\">\r\n                    <button type=\"button\" class=\"close\" *ngIf=\"i > 0\" (click)=\"remove(i)\">\r\n                        <span aria-hidden=\"true\">×</span>\r\n                    </button>\r\n                    <h5 class=\"card-title pricing-card-title text-muted\"><span *ngIf=\"i===0\">▶</span> {{ music.title }} <small>/ {{ music.duration }}</small></h5>\r\n                    <div class=\"text-center\">\r\n                        <img [src]=\"music.thumbnails.default.url\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav justify-content-center bg-dark music-header\">\r\n  <form name=\"addMusic\" (ngSubmit)=\"search()\" class=\"col-6\">\r\n    <div class=\"input-group\">\r\n        <input [(ngModel)]=\"music\" name=\"music\" class=\"search-input form-control rounded-0\" placeholder=\"Tìm gì cũng được\">\r\n        <span class=\"mdi mdi-magnify\"></span>\r\n        <div class=\"input-group-append\">\r\n            <button class=\"btn-header-action btn-search btn btn-primary rounded-0\" type=\"submit\" tooltip=\"Tìm kiếm\" placement=\"bottom\">\r\n              <i class=\"style-scope icon-searchbox\"><svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope i\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;   \"><g class=\"style-scope\">\r\n                <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" class=\"style-scope yt-icon\"></path>\r\n              </g></svg>\r\n              </i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n\r\n  <button class=\"btn-header-action btn btn-primary rounded-0 mr-1\" tooltip=\"Thịnh hành\" placement=\"bottom\" (click)=\"getTrending()\">\r\n    <svg class=\"bi bi-music-note-beamed\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z\"/>\r\n      <path fill-rule=\"evenodd\" d=\"M14 11V2h1v9h-1zM6 3v10H5V3h1z\" clip-rule=\"evenodd\"/>\r\n      <path d=\"M5 2.905a1 1 0 01.9-.995l8-.8a1 1 0 011.1.995V3L5 4V2.905z\"/>\r\n    </svg>\r\n  </button>\r\n\r\n  <button class=\"btn-header-action btn btn-primary rounded-0 mr-1\" tooltip=\"Hay nghe\" placement=\"bottom\" (click)=\"getFrequentList()\">\r\n    <svg class=\"bi bi-collection-play\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path fill-rule=\"evenodd\" d=\"M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z\"/>\r\n      <path fill-rule=\"evenodd\" d=\"M6.258 6.563a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z\"/>\r\n    </svg>\r\n  </button>\r\n</nav>\r\n\r\n<div class=\"container-fluid music-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-9\">\r\n          <h4 class=\"pt-2 pb-2\">Âm nhạc và cuộc sống</h4>\r\n            <div class=\"music-item mb-5 d-flex flex-row\" *ngFor=\"let music of musicList$ | async\">\r\n                <img [src]=\"music.thumbnails.medium.url\">\r\n                <small class=\"text-duration\">{{ music.duration }}</small>\r\n                <div class=\"add-button\" (click)=\"add(music)\" tooltip=\"Thêm vào list nhạc\" placement=\"left\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 401.994 401.994\" style=\"enable-background:new 0 0 401.994 401.994;\" xml:space=\"preserve\" style=\"fill: #fff;\">\r\n                      <g>\r\n                        <path d=\"M394,154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414   C242.488,2.666,236.02,0,228.398,0h-54.812c-7.612,0-14.084,2.663-19.414,7.993c-5.33,5.33-7.994,11.803-7.994,19.414v118.775   H27.407c-7.611,0-14.084,2.664-19.414,7.994S0,165.973,0,173.589v54.819c0,7.618,2.662,14.086,7.992,19.411   c5.33,5.332,11.803,7.994,19.414,7.994h118.771V374.59c0,7.611,2.664,14.089,7.994,19.417c5.33,5.325,11.802,7.987,19.414,7.987   h54.816c7.617,0,14.086-2.662,19.417-7.987c5.332-5.331,7.994-11.806,7.994-19.417V255.813h118.77   c7.618,0,14.089-2.662,19.417-7.994c5.329-5.325,7.994-11.793,7.994-19.411v-54.819C401.991,165.973,399.332,159.502,394,154.175z\"/>\r\n                      </g>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"ml-2\">\r\n                  <h5 class=\"mb-0\">{{ music.title }}</h5>\r\n                  <div class=\"text-muted small\">{{ music.channelTitle }}</div>\r\n                  <div class=\"text-muted pt-3\">{{ music.description | words : 15 }}</div>\r\n                  <div class=\"text-muted small pt-2\" *ngIf=\"music.playCount\">Play Counts: <strong>{{ music.playCount }}</strong></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-3 current-list\">\r\n            <h4 class=\"pt-2 pb-2\">Danh sách nhạc</h4>\r\n            <div class=\"music-item mb-5 d-flex flex-column\" *ngFor=\"let music of currentMusicList; let i = index\">\r\n                <img [src]=\"music.thumbnails.medium.url\">\r\n                <small class=\"text-duration\">{{ music.duration }}</small>\r\n                <div class=\"add-button\" *ngIf=\"i > 0\" (click)=\"remove(i)\" tooltip=\"Xóa khỏi list nhạc\" placement=\"left\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\"  viewBox=\"0 0 339.177 339.177\" style=\"enable-background:new 0 0 339.177 339.177;\" xml:space=\"preserve\" style=\"fill: #fff;\">\r\n                      <g>\r\n                        <path d=\"M247.244,169.59l83.938-83.938c5.332-5.327,7.994-11.798,7.994-19.414c0-7.614-2.669-14.084-7.994-19.414L292.355,7.993   C287.026,2.665,280.556,0,272.944,0c-7.617,0-14.085,2.665-19.417,7.993L169.59,91.931L85.651,7.993   C80.325,2.665,73.854,0,66.237,0c-7.611,0-14.083,2.665-19.414,7.993L7.994,46.824C2.667,52.15,0,58.624,0,66.238   c0,7.616,2.664,14.084,7.994,19.414l83.937,83.938L7.994,253.528C2.667,258.859,0,265.327,0,272.945   c0,7.61,2.664,14.082,7.994,19.41l38.83,38.828c5.33,5.332,11.803,7.994,19.414,7.994c7.616,0,14.084-2.669,19.414-7.994   l83.939-83.938l83.944,83.938c5.328,5.332,11.793,7.994,19.417,7.994c7.611,0,14.082-2.669,19.411-7.994l38.82-38.828   c5.332-5.324,7.994-11.8,7.994-19.41c0-7.618-2.662-14.086-7.994-19.417L247.244,169.59z\"/>\r\n                      </g>\r\n                      </svg>\r\n                </div>\r\n                <div class=\"mt-2\">\r\n                  <h6 class=\"mb-0\"><span *ngIf=\"i===0\">▶</span> {{ music.title }}</h6>\r\n                  <div class=\"text-muted small\">{{ music.channelTitle }}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

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
/*! exports provided: ListCurrentMusicAction, LisCurrentMusicActionAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCurrentMusicAction", function() { return ListCurrentMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisCurrentMusicActionAPI", function() { return LisCurrentMusicActionAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const ListCurrentMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - List CurrentMusic');
const LisCurrentMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[CurrentMusic] - List CurrentMusic Sucess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/action/music.action.ts":
/*!****************************************!*\
  !*** ./src/app/action/music.action.ts ***!
  \****************************************/
/*! exports provided: GetMusicAction, SearchMusicActionAPI, GetTrendingAction, GetTrendingActionAPI, GetFrequentListAction, GetFrequentListActionAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMusicAction", function() { return GetMusicAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMusicActionAPI", function() { return SearchMusicActionAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrendingAction", function() { return GetTrendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrendingActionAPI", function() { return GetTrendingActionAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentListAction", function() { return GetFrequentListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentListActionAPI", function() { return GetFrequentListActionAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const GetMusicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music] - Get Music', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const SearchMusicActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Musics API] Musics Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const GetTrendingAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music] Get Trending Music');
const GetTrendingActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music API] Trending Music Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const GetFrequentListAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music] Get List Frequent Music');
const GetFrequentListActionAPI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Music API] List Frequent Music Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


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
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _app_reducer_music_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/reducer/music.reducer */ "./src/app/reducer/music.reducer.ts");
/* harmony import */ var _app_reducer_currentMusic_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/reducer/currentMusic.reducer */ "./src/app/reducer/currentMusic.reducer.ts");
/* harmony import */ var _effect_music_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effect/music.effect */ "./src/app/effect/music.effect.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");





// External libs


// NgRX






// App modules, components





// App services
 // Angular CLI environment

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            _components_client_client_component__WEBPACK_IMPORTED_MODULE_17__["ClientComponent"]
        ],
        imports: [
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__["NgxYoutubePlayerModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ musics: _app_reducer_music_reducer__WEBPACK_IMPORTED_MODULE_10__["MusicReducer"], currentMusics: _app_reducer_currentMusic_reducer__WEBPACK_IMPORTED_MODULE_11__["CurrentMusicReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_effect_music_effect__WEBPACK_IMPORTED_MODULE_12__["MusicEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production,
            }),
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
        ],
        providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_19__["SocketService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
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
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/music.service */ "./src/app/services/music.service.ts");







let AdminComponent = class AdminComponent {
    constructor(store, socketService, musicService) {
        this.store = store;
        this.socketService = socketService;
        this.musicService = musicService;
        this.currentMusicList = [];
        this.url = '';
        this.isPlaying = false;
    }
    ngOnInit() {
        this.musicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('musics'));
        this.musicSub = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('currentMusics')).subscribe((data) => {
            this.currentMusicList = data;
        });
        // Get list current music
        this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        this.socketService.listen('add-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('next-music')
            .subscribe(() => {
            this.isPlaying = false;
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('remove-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
        this.socketService.listen('clear-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
    }
    ngOnDestroy() {
        this.musicSub.unsubscribe();
    }
    /******************************/
    add(music) {
        if (!this.currentMusicList.some(curr => curr.id === music.id)) {
            this.socketService.emit('add-music', music);
        }
    }
    search() {
        if (!this.music) {
            return;
        }
        this.store.dispatch(_action_music_action__WEBPACK_IMPORTED_MODULE_3__["GetMusicAction"]({ id: this.music }));
    }
    remove(i) {
        this.socketService.emit('remove-music', i);
    }
    next() {
        this.socketService.emit('next-music');
    }
    clearAll() {
        this.isPlaying = false;
        if (this.player) {
            this.player.loadVideoById('');
        }
        this.socketService.emit('clear-music');
    }
    savePlayer(player) {
        this.player = player;
        this.musicSub = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('currentMusics')).subscribe((data) => {
            if (data.length > 0 && this.player && !this.isPlaying) {
                this.player.loadVideoById(data[0].id);
                this.isPlaying = true;
                this.musicService.addFrequentSong(data[0]).subscribe();
            }
        });
    }
    onStateChange(event) {
        // When the video ends, we should move to next video
        if (event.data === 0) {
            this.isPlaying = false;
            this.next();
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_6__["MusicService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".music-header {\n  position: fixed;\n  z-index: 9999;\n  width: 100%;\n  height: 58px;\n  top: 0;\n  left: 0;\n}\n\n.music-body {\n  margin-top: 65px;\n}\n\n.search-input {\n  color: #fff;\n  background: #121212;\n  border-color: #393939;\n}\n\n.search-input:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.btn-header-action {\n  background: #393939;\n  border-color: #393939;\n}\n\n.btn-search {\n  height: 38px;\n  width: 75px;\n}\n\n.btn-search svg {\n  fill: #ffffff80;\n}\n\n.btn-search:hover svg {\n  fill: #ffffffbb;\n}\n\n.btn-search:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.nav {\n  background: #282828 !important;\n  padding: 10px;\n}\n\n.icon-searchbox {\n  width: 23px;\n  height: 23px;\n  display: inline-flex;\n}\n\n.music-item {\n  position: relative;\n}\n\n.music-item img {\n  width: 273px;\n  cursor: pointer;\n}\n\n.music-item .text-duration {\n  position: absolute;\n  background: #000;\n  border-radius: 2px;\n  padding: 2px;\n  color: #fff;\n  top: 131px;\n  left: 246px;\n  font-size: 70%;\n}\n\n.music-item .add-button {\n  position: absolute;\n  left: 239px;\n  top: 2px;\n  height: 32px;\n  width: 32px;\n  background: #000;\n  border-radius: 2px;\n  padding: 2px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: 1s all;\n}\n\n.music-item:hover .add-button {\n  opacity: 1;\n}\n\n.current-list .music-item {\n  width: 273px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnQvRDpcXE1hcmFodWJcXHNlcnZlci1tdXNpY1xcc2VydmVyLW11c2ljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjbGllbnRcXGNsaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1BO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9FO0VBQ0UsVUFBQTtBQ0xKOztBRFNBO0VBQ0UsWUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11c2ljLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubXVzaWMtYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcclxuICBib3JkZXItY29sb3I6ICMzOTM5Mzk7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWhlYWRlci1hY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzkzOTM5O1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiA3NXB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgZmlsbDogI2ZmZmZmZjgwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciBzdmcge1xyXG4gICAgZmlsbDogI2ZmZmZmZmJiO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGJhY2tncm91bmQ6ICMyODI4MjggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1zZWFyY2hib3gge1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogMjNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLm11c2ljLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI3M3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZHVyYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdG9wOiAxMzFweDtcclxuICAgIGxlZnQ6IDI0NnB4O1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgfVxyXG5cclxuICAuYWRkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMzlweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgLmFkZC1idXR0b24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXJyZW50LWxpc3QgLm11c2ljLWl0ZW0ge1xyXG4gIHdpZHRoOiAyNzNweDtcclxufVxyXG4iLCIubXVzaWMtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5tdXNpYy1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNjVweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBib3JkZXItY29sb3I6ICMzOTM5Mzk7XG59XG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1oZWFkZXItYWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4uYnRuLXNlYXJjaCB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4uYnRuLXNlYXJjaCBzdmcge1xuICBmaWxsOiAjZmZmZmZmODA7XG59XG4uYnRuLXNlYXJjaDpob3ZlciBzdmcge1xuICBmaWxsOiAjZmZmZmZmYmI7XG59XG4uYnRuLXNlYXJjaDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pY29uLXNlYXJjaGJveCB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubXVzaWMtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tdXNpYy1pdGVtIGltZyB7XG4gIHdpZHRoOiAyNzNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11c2ljLWl0ZW0gLnRleHQtZHVyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiAxMzFweDtcbiAgbGVmdDogMjQ2cHg7XG4gIGZvbnQtc2l6ZTogNzAlO1xufVxuLm11c2ljLWl0ZW0gLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIzOXB4O1xuICB0b3A6IDJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAxcyBhbGw7XG59XG4ubXVzaWMtaXRlbTpob3ZlciAuYWRkLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jdXJyZW50LWxpc3QgLm11c2ljLWl0ZW0ge1xuICB3aWR0aDogMjczcHg7XG59Il19 */");

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
        this.currentMusicList = [];
        this.url = '';
    }
    ngOnInit() {
        this.musicList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('musics'));
        this.musicSub = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('currentMusics')).subscribe((data) => {
            this.currentMusicList = data;
        });
        // Get list trending music (by default)
        this.getTrending();
        // Get list current music
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
        this.socketService.listen('clear-music')
            .subscribe(() => {
            this.store.dispatch(_action_current_action__WEBPACK_IMPORTED_MODULE_4__["ListCurrentMusicAction"]());
        });
    }
    ngOnDestroy() {
        this.musicSub.unsubscribe();
    }
    /******************************/
    add(music) {
        if (!this.currentMusicList.some(curr => curr.id === music.id)) {
            this.socketService.emit('add-music', music);
        }
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
    getTrending() {
        this.store.dispatch(_action_music_action__WEBPACK_IMPORTED_MODULE_3__["GetTrendingAction"]());
    }
    getFrequentList() {
        this.store.dispatch(_action_music_action__WEBPACK_IMPORTED_MODULE_3__["GetFrequentListAction"]());
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _action_music_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/music.action */ "./src/app/action/music.action.ts");
/* harmony import */ var _action_current_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action/current.action */ "./src/app/action/current.action.ts");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");








let MusicEffects = class MusicEffects {
    constructor(actions$, musicsService) {
        this.actions$ = actions$;
        this.musicsService = musicsService;
        this.searchMusics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetMusicAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.musicsService.search(action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_music_action__WEBPACK_IMPORTED_MODULE_5__["SearchMusicActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])))));
        this.getTrendingMusics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetTrendingAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.musicsService.getTrendingList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetTrendingActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])))));
        this.getFrequentList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetFrequentListAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.musicsService.getFrequentList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_music_action__WEBPACK_IMPORTED_MODULE_5__["GetFrequentListActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])))));
        this.loadMusics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_action_current_action__WEBPACK_IMPORTED_MODULE_6__["ListCurrentMusicAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.musicsService.getlist()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(musics => {
            return _action_current_action__WEBPACK_IMPORTED_MODULE_6__["LisCurrentMusicActionAPI"]({ payload: musics });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])))));
    }
};
MusicEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_7__["MusicService"] }
];
MusicEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MusicEffects);



/***/ }),

/***/ "./src/app/pipes/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _truncateCharacters_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truncateCharacters.pipe */ "./src/app/pipes/truncateCharacters.pipe.ts");
/* harmony import */ var _truncateWords_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncateWords.pipe */ "./src/app/pipes/truncateWords.pipe.ts");





let PipeModule = class PipeModule {
};
PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _truncateCharacters_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateCharactersPipe"],
            _truncateWords_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateWordsPipe"]
        ],
        declarations: [
            _truncateCharacters_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateCharactersPipe"],
            _truncateWords_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateWordsPipe"]
        ],
        providers: [],
    })
], PipeModule);



/***/ }),

/***/ "./src/app/pipes/truncateCharacters.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/truncateCharacters.pipe.ts ***!
  \**************************************************/
/*! exports provided: TruncateCharactersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateCharactersPipe", function() { return TruncateCharactersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
 * Truncate text with given arguments
 * Usage:
 *   text | truncate : 3 : "xxx"
 * Example:
 *   {{ "123456789" | truncate : 3 }}
 *   formats to: "123..."
 *
 *   or
 *
 *   {{ "123456789" | truncate : 3 : "xxx" }}
 *   formats to: "123xxx"
 *
 *   or
 *
 *   {{ "123456789" | truncate : -4 : "…" }}
 *   formats to: "…6789"
*/
let TruncateCharactersPipe = class TruncateCharactersPipe {
    transform(value, limit = 40, trail = '…') {
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    }
};
TruncateCharactersPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        // tslint:disable-next-line:pipe-naming
        name: 'truncate'
    })
], TruncateCharactersPipe);



/***/ }),

/***/ "./src/app/pipes/truncateWords.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/truncateWords.pipe.ts ***!
  \*********************************************/
/*! exports provided: TruncateWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateWordsPipe", function() { return TruncateWordsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
 * Truncate words with given arguments
 * Usage:
 *   text | words : 3 : "xxx"
 * Example:
 *   {{ "1234 567 89" | words : 2 }}
 *   formats to: "1234 567…"
 *
 *   or
 *
 *   {{ "1234 567 89" | words : 2 : "xxx" }}
 *   formats to: "1234 567xxx"
 *
 *   or
 *
 *   {{ "1234 567 89" | words : -2 : "…" }}
 *   formats to: "…567 89"
*/
let TruncateWordsPipe = class TruncateWordsPipe {
    transform(value, limit = 40, trail = '…') {
        let result = value || '';
        if (value) {
            const words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    }
};
TruncateWordsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        // tslint:disable-next-line:pipe-naming
        name: 'words'
    })
], TruncateWordsPipe);



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
const currentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_current_action__WEBPACK_IMPORTED_MODULE_2__["LisCurrentMusicActionAPI"], (state, { payload }) => {
    return [...payload];
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
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_music_action__WEBPACK_IMPORTED_MODULE_2__["GetTrendingActionAPI"], (state, { payload }) => {
    return [...payload];
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_music_action__WEBPACK_IMPORTED_MODULE_2__["GetFrequentListActionAPI"], (state, { payload }) => {
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
    getTrendingList() {
        return this.http.get(`${this.url}trending`);
    }
    addMusic(music) {
        return this.http.post(`${this.url}add`, music);
    }
    removeMusic() {
        return this.http.get(`${this.url}shift`);
    }
    getFrequentList() {
        return this.http.get(`${this.url}frequent-songs`);
    }
    addFrequentSong(song) {
        return this.http.post(`${this.url}frequent-songs`, song);
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

module.exports = __webpack_require__(/*! D:\Marahub\server-music\server-music\src\main.ts */"./src/main.ts");


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