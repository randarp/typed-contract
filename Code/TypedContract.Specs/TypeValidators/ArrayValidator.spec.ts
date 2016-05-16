/// <reference path="../../typed-contract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("ArrayValidator", () => {

    it("IsNotNull returns the right validator with a string array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any( ArrayValidator));
    });

    it("IsNotNull returns the right validator with a number array", () => {
        let localVar: any[] = [1, 2, 3];

        let result:  ArrayValidator = contract.In(localVar).IsNotNull();

        return expect(result).not.toBeNull();
    });

    it("IsNotNull returns the right validator as a postcondition", () => {
        let localVar: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.Out(localVar).IsNotNull();

        expect(result);

    });


    it("IsNotNull returns the right validator with an object array", () => {
        let localVar: any[] = [{
            a: function () {
                return null;
            }}, {b: "A"}, {c: 1
        }];

        let result: ArrayValidator = contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });

    it("IsNotNull returns an error", () => {
        let localVar:  any[] = [];

        let result:  ArrayValidator = contract.In(localVar).IsNotNull();

        expect(result);
    });

    it("IsNull returns the right validator", () => {

        let localVar:  any[] = null;

        let result:  ArrayValidator = contract.In(localVar).IsNull();

        expect(result);
    });

    it("IsNull returns the right validator as a postcondition", () => {
       let localVar: any [] = null;

       let result: ArrayValidator = contract.Out(localVar).IsNull();

       expect(result);
    });
    it("IsNull throws an error when given an undefined array", () => {
        let localVar:  any[];

        expect(() => {
            contract.In(localVar).IsNull();
        }).toThrow(new ReferenceError("The variable should be null"));
    });

    it("IsDefined returns proper validator", () => {
        let localVar: any[] = [];

        let result: ArrayValidator = contract.In(localVar).IsDefined();

        expect(result);
    });

    it("IsDefined returns the proper validator with an object array", () => {
        let localVar: any[] = [{a: function() {return null; }, b: 'A', c: 1}];

        let result: ArrayValidator = contract.In(localVar).IsDefined();

        expect(result);
    });

    it("IsDefined returns the proper validator with a string array", () => {
        let localVar: any[] = ["1", "2", "3"];

        let result: ArrayValidator = contract.In(localVar).IsDefined();

        expect(result);
    });

    it("IsDefined throws an error when given an undefined", () => {
        let localVar: any[];

        expect(() => {
            contract.In(localVar).IsDefined();
        }).toThrowError(<any>ReferenceError);

    });

    it("IsUndefined returns a proper validator with an any array", () => {
        let localVar: any[];

        expect( () => {
            contract.In(localVar).IsUndefined();
        });

    });

    it("IsUndefined returns a proper validator with a string array", () => {
        let localVar: string[];

        expect( () => {
            contract.In(localVar).IsUndefined();
        });
    });

    it("IsUndefined returns a proper validator with a number array", () => {
        let localVar: number[] = undefined;

        expect( () => {
            contract.In(localVar).IsUndefined();
        });
    });

    it("IsEqualTo returns the proper validator with an array and index given", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.In(localVar).IsEqualTo(compareTo, 0);

        expect(result);

    });


    it("IsEqualTo returns the proper validator with an array and index given with an unequal value", () => {
        let localVar: any[] = [4, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });

    it("IsEqualTo returns the proper validator with an array and index given with two different types as values", () => {
        let localVar: any[] = ["4", 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });


    it("IsNullOrUndefined returns the proper validator when given an undefined value", () => {
        let localVar: any[];

        expect(() => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsNullOrUndefined returns the proper validator when given a null value", () => {
        let localVar: any[] = null;

        expect(() => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsLengthGreaterThan returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: ArrayValidator = contract.In(localVar).IsLengthGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthGreaterThan throws an error when given a contract precondition and comparable for a number array", () => {
        let localVar: number[] = [1, 2, 3];
        let compareTo: number[] = [1, 2, 3, 4];

        expect(() => {
            contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthGreaterThan throws an error when given a contract.In() precondition and comparable for a string array", () => {
        let localVar: string[] = ["A", "B", "C"];
        let compareTo: string[] = ["A", "B", "C", "D"];

        expect(() => {
            contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthGreaterThan throws an error when given a contract.In() precondition and comparable for a empty arrays", () => {
        let localVar: string[] = [];
        let compareTo: string[] = [];

        expect(() => {
            contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract"));

    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [2, 3, 4, 3, 2];

        let result: ArrayValidator = contract.In(localVar).IsLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterThan throws an error when give a precondition that is larger in length than the given comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [3, 2, 4];

        expect(() => {
            contract.In(localVar).IsLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: any[] = [];
        let compareTo: any[] = [];

        expect( () => {
            contract.In(localVar).IsLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: ArrayValidator = contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 5, 4, 3];

        expect(() => {
            contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3, 4];

        let result:  ArrayValidator = contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that is greater than", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        expect(() => {
            contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that are both equal", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan returns the proper validator for the precondition and comparable", () => {
        let localVar: any[] = [1, 2];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.In(localVar).IsLengthLessThan(compareTo);

        expect(result);
    });
    it("IsLengthLessThan throws an error when the lengths are equal ", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan throws an error when the lengths are equal, Out condition ", () => {
        let localVar:  any[] = [1, 2, 3];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.Out(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan throws an error when the lengths are equal of two different array types", () => {
        let localVar:  any[] = ["1", "2", "3"];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan throws an error when the lengths are equal of array type object ", () => {
        let localVar:  any[] = [{a: "1", b: "2", c: "3"},{a: "1", b: "2", c: "3"},{a: "1", b: "2", c: "3"}];
        let compareTo:  any[] = [1, 2, 3];

        expect(() => {
            contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan returns the proper validator when the length of the precondition is less than the comparable", () => {
        let localVar:  any[] = [1, 2, 3, 4];
        let compareTo:  any[] = [1, 2, 3, 4, 5];

        let result: ArrayValidator = contract.In(localVar).IsLengthLessThan(compareTo);

        expect(result);

    });

    it("IsLengthNotLessThan returns the proper validator when given a comparable and a precondition", () => {
        let localVar: any[] = [1, 2, 3, 4, 5, 6];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.In(localVar).IsLengthNotLessThan(compareTo);

        expect(result);

    });

    it("IsLengthNotLessThan returns the proper validator when given a comparable and a precondition with a string array", () => {
        let localVar: string[] = ["1", "2", "3", "4", "5", "6"];
        let compareTo: string[] = ["1", "2", "3"];

        let result: ArrayValidator = contract.In(localVar).IsLengthNotLessThan(compareTo);

        expect(result);

    });

    it("IsLengthNotLessThan throws an error when given an array that is less than the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3 , 4];

        expect( () => {
            contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotLessThan throws an error when given an array that is equal to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3, 4];

        let result: ArrayValidator = contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is equal than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3, 4];
        let compareTo: any[] = [1, 2, 3, 4];

        let result: ArrayValidator = contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", () => {

        let localVar: any[] = [1, 2, 3, 4, 5, 6];
        let compareTo: any[] = [1, 2, 3, 4, 5];

        expect( () => {
            contract.In(localVar).IsLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessOrEqual to return the proper validator when given arrays of no length", () => {
        let localVar: any[] = [];
        let compareTo: any[] = [];

        expect( () => {
            contract.In(localVar).IsLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotLessOrEqual to return the proper validator when given a array is not smaller than the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: ArrayValidator = contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessOrEqual to throw an error when given an array that is equal to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthNotLessOrEqual to throw an error when given an array that is smaller in length to the comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3, 4];

        expect( () => {
            contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);

    });


    it("Contains returns the proper validator when given an array that contains the same characters as the contract precondition", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("Contains throws an error when given an array that is only a white space to be compared to the contract precondition", () => {
        let localVar: any[] = [ ];
        let compareTo: any[] = [ ];

        expect( () => {
            contract.In(localVar).Contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Contains returns the proper validator when given an array that contains the same characters as the contract precondition with mixed types", () => {

        let localVar: any[] = [1.1, 2, "3"];
        let compareTo: any[] = [4.2, 5, "3"];

        let result: ArrayValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });


    it("Contains throws an error when given an array that does not contain the same numbers as the contract precondition", () => {
        let localVar: any[] = [70, 95];
        let compareTo: any[] = [197, 195];

        expect( () => {
            contract.In(localVar).Contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Contains returns the proper validator when given an array with string white spaces", () => {
        let localVar: any[] = [" ", " "];
        let compareTo: any[] = [" ", " "];

        let result: ArrayValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given an array that does not contain the same characters as the contract precondition", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [4, 5, 6];

        let result: ArrayValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given an object array that does not contain the same characters as the contract precondition", () => {
        let localVar: any[] = [{c: "3", d: "4"}];
        let compareTo: any[] = [{a: "1", b: "2"}];

        let result: ArrayValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given an array that does not contain the same elements as the contract precondition with mixed types", () => {
        let localVar: any[] = [4, 3, 6];
        let compareTo: any[] = [1.0, 2.54, "3"];

        let result: ArrayValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains throws an error when given a string array that does contain the same characters as the contract precondition", () => {
        let localVar: any[] = [" ", "A", "B", "C"];
        let compareTo: any[] = [" ", "A", "B", "C"];

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a letter that does contain the same characters as the contract precondition", () => {
        let localVar: any[] = [3, 4, 5];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a string that contains a whitespace as compared to the contract precondition", () => {
        let localVar: any[] = [ ];
        let compareTo: any[] = [ ];

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });

});
