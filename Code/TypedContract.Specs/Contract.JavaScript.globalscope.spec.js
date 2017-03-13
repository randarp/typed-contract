/**
 * Loads typed-contract from JS directly
 */
describe("typedcontract with global scope via JavaScript", function () {
    it("will return function through global scope object", function () {
        // arrange

        // act
        var result = contract.pre;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });

    it("will return object through global scope object and type passed in", function () {
        // arrange
        var localVariable = true;

        // act
        var result = contract.pre(localVariable);

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("object")
    });

    it("will return function through global scope prototype object", function () {
        // arrange

        // act
        var result = typedcontract.Contract.prototype.pre;

        // assert
        expect(result).not.toBeUndefined();
        expect(typeof result).toBe("function")
    });

    it("will return the function when creating an object in the global library", function () {
        // arrange

        // act
        var resultNew = new typedcontract.Contract();
        var result = resultNew.pre;

        // assert
        expect(result).not.toBeUndefined();
         expect(typeof result).toBe("function")
    });

    it("isNotNull returns the right validator", function () {
        // arrange
        var localVariable = "A string";

        // act
        var result = contract.pre(localVariable).isNotNull();

        // assert
        expect(result).not.toBeNull();
    });

    it("isNotNull returns the right validator", function () {
        // arrange
        var localVar = 99.9;
        var startRange = 0.00;
        var endRange = 100.0;

        // act
        var result = contract.pre(localVar).isBetween(startRange, endRange);

        // assert
        expect(result);
    });
});