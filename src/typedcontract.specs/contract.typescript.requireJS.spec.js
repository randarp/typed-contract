/// <reference path="../typedcontract.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
define(["require", "exports", "typedcontract"], function (require, exports, typedcontract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("typedcontract with module syntax RequireJS via TypeScript", function () {
        /* Note, can't use expect(result).toEqual(jasmine.any(BooleanValidator)) here because the constructor function is not exposed for validators
        So we have to use expect((<any>result.constructor).name).toBe("BooleanValidator");
        */
        it("will return the correct validator for a boolean", function () {
            // arrange
            var localVariable = true;
            // act
            var result = typedcontract_1.contract.In(localVariable);
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("BooleanValidator");
        });
        it("will return the correct validator for a boolean", function () {
            // arrange
            var localVariable = true;
            // act
            var result = typedcontract_1.contract.In(localVariable);
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("BooleanValidator");
        });
        it("will return the correct validator for a boolean with a name", function () {
            // arrange
            var localVariable = true;
            // act
            var result = typedcontract_1.contract.In(localVariable, "localVariable");
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("BooleanValidator");
        });
        it("will return the correct validator for a number", function () {
            // arrange m
            var localVariable = 2;
            // act
            var result = typedcontract_1.contract.In(localVariable);
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("NumberValidator");
        });
        it("will return the correct validator for a number with a name", function () {
            // arrange
            var localVariable = 2;
            // act
            var result = typedcontract_1.contract.In(localVariable, "localVariable");
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("NumberValidator");
        });
        it("will return the correct validator for a string", function () {
            // arrange
            var localVariable = "A string";
            // act
            var result = typedcontract_1.contract.In(localVariable);
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("StringValidator");
        });
        it("will return the correct validator for a string with a name", function () {
            // arrange
            var localVariable = "A string";
            // act
            var result = typedcontract_1.contract.In(localVariable, "localVariable");
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("StringValidator");
        });
        it("will return the correct validator for an array", function () {
            // arrange
            var localVariable = ["A", "B", "C"];
            // act
            var result = typedcontract_1.contract.In(localVariable);
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("ArrayValidator");
        });
        it("will return the correct validator for an array with a name", function () {
            // arrange
            var localVariable = ["A", "B", "C"];
            // act
            var result = typedcontract_1.contract.In(localVariable, "localVariable");
            // assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("ArrayValidator");
        });
        it("will return the correct validator for an any type", function () {
            var localVariable = /[A-Z]/;
            var result = typedcontract_1.contract.In(localVariable);
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("AnyValidator");
        });
        it("will return the correct validator for an any type with a variable name", function () {
            var localVariable = /[A-Z]/;
            var result = typedcontract_1.contract.In(localVariable, "myVar");
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.constructor.name).toBe("AnyValidator");
        });
        it("IsGreaterThan returns the right validator if passed a double/float", function () {
            // arrange
            var localVariable = 2.05;
            var comparableVar = 1;
            // act
            var result = typedcontract_1.contract.In(localVariable).isGreaterThan(comparableVar);
            // assert
            expect(result);
        });
    });
});
//# sourceMappingURL=contract.typescript.requireJS.spec.js.map