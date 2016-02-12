/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("StringValidator", () => {

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));

        it("LengthIsLessThanOrEqualTo to throw new RangeError based on the conditions result", () => {

            // arrange
            let localVar: string = "Andre Marcus Fischbacher";

            // act
            let result2: StringValidator = Contract.In(localVariable).LengthIsGreaterOrEqualThan(18);

            // assert
            return expect(result2).toThrowError();


        });

    });

});