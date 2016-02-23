/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("NumberValidator", () => {

    it("IsGreaterThan returns the right validator", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: NumberValidator = Contract.In(localVariable).IsGreaterThan(1);
        // assert
        expect(result);
    });

    it("IsGreaterThan returns the right validator if passed a double/float", () => {
        // arrange
        let localVariable: number = 2.05;
        let comparableVar: number = 1;
        // act
        let result: NumberValidator = Contract.In(localVariable).IsGreaterThan(comparableVar);
        // assert
        expect(localVariable).toBeGreaterThan(comparableVar);
    });

    it("isNotNull returns the proper validator", () => {

        // arrange
        let localVar: number = 1;

        // act
        let result: NumberValidator = Contract.In(localVar).IsNotNull();

        // assert
        if (expect(result).isNot == null) {
            return this;
        }
    });

    it("isNull returns the proper validator", () => {
        // arrange
        let localVar: number = null;

        // act
        let result: NumberValidator = Contract.In(localVar).IsNull();

        // assert
        expect(result).toThrow();
    });

    it("IsDefined does return the proper validator", () => {
        // arrange
        let localVar: number = 0;

        // act
        let result: NumberValidator = Contract.In(localVar).IsDefined();

        // assert
        expect(result).toBeDefined();

    });

    it("IsNullOrUndefined returns proper validator if defined", () => {
        let localVar: number = 0;

        let result: NumberValidator = Contract.In(localVar).IsNullOrUndefined();

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given an equal value", ():void => {
        let localVar: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsEqualTo(1);

        expect(result);

    });

    it("IsEqualTo returns the proper validator when given an unequal value", () => {
        let localVar: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsEqualTo(2);

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given a double value", () => {
        let localVar: number = 10.00;

        let result: NumberValidator = Contract.In(localVar).IsEqualTo(10.00);

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given a double value that is not equal", () => {
        let localVar: number = 24.45;

        let result: NumberValidator = Contract.In(localVar).IsEqualTo(24.46);

        expect(result);
    });

    it("IsNotEqualTo returns the proper validator when given to unequal numbers", () => {
        let localVar: number = 1;

        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);
    });

    it("IsNotEqualTo returns the proper validator when given to equal numbers", () => {

        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result).not.toBe(this);

    });

    it("IsNotEqualTo returns the proper validator when given a null and an undefined", () => {
        let localVar: number = null;
        let compareTo: number = undefined;

        let result: NumberValidator = Contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);
    });

    it("IsGreaterThan returns the proper validator when given a value that is greater than the precondition", ()=> {

        let localVar: number = 1;
        let compareTo: number = 0;

        let result: NumberValidator = Contract.In(localVar).IsGreaterThan(compareTo);

        expect(result).toBe(this);
    });

    it("IsGreaterThan returns the proper validator when given a value that is equal to the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsGreaterThan(compareTo);

        expect(result);
    });

    it("IsGreaterThan returns the proper validator when given a value that is not greater than the precondition", () => {
        let localVar: number = 1;
        let compareTo: number = 23;

        let result: NumberValidator = Contract.In(localVar).IsGreaterThan(compareTo);

        expect(result);

    });

    it("IsNotGreaterThan returns the proper validator when given a value that is less than the compareTo variable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 2;
        let compareTo: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterThan(compareTo);

        expect(result);

    });

    it("IsNotGreaterThan returns the proper validator when given a value that is greater than the compareTo variable ", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterThan(compareTo);

        expect(result);

    });

    it("IsGreaterOrEqualThan returns the proper validator when the precondition is greater the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 3;

        let result: NumberValidator = Contract.In(localVar).IsGreaterOrEqualThan(compareTo);

        expect(result);

    });

    it("IsGreaterOrEqualThan returns the proper validator when the precondition is equal to the precondition", () => {
        let localVar: number = 3;
        let compareTo: number = 3;

        let result: NumberValidator = Contract.In(localVar).IsGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("IsGreaterOrEqualThan returns the proper validator when the precondition is equal to the precondition", () => {
        let localVar: number = 4;
        let compareTo: number = 5;

        let result: NumberValidator = Contract.In(localVar).IsGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 4;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is not equal to the comparable", () => {
        let localVar: number = 4;
        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);

        expect(result);

    });


    it("IsNotGreaterOrEqualThan returns the proper validator when the precondition is greater to the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 4;

        let result: NumberValidator = Contract.In(localVar).IsNotGreaterOrEqualThan(compareTo);

        expect(result);

    });

    it("IsLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 6;
        let compareTo: number = 10;

        let result: NumberValidator = Contract.In(localVar).IsLessThan(compareTo);

        expect(result);
    });


    it("IsLessThan returns the proper validator when the precondition is equal than the comparable", () => {
        let localVar: number = 10;
        let compareTo: number = 10;

        let result: NumberValidator = Contract.In(localVar).IsLessThan(compareTo);

        expect(result);
    });

    it("IsLessThan returns the proper validator when the precondition is equal than the comparable", () => {
        let localVar: number = 10;
        let compareTo: number = 10;

        let result: NumberValidator = Contract.In(localVar).IsLessThan(compareTo);

        expect(result);
    });
    it("IsLessThan returns the proper validator when the precondition is greater than the comparable", () => {
        let localVar: number = 11;
        let compareTo: number = 10;

        let result: NumberValidator = Contract.In(localVar).IsLessThan(compareTo);

        expect(result);
    });

    it("IsNotLessThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotLessThan(compareTo);

        expect(result);
    });

    it("IsNotLessThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 3;

        let result: NumberValidator = Contract.In(localVar).IsNotLessThan(compareTo);
        expect(result);
    });

    it("IsNotLessThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 2;
        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotLessThan(compareTo);

        expect(result);
    });

    it("IsNotLessOrEqualThan returns the proper validator when the precondition is less than the comparable", () => {
        let localVar: number = 3;
        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotLessThan(compareTo);

        expect(result);
    });
    it("IsNotLessOrEqualThan returns the proper validator when the precondition is not less than the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 2;

        let result: NumberValidator = Contract.In(localVar).IsNotLessThan(compareTo);
    });
    it("IsNotLessOrEqualThan returns the proper validator when the precondition is equal to the comparable", () => {
        let localVar: number = 1;
        let compareTo: number = 1;

        let result: NumberValidator = Contract.In(localVar).IsNotLessOrEqualThan(compareTo);

        expect(result);
    });
});
