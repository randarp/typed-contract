/// <reference path="../typedcontract.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe("typedcontract with inline global scope via TypeScript", () => {

    it("will return the correct validator for a boolean", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: IBooleanValidator = contract.checks(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });
    it("will return the correct validator for a boolean with a name", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: IBooleanValidator = contract.checks(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });

    it("will return the correct validator for a number", () => {
        // arrange m
        let localVariable: number = 2;

        // act
        let result: INumberValidator = contract.checks(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("NumberValidator");
    });

    it("will return the correct validator for a number with a name", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: INumberValidator = contract.checks(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("NumberValidator");
    });

    it("will return the correct validator for a string", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: IStringValidator = contract.checks(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("will return the correct validator for a string with a name", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: IStringValidator = contract.checks(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("will return the correct validator for an array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: IArrayValidator = contract.checks(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("ArrayValidator");
    });

    it("will return the correct validator for an array with a name", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: IArrayValidator = contract.checks(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("ArrayValidator");
    });

    it("will return the correct validator for an any type", () => {
        let localVariable: any = /[A-Z]/;

        let result: IAnyValidator = contract.checks(localVariable);

        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("AnyValidator");
    });

    it("will return the correct validator for an any type with a variable name", () => {
        let localVariable: any = /[A-Z]/;

        let result: IAnyValidator = contract.checks(localVariable, "myVar");

        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("AnyValidator");
    });

});
