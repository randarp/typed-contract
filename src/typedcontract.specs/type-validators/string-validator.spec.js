/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("StringValidator", function () {
    it("isNotNull returns the proper validator when given an undefined", function () {
        var localVar;
        var result = contract.checks(localVar).isNotNull();
        expect(result);
    });
    it("isNotNull returns the right validator", function () {
        // arrange
        var localVariable = "A string";
        // act
        var result = contract.checks(localVariable).isNotNull();
        // assert
        expect(result).not.toBeNull();
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("isNotNull is passed the an empty string", function () {
        var localVar = "";
        var result = contract.checks(localVar).isNotNull();
        expect(result).not.toBe(null);
        expect(result.constructor.name).toBe("StringValidator");
    });
    it("isNull expects a result of an error thrown", function () {
        // arrange
        var localVariable = "Andre";
        // act/assert
        expect(function () {
            contract.checks(localVariable).isNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });
    it("isDefined should return the proper result ", function () {
        var localVar = "Andre";
        var result = contract.checks(localVar).isDefined();
        expect(result).toBeDefined();
    });
    it("isNull should return the proper result", function () {
        var localVar = null;
        var result = contract.checks(localVar).isNull();
        expect(result);
    });
    it("isNotDefined return the proper result", function () {
        var localVar = undefined;
        var result = contract.checks(localVar).isUndefined();
        expect(result);
    });
    it("isNullOrUndefined returns proper validator with a undefined variable", function () {
        var localVar;
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrowError(ReferenceError);
    });
    it("isNullOrUndefined returns the proper validator with a defined variable", function () {
        var localVar = "Hello World";
        expect(function () {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });
    it("isEqualTo returns the proper validator when given a string that is equal", function () {
        var localVar = "TypedContract";
        var compareTo = "TypedContract";
        var result = contract.checks(localVar).isEqualTo(compareTo);
        expect(result);
    });
    it("isEqualTo returns the proper validator when given a string that is not equal", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).isEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isEqualTo returns the proper validator when given a string that has white spaces", function () {
        var localVar = "Andre";
        var compareTo = "Andre ";
        expect(function () {
            contract.checks(localVar, "Andre's Variable").isEqualTo(compareTo);
        }).toThrow(new RangeError("Andre's Variable should be equal to the string variable Andre "));
    });
    it("isNotEqualTo returns the proper validator when given an unequal string", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        var result = contract.checks(localVar).isNotEqualTo(compareTo);
        expect(result);
    });
    it("isNotEqualTo returns the proper validator when given an equal string", function () {
        var localVar = "Andre";
        var compareTo = "Andre";
        expect(function () {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable Andre"));
    });
    it("isNotEqualTo returns the proper validator when given to undefined strings", function () {
        var localVar;
        var compareTo;
        expect(function () {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable undefined"));
    });
    it("isEqualTo returns the proper validator when given to null strings", function () {
        var localVar = null;
        var compareTo = null;
        var result = contract.checks(localVar).isEqualTo(compareTo);
        expect(result);
    });
    it("isNotEqualTo returns the proper validator when given to null strings", function () {
        var localVar = null;
        var compareTo = null;
        expect(function () {
            contract.checks(localVar).isNotEqualTo(compareTo);
        }).toThrow(new RangeError("The variable should not be equal to the string variable null"));
    });
    it("IsLengthGreater than returns the proper validator when given a string longer than the comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        var result = contract.checks(localVar).isLengthGreaterThan(compareTo);
        expect(result);
    });
    it("IsLengthGreater than returns an error when given a string less than the length on the precondition", function () {
        var localVar = "TypeScript";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthGreaterThan returns this when given a string with equal length for both the comparable and the precondition", function () {
        var localVar = "TypeScript";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).isLengthGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthGreaterOrEqualTo returns the proper validator when given an string the is smaller than the comparable", function () {
        var localVar = "Andre";
        var compareTo = "Andy";
        var result = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthGreaterOrEqualTo returns the proper validator when given a string equal to the comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypedContract";
        var result = contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthGreaterOrEqualTo throws an error when given a string larger than the precondition", function () {
        var localVar = "TypeScript";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable", function () {
        var localVar = "TypeScript";
        var compareTo = "ECMAScript 6";
        var result = contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        expect(result);
    });
    it("isLengthNotGreaterThan returns the proper validator when given a comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterThan throws an error with the proper validator when given a comparable of empty strings", function () {
        var localVar = "";
        var compareTo = "";
        var result = contract.checks(localVar).isLengthNotGreaterThan(compareTo);
        expect(result);
    });
    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is not greater in length", function () {
        var localVar = "Python";
        var compareTo = "JavaScript";
        var result = contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        expect(result);
    });
    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is equal in length", function () {
        var localVar = "JavaScript";
        var compareTo = "JavaScript";
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that is greater in length", function () {
        var localVar = "Andre Fischbacher";
        var compareTo = "JavaScript";
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotGreaterOrEqualTo returns the proper validator when given a comparable string that are both empty", function () {
        var localVar = "";
        var compareTo = "";
        expect(function () {
            contract.checks(localVar).isLengthNotGreaterOrEqualTo(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan returns the proper validator when given a string argument that is less than the comparable", function () {
        var localVar = "Randar";
        var compareTo = "Andre";
        expect(function () {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan returns the proper validator when given a string argument that is equal to the comparable", function () {
        var compareTo = "TypedContract";
        var localVar = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessThan returns the proper validator when given a string argument that is greater than comparable", function () {
        var localVar = "TypeScript";
        var compareTo = "TypedContract";
        var result = contract.checks(localVar).isLengthLessThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessThan returns the proper validator when given a string argument that is smaller than comparable", function () {
        var localVar = "TypeScript";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthNotLessThan returns the proper validator when given a string argument that is greater than the comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        var result = contract.checks(localVar).isLengthNotLessThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessThan returns the proper validator when given a string argument that is equal to the comparable", function () {
        var localVar = "TypeScript";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).isLengthNotLessThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is less than in length than the comparable", function () {
        var localVar = "Andre";
        var compareTo = "Randar";
        var result = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition " +
        "that is equal than in length than the comparable", function () {
        var localVar = "Andre";
        var compareTo = "Andre";
        var result = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthLessOrEqual to returns the proper validator when given a precondition that is greater than in length than the comparable", function () {
        var localVar = "Randar";
        var compareTo = "Andre";
        expect(function () {
            contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        }).toThrowError(RangeError);
    });
    it("isLengthLessOrEqual to throw an error when given empty strings", function () {
        var localVar = "";
        var compareTo = "";
        var result = contract.checks(localVar).isLengthLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessOrEqual to return the proper validator when given a string not smaller than the comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypeScript";
        var result = contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        expect(result);
    });
    it("isLengthNotLessOrEqual to throw an error when given a string that is equal to the comparable", function () {
        var localVar = "TypedContract";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });
    it("isLengthNotLessOrEqual to throw an error when given a string that is smaller in length to the comparable", function () {
        var localVar = "TypeScript";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });
    it("isLengthNotLessOrEqual to throw an error when given a strings that are undefined", function () {
        var localVar = "TypedContract";
        var compareTo = "TypedContract";
        expect(function () {
            contract.checks(localVar).isLengthNotLessOrEqualThan(compareTo);
        }).toThrowError();
    });
    it("toMatch returns true when given the proper regular expression with a case insensitive regular expression", function () {
        var localVar = "Hello my name is andre";
        var regExp = /andre/i;
        var result = contract.checks(localVar).toMatch(regExp);
        expect(result);
    });
    it("toMatch returns true when given the proper regular expression with a global string expression", function () {
        var localVar = "Hello my name is andre";
        var regExp = /andre/g;
        var result = contract.checks(localVar).toMatch(regExp);
        expect(result);
    });
    it("toMatch returns true when given the proper regular expression with multiple line matching", function () {
        var localVar = "Hello my name" +
            " is andre and I am the guy who created this spec";
        var regExp = /andre/i;
        var result = contract.checks(localVar).toMatch(regExp);
        expect(result);
    });
    it("toMatch returns true when given the proper regular expression that is case insensitive that will return false", function () {
        var localVar = "Hello my name is bob";
        var regExp = /andre/i;
        expect(function () {
            contract.checks(localVar).toMatch(regExp);
        }).toThrowError();
    });
    it("toMatch returns true when given the proper regular expression that is case insensitive that will return false", function () {
        var localVar = "Hello my name " +
            "is bob and I did not make this spec";
        var regExp = /andre/m;
        expect(function () {
            contract.checks(localVar).toMatch(regExp);
        }).toThrowError();
    });
    it("toNotMatch returns the proper validator when given the proper regular expression with a case insensitive regular expression that does not match the string", function () {
        var localVar = "Hello my name is andre";
        var regExp = /bob/i;
        var result = contract.checks(localVar).toNotMatch(regExp);
        expect(result);
    });
    it("toNotMatch returns the proper validator when given the proper regular expression with a global match regular expression that does not match the string", function () {
        var localVar = "Hello my name is andre";
        var regExp = /bob/g;
        var result = contract.checks(localVar).toNotMatch(regExp);
        expect(result);
    });
    it("toNotMatch returns the proper validator when given the proper regular expression with a multiline regular expression that does not match the string", function () {
        var localVar = "Hello my name is andre";
        var regExp = /bob/i;
        var result = contract.checks(localVar).toNotMatch(regExp);
        expect(result);
    });
    it("toNotMatch throws an error when given a case insensitive regular expression with that does match the string", function () {
        var localVar = "Hello my name is bob";
        var regExp = /bob/i;
        expect(function () {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();
    });
    it("toNotMatch throws an error when given a global regular expression with that does match the string", function () {
        var localVar = "Hello my name is bob";
        var regExp = /bob/g;
        expect(function () {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();
    });
    it("toNotMatch throws an error when given a multiline regular expression with that does match the string", function () {
        var localVar = "Hello my name is bob";
        var regExp = /bob/m;
        expect(function () {
            contract.checks(localVar).toNotMatch(regExp);
        }).toThrowError();
    });
    it("contains returns the proper validator when given a string that contains the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "TypeScript";
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("contains returns the proper validator when given a string that is only a white space to be compared to the contract precondition", function () {
        var localVar = " ";
        var compareTo = " ";
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("contains returns the proper validator when given a string that contains the same characters as the contract precondition with only one word", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "T";
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("contains returns the proper validator when given a string that contains nothing", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "";
        expect(function () {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(RangeError);
    });
    it("contains throws an error when given a string that does not contain the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "Contract";
        expect(function () {
            contract.checks(localVar).contains(compareTo);
        }).toThrowError(RangeError);
    });
    it("Returns proper validator when when given a string that are both empty empty", function () {
        var localVar = "";
        var compareTo = "";
        var result = contract.checks(localVar).contains(compareTo);
        expect(result);
    });
    it("notContains returns the proper valuidator when given a string that does" +
        " not contain the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "Contract";
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given a string" +
        "that does not contain the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "Contract";
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given a string that does " +
        "not contain the same characters as the contract precondition in capitals", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "ANDRE";
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains returns the proper validator when given a string that does " +
        "not contain any characters like the the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "Not contains";
        var result = contract.checks(localVar).notContains(compareTo);
        expect(result);
    });
    it("notContains throws an error when given a string that does contain the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
    it("notContains throws an error when given a letter that does contain the same characters as the contract precondition", function () {
        var localVar = "This is a TypeScript library";
        var compareTo = "a";
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
    it("notContains throws an error when given a string that contains a whitespace as compared to the contract precondition", function () {
        var localVar = " ";
        var compareTo = " ";
        expect(function () {
            contract.checks(localVar).notContains(compareTo);
        }).toThrowError(RangeError);
    });
    it("startsWith returns the proper validator when given a string " +
        "that starts with the same characters as the contract precondition", function () {
        var localVar = "The Lazy Brown Dog Jumped Over The Fence";
        var compareTo = "The Lazy Brown Dog Jumped Over The Fence";
        var result = contract.checks(localVar).startsWith(compareTo);
        expect(result);
    });
    it("startsWith returns the proper validator when given a string that starts with single character", function () {
        var localVar = "T";
        var compareTo = "T";
        var result = contract.checks(localVar).startsWith(compareTo);
        expect(result);
    });
    it("startsWith throws an error when given a string that does not start with the same characters as the contract precondition", function () {
        var localVar = "TypedContract is the best code contract library ever";
        var compareTo = "TypeScript";
        expect(function () {
            contract.checks(localVar).startsWith(compareTo);
        }).toThrowError(RangeError);
    });
    it("startsWith returns the proper validator when given a string that starts with the same characters", function () {
        var localVar = "Typed Contract";
        var compareTo = "Typed";
        var result = contract.checks(localVar).startsWith(compareTo);
        expect(result);
    });
    it("startsWith returns the proper validator when given a string that starts with the same characters and contains it twice", function () {
        var localVar = "Typed Contract Typed Contract";
        var compareTo = "Typed";
        var result = contract.checks(localVar).startsWith(compareTo);
        expect(result);
    });
    it("endsWith returns the proper validator when given to identical strings", function () {
        var localVar = "Hi my name is Randar";
        var compareTo = "Randar";
        var result = contract.checks(localVar).endsWith(compareTo);
        expect(result);
    });
    it("endsWith returns the proper validator when given to identical strings of longer length", function () {
        var localVar = "The quick fox jumped over the lazy brown dog";
        var compareTo = "dog";
        var result = contract.checks(localVar).endsWith(compareTo);
        expect(result);
    });
    it("endsWith returns the proper validator with string interpolation", function () {
        var localVar = "This is TypedContract";
        var stringWord = "TypedContract";
        var compareTo = "" + stringWord;
        var result = contract.checks(localVar).endsWith(compareTo);
        expect(result);
    });
    it("endsWith throws an error when given a two strings that are not identical ", function () {
        var localVar = "I am typing a sentence";
        var compareTo = "There was a sentence I just coded";
        expect(function () {
            contract.checks(localVar).endsWith(compareTo);
        }).toThrowError(RangeError);
    });
    it("endsWith throws an error when given a two strings that are not identical, one word strings", function () {
        var localVar = "Sentence";
        var compareTo = "Coded";
        expect(function () {
            contract.checks(localVar).endsWith(compareTo);
        }).toThrowError(RangeError);
    });
    it("isBetween returns the proper validator when given two strings", function () {
        var localVar = "T";
        var result = contract.checks(localVar).isBetween("A", "Z");
        expect(result);
    });
    it("isBetween returns the proper validator when on the lower boundary", function () {
        var localVar = "A";
        var result = contract.checks(localVar).isBetween("A", "Z");
        expect(result);
    });
    it("isBetween returns the proper validator when on the upper boundary", function () {
        var localVar = "Z";
        var result = contract.checks(localVar).isBetween("A", "Z");
        expect(result);
    });
    it("isBetween returns the proper validator when given two identical strings", function () {
        var localVar = "b";
        var result = contract.checks(localVar).isBetween("a", "c");
        expect(result);
    });
    it("isBetween throws an error with when given two strings that are not in the range of the precondition value", function () {
        var localVar = "Ali";
        expect(function () {
            contract.checks(localVar).isBetween("Amy", "Johnathan");
        });
    });
    it("isBetween throws an error when given two non-identical strings", function () {
        var localVar = "TypeScript";
        expect(function () {
            contract.checks(localVar).isBetween("Tz", "Typz");
        }).toThrowError(RangeError);
    });
    it("isBetween throws an error when given the wrong range for the precondition", function () {
        var localVar = "A";
        expect(function () {
            contract.checks(localVar).isBetween("B", "A");
        }).toThrowError(Error);
    });
    it("isNotBetween returns the proper validator when given two strings that are not in the range of the precondition", function () {
        var localVar = "Cxy";
        var result = contract.checks(localVar).isNotBetween("Dzz", "Aab");
        expect(result);
    });
    it("isNotBetween returns the proper validator when given two non-identical strings", function () {
        var localVar = "Free";
        var result = contract.checks(localVar).isNotBetween("Guy", "Acd");
        expect(result);
    });
    it("isNotBetween returns the proper validator when given a range not in the specified range, longer words", function () {
        var localVar = "Ba";
        expect(function () {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(RangeError);
    });
    it("isNotBetween returns an error strings that are not specifying a range for the pre-condition", function () {
        var localVar = "Bb";
        expect(function () {
            contract.checks(localVar).isNotBetween("Aa", "De");
        }).toThrowError(RangeError);
    });
    it("isNotBetween throws an error when given two identical ranges", function () {
        var localVar = "C";
        expect(function () {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(RangeError);
    });
    it("isNotBetween throws an error when given two identical ranges, longer words", function () {
        var localVar = "CA";
        expect(function () {
            contract.checks(localVar).isNotBetween("AB", "FG");
        }).toThrowError(RangeError);
    });
    it("isNotBetween throws an error when on the lower boundary", function () {
        var localVar = "A";
        expect(function () {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(RangeError);
    });
    it("isNotBetween throws an error when on the upper boundary", function () {
        var localVar = "D";
        expect(function () {
            contract.checks(localVar).isNotBetween("A", "D");
        }).toThrowError(RangeError);
    });
});
//# sourceMappingURL=string-validator.spec.js.map