/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("BaseValidator", () => {

    it("Value returns the original value", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: string = contract.pre(localVariable).IsNotNull().Value();

        // assert
        expect(result).toEqual("A string");
    });

    it("Name returns the original variable name", () => {
        let localVariable: string = "A string";

        let result: string = contract.pre(localVariable, "My var").IsNotNull().Name();

        expect(result).toEqual("My var");

    });

    it("Name returns the original variable name with a variable", () => {
        let localVariable: string = "A string";
        let varName: string = "My var";
        let result: string = contract.pre(localVariable, varName).IsNotNull().Name();

        expect(result).toEqual("My var");
    });
});
