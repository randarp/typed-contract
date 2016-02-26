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

    it("IsUndefined returns a proper validator with an any array", () => {
        let localVar: any[];

        let result: ArrayValidator = Contract.In(localVar).IsUndefined();

        expect(result);
    });

    it("IsUndefined returns a proper validator with a string array", () => {
        let localVar: string [];

        let result: ArrayValidator = Contract.In(localVar).IsUndefined();

        expect(result);
    });

    it("IsUndefined returns a proper validator with a number array", () => {
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


});
