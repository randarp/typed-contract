/**
 * Loads typed-contract from JS through RequireJS
 */

describe("typed-contract with inline RequireJS via JavaScript", function () {
    it("will return function through object returned through inline syntax", function () {
        // arrange/act
        var typedcontract = require("typed-contract");
        var result = typedcontract.contract.In;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });
});

define(['typed-contract'], function(typedcontract) {

    describe("typed-contract with module syntax RequireJS via JavaScript", function() {

        it("IsNotNull returns the right validator with a string array", function() {
            // arrange
            var localVariable = ["A", "B", "C"];

            // act
            var result = typedcontract.contract.In(localVariable).IsNotNull();

            // assert
            expect(result).not.toBeNull();
        });

    });

});
