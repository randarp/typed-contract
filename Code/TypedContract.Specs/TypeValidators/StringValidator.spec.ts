/// <reference path="../../TypedContract/Contract.ts" />
/// <reference path="../../TypedContract/TypeValidators/StringValidator.ts" />
/// <reference path="../../Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

// import StringValidator from "../../TypedContract/TypeValidators/StringValidator";

describe("StringValidator", () => {

    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: string = "A string";

        // act
        let result: StringValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull expects a result of not null", () => {

            // arrange
            let localVariable: string = "Andre";

            // act
            let result: StringValidator = Contract.In(localVariable).isNotNull();

           // assert
            return expect(result).not.toBeNull();

        });
});
