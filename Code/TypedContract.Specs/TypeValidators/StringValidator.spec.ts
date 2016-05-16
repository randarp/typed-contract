/// <reference path="../../typed-contract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("StringValidator", () => {

    it("IsNotNull returns the proper validator when given an undefined", () => {
        let localVar: string;

        let result: StringValidator = contract.In(localVar).IsNotNull();

        expect(result);
    });

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed the an empty string", () => {
            let localVar: string = "";

            let result: StringValidator = contract.In(localVar).IsNotNull();

            expect(result).not.toBe(null);
            expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: string = "Andre";

        // act/assert
        expect(() => {
            contract.In(localVariable).IsNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: StringValidator = contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

    it("IsNull should return the proper result", () => {
        let localVar: string = null;

        let result: StringValidator = contract.In(localVar).IsNull();

        expect(result);

    });

    it("IsNotDefined return the proper result", () => {
        let localVar: string = undefined;

        let result: StringValidator = contract.In(localVar).IsUndefined();

        expect(result);
    });

    it("IsNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: string;

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("IsNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: string = "Hello World";

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsEqualTo returns the proper validator when given a string that is equal", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        let result: StringValidator = contract.In(localVar).IsEqualTo(compareTo);

        expect(result);

    });

    it("IsEqualTo returns the proper validator when given a string that is not equal", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.In(localVar).IsEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsEqualTo returns the proper validator when given a string that has white spaces", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre ";

        expect( () => {
            contract.In(localVar, "Andre's Variable").IsEqualTo(compareTo);
        }).toThrow(new RangeError("Andre's Variable should be equal to the string variable Andre "));
    });

    it("IsNotEqualTo returns the proper validator when given an unequal string", () => {
        let localVar: string = "TypedContract";

        let compareTo: string = "TypeScript";

        let result: StringValidator = contract.In(localVar).IsNotEqualTo(compareTo);

        expect(result);

    });

    it("IsNotEqualTo returns the proper validator when given an equal string", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        expect( () => {
            contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable Andre"));
    });

    it("IsNotEqualTo returns the proper validator when given to undefined strings", () => {
        let localVar: string;
        let compareTo: string;

        expect( () => {
            contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable undefined"));
    });

    it("IsEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        let result: StringValidator = contract.In(localVar).IsEqualTo(compareTo);

        expect(result);
    });
    it("IsNotEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        expect( () => {
            contract.In(localVar).IsNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable null"));
    });

    it("IsLengthGreater than returns the proper validator when given a string longer than the comparable", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: StringValidator = contract.In(localVar).IsLengthGreaterThan(compareTo);

        expect(result);

    });

    it("IsLengthGreater than returns an error when given a string less than the length on the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect(() => {
            contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthGreaterThan returns this when given a string with equal length for both the comparable and the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.In(localVar).IsLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthGreaterOrEqualTo returns the proper validator when given an string the is smaller than the comparable", () => {
            let localVar: string = "Andre";
            let compareTo: string = "Andy";

            let result: StringValidator = contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

            expect(result);

    });

    it("IsLengthGreaterOrEqualTo returns the proper validator when given a string equal to the comparable", () => {
            let localVar: string = "TypedContract";
            let compareTo: string = "TypedContract";

            let result: StringValidator = contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);

            expect(result);
    });

    it("IsLengthGreaterOrEqualTo throws an error when given a string larger than the precondition", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "TypedContract";

            expect( () => {
                contract.In(localVar).IsLengthGreaterOrEqualTo(compareTo);
            }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "ECMAScript 6";

            let result: StringValidator = contract.In(localVar).IsLengthNotGreaterThan(compareTo);

            expect(result);
    });

    it("IsLengthNotGreaterThan returns the proper validator when given a comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
           contract.In(localVar).IsLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: string = "";
        let compareTo: string = "";
        let result: StringValidator = contract.In(localVar).IsLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is not greater in length", () => {
        let localVar: string = "Python";
        let compareTo: string = "JavaScript";

        let result: StringValidator = contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is equal in length", () => {
        let localVar: string = "JavaScript";
        let compareTo: string = "JavaScript";

        expect( () => {
            contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is greater in length", () => {
        let localVar: string = "Andre Fischbacher";
        let compareTo: string = "JavaScript";

        expect( () => {
            contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that are both empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        expect( () => {
            contract.In(localVar).IsLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessThan returns the proper validator when given a string argument that is less than the comparable", () => {
        let localVar: string = "Randar";
        let compareTo: string  = "Andre";

        expect( () => {
            contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("IsLengthLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let compareTo: string = "TypedContract";
        let localVar: string = "TypedContract";

        expect( () => {
            contract.In(localVar).IsLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthLessThan returns the proper validator when given a string argument that is greater than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        let result: StringValidator = contract.In(localVar).IsLengthLessThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is smaller than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        expect( () => {
            contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is greater than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string  = "TypeScript";

        let result: StringValidator = contract.In(localVar).IsLengthNotLessThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypeScript";

        expect( () => {
            contract.In(localVar).IsLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Randar";

        let result: StringValidator = contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition " +
        "that is equal than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        let result: StringValidator = contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", () => {

        let localVar: string = "Randar";
        let compareTo: string = "Andre";

        expect( () => {
            contract.In(localVar).IsLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("IsLengthLessOrEqual to throw an error when given empty strings", () => {
       let localVar: string = "";
       let compareTo: string = "";

       let result: StringValidator = contract.In(localVar).IsLengthLessOrEqualThan(compareTo);

       expect(result);

    });

    it("IsLengthNotLessOrEqual to return the proper validator when given a string not smaller than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: StringValidator = contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);

        expect(result);
    });

    it("IsLengthNotLessOrEqual to throw an error when given a string that is equal to the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("IsLengthNotLessOrEqual to throw an error when given a string that is smaller in length to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("IsLengthNotLessOrEqual to throw an error when given a strings that are undefined", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.In(localVar).IsLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("ToMatch returns true when given the proper regular expression with a case insensitive regular expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/i;

        let result: StringValidator = contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression with a global string expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/g;

        let result: StringValidator = contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression with multiple line matching", () => {
        let localVar: string = "Hello my name" +
            " is andre and I am the guy who created this spec";
        let regExp: any = /andre/i;

        let result: StringValidator = contract.In(localVar).ToMatch(regExp);

        expect(result);
    });

    it("ToMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /andre/i;

        expect( () => {
            contract.In(localVar).ToMatch(regExp);
        }).toThrowError();
    });

    it("ToMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name " +
            "is bob and I did not make this spec";
        let regExp: any = /andre/m;

        expect( () => {
            contract.In(localVar).ToMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a case insensitive regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: StringValidator = contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a global match regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/g;

        let result: StringValidator = contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch returns the proper validator when given the proper regular expression with a multiline regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: StringValidator = contract.In(localVar).ToNotMatch(regExp);

        expect(result);
    });

    it("ToNotMatch throws an error when given a case insensitive regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/i;

        expect( () => {
            contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch throws an error when given a global regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/g;

        expect( () => {
            contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();
    });

    it("ToNotMatch throws an error when given a multiline regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/m;

        expect( () => {
            contract.In(localVar).ToNotMatch(regExp);
        }).toThrowError();

    });

    it("Contains returns the proper validator when given a string that contains the same characters as the contract precondition", () => {
       let localVar: string = "This is a TypeScript library";
       let compareTo: string = "TypeScript";

       let result: StringValidator = contract.In(localVar).Contains(compareTo);

       expect(result);
    });

    it("Contains returns the proper validator when given a string that is only a white space to be compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        let result: StringValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("Contains returns the proper validator when given a string that contains the same characters as the contract precondition with only one word", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "T";

        let result: StringValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("Contains returns the proper validator when given a string that contains nothing", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "";

        expect( () => {
            contract.In(localVar).Contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Contains throws an error when given a string that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        expect( () => {
            contract.In(localVar).Contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Returns proper validator when when given a string that are both empty empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        let result: StringValidator = contract.In(localVar).Contains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper valuidator when given a string that does" +
        " not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: StringValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given a string" +
        "that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: StringValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given a string that does " +
        "not contain the same characters as the contract precondition in capitals", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "ANDRE";

        let result: StringValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains returns the proper validator when given a string that does " +
        "not contain any characters like the the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Not Contains";

        let result: StringValidator = contract.In(localVar).NotContains(compareTo);

        expect(result);
    });

    it("NotContains throws an error when given a string that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a letter that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "a";

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("NotContains throws an error when given a string that contains a whitespace as compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        expect( () => {
            contract.In(localVar).NotContains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("StartsWith returns the proper validator when given a string " +
        "that starts with the same characters as the contract precondition", () => {

        let localVar: string = "The Lazy Brown Dog Jumped Over The Fence";
        let compareTo: string = "The Lazy Brown Dog Jumped Over The Fence";

        let result: StringValidator = contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });


    it("StartsWith returns the proper validator when given a string that starts with single character", () => {

        let localVar: string = "T";
        let compareTo: string = "T";

        let result: StringValidator = contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });

    it("StartsWith throws an error when given a string that does not start with the same characters as the contract precondition", () => {

        let localVar: string = "TypedContract is the best code contract library ever";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.In(localVar).StartsWith(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("StartsWith returns the proper validator when given a string that starts with the same characters", () => {
        let localVar: string = "Typed Contract";
        let compareTo: string = "Typed";

        let result: StringValidator = contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });

    it("StartsWith returns the proper validator when given a string that starts with the same characters and contains it twice", () => {
        let localVar: string = "Typed Contract Typed Contract";
        let compareTo: string = "Typed";

        let result: StringValidator = contract.In(localVar).StartsWith(compareTo);

        expect(result);
    });

    it("EndsWith returns the proper validator when given to identical strings", () => {
        let localVar: string = "Hi my name is Randar";
        let compareTo: string = "Randar";

        let result: StringValidator = contract.In(localVar).EndsWith(compareTo);

        expect(result);
    });


    it("EndsWith returns the proper validator when given to identical strings of longer length", () => {
        let localVar: string = "The quick fox jumped over the lazy brown dog";
        let compareTo: string = "dog";

        let result: StringValidator = contract.In(localVar).EndsWith(compareTo);

        expect(result);
    });

    it("EndsWith returns the proper validator with string interpolation", () => {
        let localVar: string = "This is TypedContract";
        let stringWord: string = "TypedContract";
        let compareTo: string = `${stringWord}`;

        let result: StringValidator = contract.In(localVar).EndsWith(compareTo);

        expect(result);
    });

    it("EndsWith throws an error when given a two strings that are not identical ", () => {
        let localVar: string = "I am typing a sentence";
        let compareTo: string = "There was a sentence I just coded";

        expect( () => {
                contract.In(localVar).EndsWith(compareTo);
            }).toThrowError(<any>RangeError);

    });

    it("EndsWith throws an error when given a two strings that are not identical, one word strings", () => {
        let localVar: string = "Sentence";
        let compareTo: string = "Coded";

        expect( () => {
            contract.In(localVar).EndsWith(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("IsBetween returns the proper validator when given two strings", () => {
        let localVar: string = "T";

        let result: StringValidator = contract.In(localVar).IsBetween("A", "Z");

        expect(result);
    });

    it("IsBetween returns the proper validator when given two identical strings", () => {
        let localVar: string = "b";

        let result: StringValidator = contract.In(localVar).IsBetween("a", "c");

        expect(result);
    });

    it("IsBetween throws an error with when given two strings that are not in the range of the precondition value", () => {
        let localVar: string = "Ali";

        expect( () => {
            contract.In(localVar).IsBetween("Amy", "Johnathan");
        });
    });


    it("IsBetween throws an error when given two non-identical strings", () => {
        let localVar: string = "TypeScript";

        expect( () => {
            contract.In(localVar).IsBetween("Tz", "Typz");
        }).toThrowError(<any>RangeError);
    });

    it("IsBetween throws an error when given the wrong range for the precondition", () => {
        let localVar: string = "A";

        expect( () => {
            contract.In(localVar).IsBetween("B", "A");
        }).toThrowError(<any>Error);
    });

    it("IsNotBetween returns the proper validator when given two strings that are not in the range of the precondition", () => {
        let localVar: string = "Cxy";

        let result: StringValidator = contract.In(localVar).IsNotBetween("Dzz", "Aab");

        expect(result);
    });


    it("IsNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "Free";

        let result: StringValidator = contract.In(localVar).IsNotBetween("Guy", "Acd");

        expect(result);
    });


    it("IsNotBetween returns the proper validator when given a range not in the specified range, longer words", () => {
        let localVar: string = "Ba";

        expect( () => {
            contract.In(localVar).IsNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });


    it("IsNotBetween returns an error strings that are not specifying a range for the pre-condition", () => {
        let localVar: string = "Bb";

        expect( () => {
            contract.In(localVar).IsNotBetween("Aa", "De");
        }).toThrowError(<any>RangeError);
    });

    it("IsNotBetween throws an error when given two identical ranges", () => {
        let localVar: string = "C";

        expect( () => {
            contract.In(localVar).IsNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });

    it("IsNotBetween throws an error when given two identical ranges, longer words", () => {
        let localVar: string = "CA";

        expect( () => {
           contract.In(localVar).IsNotBetween("AB", "FG");
        }).toThrowError(<any>RangeError);
    });
});
