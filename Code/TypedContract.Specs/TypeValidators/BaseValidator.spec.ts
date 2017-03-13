/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("BaseValidator", () => {

    it("value returns the original value", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: string = contract.checks(localVariable).isNotNull().value();

        // assert
        expect(result).toEqual("A string");
    });

    it("name returns the original variable name", () => {
        let localVariable: string = "A string";

        let result: string = contract.checks(localVariable, "My var").isNotNull().name();

        expect(result).toEqual("My var");

    });

    it("name returns the original variable name with a variable", () => {
        let localVariable: string = "A string";
        let varName: string = "My var";
        let result: string = contract.checks(localVariable, varName).isNotNull().name();

        expect(result).toEqual("My var");
    });
});
