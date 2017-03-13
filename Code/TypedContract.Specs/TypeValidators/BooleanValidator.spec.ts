/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("BooleanValidator", () => {

    it("IsTrue returns the right validator", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: any = contract.pre(localVariable).IsTrue();

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("BooleanValidator");
    });

    it("IsTrue does not raise an error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act/assert
        contract.pre(localVariable).IsTrue();
    });

    it("IsTrue raises a range error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act
        let failure: () => void;
        failure = () => {
            contract.pre(localVariable).IsTrue();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("IsFalse does not raise an error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act/assert
        contract.pre(localVariable).IsFalse();
    });

    it("IsFalse raises a range error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let failure: () => void;
        failure = () => {
            contract.pre(localVariable).IsFalse();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("IsFalse raises an error when null", () => {
       let localVar: boolean = null;

       expect(() => {
           contract.pre(localVar).IsFalse();
       }).toThrowError(<any>TypeError);

    });

    it("IsDefined will return the proper result ", () => {
       let localVar: boolean = true;

       let result: IBooleanValidator = contract.pre(localVar).IsDefined();

       expect(result).toBeDefined();
    });

    it("IsNullOrUndefined returns the proper validator when given an undefined", () => {
        let localVar: boolean = undefined;

        expect( () => {
            contract.pre(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsNullOrUndefined returns the proper validator when given a null", () => {
        let localVar: boolean = null;

        expect( () => {
            contract.pre(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsNullOrUndefined returns the proper validator when given a defined", () => {
        let localVar: boolean;

        expect( () => {
            contract.pre(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

});
