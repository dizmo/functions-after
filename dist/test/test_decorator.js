"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable: max-classes-per-file no-console */
var chai_1 = require("chai");
var index_1 = require("../lib/index");
require("mocha");
describe("index.decorator", function () {
    it("should exist", function () {
        chai_1.expect(index_1.decorator).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(index_1.decorator).to.be.a("function");
    });
});
describe("index.decorator", function () {
    it("should be invoked afterwards", function () {
        var Class = function () {
            function Class() {
                _classCallCheck(this, Class);
            }

            _createClass(Class, [{
                key: "method",
                value: function method() {
                    return 0;
                }
            }]);

            return Class;
        }();

        __decorate([index_1.decorator(function (value) {
            throw new Error("" + value);
        }), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], Class.prototype, "method", null);
        try {
            new Class().method();
        } catch (error) {
            chai_1.expect(error.name).to.eq("Error");
            chai_1.expect(error.message).to.eq("0");
        }
    });
    it("should receive arguments", function () {
        var Class = function () {
            function Class() {
                _classCallCheck(this, Class);
            }

            _createClass(Class, [{
                key: "method",
                value: function method() {
                    return true;
                }
            }]);

            return Class;
        }();

        __decorate([index_1.decorator(function (value) {
            chai_1.expect(value).to.eq(true);
        }), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Boolean)], Class.prototype, "method", null);
        chai_1.expect(new Class().method()).to.eq(undefined);
    });
    it("should return a result", function () {
        var Class = function () {
            function Class() {
                _classCallCheck(this, Class);
            }

            _createClass(Class, [{
                key: "method",
                value: function method() {
                    return 1;
                }
            }]);

            return Class;
        }();

        __decorate([index_1.decorator(function (n) {
            return "" + (n + 1);
        }), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], Class.prototype, "method", null);
        chai_1.expect(new Class().method()).to.eq("2");
    });
});
//# sourceMappingURL=test_decorator.js.map