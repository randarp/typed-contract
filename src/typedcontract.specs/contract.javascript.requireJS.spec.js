/**
 * Loads typed-contract from JS through RequireJS
 */

describe("typedcontract with inline RequireJS via JavaScript", function () {
    it("will return function through object returned through inline syntax", function () {
        // arrange/act
        var typedcontract = require("typedcontract");
        var result = typedcontract.contract.In;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });
});

define(['typedcontract'], function(typedcontract) {

    describe("typedcontract with module syntax RequireJS via JavaScript", function() {

        it("isNotNull returns the right validator with a string array", function() {
            // arrange
            var localVariable = ["A", "B", "C"];

            // act
            var result = typedcontract.contract.In(localVariable).isNotNull();

            // assert
            expect(result).not.toBeNull();
        });

    });

});
