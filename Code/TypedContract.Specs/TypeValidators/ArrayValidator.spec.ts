/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("ArrayValidator", () => {

    it("IsEmpty returns the right validator", () => {
        // arrange
        let localVariable: string[] = ["A", "B", "C"];

        // act
        let result: ArrayValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ArrayValidator));
    });

    it("IsNotNull returns the right validator", () => {
        let localVar: any[] = [1, 2, 3];

        let result: ArrayValidator = Contract.In(localVar).IsNotNull();

        return expect(result).not.toBeNull();
        return expect(result).toBe(this);
    });

    it("IsNull returns the right validator", () => {
        let localVar: any[] = null;

        let result: ArrayValidator = Contract.In(localVar).IsNull();

        return expect(localVar).toBeNull();
    });
});
