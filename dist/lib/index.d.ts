export interface IAfterFunction {
    (fn: Function, callback: Function): Function;
    decorator: (callback: Function) => MethodDecorator;
}
export declare const after: IAfterFunction;
export default after;
//# sourceMappingURL=index.d.ts.map