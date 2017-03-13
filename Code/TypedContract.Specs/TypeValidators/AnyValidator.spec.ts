/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../Typings/jasmine/jasmine.d.ts" />
describe("AnyValidator", () => {

    it("isNotNull returns the proper validator when given an undefined", () => {
        let localVar: any;

        let result: IAnyValidator = contract.checks(localVar).isNotNull();

        expect(result);
    });


    it("isNotNull returns the right validator", () => {
        // arrange
        let localVariable: any = "A string";

        // act
        let result: IAnyValidator = contract.checks(localVariable).isNotNull();

        // assert
        expect(result).not.toBeNull();
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("isNotNull is passed the an empty string", () => {
        let localVar: string = "";

        let result: IAnyValidator = contract.checks(localVar).isNotNull();

        expect(result).not.toBe(null);
        expect((<any>result.constructor).name).toBe("StringValidator");
    });

    it("isNotNull is passed in a defined number variable", () => {
       let localVar: any = 100;

       let result: IAnyValidator = contract.checks(localVar).isNotNull();

       expect(result).not.toBe(null);
    });

    it("isNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: any = {a: "TypeScript", b: function(){ return null; }, c: [1, 2, 3]};

        // act/assert
        expect(() => {
            contract.checks(localVariable).isNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("isDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: IAnyValidator = contract.checks(localVar).isDefined();

        expect(result).toBeDefined();

    });

    it("isNull should return the proper result", () => {
        let localVar: string = null;

        let result: IAnyValidator = contract.checks(localVar).isNull();

        expect(result);

    });

    it("isNotDefined return the proper result", () => {
        let myVar: any;

        let result: IAnyValidator = contract.checks(myVar, "").isUndefined();

        expect(result);
    });

    it("isNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: any;

        expect( () => {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("isNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: any = "Hello World";

        expect( () => {
            contract.checks(localVar).isNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("isNotNull on an MouseEvent type for an AnyValidator to return true", () => {
       let divElement: HTMLElement = document.createElement("div");

       let localVar: void = divElement.addEventListener("click", (e: MouseEvent) => {e.preventDefault(); }, false);

       let result: IAnyValidator = contract.checks(localVar).isNotNull();

       expect(result).not.toBe(null);
    });

    it("isNotNull on an anonymous function for an AnyValidator", () => {
        let localVar: any = () => {var x = 1; return x; };

        let result: IAnyValidator = contract.checks(localVar).isNotNull();

        expect(result).not.toBe(null);
    });
});
