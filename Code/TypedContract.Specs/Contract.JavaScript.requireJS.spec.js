/**
 * Loads typed-contract from JS through RequireJS
 */
//var typedcontract = require("typedcontract");

describe("typed-contract with inline RequireJS via JavaScript", function () {
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

    describe("typed-contract with module syntax RequireJS via JavaScript", function() {

        it("will return function through object returned through module syntax", function() {
            // arrange/act
            var result = typedcontract.contract.In;

            // assert
            expect(result).not.toBeUndefined();
            expect(typeof result).toBe("function");
        });

    });

});
