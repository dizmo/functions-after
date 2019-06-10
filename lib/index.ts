import { after as _after } from "./after";
import { decorator as _decorator } from "./decorator";

export interface AfterFunction {
    (fn: Function, callback: Function): Function;
}
export interface AfterFunction {
    decorator: Function;
}
export const after: AfterFunction = (() => {
    (_after as any).decorator = _decorator;
    return _after as any;
})();
export default after;
