/**
 * Returns a method decorator taking a callback, which will be invoked
 * after the execution of the decorated function.
 *
 * @param fn a function to be decorated
 * @param callback a handler to be invoked afterwards
 */
export function after(
    fn: Function, callback: Function
): Function {
    return function(
        this: any, ...args: any[]
    ) {
        return callback.apply(
            this, [fn.apply(this, args)].concat(args)
        );
    };
}
export default after;
