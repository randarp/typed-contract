/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("StringValidator", function() {

    it("will return the correct validator", function() {
        // Arrange
        let localVariable = "A string";

        // Act
        var result = Contract.In(localVariable).IsNotNull();

        // Assert
        expect(result).not.toBeNull();
    });
});
