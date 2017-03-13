/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("StringValidator", () => {

    it("isNotNull returns the proper validator when given an undefined", () => {
        let localVar: string;

        let result: IStringValidator = contract.checks(localVar).isNotNull();

        expect(result);
    });

    it("isNotNull returns the right validator", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: IStringValidator = contract.checks(localVariable).isNotNull();

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("isNotNull is passed the an empty string", () => {
        let localVar: string = "";

        let result: IStringValidator = contract.checks(localVar).isNotNull();

        expect(result).not.toBe(null);
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("isNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: string = "Andre";

        // act/assert
        expect(() => {
            contract.checks(localVariable).isNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("isDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: IStringValidator = contract.checks(localVar).isDefined();

        expect(result).toBeDefined();

    });

    it("isNull should return the proper result", () => {
        let localVar: string = null;

        let result: IStringValidator = contract.checks(localVar).isNull();

        expect(result);

    });

    it("isNotDefined return the proper result", () => {
        let localVar: string = undefined;

        let result: IStringValidator = contract.checks(localVar).isUndefined();

        expect(result);
    });

    it("isNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: string;

        expect( () => {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("isNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: string = "Hello World";

        expect( () => {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("isEqualTo returns the proper validator when given a string that is equal", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        let result: IStringValidator = contract.checks(localVar).isEqualTo(compareTo);

        expect(result);

    });

    it("isEqualTo returns the proper validator when given a string that is not equal", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.checks(localVar).isEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isEqualTo returns the proper validator when given a string that has white spaces", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre ";

        expect( () => {
            contract.checks(localVar, "Andre's Variable").isEqualTo(compareTo);
        }).toThrow(new RangeError("Andre's Variable should be equal to the string variable Andre "));
    });

    it("isNotEqualTo returns the proper validator when given an unequal string", () => {
        let localVar: string = "TypedContract";

        let compareTo: string = "TypeScript";

        let result: IStringValidator = contract.checks(localVar).isNotEqualTo(compareTo);

        expect(result);

    });

    it("isNotEqualTo returns the proper validator when given an equal string", () => {
        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        expect( () => {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable Andre"));
    });

    it("isNotEqualTo returns the proper validator when given to undefined strings", () => {
        let localVar: string;
        let compareTo: string;

        expect( () => {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable undefined"));
    });

    it("isEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        let result: IStringValidator = contract.checks(localVar).isEqualTo(compareTo);

        expect(result);
    });
    it("isNotEqualTo returns the proper validator when given to null strings", () => {

        let localVar: string = null;
        let compareTo: string = null;

        expect( () => {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable null"));
    });

    it("IsLengthGreater than returns the proper validator when given a string longer than the comparable", () => {

        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: IStringValidator = contract.checks(localVar).isLengthGreaterThan(compareTo);

        expect(result);

    });

    it("IsLengthGreater than returns an error when given a string less than the length on the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect(() => {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthGreaterThan returns this when given a string with equal length for both the comparable and the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthGreaterOrEqualTo returns the proper validator when given an string the is smaller than the comparable", () => {
            let localVar: string = "Andre";
            let compareTo: string = "Andy";

            let result: IStringValidator = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);

            expect(result);

    });

    it("isLengthGreaterOrEqualTo returns the proper validator when given a string equal to the comparable", () => {
            let localVar: string = "TypedContract";
            let compareTo: string = "TypedContract";

            let result: IStringValidator = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);

            expect(result);
    });

    it("isLengthGreaterOrEqualTo throws an error when given a string larger than the precondition", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "TypedContract";

            expect( () => {
                contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
            }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable", () => {
            let localVar: string = "TypeScript";
            let compareTo: string = "ECMAScript 6";

            let result: IStringValidator = contract.checks(localVar).isLengthNotGreaterThan(compareTo);

            expect(result);
    });

    it("isLengthNotGreaterThan returns the proper validator when given a comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        expect( () => {
           contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", () => {
        let localVar: string = "";
        let compareTo: string = "";
        let result: IStringValidator = contract.checks(localVar).isLengthNotGreaterThan(compareTo);

        expect(result);
    });

    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is not greater in length", () => {
        let localVar: string = "Python";
        let compareTo: string = "JavaScript";

        let result: IStringValidator = contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);

        expect(result);
    });

    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is equal in length", () => {
        let localVar: string = "JavaScript";
        let compareTo: string = "JavaScript";

        expect( () => {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is greater in length", () => {
        let localVar: string = "Andre Fischbacher";
        let compareTo: string = "JavaScript";

        expect( () => {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that are both empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        expect( () => {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessThan returns the proper validator when given a string argument that is less than the comparable", () => {
        let localVar: string = "Randar";
        let compareTo: string  = "Andre";

        expect( () => {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("isLengthLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let compareTo: string = "TypedContract";
        let localVar: string = "TypedContract";

        expect( () => {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthLessThan returns the proper validator when given a string argument that is greater than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        let result: IStringValidator = contract.checks(localVar).isLengthLessThan(compareTo);

        expect(result);
    });

    it("isLengthNotLessThan returns the proper validator when given a string argument that is smaller than comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypedContract";

        expect( () => {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthNotLessThan returns the proper validator when given a string argument that is greater than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string  = "TypeScript";

        let result: IStringValidator = contract.checks(localVar).isLengthNotLessThan(compareTo);

        expect(result);
    });

    it("isLengthNotLessThan returns the proper validator when given a string argument that is equal to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string  = "TypeScript";

        expect( () => {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Randar";

        let result: IStringValidator = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition " +
        "that is equal than in length than the comparable", () => {

        let localVar: string = "Andre";
        let compareTo: string = "Andre";

        let result: IStringValidator = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", () => {

        let localVar: string = "Randar";
        let compareTo: string = "Andre";

        expect( () => {
            contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("isLengthLessOrEqual to throw an error when given empty strings", () => {
       let localVar: string = "";
       let compareTo: string = "";

       let result: IStringValidator = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);

       expect(result);

    });

    it("isLengthNotLessOrEqual to return the proper validator when given a string not smaller than the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypeScript";

        let result: IStringValidator = contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);

        expect(result);
    });

    it("isLengthNotLessOrEqual to throw an error when given a string that is equal to the comparable", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("isLengthNotLessOrEqual to throw an error when given a string that is smaller in length to the comparable", () => {
        let localVar: string = "TypeScript";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("isLengthNotLessOrEqual to throw an error when given a strings that are undefined", () => {
        let localVar: string = "TypedContract";
        let compareTo: string = "TypedContract";

        expect( () => {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();

    });

    it("toMatch returns true when given the proper regular expression with a case insensitive regular expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/i;

        let result: IStringValidator = contract.checks(localVar).toMatch(regExp);

        expect(result);
    });

    it("toMatch returns true when given the proper regular expression with a global string expression", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /andre/g;

        let result: IStringValidator = contract.checks(localVar).toMatch(regExp);

        expect(result);
    });

    it("toMatch returns true when given the proper regular expression with multiple line matching", () => {
        let localVar: string = "Hello my name" +
            " is andre and I am the guy who created this spec";
        let regExp: any = /andre/i;

        let result: IStringValidator = contract.checks(localVar).toMatch(regExp);

        expect(result);
    });

    it("toMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /andre/i;

        expect( () => {
            contract.checks(localVar).toMatch(regExp);
        }).toThrowError();
    });

    it("toMatch returns true when given the proper regular expression that is case insensitive that will return false", () => {
        let localVar: string = "Hello my name " +
            "is bob and I did not make this spec";
        let regExp: any = /andre/m;

        expect( () => {
            contract.checks(localVar).toMatch(regExp);
        }).toThrowError();
    });

    it("toNotMatch returns the proper validator when given the proper regular expression with a case insensitive regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: IStringValidator = contract.checks(localVar).toNotMatch(regExp);

        expect(result);
    });

    it("toNotMatch returns the proper validator when given the proper regular expression with a global match regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/g;

        let result: IStringValidator = contract.checks(localVar).toNotMatch(regExp);

        expect(result);
    });

    it("toNotMatch returns the proper validator when given the proper regular expression with a multiline regular expression that does not match the string", () => {
        let localVar: string = "Hello my name is andre";
        let regExp: any = /bob/i;

        let result: IStringValidator = contract.checks(localVar).toNotMatch(regExp);

        expect(result);
    });

    it("toNotMatch throws an error when given a case insensitive regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/i;

        expect( () => {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();
    });

    it("toNotMatch throws an error when given a global regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/g;

        expect( () => {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();
    });

    it("toNotMatch throws an error when given a multiline regular expression with that does match the string", () => {
        let localVar: string = "Hello my name is bob";
        let regExp: any = /bob/m;

        expect( () => {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();

    });

    it("contains returns the proper validator when given a string that contains the same characters as the contract precondition", () => {
       let localVar: string = "This is a TypeScript library";
       let compareTo: string = "TypeScript";

       let result: IStringValidator = contract.checks(localVar).contains(compareTo);

       expect(result);
    });

    it("contains returns the proper validator when given a string that is only a white space to be compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        let result: IStringValidator = contract.checks(localVar).contains(compareTo);

        expect(result);
    });

    it("contains returns the proper validator when given a string that contains the same characters as the contract precondition with only one word", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "T";

        let result: IStringValidator = contract.checks(localVar).contains(compareTo);

        expect(result);
    });

    it("contains returns the proper validator when given a string that contains nothing", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "";

        expect( () => {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("contains throws an error when given a string that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        expect( () => {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("Returns proper validator when when given a string that are both empty empty", () => {
        let localVar: string = "";
        let compareTo: string = "";

        let result: IStringValidator = contract.checks(localVar).contains(compareTo);

        expect(result);
    });

    it("notContains returns the proper valuidator when given a string that does" +
        " not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: IStringValidator = contract.checks(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given a string" +
        "that does not contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Contract";

        let result: IStringValidator = contract.checks(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given a string that does " +
        "not contain the same characters as the contract precondition in capitals", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "ANDRE";

        let result: IStringValidator = contract.checks(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains returns the proper validator when given a string that does " +
        "not contain any characters like the the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "Not contains";

        let result: IStringValidator = contract.checks(localVar).notContains(compareTo);

        expect(result);
    });

    it("notContains throws an error when given a string that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("notContains throws an error when given a letter that does contain the same characters as the contract precondition", () => {
        let localVar: string = "This is a TypeScript library";
        let compareTo: string = "a";

        expect( () => {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });


    it("notContains throws an error when given a string that contains a whitespace as compared to the contract precondition", () => {
        let localVar: string = " ";
        let compareTo: string = " ";

        expect( () => {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("startsWith returns the proper validator when given a string " +
        "that starts with the same characters as the contract precondition", () => {

        let localVar: string = "The Lazy Brown Dog Jumped Over The Fence";
        let compareTo: string = "The Lazy Brown Dog Jumped Over The Fence";

        let result: IStringValidator = contract.checks(localVar).startsWith(compareTo);

        expect(result);
    });


    it("startsWith returns the proper validator when given a string that starts with single character", () => {

        let localVar: string = "T";
        let compareTo: string = "T";

        let result: IStringValidator = contract.checks(localVar).startsWith(compareTo);

        expect(result);
    });

    it("startsWith throws an error when given a string that does not start with the same characters as the contract precondition", () => {

        let localVar: string = "TypedContract is the best code contract library ever";
        let compareTo: string = "TypeScript";

        expect( () => {
            contract.checks(localVar).startsWith(compareTo);
        }).toThrowError(<any>RangeError);
    });

    it("startsWith returns the proper validator when given a string that starts with the same characters", () => {
        let localVar: string = "Typed Contract";
        let compareTo: string = "Typed";

        let result: IStringValidator = contract.checks(localVar).startsWith(compareTo);

        expect(result);
    });

    it("startsWith returns the proper validator when given a string that starts with the same characters and contains it twice", () => {
        let localVar: string = "Typed Contract Typed Contract";
        let compareTo: string = "Typed";

        let result: IStringValidator = contract.checks(localVar).startsWith(compareTo);

        expect(result);
    });

    it("endsWith returns the proper validator when given to identical strings", () => {
        let localVar: string = "Hi my name is Randar";
        let compareTo: string = "Randar";

        let result: IStringValidator = contract.checks(localVar).endsWith(compareTo);

        expect(result);
    });


    it("endsWith returns the proper validator when given to identical strings of longer length", () => {
        let localVar: string = "The quick fox jumped over the lazy brown dog";
        let compareTo: string = "dog";

        let result: IStringValidator = contract.checks(localVar).endsWith(compareTo);

        expect(result);
    });

    it("endsWith returns the proper validator with string interpolation", () => {
        let localVar: string = "This is TypedContract";
        let stringWord: string = "TypedContract";
        let compareTo: string = `${stringWord}`;

        let result: IStringValidator = contract.checks(localVar).endsWith(compareTo);

        expect(result);
    });

    it("endsWith throws an error when given a two strings that are not identical ", () => {
        let localVar: string = "I am typing a sentence";
        let compareTo: string = "There was a sentence I just coded";

        expect( () => {
                contract.checks(localVar).endsWith(compareTo);
            }).toThrowError(<any>RangeError);

    });

    it("endsWith throws an error when given a two strings that are not identical, one word strings", () => {
        let localVar: string = "Sentence";
        let compareTo: string = "Coded";

        expect( () => {
            contract.checks(localVar).endsWith(compareTo);
        }).toThrowError(<any>RangeError);

    });

    it("isBetween returns the proper validator when given two strings", () => {
        let localVar: string = "T";

        let result: IStringValidator = contract.checks(localVar).isBetween("A", "Z");

        expect(result);
    });

    it("isBetween returns the proper validator when on the lower boundary", () => {
        let localVar: string = "A";

        let result: IStringValidator = contract.checks(localVar).isBetween("A", "Z");

        expect(result);
    });

    it("isBetween returns the proper validator when on the upper boundary", () => {
        let localVar: string = "Z";

        let result: IStringValidator = contract.checks(localVar).isBetween("A", "Z");

        expect(result);
    });


    it("isBetween returns the proper validator when given two identical strings", () => {
        let localVar: string = "b";

        let result: IStringValidator = contract.checks(localVar).isBetween("a", "c");

        expect(result);
    });

    it("isBetween throws an error with when given two strings that are not in the range of the precondition value", () => {
        let localVar: string = "Ali";

        expect( () => {
            contract.checks(localVar).isBetween("Amy", "Johnathan");
        });
    });


    it("isBetween throws an error when given two non-identical strings", () => {
        let localVar: string = "TypeScript";

        expect( () => {
            contract.checks(localVar).isBetween("Tz", "Typz");
        }).toThrowError(<any>RangeError);
    });

    it("isBetween throws an error when given the wrong range for the precondition", () => {
        let localVar: string = "A";

        expect( () => {
            contract.checks(localVar).isBetween("B", "A");
        }).toThrowError(<any>Error);
    });

    it("isNotBetween returns the proper validator when given two strings that are not in the range of the precondition", () => {
        let localVar: string = "Cxy";

        let result: IStringValidator = contract.checks(localVar).isNotBetween("Dzz", "Aab");

        expect(result);
    });


    it("isNotBetween returns the proper validator when given two non-identical strings", () => {
        let localVar: string = "Free";

        let result: IStringValidator = contract.checks(localVar).isNotBetween("Guy", "Acd");

        expect(result);
    });


    it("isNotBetween returns the proper validator when given a range not in the specified range, longer words", () => {
        let localVar: string = "Ba";

        expect( () => {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });


    it("isNotBetween returns an error strings that are not specifying a range for the pre-condition", () => {
        let localVar: string = "Bb";

        expect( () => {
            contract.checks(localVar).isNotBetween("Aa", "De");
        }).toThrowError(<any>RangeError);
    });

    it("isNotBetween throws an error when given two identical ranges", () => {
        let localVar: string = "C";

        expect( () => {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });

    it("isNotBetween throws an error when given two identical ranges, longer words", () => {
        let localVar: string = "CA";

        expect( () => {
           contract.checks(localVar).isNotBetween("AB", "FG");
        }).toThrowError(<any>RangeError);
    });

    it("isNotBetween throws an error when on the lower boundary", () => {
        let localVar: string = "A";

        expect( () => {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });

    it("isNotBetween throws an error when on the upper boundary", () => {
        let localVar: string = "D";

        expect( () => {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(<any>RangeError);
    });
});
