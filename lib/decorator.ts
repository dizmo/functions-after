/* tslint:disable:ban-types trailing-comma */
import { after } from "./after";

/**
 * Returns a method decorator taking a callback, which will be invoked
 * after the execution of the decorated function.
 *
 * @param callback a handler to be invoked afterwards
 */
export function decorator(
    callback: Function,
): MethodDecorator {
    return _decorator(callback);
}

function _decorator(
    callback: Function
): MethodDecorator {
    return (
        tgt: any, key: string|symbol, tpd?: PropertyDescriptor
    ): PropertyDescriptor|void => {
        if (tpd) {
            tpd.value = after(tpd.value, callback);
            return tpd;
        } else {
            tgt[key] = after(tgt[key], callback);
        }
    };
}

export default after;
