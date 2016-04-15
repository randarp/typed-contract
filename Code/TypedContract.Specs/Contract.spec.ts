/// <reference path="..\TypedContract\Contract.ts" />
/// <reference path="..\Typings\http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

/* import BooleanValidator from "../TypedContract/TypeValidators/BooleanValidator"; */
describe("Contract", () => {

    it("will return the correct validator for a boolean", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: BooleanValidator = Contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(BooleanValidator));
    });

    it("will return the correct validator for a boolean with a name", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: BooleanValidator = Contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(BooleanValidator));
    });

    it("will return the correct validator for a number", () => {
        // arrange m
        let localVariable: number = 2;

        // act
        let result: NumberValidator = Contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(NumberValidator));
    });

    it("will return the correct validator for a number with a name", () => {
        // arrange
        let localVariable: number = 2;

        // act
        let result: NumberValidator = Contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(NumberValidator));
    });

    it("will return the correct validator for a string", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = Contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("will return the correct validator for a string with a name", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = Contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("will return the correct validator for an array", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = Contract.In(localVariable);

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ArrayValidator));
    });

    it("will return the correct validator for an array with a name", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = Contract.In(localVariable, "localVariable");

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ArrayValidator));
    });
});
