/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("NumberValidator", () => {

    it("IsGreaterThan returns the right validator", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: NumberValidator = Contract.In(localVariable);
        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(NumberValidator));
    });


    it("isNotNull returns the proper validator", () => {

        // arrange
        let localVar: number = 1;

        // act
        let result: NumberValidator = Contract.In(localVar).isNotNull();

        // assert
        if (expect(result).isNot == null) {
            return this;
        }
    });
});
