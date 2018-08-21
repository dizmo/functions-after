import { after } from "./after";
/**
 * Returns a method decorator taking a callback, which will be invoked
 * after the execution of the decorated function.
 *
 * @param callback a handler to be invoked afterwards
 */
export declare function decorator(callback: Function): MethodDecorator;
export default after;
//# sourceMappingURL=decorator.d.ts.map