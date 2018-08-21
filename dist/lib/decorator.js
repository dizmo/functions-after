"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:ban-types trailing-comma */
var after_1 = require("./after");
/**
 * Returns a method decorator taking a callback, which will be invoked
 * after the execution of the decorated function.
 *
 * @param callback a handler to be invoked afterwards
 */
function decorator(callback) {
    return _decorator(callback);
}
exports.decorator = decorator;
function _decorator(callback) {
    return function (tgt, key, tpd) {
        if (tpd) {
            tpd.value = after_1.after(tpd.value, callback);
            return tpd;
        } else {
            tgt[key] = after_1.after(tgt[key], callback);
        }
    };
}
exports.default = decorator;
//# sourceMappingURL=decorator.js.map