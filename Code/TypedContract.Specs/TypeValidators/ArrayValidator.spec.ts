/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("ArrayValidator", () => {

    it("IsEmpty returns the right validator", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = Contract.In(localVariable).IsEmpty();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ArrayValidator));
    });
});
