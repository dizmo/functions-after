import { expect } from "chai";
import { after } from "../lib";

import "mocha";

describe("after", () => {
    it("should exist", () => {
        expect(after).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(after).to.be.a("function");
    });
});

describe("after", () => {
    it("should be invoked afterwards", () => {
        const f1 = (): number => {
            return 0;
        };
        const f2 = after(f1, (value: number) => {
            throw new Error(`${value}`);
        });
        try {
            f2();
        } catch (err) {
            expect(err.name).to.eq("Error");
            expect(err.message).to.eq("0");
        }
    });
    it("should receive arguments", () => {
        const f1 = (value: boolean): boolean => {
            return value;
        };
        const f2 = after(f1, (value: boolean) => {
            expect(value).to.eq(true);
        });
        expect(f2(true)).to.eq(undefined);
    });
    it("should return a result", () => {
        const f1 = (): number => {
            return 1;
        };
        const f2 = after(f1, (n: number): string => {
            return `${n + 1}`;
        });
        expect(f2()).to.eq("2");
    });
});
