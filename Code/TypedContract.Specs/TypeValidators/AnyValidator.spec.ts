/**
 * Created by Andre on 4/14/2016.
 */
/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("AnyValidator", () => {

    it("IsNotNull returns the proper validator when given an undefined", () => {
        let localVar: any;

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result);
    });

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: any = "A string";

        // act
        let result: AnyValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed the an empty string", () => {
        let localVar: string = "";

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed in a defined number variable", () => {
       let localVar: any = 100;

       let result: AnyValidator = Contract.In(localVar).IsNotNull();

       expect(result).not.toBe(null);
    });

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: any = {a: "TypeScript", b: function(){ return null; }, c: [1, 2, 3]};

        // act/assert
        expect(() => {
            Contract.In(localVariable).IsNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: AnyValidator = Contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

    it("IsNull should return the proper result", () => {
        let localVar: string = null;

        let result: AnyValidator = Contract.In(localVar).IsNull();

        expect(result);

    });

    it("IsNotDefined return the proper result", () => {
        let myVar: any;

        let result: AnyValidator = Contract.In(myVar, "").IsUndefined();

        expect(result);
    });

    it("IsNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: any;

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("IsNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: any = "Hello World";

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

});
