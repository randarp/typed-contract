/// <reference path="../Typings/jasmine/jasmine.d.ts" />
import * as typedcontract from "../TypedContract/typed-contract";
import contract from "../TypedContract/typed-contract";

describe("Contract", () => {

    it("will return the correct validator for a boolean", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: typedcontract.BooleanValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.BooleanValidator));
    });

    it("will return the correct validator for a boolean with a name", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: typedcontract.BooleanValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.BooleanValidator));
    });

    it("will return the correct validator for a number", () => {
        // arrange m
        let localVariable: number = 2;

        // act
        let result: typedcontract.NumberValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.NumberValidator));
    });

    it("will return the correct validator for a number with a name", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: typedcontract.NumberValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.NumberValidator));
    });

    it("will return the correct validator for a string", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: typedcontract.StringValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.StringValidator));
    });

    it("will return the correct validator for a string with a name", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: typedcontract.StringValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.StringValidator));
    });

    it("will return the correct validator for an array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: typedcontract.ArrayValidator = contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.ArrayValidator));
    });

    it("will return the correct validator for an array with a name", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: typedcontract.ArrayValidator = contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.ArrayValidator));
    });

    it("will return the correct validator for an any type", () => {
        let localVariable: any = /[A-Z]/;

        let result: typedcontract.AnyValidator = contract.In(localVariable);

        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.AnyValidator));
    });

    it("will return the correct validator for an any type with a variable name", () => {
        let localVariable: any = /[A-Z]/;

        let result: typedcontract.AnyValidator = contract.In(localVariable, "myVar");

        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.AnyValidator));
    });

});
