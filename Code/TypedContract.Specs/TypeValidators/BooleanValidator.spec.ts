/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />

describe("BooleanValidator", () => {

    it("IsTrue returns the right validator", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: any = contract.In(localVariable).IsTrue();

        // assert
        expect(result).not.toBeNull();
        //expect(result).toEqual(jasmine.any(BooleanValidator));
    });

    /*it("IsTrue does not raise an error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act/assert
        contract.In(localVariable).IsTrue();
    });

    it("IsTrue raises a range error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act
        let failure: () => void;
        failure = () => {
            contract.In(localVariable).IsTrue();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("IsFalse does not raise an error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act/assert
        contract.In(localVariable).IsFalse();
    });

    it("IsFalse raises a range error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let failure: () => void;
        failure = () => {
            contract.In(localVariable).IsFalse();
        };

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("IsFalse raises an error when null", () => {
       let localVar: boolean = null;

       expect(() => {
           contract.In(localVar).IsFalse();
       }).toThrowError(<any>TypeError);

    });

    it("IsDefined will return the proper result ", () => {
       let localVar: boolean = true;

       let result: BooleanValidator = contract.In(localVar).IsDefined();

       expect(result).toBeDefined();
    });

    it("IsNullOrUndefined returns the proper validator when given an undefined", () => {
        let localVar: boolean = undefined;

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));
    });

    it("IsNullOrUndefined returns the proper validator when given a null", () => {
        let localVar: boolean = null;

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsNullOrUndefined returns the proper validator when given a defined", () => {
        let localVar: boolean;

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });*/

});
