//var contract = require('../typed-contract.js');

/**
 * Loads typed contract from JS directly
 */
describe("ContractJS", function () {
    /*it("will return the function when accessing through global scope object", function () {
        // arrange

        // act
        var result = contract.In;

        // assert
        expect(result).not.toBeNull();
        //expect(result).toEqual(jasmine.any(BooleanValidator));
    });*/

    it("will return the function when creating an object in the global library", function () {
        // arrange

        // act
        var resultNew = new typedcontract.Contract();
        var result = resultNew.In;

        // assert
        expect(result).not.toBeNull();
        //expect(result).toEqual(jasmine.any(BooleanValidator));
    });
});