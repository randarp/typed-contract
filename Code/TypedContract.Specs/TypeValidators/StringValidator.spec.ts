/// <reference path="../../TypedContract/Contract.ts" />
/// <reference path="../../TypedContract/TypeValidators/StringValidator.ts" />
/// <reference path="../../Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

//import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

//import {ReferenceError} from "../../node_modules/typescript/lib/lib";
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

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: string = "Andre";

        // act
        let result: StringValidator = Contract.In(localVariable).IsNull();

        // assert
        expect(result).toThrowError(new ReferenceError()); // getting right result, assertion statement wrong

    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: StringValidator = Contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

});

