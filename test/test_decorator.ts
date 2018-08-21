/* tslint:disable: max-classes-per-file no-console */
import { expect } from "chai";
import { decorator } from "../lib/index";

import "mocha";

describe("index.decorator", () => {
    it("should exist", () => {
        expect(decorator).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(decorator).to.be.a("function");
    });
});

describe("index.decorator", () => {
    it("should be invoked afterwards", () => {
        class Class {
            @decorator((value: number) => {
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
            @decorator((value: boolean) => {
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
            @decorator((n: number): string => {
                return `${n + 1}`;
            })
            public method(): number {
                return 1;
            }
        }
        expect(new Class().method()).to.eq("2");
    });
});
