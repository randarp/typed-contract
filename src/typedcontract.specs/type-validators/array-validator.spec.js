/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("ArrayValidator", function () {
    it("isNotNull returns the right validator with a string array", function () {
        // arrange
        var localVariable = ["A", "B", "C"];
        // act
        var result = contract.checks(localVariable).isNotNull();
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("ArrayValidator");
    });
    it("isNotNull returns the right validator with a number array", function () {
        var localVar = [1, 2, 3];
        var result = contract.checks(localVar).isNotNull();
        return expect(result).not.toBeNull();
    });
    it("isNotNull returns the right validator as a postcondition", function () {
        var localVar = [1, 2, 3];
        var result = contract.ensures(localVar).isNotNull();
        expect(result);
    });
    it("isNotNull returns the right validator with an object array", function () {
        var localVar = [{
                a: function () {
                    return null;
                }
            }, { b: "A" }, { c: 1
            }];
        var result = contract.checks(localVar).isNotNull();
        expect(result).not.toBe(null);
    });
    it("isNotNull returns an error", function () {
        var localVar = [];
        var result = contract.checks(localVar).isNotNull();
        expect(result);
    });
    it("isNull returns the right validator", function () {
        var localVar = null;
        var result = contract.checks(localVar).isNull();
        expect(result);
    });
    it("isNull returns the right validator as a postcondition", function () {
        var localVar = null;
        var result = contract.ensures(localVar).isNull();
        expect(result);
    });
    it("isNull throws an error when given an undefined array", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isNull();
        }).toThrow(new ReferenceError("The variable should be null"));
    });
    it("isDefined returns proper validator", function () {
        var localVar = [];
        var result = contract.checks(localVar).isDefined();
        expect(result);
    });
    it("isDefined returns the proper validator with an object array", function () {
        var localVar = [{ a: function () { return null; }, b: 'A', c: 1 }];
        var result = contract.checks(localVar).isDefined();
        expect(result);
    });
    it("isDefined returns the proper validator with a string array", function () {
        var localVar = ["1", "2", "3"];
        var result = contract.checks(localVar).isDefined();
        expect(result);
    });
    it("isDefined throws an error when given an undefined", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isDefined();
        }).toThrowError(ReferenceError);
    });
    it("isUndefined returns a proper validator with an any array", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isUndefined();
        });
    });
    it("isUndefined returns a proper validator with a string array", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isUndefined();
        });
    });
    it("isUndefined returns a proper validator with a number array", function () {
        var localVar = undefined;
        expect(function () {
            contract.checks(localVar).isUndefined();
        });
    });
    it("isEqualTo returns the proper validator with an array and index given", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        var result = contract.checks(localVar).isEqualTo(compareTo, 0);
        expect(result);
    });
    it("isEqualTo returns the proper validator with an array and index given with an unequal value", function () {
        var localVar = [4, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));
    });
    it("isEqualTo returns the proper validator with an array and index given with two different types as values", function () {
        var localVar = ["4", 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));
    });
    it("isNullOrUndefined returns the proper validator when given an undefined value", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isNullOrUndefined returns the proper validator when given a null value", function () {
        var localVar = null;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isLengthGreaterThan returns this when given the proper precondition and comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2];
        var result = contract.checks(localVar).isLengthGreaterThan(compareTo);
        expect(result);
    });
    it("isLengthGreaterThan throws an error when given a contract precondition and comparable for a number array", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3, 4];
        expect(function () {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthGreaterThan throws an error when given a contract.checks() precondition and comparable for a string array", function () {
        var localVar = ["A", "B", "C"];
        var compareTo = ["A", "B", "C", "D"];
        expect(function () {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthGreaterThan throws an error when given a contract.checks() precondition and comparable for a empty arrays", function () {
        var localVar = [];
        var compareTo = [];
        expect(function () {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract"));
    });
    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable", function () {
        var localVar = [2, 3, 4, 5];
        var compareTo = [2, 3, 4, 3, 2];
        var result = contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        expect(result);
    });
    it("isLengthNotGreaterThan throws an error when give a precondition that is larger in length than the given comparable", function () {
        var localVar = [2, 3, 4, 5];
        var compareTo = [3, 2, 4];
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", function () {
        var localVar = [];
        var compareTo = [];
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2];
        var result = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        var result = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 5, 4, 3];
        expect(function () {
            contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterOrEqualTo returns this when given the proper precondition and comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3, 4];
        var result = contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that is greater than", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2];
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that are both equal", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan returns the proper validator for the precondition and comparable", function () {
        var localVar = [1, 2];
        var compareTo = [1, 2, 3];
        var result = contract.checks(localVar).isLengthLessThan(compareTo);
        expect(result);
    });
    it("isLengthLessThan throws an error when the lengths are equal ", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan throws an error when the lengths are equal, Out condition ", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.ensures(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan throws an error when the lengths are equal of two different array types", function () {
        var localVar = ["1", "2", "3"];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan throws an error when the lengths are equal of array type object ", function () {
        var localVar = [{ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan returns the proper validator when the length of the precondition is less than the comparable", function () {
        var localVar = [1, 2, 3, 4];
        var compareTo = [1, 2, 3, 4, 5];
        var result = contract.checks(localVar).isLengthLessThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessThan returns the proper validator when given a comparable and a precondition", function () {
        var localVar = [1, 2, 3, 4, 5, 6];
        var compareTo = [1, 2, 3];
        var result = contract.checks(localVar).isLengthNotLessThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessThan returns the proper validator when given a comparable and a precondition with a string array", function () {
        var localVar = ["1", "2", "3", "4", "5", "6"];
        var compareTo = ["1", "2", "3"];
        var result = contract.checks(localVar).isLengthNotLessThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessThan throws an error when given an array that is less than the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3, 4];
        expect(function () {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotLessThan throws an error when given an array that is equal to the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3, 4];
        var result = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is equal than in length than the comparable", function () {
        var localVar = [1, 2, 3, 4];
        var compareTo = [1, 2, 3, 4];
        var result = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", function () {
        var localVar = [1, 2, 3, 4, 5, 6];
        var compareTo = [1, 2, 3, 4, 5];
        expect(function () {
            contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessOrEqual to return the proper validator when given arrays of no length", function () {
        var localVar = [];
        var compareTo = [];
        expect(function () {
            contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotLessOrEqual to return the proper validator when given a array is not smaller than the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2];
        var result = contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessOrEqual to throw an error when given an array that is equal to the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotLessOrEqual to throw an error when given an array that is smaller in length to the comparable", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3, 4];
        expect(function () {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("contains returns the proper validator when given an array that contains the same characters as the contract precondition", function () {
        var localVar = [1, 2, 3];
        var compareTo = [1, 2, 3];
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("contains throws an error when given an array that is only a white space to be compared to the contract precondition", function () {
        var localVar = [];
        var compareTo = [];
        expect(function () {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(RangeError);
    });
    it("contains returns the proper validator when given an array that contains the same characters as the contract precondition with mixed types", function () {
        var localVar = [1.1, 2, "3"];
        var compareTo = [4.2, 5, "3"];
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("contains throws an error when given an array that does not contain the same numbers as the contract precondition", function () {
        var localVar = [70, 95];
        var compareTo = [197, 195];
        expect(function () {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(RangeError);
    });
    it("contains returns the proper validator when given an array with string white spaces", function () {
        var localVar = [" ", " "];
        var compareTo = [" ", " "];
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given an array that does not contain the same characters as the contract precondition", function () {
        var localVar = [1, 2, 3];
        var compareTo = [4, 5, 6];
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given an object array that does not contain the same characters as the contract precondition", function () {
        var localVar = [{ c: "3", d: "4" }];
        var compareTo = [{ a: "1", b: "2" }];
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given an array that does not contain the same elements as the contract precondition with mixed types", function () {
        var localVar = [4, 3, 6];
        var compareTo = [1.0, 2.54, "3"];
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains throws an error when given a string array that does contain the same characters as the contract precondition", function () {
        var localVar = [" ", "A", "B", "C"];
        var compareTo = [" ", "A", "B", "C"];
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
    it("notContains throws an error when given a letter that does contain the same characters as the contract precondition", function () {
        var localVar = [3, 4, 5];
        var compareTo = [1, 2, 3];
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
    it("notContains throws an error when given a string that contains a whitespace as compared to the contract precondition", function () {
        var localVar = [];
        var compareTo = [];
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
});
//# sourceMappingURL=array-validator.spec.js.map