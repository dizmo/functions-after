"use strict";
/* tslint:disable:ban-types trailing-comma */

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns a method decorator taking a callback, which will be invoked
 * after the execution of the decorated function.
 *
 * @param fn a function to be decorated
 * @param callback a handler to be invoked afterwards
 */

function after(fn, callback) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return callback.apply(this, [fn.apply(this, args)].concat(args));
  };
}

exports.after = after;
exports["default"] = after;
//# sourceMappingURL=after.js.map