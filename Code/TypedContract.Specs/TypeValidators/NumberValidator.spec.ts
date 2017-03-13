/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("NumberValidator", () => {

    it("isGreaterThan returns the right validator", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: INumberValidator = contract.checks(localVariable).isGreaterThan(1);

        // assert
        expect(result);
    });

    it("isGreaterThan returns the right validator if passed a double/float", () => {
        // arrange
        let localVariable: number = 2.05;
        let comparableVar: number = 1;

        // act
        let result: INumberValidator = contract.checks(localVariable).isGreaterThan(comparableVar);

        // assert
        expect(result);
    });

    it("isNotNull returns the proper validator", () => {

        // arrange
        let localVar: number = 1;

        // act
        let result: INumberValidator = contract.checks(localVar).isNotNull();

        // assert
        expect(result);
    });

    it("isNull returns the proper validator", () => {
        // arrange
        let localVar: number = null;

        // act
        let result: INumberValidator = contract.checks(localVar).isNull();

        // assert
        expect(result);
    });

    it("isDefined does return the proper validator", () => {
        // arrange
        let localVar: number = 0;

        // act
        let result: INumberValidator = contract.checks(localVar).isDefined();

        // assert
        expect(result).toBeDefined();

    });

    it("isNullOrUndefined returns proper validator if defined", () => {
        let localVar: number = 0;

        let result: INumberValidator = contract.checks(localVar).isNullOrUndefined();

        expect(result);
    });

    it("isEqualTo returns the proper validator when given an equal value", () => {
        let localVar: number = 1;

        let result: INumberValidator = contract.checks(localVar).isEqualTo(1);

        expect(result);

    });

    it("isEqualTo returns the proper validator when given an unequal value", () => {
        let localVar: number = 1;

        expect( () => {
            contract.checks(localVar).isEqualTo(2);
        }).toThrow(new RangeError("The variable should be equal to the number variable 2"));
    });

    it("isEqualTo returns the proper validator when given a double value", () => {
        let localVar: number = 10.00;

        let result: INumberValidator = contract.checks(localVar).isEqualTo(10.00);

        expect(result);
    });

    it("isEqualTo returns the proper validator when given a double value that is not equal", () => {
        let localVar: number = 24.45;

        expect( () => {
            contract.checks(localVar).isEqualTo(24.46);
        }).toThrow(new RangeError("The variable should be equal to the number variable 24.46"));
    });

    it("isNotEqualTo returns the proper validator when given to unequal numbers", () => {
        let localVar: number = 1;

        let compareTo: number = 2;

        let result: INumberValidator = contract.checks(localVar).isNotEqualTo(compareTo);

        expect(result);
    });

    it("isNotEqualTo returns the proper validator when given to equal numbers", () => {

        let localVar: number = 1;
        let compareTo: number = 1;

        expect( () => {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the number variable 1"));

    });

    it("isNotEqualTo returns the proper validator when given a null and an undefined", () => {
        let localVar: number = null;
        let compareTo: number = undefined;

        let result: INumberValidator = contract.checks(localVar).isNotEqualTo(compareTo);

        expect(result);
    });

    it("isGreaterThan returns the proper validator when given a value that is greater than the precondition", () => {

        let localVar: number = 1;
        let compareTo: number = 0;

        let result: INumberValidator = contract.checks(localVar).isGreaterThan(compareTo);

        expect(result);
    });

    it("isGreaterThan returns the proper validator when given a value that is equal to the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: INumberValidator = contract.checks(localVar).isGreaterThan(compareTo);

        expect(result);
    });

    it("isGreaterThan returns the proper validator when given a value that is not greater than the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 23;

        expect( () => {
            contract.checks(localVar).isGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 23 but is 1"));

    });

    it("isNotGreaterThan returns the proper validator when given a value that is less than the compareTo variable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        let result: INumberValidator = contract.checks(localVar).isNotGreaterThan(compareTo);

        expect(result);
    });

    it("isNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 2;
        let compareTo: number = 1;

        expect( () => {
            contract.checks(localVar).isNotGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater than 1 but is 2"));

    });

    it("isNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: INumberValidator = contract.checks(localVar).isNotGreaterThan(compareTo);

        expect(result);

    });

    it("isGreaterOrEqualThan returns the proper validator when the precondition is greater the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 3;

        let result: INumberValidator = contract.checks(localVar).isGreaterOrEqualThan(compareTo);

        expect(result);

    });

    it("isGreaterOrEqualThan returns the proper validator when the precondition is equal to the precondition", () => {
        let localVar: number = 3;
        let compareTo: number = 3;

        let result: INumberValidator = contract.checks(localVar).isGreaterOrEqualThan(compareTo);

        expect(result);
    });


    it("isGreaterOrEqualThan returns the proper validator when the precondition is less than the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 5;

        expect( () => {
            contract.checks(localVar).isGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 5 but is 4"));

    });

    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 4;

        let result: INumberValidator = contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is not equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 2;

        expect( () => {
            contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 2 but is 4"));

    });


    it("isNotGreaterOrEqualThan returns the proper validator when the precondition is greater to the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 4;

        expect( () => {
            contract.checks(localVar).isNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 4 but is 6"));

    });

    it("isLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 10;

        let result: INumberValidator = contract.checks(localVar).isLessThan(compareTo);

        expect(result);
    });


    it("isLessThan returns the proper validator when the precondition is equal than the comparable", () => {
        let localVar: number = 10;
        let compareTo: number = 10;

        expect( () => {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10"));
    });

    it("isLessThan returns the proper validator when the precondition is less than the comparable with a double value", () => {
        let localVar: number = 10.1;
        let compareTo: number = 10;

        expect( () => {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10.1"));
    });
    it("isLessThan returns the proper validator when the precondition is greater than the comparable", () => {
        let localVar: number = 11;
        let compareTo: number = 10;

        expect( () => {
            contract.checks(localVar).isLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 11"));
    });

    it("isNotLessThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: INumberValidator = contract.checks(localVar).isNotLessThan(compareTo);

        expect(result);
    });

    it("isNotLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        expect( () => {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 3 but is 1"));
    });

    it("isNotLessThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 2;
        let compareTo: number = 2;

        expect( () => {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 2"));
    });

    it("isNotLessOrEqualThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: INumberValidator = contract.checks(localVar).isNotLessThan(compareTo);

        expect(result);
    });
    it("isNotLessOrEqualThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 2;

        expect( () => {
            contract.checks(localVar).isNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 1"));

    });
    it("isNotLessOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        expect( () => {
            contract.checks(localVar).isNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });

    it("isBetween returns the proper validator when the precondition is in the range specified", () => {
        let localVar: number = 95;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: INumberValidator = contract.checks(localVar).isBetween(startRange, endRange);

        expect(result);

    });

    it("isBetween returns the proper validator when the precondition is on the lower range", () => {
        let localVar: number = 10;

        let startRange: number = 10;
        let endRange: number = 20;

        let result: INumberValidator = contract.checks(localVar).isBetween(startRange, endRange);

        expect(result);

    });

    it("isBetween returns the proper validator when the precondition is on the upper range", () => {
        let localVar: number = 20;

        let startRange: number = 10;
        let endRange: number = 20;

        let result: INumberValidator = contract.checks(localVar).isBetween(startRange, endRange);

        expect(result);

    });

    it("isBetween returns the proper validator when the precondition is in the range specified with double values", () => {
        let localVar: number = 99.9;

        let startRange: number = 0.00;
        let endRange: number = 100.0;

        let result: INumberValidator = contract.checks(localVar).isBetween(startRange, endRange);

        expect(result);

    });

    it("isBetween throws an error when the precondition is not in the range specified", () => {
        let localVar: number = 1000;

        let startRange: number = 60;
        let endRange: number = 100;

        expect( () => {
            contract.checks(localVar).isBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);

    });

    it("isBetween throws an error when the precondition is not in the range specified using double values", () => {
        let localVar: number = 1000.005;

        let startRange: number = 60.258;
        let endRange: number = 100.216;

        expect( () => {
            contract.checks(localVar).isBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);

    });

    it("isNotBetween returns the proper validator when the precondition is not in the range specified", () => {
        let localVar: number = 101;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: INumberValidator = contract.checks(localVar).isNotBetween(startRange, endRange);

        expect(result);

    });

    it("isNotBetween returns the proper validator when the precondition is not in the range specified using double values", () => {
        let localVar: number = 99.1;

        let startRange: number = 100;
        let endRange: number = 200.00;

        let result: INumberValidator = contract.checks(localVar).isNotBetween(startRange, endRange);

        expect(result);

    });

    it("isNotBetween returns the proper validator when the precondition is not in the range specified", () => {
        let localVar: number = 101;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: INumberValidator = contract.checks(localVar).isNotBetween(startRange, endRange);

        expect(result);

    });

    it("isNotBetween returns the proper validator when the precondition is not in the range specified -- PASS", () => {
        let localVar: number = 50;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: INumberValidator = contract.checks(localVar).isNotBetween(startRange, endRange);

        expect(result);

    });

    it("isNotBetween returns an error when the precondition is not in the range specified", () => {
        let localVar: number = 75;

        let startRange: number = 60;
        let endRange: number = 100;

        expect( () => {
            contract.checks(localVar).isNotBetween(startRange, endRange);

        }).toThrowError(<any>RangeError);

    });

    it("isNotBetween returns an error when the precondition is on the lower boundary", () => {
        let localVar: number = 10;

        let startRange: number = 10;
        let endRange: number = 20;

        expect( () => {
            contract.checks(localVar).isNotBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);
    });

    it("isNotBetween returns an error when the precondition is on the upper boundary", () => {
        let localVar: number = 20;

        let startRange: number = 10;
        let endRange: number = 20;

        expect( () => {
            contract.checks(localVar).isNotBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);
    });

});
