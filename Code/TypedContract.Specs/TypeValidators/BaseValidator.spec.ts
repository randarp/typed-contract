/// <reference path="..\..\typed-contract.d.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("BaseValidator", () => {

    it("Value returns the original value", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: string = contract.In(localVariable).IsNotNull().Value();

        // assert
        expect(result).toEqual("A string");
    });

    it("Name returns the original variable name", () => {
        let localVariable: string = "A string";

        let result: string = contract.In(localVariable, "My var").IsNotNull().Name();

        expect(result).toEqual("My var");

    });

    it("Name returns the original variable name with a variable", () => {
        let localVariable: string = "A string";
        let varName: string = "My var";
        let result: string = contract.In(localVariable, varName).IsNotNull().Name();

        expect(result).toEqual("My var");
    });
});
