/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("NumberValidator", function () {
    it("isGreaterThan returns the right validator", function () {
        // arrange
        var localVariable = 2;
        // act
        var result = contract.checks(localVariable).isGreaterThan(1);
        // assert
        expect(result);
    });
    it("isGreaterThan returns the right validator if passed a double/float", function () {
        // arrange
        var localVariable = 2.05;
        var comparableVar = 1;
        // act
        var result = contract.checks(localVariable).isGreaterThan(comparableVar);
        // assert
        expect(result);
    });
    it("isNotNull returns the proper validator", function () {
        // arrange
        var localVar = 1;
        // act
        var result = contract.checks(localVar).isNotNull();
        // assert
        expect(result);
    });
    it("isNull returns the proper validator", function () {
        // arrange
        var localVar = null;
        // act
        var result = contract.checks(localVar).isNull();
        // assert
        expect(result);
    });
    it("isDefined does return the proper validator", function () {
        // arrange
        var localVar = 0;
        // act
        var result = contract.checks(localVar).isDefined();
        // assert
        expect(result).toBeDefined();
    });
    it("isNullOrUndefined returns proper validator if defined", function () {
        var localVar = 0;
        var result = contract.checks(localVar).isNullOrUndefined();
        expect(result);
    });
    it("isEqualTo returns the proper validator when given an equal value", function () {
        var localVar = 1;
        var result = contract.checks(localVar).isEqualTo(1);
        expect(result);
    });
    it("isEqualTo returns the proper validator when given an unequal value", function () {
        var localVar = 1;
        expect(function () {
            contract.checks(localVar).isEqualTo(2);
        }).toThrow(new RangeError("The variable should be equal to the number variable 2"));
    });
    it("isEqualTo returns the proper validator when given a double value", function () {
        var localVar = 10.00;
        var result = contract.checks(localVar).isEqualTo(10.00);
        expect(result);
    });
    it("isEqualTo returns the proper validator when given a double value that is not equal", function () {
        var localVar = 24.45;
        expect(function () {
            contract.checks(localVar).isEqualTo(24.46);
        }).toThrow(new RangeError("The variable should be equal to the number variable 24.46"));
    });
    it("isNotEqualTo returns the proper validator when given to unequal numbers", function () {
        var localVar = 1;
        var compareTo = 2;
        var result = contract.checks(localVar).isNotEqualTo(compareTo);
        expect(result);
    });
    it("isNotEqualTo returns the proper validator when given to equal numbers", function () {
        var localVar = 1;
        var compareTo = 1;
        expect(function () {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the number variable 1"));
    });
    it("isNotEqualTo returns the proper validator when given a null and an undefined", function () {
        var localVar = null;
        var compareTo = undefined;
        var result = contract.checks(localVar).isNotEqualTo(compareTo);
        expect(result);
    });
    it("isGreaterThan returns the proper validator when given a value that is greater than the precondition", function () {
        var localVar = 1;
        var compareTo = 0;
        var result = contract.checks(localVar).isGreaterThan(compareTo);
        expect(result);
    });
    it("isGreaterThan returns the proper validator when given a value that is equal to the precondition", function () {
        var localVar = 1;
        var compareTo = 1;
        var result = contract.checks(localVar).isGreaterThan(compareTo);
        expect(result);
    });
    it("isGreaterThan returns the proper validator when given a value that is not greater than the precondition", function () {
        var localVar = 1;
        var compareTo = 23;
        expect(function () {
            contract.checks(localVar).isGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 23 but is 1"));
    });
    it("isNotGreaterThan returns the proper validator when given a value that is less than the compareTo variable", function () {
        var localVar = 1;
        var compareTo = 3;
        var result = contract.checks(localVar).isNotGreaterThan(compareTo);
        expect(result);
    });
    it("isNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", function () {
        var localVar = 2;
        var compareTo = 1;
        expect(function () {
            contract.checks(localVar).isNotGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater than 1 but is 2"));
    });
    it("isNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", function () {
        var localVar = 1;
        var compareTo = 1;
        var result = contract.checks(localVar).isNotGreaterThan(compareTo);
        expect(result);
    });
    it("isGreaterOrEqualThan returns the proper validator when the precondition is greater the precondition", function () {
        var localVar = 4;
        var compareTo = 3;
        var result = contract.checks(localVar).isGreaterOrEqualThan(compareTo);
        expect(result);
    });
    it("isGreaterOrEqualThan returns the proper validator when the precondition is equal to the precondition", function () {
        var localVar = 3;
        var compareTo = 3;
        var result = contract.checks(localVar).isGreaterOrEqualThan(compareTo);
        expect(result);
    });
    it("isGreaterOrEqualThan returns the proper validator when the precondition is less than the precondition", function () {
        var localVar = 4;
        var compareTo = 5;
        expect(function () {
            contract.checks(localVar).isGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 5 but is 4"));
    });
    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is equal to the comparable", function () {
        var localVar = 4;
        var compareTo = 4;
        var result = contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);
        expect(result);
    });
    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is not equal to the comparable", function () {
        var localVar = 4;
        var compareTo = 2;
        expect(function () {
            contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 2 but is 4"));
    });
    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is greater to the comparable", function () {
        var localVar = 6;
        var compareTo = 4;
        expect(function () {
            contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 4 but is 6"));
    });
    it("isLessThan returns the proper validator when the precondition is less than the comparable", function () {
        var localVar = 6;
        var compareTo = 10;
        var result = contract.checks(localVar).isLessThan(compareTo);
        expect(result);
    });
    it("isLessThan returns the proper validator when the precondition is equal than the comparable", function () {
        var localVar = 10;
        var compareTo = 10;
        expect(function () {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10"));
    });
    it("isLessThan returns the proper validator when the precondition is less than the comparable with a double value", function () {
        var localVar = 10.1;
        var compareTo = 10;
        expect(function () {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10.1"));
    });
    it("isLessThan returns the proper validator when the precondition is greater than the comparable", function () {
        var localVar = 11;
        var compareTo = 10;
        expect(function () {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 11"));
    });
    it("isNotLessThan returns the proper validator when the precondition is not less than the comparable", function () {
        var localVar = 3;
        var compareTo = 2;
        var result = contract.checks(localVar).isNotLessThan(compareTo);
        expect(result);
    });
    it("isNotLessThan returns the proper validator when the precondition is less than the comparable", function () {
        var localVar = 1;
        var compareTo = 3;
        expect(function () {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 3 but is 1"));
    });
    it("isNotLessThan returns the proper validator when the precondition is equal to the comparable", function () {
        var localVar = 2;
        var compareTo = 2;
        expect(function () {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 2"));
    });
    it("isNotLessOrEqualThan returns the proper validator when the precondition is less than the comparable", function () {
        var localVar = 3;
        var compareTo = 2;
        var result = contract.checks(localVar).isNotLessThan(compareTo);
        expect(result);
    });
    it("isNotLessOrEqualThan returns the proper validator when the precondition is not less than the comparable", function () {
        var localVar = 1;
        var compareTo = 2;
        expect(function () {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 1"));
    });
    it("isNotLessOrEqualThan returns the proper validator when the precondition is equal to the comparable", function () {
        var localVar = 1;
        var compareTo = 1;
        expect(function () {
            contract.checks(localVar).isNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });
    it("isBetween returns the proper validator when the precondition is in the range specified", function () {
        var localVar = 95;
        var startRange = 60;
        var endRange = 100;
        var result = contract.checks(localVar).isBetween(startRange, endRange);
        expect(result);
    });
    it("isBetween returns the proper validator when the precondition is on the lower range", function () {
        var localVar = 10;
        var startRange = 10;
        var endRange = 20;
        var result = contract.checks(localVar).isBetween(startRange, endRange);
        expect(result);
    });
    it("isBetween returns the proper validator when the precondition is on the upper range", function () {
        var localVar = 20;
        var startRange = 10;
        var endRange = 20;
        var result = contract.checks(localVar).isBetween(startRange, endRange);
        expect(result);
    });
    it("isBetween returns the proper validator when the precondition is in the range specified with double values", function () {
        var localVar = 99.9;
        var startRange = 0.00;
        var endRange = 100.0;
        var result = contract.checks(localVar).isBetween(startRange, endRange);
        expect(result);
    });
    it("isBetween throws an error when the precondition is not in the range specified", function () {
        var localVar = 1000;
        var startRange = 60;
        var endRange = 100;
        expect(function () {
            contract.checks(localVar).isBetween(startRange, endRange);
        }).toThrowError(RangeError);
    });
    it("isBetween throws an error when the precondition is not in the range specified using double values", function () {
        var localVar = 1000.005;
        var startRange = 60.258;
        var endRange = 100.216;
        expect(function () {
            contract.checks(localVar).isBetween(startRange, endRange);
        }).toThrowError(RangeError);
    });
    it("isNotBetween returns the proper validator when the precondition is not in the range specified", function () {
        var localVar = 101;
        var startRange = 60;
        var endRange = 100;
        var result = contract.checks(localVar).isNotBetween(startRange, endRange);
        expect(result);
    });
    it("isNotBetween returns the proper validator when the precondition is not in the range specified using double values", function () {
        var localVar = 99.1;
        var startRange = 100;
        var endRange = 200.00;
        var result = contract.checks(localVar).isNotBetween(startRange, endRange);
        expect(result);
    });
    it("isNotBetween returns the proper validator when the precondition is not in the range specified", function () {
        var localVar = 101;
        var startRange = 60;
        var endRange = 100;
        var result = contract.checks(localVar).isNotBetween(startRange, endRange);
        expect(result);
    });
    it("isNotBetween returns the proper validator when the precondition is not in the range specified -- PASS", function () {
        var localVar = 50;
        var startRange = 60;
        var endRange = 100;
        var result = contract.checks(localVar).isNotBetween(startRange, endRange);
        expect(result);
    });
    it("isNotBetween returns an error when the precondition is not in the range specified", function () {
        var localVar = 75;
        var startRange = 60;
        var endRange = 100;
        expect(function () {
            contract.checks(localVar).isNotBetween(startRange, endRange);
        }).toThrowError(RangeError);
    });
    it("isNotBetween returns an error when the precondition is on the lower boundary", function () {
        var localVar = 10;
        var startRange = 10;
        var endRange = 20;
        expect(function () {
            contract.checks(localVar).isNotBetween(startRange, endRange);
        }).toThrowError(RangeError);
    });
    it("isNotBetween returns an error when the precondition is on the upper boundary", function () {
        var localVar = 20;
        var startRange = 10;
        var endRange = 20;
        expect(function () {
            contract.checks(localVar).isNotBetween(startRange, endRange);
        }).toThrowError(RangeError);
    });
});
//# sourceMappingURL=NumberValidator.spec.js.map