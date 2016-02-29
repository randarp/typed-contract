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

});