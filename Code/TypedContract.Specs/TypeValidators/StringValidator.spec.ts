/// <reference path="../../TypedContract/Contract.ts" />
/// <reference path="../../TypedContract/TypeValidators/StringValidator.ts" />
/// <reference path="../../Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

// import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

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
        }).toThrow(new RangeError("The variable should have a length greater than 13 but is 10"));

    });

    it("IsLengthGreater than returns this when given a string with equal length for both the comparable and the precondition", () => {

        let localVar: string = "TypeScript";
        let compareTo: string = "TypeScript";

        let result: StringValidator = Contract.In(localVar).IsLengthGreaterThan(compareTo);

        expect(result).not.toBe(this);

    });
});