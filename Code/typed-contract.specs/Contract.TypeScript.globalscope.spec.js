/// <reference path="../typedcontract.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe("typedcontract with inline global scope via TypeScript", function () {
    it("will return the correct validator for a boolean", function () {
        // arrange
        var localVariable = true;
        // act
        var result = contract.checks(localVariable);
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("BooleanValidator");
    });
    it("will return the correct validator for a boolean with a name", function () {
        // arrange
        var localVariable = true;
        // act
        var result = contract.checks(localVariable, "localVariable");
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("BooleanValidator");
    });
    it("will return the correct validator for a number", function () {
        // arrange m
        var localVariable = 2;
        // act
        var result = contract.checks(localVariable);
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("NumberValidator");
    });
    it("will return the correct validator for a number with a name", function () {
        // arrange
        var localVariable = 2;
        // act
        var result = contract.checks(localVariable, "localVariable");
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("NumberValidator");
    });
    it("will return the correct validator for a string", function () {
        // arrange
        var localVariable = "A string";
        // act
        var result = contract.checks(localVariable);
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("will return the correct validator for a string with a name", function () {
        // arrange
        var localVariable = "A string";
        // act
        var result = contract.checks(localVariable, "localVariable");
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("will return the correct validator for an array", function () {
        // arrange
        var localVariable = ["A", "B", "C"];
        // act
        var result = contract.checks(localVariable);
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("ArrayValidator");
    });
    it("will return the correct validator for an array with a name", function () {
        // arrange
        var localVariable = ["A", "B", "C"];
        // act
        var result = contract.checks(localVariable, "localVariable");
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("ArrayValidator");
    });
    it("will return the correct validator for an any type", function () {
        var localVariable = /[A-Z]/;
        var result = contract.checks(localVariable);
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("AnyValidator");
    });
    it("will return the correct validator for an any type with a variable name", function () {
        var localVariable = /[A-Z]/;
        var result = contract.checks(localVariable, "myVar");
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("AnyValidator");
    });
});
//# sourceMappingURL=Contract.TypeScript.globalscope.spec.js.map