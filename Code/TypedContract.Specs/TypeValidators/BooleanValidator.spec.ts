/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("BooleanValidator", () => {

    it("will return the correct validator", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: BooleanValidator = Contract.In(localVariable).IsTrue();

        // assert
        expect(result).not.toBeNull();
    });
});
