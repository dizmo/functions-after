/* tslint:disable:max-classes-per-file */
import { expect } from "chai";
import { after } from "../lib";

import "mocha";

describe("after.decorator", () => {
    it("should exist", () => {
        expect(after.decorator).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(after.decorator).to.be.a("function");
    });
});

describe("after.decorator", () => {
    it("should be invoked afterwards", () => {
        class Class {
            @after.decorator((value: number) => {
                throw new Error(`${value}`);
            })
            public method(): number {
                return 0;
            }
        }
        try {
            new Class().method();
        } catch (error) {
            expect(error.name).to.eq("Error");
            expect(error.message).to.eq("0");
        }
    });
    it("should receive arguments", () => {
        class Class {
            @after.decorator((value: boolean) => {
                expect(value).to.eq(true);
            })
            public method(): boolean {
                return true;
            }
        }
        expect(new Class().method()).to.eq(undefined);
    });
    it("should return a result", () => {
        class Class {
            @after.decorator((n: number): string => {
                return `${n + 1}`;
            })
            public method(): number {
                return 1;
            }
        }
        expect(new Class().method()).to.eq("2");
    });
});
