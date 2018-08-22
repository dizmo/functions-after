/* tslint:disable:ban-types callable-types */
import { after as _after } from "./after";
import { decorator as _decorator } from "./decorator";

export interface IAfterFunction {
    (fn: Function, callback: Function): Function;
    decorator: (callback: Function) => MethodDecorator;
}

export const after: IAfterFunction = (() => {
    (_after as IAfterFunction).decorator = _decorator;
    return _after as IAfterFunction;
})();

export default after;
