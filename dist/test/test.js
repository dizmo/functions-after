"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../lib/index");
require("mocha");
describe("index.after", function () {
    it("should exist", function () {
        chai_1.expect(index_1.after).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(index_1.after).to.be.a("function");
    });
});
describe("index.after", function () {
    it("should be invoked afterwards", function () {
        var f1 = function f1() {
            return 0;
        };
        var f2 = index_1.after(f1, function (value) {
            throw new Error("" + value);
        });
        try {
            f2();
        } catch (err) {
            chai_1.expect(err.name).to.eq("Error");
            chai_1.expect(err.message).to.eq("0");
        }
    });
    it("should receive arguments", function () {
        var f1 = function f1(value) {
            return value;
        };
        var f2 = index_1.after(f1, function (value) {
            chai_1.expect(value).to.eq(true);
        });
        chai_1.expect(f2(true)).to.eq(undefined);
    });
    it("should return a result", function () {
        var f1 = function f1() {
            return 1;
        };
        var f2 = index_1.after(f1, function (n) {
            return "" + (n + 1);
        });
        chai_1.expect(f2()).to.eq("2");
    });
});
//# sourceMappingURL=test.js.map