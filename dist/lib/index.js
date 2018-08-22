"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:ban-types callable-types */
var after_1 = require("./after");
var decorator_1 = require("./decorator");
exports.after = function () {
    after_1.after.decorator = decorator_1.decorator;
    return after_1.after;
}();
exports.default = exports.after;
//# sourceMappingURL=index.js.map