/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("BooleanValidator", function () {
    it("isTrue returns the right validator", function () {
        // arrange
        var localVariable = true;
        // act
        var result = contract.checks(localVariable).isTrue();
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("BooleanValidator");
    });
    it("isTrue does not raise an error when true", function () {
        // arrange
        var localVariable = true;
        // act/assert
        contract.checks(localVariable).isTrue();
    });
    it("isTrue raises a range error when false", function () {
        // arrange
        var localVariable = false;
        // act
        var failure;
        failure = function () {
            contract.checks(localVariable).isTrue();
        };
        // assert
        expect(failure).toThrowError(RangeError);
    });
    it("isFalse does not raise an error when false", function () {
        // arrange
        var localVariable = false;
        // act/assert
        contract.checks(localVariable).isFalse();
    });
    it("isFalse raises a range error when true", function () {
        // arrange
        var localVariable = true;
        // act
        var failure;
        failure = function () {
            contract.checks(localVariable).isFalse();
        };
        // assert
        expect(failure).toThrowError(RangeError);
    });
    it("isFalse raises an error when null", function () {
        var localVar = null;
        expect(function () {
            contract.checks(localVar).isFalse();
        }).toThrowError(TypeError);
    });
    it("isDefined will return the proper result ", function () {
        var localVar = true;
        var result = contract.checks(localVar).isDefined();
        expect(result).toBeDefined();
    });
    it("isNullOrUndefined returns the proper validator when given an undefined", function () {
        var localVar = undefined;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isNullOrUndefined returns the proper validator when given a null", function () {
        var localVar = null;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isNullOrUndefined returns the proper validator when given a defined", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
});
//# sourceMappingURL=BooleanValidator.spec.js.map