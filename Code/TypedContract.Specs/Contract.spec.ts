/// <reference path="..\TypedContract\Contract.ts" />
/// <reference path="..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("Contract", function() {

    it("will always be true", function() {
        // Assert
        expect(true).toBe(true);
    });

    it("will call code in the source", function() {
        // Arrange
        let localVariable = 23;

        // Act
       var result = Contract.In(localVariable);

        // Assert
        expect(result).toBe(true);
    });
});
