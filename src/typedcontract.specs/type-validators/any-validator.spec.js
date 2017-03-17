/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("AnyValidator", function () {
    it("isNotNull returns the proper validator when given an undefined", function () {
        var localVar;
        var result = contract.In(localVar).isNotNull();
        expect(result);
    });
    it("isNotNull returns the right validator", function () {
        // arrange
        var localVariable = "A string";
        // act
        var result = contract.In(localVariable).isNotNull();
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("isNotNull is passed the an empty string", function () {
        var localVar = "";
        var result = contract.In(localVar).isNotNull();
        expect(result).not.toBe(null);
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("isNotNull is passed in a defined number variable", function () {
        var localVar = 100;
        var result = contract.In(localVar).isNotNull();
        expect(result).not.toBe(null);
    });
    it("isNull expects a result of an error thrown", function () {
        // arrange
        var localVariable = { a: "TypeScript", b: function () { return null; }, c: [1, 2, 3] };
        // act/assert
        expect(function () {
            contract.In(localVariable).isNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });
    it("isDefined should return the proper result ", function () {
        var localVar = "Andre";
        var result = contract.In(localVar).isDefined();
        expect(result).toBeDefined();
    });
    it("isNull should return the proper result", function () {
        var localVar = null;
        var result = contract.In(localVar).isNull();
        expect(result);
    });
    it("isNotDefined return the proper result", function () {
        var myVar;
        var result = contract.In(myVar, "").isUndefined();
        expect(result);
    });
    it("isNullOrUndefined returns proper validator with a undefined variable", function () {
        var localVar;
        expect(function () {
            contract.In(localVar).isNullOrUndefined();
        }).toThrowError(ReferenceError);
    });
    it("isNullOrUndefined returns the proper validator with a defined variable", function () {
        var localVar = "Hello World";
        expect(function () {
            contract.In(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isNotNull on an MouseEvent type for an AnyValidator to return true", function () {
        var divElement = document.createElement("div");
        var localVar = divElement.addEventListener("click", function (e) { e.preventDefault(); }, false);
        var result = contract.In(localVar).isNotNull();
        expect(result).not.toBe(null);
    });
    it("isNotNull on an anonymous function for an AnyValidator", function () {
        var localVar = function () { var x = 1; return x; };
        var result = contract.In(localVar).isNotNull();
        expect(result).not.toBe(null);
    });
});
//# sourceMappingURL=any-validator.spec.js.map