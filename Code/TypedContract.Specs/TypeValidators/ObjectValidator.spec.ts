/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

class FakeClass {
    public value1: number;
}

describe("ObjectValidator", () => {

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: FakeClass = new FakeClass();

        // act
        let result: ObjectValidator<FakeClass> = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(ObjectValidator));
    });
});
