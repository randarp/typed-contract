/// <reference path="../../TypedContract/Contract.ts" />
/// <reference path="../../TypedContract/TypeValidators/StringValidator.ts" />
/// <reference path="../../Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

// import {ReferenceError} from "../../node_modules/typescript/lib/lib";

describe("StringValidator", () => {

    it("IsNotNull returns the proper validator when given an undefined", () => {
        let localVar: string;

        let result: StringValidator = Contract.In(localVar).IsNotNull();

        expect(result);
    });

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed the an empty string", () => {
            let localVar: string = "";

            let result: StringValidator = Contract.In(localVar).IsNotNull();

            expect(result).not.toBe(null);
            expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: string = "Andre";

        // act/assert
        expect(() => {
            Contract.In(localVariable).IsNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: StringValidator = Contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

    it("IsNull should return the proper result", () => {
        let localVar: string = null;

        let result: StringValidator = Contract.In(localVar).IsNull();

        expect(result);

    });

    it("IsNotDefined return the proper result", () => {
        let localVar: string = undefined;

        let result: StringValidator = Contract.In(localVar).IsNotDefined();

        expect(result);
    });

    xit("IsNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: string;

        let result: StringValidator = Contract.In(localVar).IsNullOrUndefined();

        expect(!result);
    });

    it("IsNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: string = "Hello World";

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsEqualTo returns the proper validator when given a string that is equal", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        let result: StringValidator = Contract.In(localVar).IsEqualTo(compareTo);

        expect(result);

    });

    xit("IsEqualTo returns the proper validator when given a string that is not equal", () => {
        let localVar: string = "TypedContract";

        let compareTo: string = "TypeScript";

        let result: StringValidator =  Contract.In(localVar).IsEqualTo(compareTo);

        expect(result);
    });

    it("IsEqualTo returns the proper validator when given a string that has white spaces", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre ";

        expect( () => {
            Contract.In(localVar, "Andre's Variable").IsEqualTo(compareTo);
        }).toThrow(new RangeError("Andre's Variable should be equal to the string variable Andre "));
    });

    it("IsNotEqualTo returns the proper validator when given an unequal string", () => {
        let localVar: string = "TypedContract";

        let compareTo: string = "TypeScript";

        let result: StringValidator = Contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);

    });

    it("IsNotEqualTo returns the proper validator when given an equal string", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        expect( () => {
            Contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable Andre"));
    });

    it("IsNotEqualTo returns the proper validator when given to undefined strings", () => {
        let localVar: string;
        let compareTo: string;

        expect( () => {
            Contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable undefined"));
    });

    it("IsEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        let result: StringValidator = Contract.In(localVar).IsEqualTo(compareTo);

        expect(result);
    });
    it("IsNotEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        expect( () => {
            Contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable null"));
    });

    it("IsLengthGreater than returns the proper validator when given a string longer than the comparable", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: StringValidator = Contract.In(localVar).IsLengthGreaterThan(compareTo);

        expect(result);

    });

    it("IsLengthGreater than returns an error when given a string less than the length on the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect(() => {
            Contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthGreaterThan returns this when given a string with equal length for both the comparable and the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypeScript";

        expect( () => {
            Contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthGreaterOrEqualTo returns the proper validator when given an string the is smaller than the comparable", () => {
            let localVar: string = "Andre";
            let compareTo: string = "Andy";

            let result: StringValidator = Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

            expect(result);

    });

    it("IsLengthGreaterOrEqualTo returns the proper validator when given a string equal to the comparable", () => {
            let localVar: string = "TypedContract";
            let compareTo: string = "TypedContract";

            let result: StringValidator = Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

            expect(result);
    });

    it("IsLengthGreaterOrEqualTo throws an error when given a string larger than the precondition", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "TypedContract";

            expect( () => {
                Contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);
            }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "ECMAScript 6";

            let result: StringValidator = Contract.In(localVar).IsLengthNotGreaterThan(compareTo);

            expect(result);
    });

    it("IsLengthNotGreaterThan returns the proper validator when given a comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
           Contract.In(localVar).IsLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: string = "";
        let compareTo: string = "";
        let result: StringValidator = Contract.In(localVar).IsLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is not greater in length", () => {
        let localVar: string = "Python";
        let compareTo: string = "JavaScript";

        let result: StringValidator = Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is equal in length", () => {
        let localVar: string = "JavaScript";
        let compareTo: string = "JavaScript";

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is greater in length", () => {
        let localVar: string = "Andre Fischbacher";
        let compareTo: string = "JavaScript";

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that are both empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        expect( () => {
            Contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan returns the proper validator when given a string argument that is less than the comparable", () => {
        let localVar: string = "Randar";
        let compareTo: string  = "Andre";

        expect( () => {
            Contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("IsLengthLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let compareTo: string = "TypedContract";
        let localVar: string = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthLessThan returns the proper validator when given a string argument that is greater than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        let result: StringValidator = Contract.In(localVar).IsLengthLessThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is smaller than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is greater than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string  = "TypeScript";

        let result: StringValidator = Contract.In(localVar).IsLengthNotLessThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypeScript";

        expect( () => {
            Contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Randar";

        let result: StringValidator = Contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is equal than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        let result: StringValidator = Contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    xit("IsLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", () => {

        let localVar: string = "Randar";
        let compareTo: string = "Andre";

        expect( () => {
            Contract.In(localVar).IsLengthLessOrEqualThan(compareTo);
        }).toThrow(new RangeError(`The variable should have a length less or equal to 5 but is 6`));
    });

    it("IsLengthLessOrEqual to throw an error when given undefined strings", () => {
       let localVar: string;
       let compareTo: string;

       expect( () => {
           Contract.In(localVar).IsLengthLessOrEqualThan(compareTo);
       }).toThrowError();
    });

    it("IsLengthNotLessOrEqual to return the proper validator when given a string not smaller than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: StringValidator = Contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessOrEqual to throw an error when given a string that is equal to the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("IsLengthNotLessOrEqual to throw an error when given a string that is smaller in length to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("IsLengthNotLessOrEqual to throw an error when given a strings that are undefined", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("ToMatch returns true when given the proper regular expression with a case insensitive regular expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/i;

        let result: StringValidator = Contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression with a global string expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/g;

        let result: StringValidator = Contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression with multiline matching", () => {
        let localVar: string = "Hello my name" +
            " is andre and I am the guy who created this spec";
        let regExp: any = /andre/i;

        let result: StringValidator = Contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /andre/i;

        expect( () => {
            Contract.In(localVar).ToMatch(regExp);
        }).toThrowError();
    });

    it("ToMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name " +
            "is bob and I did not make this spec";
        let regExp: any = /andre/m;

        expect( () => {
            Contract.In(localVar).ToMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a case insensitive regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: StringValidator = Contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a global match regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/g;

        let result: StringValidator = Contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a multiline regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: StringValidator = Contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch throws an error when given a case insensitive regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/i;

        expect( () => {
            Contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch throws an error when given a global regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/g;

        expect( () => {
            Contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch throws an error when given a multiline regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/m;

        expect( () => {
            Contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();

    });

    it("Contains returns the proper validator when given a string that contains the same characters as the contract precondition", () => {
       let localVar: string = "This is a TypeScript library";
       let compareTo: string = "TypeScript";

       let result: StringValidator = Contract.In(localVar).Contains(compareTo);

       expect(result);
    });

    it("Contains returns the proper validator when given a string that is only a white space to be compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        let result: StringValidator = Contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("Contains returns the proper validator when given a string that contains the same characters as the contract precondition with only one word", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "T";

        let result: StringValidator = Contract.In(localVar).Contains(compareTo);

        expect(result);
    });


    it("Contains throws an error when given a string that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        expect( () => {
            Contract.In(localVar).Contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Contains returns the proper validator when given a string that is empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        let result: StringValidator = Contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper valuidator when given a string that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: StringValidator = Contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given a string that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: StringValidator = Contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given a string that does not contain the same characters as the contract precondition in capitals", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "ANDRE";

        let result: StringValidator = Contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains throws an error when given a string that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "TypeScript";

        expect( () => {
            Contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a letter that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "a";

        expect( () => {
            Contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a string that contains a whitespace as compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        expect( () => {
            Contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("StartsWith returns the proper validator when given a string that starts with the same characters as the contract precondition", () => {

        let localVar: string = "Type Contract";
        let compareTo: string = "Type Script";

        let result: StringValidator = Contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });


    it("StartsWith returns the proper validator when given a string that starts with single character", () => {

        let localVar: string = "T";
        let compareTo: string = "T";

        let result: StringValidator = Contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });


    it("StartsWith throws an error when given a string that does not start with the same characters as the contract precondition", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
            Contract.In(localVar).StartsWith(compareTo);
        }).toThrow(<any>RangeError);
    });

    it("StartsWith returns the proper validator when given a string that starts with the same characters as the contract precondition with different starting points", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "AndreContract";

        let result: StringValidator = Contract.In(localVar).StartsWith(compareTo, 4);

        expect(result);
    });

    it("StartsWith returns the proper validator when given a string that starts with the same characters as the contract precondition", () => {

        let localVar: string = "Typed Contract";
        let compareTo: string = "Type Script";

        expect( () => {
            Contract.In(localVar).StartsWith(compareTo, 0);
        }).toThrow(<any>RangeError);
    });

    it("IsBetween returns the proper validator when given two strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        let result: StringValidator = Contract.In(localVar).IsBetween(compareTo, 0, 3);

        expect(result);
    });
    it("IsBetween returns the proper validator when given two identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedScript";

        let result: StringValidator = Contract.In(localVar).IsBetween(compareTo, 1, 3);

        expect(result);
    });
    it("IsBetween throws an error with when given two strings that do not have the same value", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        let result: StringValidator = Contract.In(localVar).IsBetween(compareTo, 0, 3);

        expect(result);
    });

    it("IsBetween returns the proper validator when given two identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedScript";

        let result: StringValidator = Contract.In(localVar).IsBetween(compareTo, 4, undefined, 5, undefined);

        expect(result);
    });

    it("IsBetween throws an error when given two non-identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";
        expect( () => {
            Contract.In(localVar).IsBetween(compareTo, 3, undefined, 4, undefined);
        }).toThrowError(<any>RangeError);
    });

    it("IsBetween throws an error when given an empty string and a string ", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect( () => {
            Contract.In(localVar).IsBetween(compareTo, 3, undefined, 4, undefined);
        }).toThrowError(<any>RangeError);
    });

    it("IsNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "C-Sharp";

        let result: StringValidator = Contract.In(localVar).IsNotBetween(compareTo, 0, undefined, 0, undefined);

        expect(result);
    });


    it("IsNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "C-Sharp";

        let result: StringValidator = Contract.In(localVar).IsNotBetween(compareTo, 2, 4, 2, 4);

        expect(result);
    });


    it("IsNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "C-Sharp";

        expect( () => {
            Contract.In(localVar).IsNotBetween(compareTo, 8, 9, 6, undefined);
        }).toThrowError(<any>RangeError);
    });


    it("IsNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "C-Sharp";

        let result: StringValidator = Contract.In(localVar).IsNotBetween(compareTo, 0, 2, 0, 2);

        expect(result);
    });

    it("IsNotBetween throws an error when given two identical inbetweens", () => {
        let localVar: string = "F-Sharp";
        let compareTo: string = "C-Sharp";

        expect( () => {
            Contract.In(localVar).IsNotBetween(compareTo, 1, undefined, 1, undefined);
        }).toThrowError(<any>RangeError);
    });

    it("IsNotBetween throws an error when given two identical inbetweens", () => {
        let localVar: string = "F-Sharp";
        let compareTo: string = "C-Sharp";

        expect( () => {
            Contract.In(localVar).IsNotBetween(compareTo, 1, undefined, 1, undefined);
        }).toThrowError(<any>RangeError);
    });
});
