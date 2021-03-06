/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />

describe("BooleanValidator", () => {

    it("isTrue returns the right validator", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: any = contract.In(localVariable).isTrue();

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });

    it("isTrue does not raise an error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act/assert
        contract.In(localVariable).isTrue();
    });

    it("isTrue raises a range error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act
        let failure: () => void;
        failure = () => {
            contract.In(localVariable).isTrue();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("isFalse does not raise an error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act/assert
        contract.In(localVariable).isFalse();
    });

    it("isFalse raises a range error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let failure: () => void;
        failure = () => {
            contract.In(localVariable).isFalse();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("isFalse raises an error when null", () => {
       let localVar: boolean = null;

       expect(() => {
           contract.In(localVar).isFalse();
       }).toThrowError(<any>TypeError);

    });

    it("isDefined will return the proper result ", () => {
       let localVar: boolean = true;

       let result: IBooleanValidator = contract.In(localVar).isDefined();

       expect(result).toBeDefined();
    });

    it("isNullOrUndefined returns the proper validator when given an undefined", () => {
        let localVar: boolean = undefined;

        expect( () => {
            contract.In(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("isNullOrUndefined returns the proper validator when given a null", () => {
        let localVar: boolean = null;

        expect( () => {
            contract.In(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("isNullOrUndefined returns the proper validator when given a defined", () => {
        let localVar: boolean;

        expect( () => {
            contract.In(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

});
