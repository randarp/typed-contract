/// <reference path="../typedcontract.d.ts" />
/// <reference path="../Typings/jasmine/jasmine.d.ts" />

import { contract } from "typed-contract";

describe("typed-contract with module syntax RequireJS via TypeScript", () => {
    /* Note, can't use expect(result).toEqual(jasmine.any(BooleanValidator)) here because the constructor function is not exposed for validators
    So we have to use expect((<any>result.constructor).name).toBe("BooleanValidator");
    */

    it("will return the correct validator for a boolean", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: IBooleanValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });

    it("will return the correct validator for a boolean", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: IBooleanValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });
    it("will return the correct validator for a boolean with a name", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: IBooleanValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });

    it("will return the correct validator for a number", () => {
        // arrange m
        let localVariable: number = 2;

        // act
        let result: INumberValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("NumberValidator");
    });

    it("will return the correct validator for a number with a name", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: INumberValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("NumberValidator");
    });

    it("will return the correct validator for a string", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: IStringValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("will return the correct validator for a string with a name", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: IStringValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("will return the correct validator for an array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: IArrayValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("ArrayValidator");
    });

    it("will return the correct validator for an array with a name", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: IArrayValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("ArrayValidator");
    });

    it("will return the correct validator for an any type", () => {
        let localVariable: any = /[A-Z]/;

        let result: IAnyValidator = contract.In(localVariable);

        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("AnyValidator");
    });

    it("will return the correct validator for an any type with a variable name", () => {
        let localVariable: any = /[A-Z]/;

        let result: IAnyValidator = contract.In(localVariable, "myVar");

        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect((<any>result.constructor).name).toBe("AnyValidator");
    });

    it("IsGreaterThan returns the right validator if passed a double/float", () => {
        // arrange
        let localVariable: number = 2.05;
        let comparableVar: number = 1;

        // act
        let result: INumberValidator = contract.In(localVariable).IsGreaterThan(comparableVar);

        // assert
        expect(result);
    });

});
