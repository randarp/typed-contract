/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("BooleanValidator", function() {

    it("will return the correct validator", function() {
        // Arrange
        let localVariable = true;

        // Act
        var result = Contract.In(localVariable).IsTrue();

        // Assert
        expect(result).not.toBeNull();
    });
});
