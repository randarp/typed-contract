/**
 * Loads typed-contract from JS directly
 */
describe("typed-contract with global scope via JavaScript", function () {
    it("will return function through global scope object", function () {
        // arrange

        // act
        var result = contract.In;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });

    it("will return object through global scope object and type passed in", function () {
        // arrange
        var localVariable = true;

        // act
        var result = contract.In(localVariable);

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("object")
    });

    it("will return function through global scope prototype object", function () {
        // arrange

        // act
        var result = typedcontract.Contract.prototype.In;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });

    it("will return the function when creating an object in the global library", function () {
        // arrange

        // act
        var resultNew = new typedcontract.Contract();
        var result = resultNew.In;

        // assert
        expect(result).not.toBeUndefined();
         expect(typeof result).toBe("function")
    });
});