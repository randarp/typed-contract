/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("ArrayValidator", () => {

    it("IsNotNull returns the right validator with a string array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ArrayValidator));
    });

    it("IsNotNull returns the right validator with a number array", () => {
        let localVar: any[] = [1, 2, 3];

        let result: ArrayValidator = Contract.In(localVar).IsNotNull();

        return expect(result).not.toBeNull();
    });

    it("IsNotNull returns the right validator with an object array", () => {
        let localVar: any[] = [{a:function(){
            return null;
        }},{b: "A"},{c: 1}];

        let result: ArrayValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });

    it("IsNotNull returns an error", () => {
        let localVar: any[] = [];

        let result: ArrayValidator = Contract.In(localVar).IsNotNull();

        expect(result);
    });

    it("IsNull returns the right validator", () => {

        let localVar: any[] = null;

        let result: ArrayValidator = Contract.In(localVar).IsNull();

        expect(result);
    });

    it("IsNull throws an error when given an undefined array", () => {
        let localVar: any[];

        expect( () => {
            Contract.In(localVar).IsNull();
        }).toThrow(new ReferenceError("The variable should be null"));
    });

    it("IsDefined returns proper validator", () => {
        let localVar: any[] = [];

        let result: ArrayValidator = Contract.In(localVar).IsDefined();

        expect(result);
    });

    it("IsDefined throws an error when given an undefined", () => {
        let localVar: any[];

        expect( () => {
            Contract.In(localVar).IsDefined();
        }).toThrow(new ReferenceError("The variable should be defined"));

    });

    xit("IsUndefined returns a proper validator with an any array", () => {
        let localVar: any[];

        let result: ArrayValidator = Contract.In(localVar).IsUndefined();

        expect(result);
    });

    xit("IsUndefined returns a proper validator with a string array", () => {
        let localVar: string [];

        let result: ArrayValidator = Contract.In(localVar).IsUndefined();

        expect(result);
    });

    xit("IsUndefined returns a proper validator with a number array", () => {
        let localVar: number [];

        let result: ArrayValidator = Contract.In(localVar).IsUndefined();

        expect(result);
    });

    it("IsEqualTo returns the proper validator with an array and index given", () => {
       let localVar: any [] = [1, 2, 3];
       let compareTo: any [] = [1, 2, 3];

       let result: ArrayValidator = Contract.In(localVar).IsEqualTo(compareTo, 0);

       expect(result);

    });


    it("IsEqualTo returns the proper validator with an array and index given with an unequal value", () => {
        let localVar: any [] = [4, 2, 3];
        let compareTo: any [] = [1, 2, 3];

        expect( () => {
            Contract.In(localVar).IsEqualTo(compareTo, 0);
        }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });

    it("IsEqualTo returns the proper validator with an array and index given with two different types as values", () => {
        let localVar: any [] = ["4", 2, 3];
        let compareTo: any [] = [1, 2, 3];

        expect( () => {
            Contract.In(localVar).IsEqualTo(compareTo, 0);
            }).toThrow(new RangeError("The variable should be equal to array variable 1,2,3 at the index 0"));

    });


    it("IsNullOrUndefined returns the proper validator when given an undefined value", () => {
        let localVar: any [];

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsNullOrUndefined returns the proper validator when given a null value", () => {
        let localVar: any [] = null;

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsLengthGreaterThan returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: ArrayValidator = Contract.In(localVar).IsLengthGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthGreaterThan throws an error when given a Contract.In() precondition and comparable for a number array", () => {
        let localVar: number[] = [1, 2, 3];
        let compareTo: number[] = [1, 2, 3, 4];

        expect( () => {
            Contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should have a length greater than 4 but is 3"));

    });

    it("IsLengthGreaterThan throws an error when given a Contract.In() precondition and comparable for a string array", () => {
        let localVar: string[] = ["A", "B", "C"];
        let compareTo: string[] = ["A", "B", "C", "D"];

        expect( () => {
            Contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("The variable should have a length greater than 4 but is 3"));

    });

    it("IsLengthGreaterThan throws an error when given a Contract.In() precondition and comparable for a empty arrays", () => {
        let localVar: string[] = [];
        let compareTo: string[] = [];

        expect( () => {
            Contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrow(new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract"));

    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [2, 3, 4, 3, 2];

        let result: ArrayValidator = Contract.In(localVar).IsLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterThan returns the proper validator when given a comparable", () => {
        let localVar: any[] = [2, 3, 4, 5];
        let compareTo: any[] = [3, 2, 4];

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterThan(compareTo);
        }).toThrow(new RangeError(`The variable should not have a length greater than 3 but is 4`));
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: any[] = [];
        let compareTo: any[] = [];

        let result: ArrayValidator = Contract.In(localVar).IsLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        let result: ArrayValidator = Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 5, 4, 3];

        expect( () => {
            Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns this when given the proper precondition and comparable", () => {
           let localVar: any[] = [1, 2, 3];
           let compareTo: any[] = [1, 2, 3, 4];

           let result: ArrayValidator = Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);

           expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that is greater than", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2];

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not have a length greater or equal to 2 but is 3"));
    });

    it("IsLengthNotGreaterOrEqualTo throws an error when given a precondition and comparable that are both equal", () => {
        let localVar: any[] = [1, 2, 3];
        let compareTo: any[] = [1, 2, 3];

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not have a length greater or equal to 3 but is 3"));
    });

    it("IsLengthLessThan returns the proper validator for the precondition and comparable", () => {
        let localVar: any[] = [1, 2, 3, 4];
        let compareTo: any[] = [1, 2, 3];

        let result: ArrayValidator = Contract.In(localVar).IsLengthLessThan(compareTo);

        expect(result);
    });

});
