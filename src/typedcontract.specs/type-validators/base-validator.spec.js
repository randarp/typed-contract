/// <reference path="../../typedcontract.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("BaseValidator", function () {
    it("value returns the original value", function () {
        // arrange
        var localVariable = "A string";
        // act
        var result = contract.checks(localVariable).isNotNull().value();
        // assert
        expect(result).toEqual("A string");
    });
    it("name returns the original variable name", function () {
        var localVariable = "A string";
        var result = contract.checks(localVariable, "My var").isNotNull().name();
        expect(result).toEqual("My var");
    });
    it("name returns the original variable name with a variable", function () {
        var localVariable = "A string";
        var varName = "My var";
        var result = contract.checks(localVariable, varName).isNotNull().name();
        expect(result).toEqual("My var");
    });
});
//# sourceMappingURL=base-validator.spec.js.map