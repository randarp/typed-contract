/// <reference path="..\TypedContract\Contract.ts" />
/// <reference path="..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("Contract", () => {

    it("will call code in the source", function() {
        // arrange
        let localVariable: string = "string";

        // act
        let result: any = Contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
    });
});
