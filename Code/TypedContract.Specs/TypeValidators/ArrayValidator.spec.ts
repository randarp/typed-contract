/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("ArrayValidator", () => {

    it("isNotNull returns the right validator with a string array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: IArrayValidator = contract.pre(localVariable).isNotNull();

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("ArrayValidator");
    });

    it("isNotNull returns the right validator with a number array", () => {
        let localVar: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).isNotNull();

        return expect(result).not.toBeNull();
    });

    it("isNotNull returns the right validator as a postcondition", () => {
        let localVar: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.ensures(localVar).isNotNull();

        expect(result);

    });


    it("isNotNull returns the right validator with an object array", () => {
        let localVar: any[] = [{
            a: function () {
                return null;
            }}, {b: "A"}, {c: 1
        }];

        let result: IArrayValidator = contract.pre(localVar).isNotNull();

        expect(result).not.toBe(null);
    });

    it("isNotNull returns an error", () => {
        let localVar:  any[] = [];

        let result: IArrayValidator = contract.pre(localVar).isNotNull();

        expect(result);
    });

    it("isNull returns the right validator", () => {

        let localVar:  any[] = null;

        let result: IArrayValidator = contract.pre(localVar).isNull();

        expect(result);
    });

    it("isNull returns the right validator as a postcondition", () => {
       let localVar: any [] = null;

       let result: IArrayValidator = contract.ensures(localVar).isNull();

       expect(result);
    });
    it("isNull throws an error when given an undefined array", () => {
        let localVar:  any[];

        expect(() => {
            contract.pre(localVar).isNull();
        }).toThrow(new ReferenceError("The variable should be null"));
    });

    it("isDefined returns proper validator", () => {
        let localVar: any[] = [];

        let result: IArrayValidator = contract.pre(localVar).isDefined();

        expect(result);
    });

    it("isDefined returns the proper validator with an object array", () => {
        let localVar: any[] = [{a: function() {return null; }, b: 'A', c: 1}];

        let result: IArrayValidator = contract.pre(localVar).isDefined();

        expect(result);
    });

    it("isDefined returns the proper validator with a string array", () => {
        let localVar: any[] = ["1", "2", "3"];

        let result: IArrayValidator = contract.pre(localVar).isDefined();

        expect(result);
    });

    it("isDefined throws an error when given an undefined", () => {
        let localVar: any[];

        expect(() => {
            contract.pre(localVar).isDefined();
        }).toThrowError(<any>ReferenceError);

    });

    it("isUndefined returns a proper validator with an any array", () => {
        let localVar: any[];

        expect( () => {
            contract.pre(localVar).isUndefined();
        });

    });

    it("isUndefined returns a proper validator with a string array", () => {
        let localVar: string[];

        expect( () => {
            contract.pre(localVar).isUndefined();
        });
    });

    it("isUndefined returns a proper validator with a number array", () => {
        let localVar: number[] = undefined;

        expect( () => {
            contract.pre(localVar).isUndefined();
        });
    });

    it("isEqualTo returns the proper validator with an array and index given", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).isEqualTo(compareTo, 0);

        expect(result);

    });


    it("isEqualTo returns the proper validator with an array and index given with an unequal value", () => {
        let localVar: any[] = [4, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });

    it("isEqualTo returns the proper validator with an array and index given with two different types as values", () => {
        let localVar: any[] = ["4", 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });


    it("isNullOrUndefined returns the proper validator when given an undefined value", () => {
        let localVar: any[];

        expect(() => {
            contract.pre(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("isNullOrUndefined returns the proper validator when given a null value", () => {
        let localVar: any[] = null;

        expect(() => {
            contract.pre(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("isLengthGreaterThan returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: IArrayValidator = contract.pre(localVar).isLengthGreaterThan(compareTo);

        expect(result);
    });

    it("isLengthGreaterThan throws an error when given a contract precondition and comparable for a number array", () => {
        let localVar: number[] = [1, 2, 3];
        let compareTo: number[] = [1, 2, 3, 4];

        expect(() => {
            contract.pre(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthGreaterThan throws an error when given a contract.pre() precondition and comparable for a string array", () => {
        let localVar: string[] = ["A", "B", "C"];
        let compareTo: string[] = ["A", "B", "C", "D"];

        expect(() => {
            contract.pre(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthGreaterThan throws an error when given a contract.pre() precondition and comparable for a empty arrays", () => {
        let localVar: string[] = [];
        let compareTo: string[] = [];

        expect(() => {
            contract.pre(localVar).isLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract"));

    });

    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [2, 3, 4, 3, 2];

        let result: IArrayValidator = contract.pre(localVar).isLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("isLengthNotGreaterThan throws an error when give a precondition that is larger in length than the given comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [3, 2, 4];

        expect(() => {
            contract.pre(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: any[] = [];
        let compareTo: any[] = [];

        expect( () => {
            contract.pre(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: IArrayValidator = contract.pre(localVar).isLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).isLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("isLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 5, 4, 3];

        expect(() => {
            contract.pre(localVar).isLengthGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3, 4];

        let result:  IArrayValidator = contract.pre(localVar).isLengthNotGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("isLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that is greater than", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        expect(() => {
            contract.pre(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that are both equal", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan returns the proper validator for the precondition and comparable", () => {
        let localVar: any[] = [1, 2];
        let compareTo: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).isLengthLessThan(compareTo);

        expect(result);
    });
    it("isLengthLessThan throws an error when the lengths are equal ", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan throws an error when the lengths are equal, Out condition ", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.ensures(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan throws an error when the lengths are equal of two different array types", () => {
        let localVar:  any[] = ["1", "2", "3"];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan throws an error when the lengths are equal of array type object ", () => {
        let localVar:  any[] = [{a: "1", b: "2", c: "3"},{a: "1", b: "2", c: "3"},{a: "1", b: "2", c: "3"}];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.pre(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan returns the proper validator when the length of the precondition is less than the comparable", () => {
        let localVar:  any[] = [1, 2, 3, 4];
        let compareTo:  any[] = [1, 2, 3, 4, 5];

        let result: IArrayValidator = contract.pre(localVar).isLengthLessThan(compareTo);

        expect(result);

    });

    it("isLengthNotLessThan returns the proper validator when given a comparable and a precondition", () => {
        let localVar: any[] = [1, 2, 3, 4, 5, 6];
        let compareTo: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).isLengthNotLessThan(compareTo);

        expect(result);

    });

    it("isLengthNotLessThan returns the proper validator when given a comparable and a precondition with a string array", () => {
        let localVar: string[] = ["1", "2", "3", "4", "5", "6"];
        let compareTo: string[] = ["1", "2", "3"];

        let result: IArrayValidator = contract.pre(localVar).isLengthNotLessThan(compareTo);

        expect(result);

    });

    it("isLengthNotLessThan throws an error when given an array that is less than the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3 , 4];

        expect( () => {
            contract.pre(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotLessThan throws an error when given an array that is equal to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.pre(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3, 4];

        let result: IArrayValidator = contract.pre(localVar).isLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is equal than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3, 4];
        let compareTo: any[] = [1, 2, 3, 4];

        let result: IArrayValidator = contract.pre(localVar).isLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3, 4, 5, 6];
        let compareTo: any[] = [1, 2, 3, 4, 5];

        expect( () => {
            contract.pre(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessOrEqual to return the proper validator when given arrays of no length", () => {
        let localVar: any[] = [];
        let compareTo: any[] = [];

        expect( () => {
            contract.pre(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotLessOrEqual to return the proper validator when given a array is not smaller than the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: IArrayValidator = contract.pre(localVar).isLengthNotLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthNotLessOrEqual to throw an error when given an array that is equal to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.pre(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthNotLessOrEqual to throw an error when given an array that is smaller in length to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3, 4];

        expect( () => {
            contract.pre(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);

    });


    it("contains returns the proper validator when given an array that contains the same characters as the contract precondition", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: IArrayValidator = contract.pre(localVar).contains(compareTo);

        expect(result);
    });

    it("contains throws an error when given an array that is only a white space to be compared to the contract precondition", () => {
        let localVar: any[] = [ ];
        let compareTo: any[] = [ ];

        expect( () => {
            contract.pre(localVar).contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("contains returns the proper validator when given an array that contains the same characters as the contract precondition with mixed types", () => {

        let localVar: any[] = [1.1, 2, "3"];
        let compareTo: any[] = [4.2, 5, "3"];

        let result: IArrayValidator = contract.pre(localVar).contains(compareTo);

        expect(result);
    });


    it("contains throws an error when given an array that does not contain the same numbers as the contract precondition", () => {
        let localVar: any[] = [70, 95];
        let compareTo: any[] = [197, 195];

        expect( () => {
            contract.pre(localVar).contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("contains returns the proper validator when given an array with string white spaces", () => {
        let localVar: any[] = [" ", " "];
        let compareTo: any[] = [" ", " "];

        let result: IArrayValidator = contract.pre(localVar).contains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given an array that does not contain the same characters as the contract precondition", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [4, 5, 6];

        let result: IArrayValidator = contract.pre(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given an object array that does not contain the same characters as the contract precondition", () => {
        let localVar: any[] = [{c: "3", d: "4"}];
        let compareTo: any[] = [{a: "1", b: "2"}];

        let result: IArrayValidator = contract.pre(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given an array that does not contain the same elements as the contract precondition with mixed types", () => {
        let localVar: any[] = [4, 3, 6];
        let compareTo: any[] = [1.0, 2.54, "3"];

        let result: IArrayValidator = contract.pre(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains throws an error when given a string array that does contain the same characters as the contract precondition", () => {
        let localVar: any[] = [" ", "A", "B", "C"];
        let compareTo: any[] = [" ", "A", "B", "C"];

        expect( () => {
            contract.pre(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("notContains throws an error when given a letter that does contain the same characters as the contract precondition", () => {
        let localVar: any[] = [3, 4, 5];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.pre(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("notContains throws an error when given a string that contains a whitespace as compared to the contract precondition", () => {
        let localVar: any[] = [ ];
        let compareTo: any[] = [ ];

        expect( () => {
            contract.pre(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });

});
