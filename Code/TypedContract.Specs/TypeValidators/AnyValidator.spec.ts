/// <reference path="../../Typings/jasmine/jasmine.d.ts" />
import * as typedcontract from "../../TypedContract/typed-contract";
import contract from "../../TypedContract/typed-contract";

describe("AnyValidator", () => {

    it("IsNotNull returns the proper validator when given an undefined", () => {
        let localVar: any;

        let result: typedcontract.AnyValidator = contract.In(localVar).IsNotNull();

        expect(result);
    });


    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: any = "A string";

        // act
        let result: typedcontract.AnyValidator = contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(typedcontract.StringValidator));
    });

    it("IsNotNull is passed the an empty string", () => {
        let localVar: string = "";

        let result: typedcontract.AnyValidator = contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
        expect(result).toEqual(jasmine.any(typedcontract.StringValidator));
    });

    it("IsNotNull is passed in a defined number variable", () => {
       let localVar: any = 100;

       let result: typedcontract.AnyValidator = contract.In(localVar).IsNotNull();

       expect(result).not.toBe(null);
    });

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: any = {a: "TypeScript", b: function(){ return null; }, c: [1, 2, 3]};

        // act/assert
        expect(() => {
            contract.In(localVariable).IsNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: typedcontract.AnyValidator = contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

    it("IsNull should return the proper result", () => {
        let localVar: string = null;

        let result: typedcontract.AnyValidator = contract.In(localVar).IsNull();

        expect(result);

    });

    it("IsNotDefined return the proper result", () => {
        let myVar: any;

        let result: typedcontract.AnyValidator = contract.In(myVar, "").IsUndefined();

        expect(result);
    });

    it("IsNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: any;

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("IsNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: any = "Hello World";

        expect( () => {
            contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsNotNull on an MouseEvent type for an AnyValidator to return true", () => {
       let divElement: HTMLElement = document.createElement("div");

       let localVar: void = divElement.addEventListener("click", (e: MouseEvent) => {e.preventDefault(); }, false);

       let result: typedcontract.AnyValidator = contract.In(localVar).IsNotNull();

       expect(result).not.toBe(null);
    });

    it("IsNotNull on an anonymous function for an AnyValidator", () => {
        let localVar: any = () => {var x = 1; return x; };

        let result: AnyValidator = contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });
});
