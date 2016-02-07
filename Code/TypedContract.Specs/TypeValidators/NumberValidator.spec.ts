/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("NumberValidator", () => {

    it("IsGreaterThan returns the right validator", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: NumberValidator = Contract.In(localVariable).IsGreaterThan(0);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(NumberValidator));
    });
});
