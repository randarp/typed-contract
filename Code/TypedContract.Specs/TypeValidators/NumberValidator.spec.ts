/// <reference path="../../typed-contract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />
/*

import contract from "http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts"

describe("NumberValidator", () => {

    it("IsGreaterThan returns the right validator", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: NumberValidator = contract.In(localVariable).IsGreaterThan(1);

        // assert
        expect(result);
    });

    it("IsGreaterThan returns the right validator if passed a double/float", () => {
        // arrange
        let localVariable: number = 2.05;
        let comparableVar: number = 1;

        // act
        let result: NumberValidator = contract.In(localVariable).IsGreaterThan(comparableVar);

        // assert
        expect(result);
    });

    it("isNotNull returns the proper validator", () => {

        // arrange
        let localVar: number = 1;

        // act
        let result: NumberValidator = contract.In(localVar).IsNotNull();

        // assert
        expect(result);
    });

    it("isNull returns the proper validator", () => {
        // arrange
        let localVar: number = null;

        // act
        let result: NumberValidator = contract.In(localVar).IsNull();

        // assert
        expect(result);
    });

    it("IsDefined does return the proper validator", () => {
        // arrange
        let localVar: number = 0;

        // act
        let result: NumberValidator = contract.In(localVar).IsDefined();

        // assert
        expect(result).toBeDefined();

    });

    it("IsNullOrUndefined returns proper validator if defined", () => {
        let localVar: number = 0;

        let result: NumberValidator = contract.In(localVar).IsNullOrUndefined();

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given an equal value", () => {
        let localVar: number = 1;

        let result: NumberValidator = contract.In(localVar).IsEqualTo(1);

        expect(result);

    });

    it("IsEqualTo returns the proper validator when given an unequal value", () => {
        let localVar: number = 1;

        expect( () => {
            contract.In(localVar).IsEqualTo(2);
        }).toThrow(new RangeError("The variable should be equal to the number variable 2"));
    });

    it("IsEqualTo returns the proper validator when given a double value", () => {
        let localVar: number = 10.00;

        let result: NumberValidator = contract.In(localVar).IsEqualTo(10.00);

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given a double value that is not equal", () => {
        let localVar: number = 24.45;

        expect( () => {
            contract.In(localVar).IsEqualTo(24.46);
        }).toThrow(new RangeError("The variable should be equal to the number variable 24.46"));
    });

    it("IsNotEqualTo returns the proper validator when given to unequal numbers", () => {
        let localVar: number = 1;

        let compareTo: number = 2;

        let result: NumberValidator = contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);
    });

    it("IsNotEqualTo returns the proper validator when given to equal numbers", () => {

        let localVar: number = 1;
        let compareTo: number = 1;

        expect( () => {
            contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the number variable 1"));

    });

    it("IsNotEqualTo returns the proper validator when given a null and an undefined", () => {
        let localVar: number = null;
        let compareTo: number = undefined;

        let result: NumberValidator = contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);
    });

    it("IsGreaterThan returns the proper validator when given a value that is greater than the precondition", () => {

        let localVar: number = 1;
        let compareTo: number = 0;

        let result: NumberValidator = contract.In(localVar).IsGreaterThan(compareTo);

        expect(result);
    });

    it("IsGreaterThan returns the proper validator when given a value that is equal to the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = contract.In(localVar).IsGreaterThan(compareTo);

        expect(result);
    });

    it("IsGreaterThan returns the proper validator when given a value that is not greater than the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 23;

        expect( () => {
            contract.In(localVar).IsGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 23 but is 1"));

    });

    it("IsNotGreaterThan returns the proper validator when given a value that is less than the compareTo variable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        let result: NumberValidator = contract.In(localVar).IsNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 2;
        let compareTo: number = 1;

        expect( () => {
            contract.In(localVar).IsNotGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater than 1 but is 2"));

    });

    it("IsNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = contract.In(localVar).IsNotGreaterThan(compareTo);

        expect(result);

    });

    it("IsGreaterOrEqualThan returns the proper validator when the precondition is greater the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 3;

        let result: NumberValidator = contract.In(localVar).IsGreaterOrEqualThan(compareTo);

        expect(result);

    });

    it("IsGreaterOrEqualThan returns the proper validator when the precondition is equal to the precondition", () => {
        let localVar: number = 3;
        let compareTo: number = 3;

        let result: NumberValidator = contract.In(localVar).IsGreaterOrEqualThan(compareTo);

        expect(result);
    });


    it("IsGreaterOrEqualThan returns the proper validator when the precondition is less than the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 5;

        expect( () => {
            contract.In(localVar).IsGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should be greater than 5 but is 4"));

    });

    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 4;

        let result: NumberValidator = contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is not equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 2;

        expect( () => {
            contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 2 but is 4"));

    });


    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is greater to the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 4;

        expect( () => {
            contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);
        }).toThrow(new RangeError("The variable should not be greater or equal to 4 but is 6"));

    });

    it("IsLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 10;

        let result: NumberValidator = contract.In(localVar).IsLessThan(compareTo);

        expect(result);
    });


    it("IsLessThan returns the proper validator when the precondition is equal than the comparable", () => {
        let localVar: number = 10;
        let compareTo: number = 10;

        expect( () => {
            contract.In(localVar).IsLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10"));
    });

    it("IsLessThan returns the proper validator when the precondition is less than the comparable with a double value", () => {
        let localVar: number = 10.1;
        let compareTo: number = 10;

        expect( () => {
            contract.In(localVar).IsLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 10.1"));
    });
    it("IsLessThan returns the proper validator when the precondition is greater than the comparable", () => {
        let localVar: number = 11;
        let compareTo: number = 10;

        expect( () => {
            contract.In(localVar).IsLessThan(compareTo);
        }).toThrow(new RangeError("The variable should be less than 10 but is 11"));
    });

    it("IsNotLessThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: NumberValidator = contract.In(localVar).IsNotLessThan(compareTo);

        expect(result);
    });

    it("IsNotLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        expect( () => {
            contract.In(localVar).IsNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 3 but is 1"));
    });

    it("IsNotLessThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 2;
        let compareTo: number = 2;

        expect( () => {
            contract.In(localVar).IsNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 2"));
    });

    it("IsNotLessOrEqualThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: NumberValidator = contract.In(localVar).IsNotLessThan(compareTo);

        expect(result);
    });
    it("IsNotLessOrEqualThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 2;

        expect( () => {
            contract.In(localVar).IsNotLessThan(compareTo);
        }).toThrow(new RangeError("The variable should not be less than 2 but is 1"));

    });
    it("IsNotLessOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        expect( () => {
            contract.In(localVar).IsNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });

    it("IsBetween returns the proper validator when the precondition is in the range specified", () => {
        let localVar: number = 95;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: NumberValidator = contract.In(localVar).IsBetween(startRange, endRange);

        expect(result);

    });

    it("IsBetween returns the proper validator when the precondition is in the range specified with double values", () => {
        let localVar: number = 99.9;

        let startRange: number = 0.00;
        let endRange: number = 100.0;

        let result: NumberValidator = contract.In(localVar).IsBetween(startRange, endRange);

        expect(result);

    });

    it("IsBetween throws an error when the precondition is not in the range specified", () => {
        let localVar: number = 1000;

        let startRange: number = 60;
        let endRange: number = 100;

        expect( () => {
            contract.In(localVar).IsBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);

    });

    it("IsBetween throws an error when the precondition is not in the range specified using double values", () => {
        let localVar: number = 1000.005;

        let startRange: number = 60.258;
        let endRange: number = 100.216;

        expect( () => {
            contract.In(localVar).IsBetween(startRange, endRange);
        }).toThrowError(<any>RangeError);

    });

    it("IsNotBetween returns the proper validator when the precondition is not in the range specified", () => {
        let localVar: number = 101;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: NumberValidator = contract.In(localVar).IsNotBetween(startRange, endRange);

        expect(result);

    });

    it("IsNotBetween returns the proper validator when the precondition is not in the range specified using double values", () => {
        let localVar: number = 99.1;

        let startRange: number = 100;
        let endRange: number = 200.00;

        let result: NumberValidator = contract.In(localVar).IsNotBetween(startRange, endRange);

        expect(result);

    });

    it("IsNotBetween returns the proper validator when the precondition is not in the range specified", () => {
        let localVar: number = 101;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: NumberValidator = contract.In(localVar).IsNotBetween(startRange, endRange);

        expect(result);

    });

    it("IsNotBetween returns the proper validator when the precondition is not in the range specified -- PASS", () => {
        let localVar: number = 50;

        let startRange: number = 60;
        let endRange: number = 100;

        let result: NumberValidator = contract.In(localVar).IsNotBetween(startRange, endRange);

        expect(result);

    });

    it("IsNotBetween returns the proper validator when the precondition is not in the range specified", () => {
        let localVar: number = 75;

        let startRange: number = 60;
        let endRange: number = 100;

        expect( () => {
            contract.In(localVar).IsNotBetween(startRange, endRange);

        }).toThrowError(<any>RangeError);

    });

});
*/
