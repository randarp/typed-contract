var Contract;
(function (Contract) {
    function In(precondition) {
        return false;
    }
    Contract.In = In;
    function Out(postcondition) {
        return true;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
/// <reference path="..\TypedContract\Contract.ts" />
/// <reference path="..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
describe("Contract", function () {
    it("will always be true", function () {
        // Assert
        expect(true).toBe(true);
    });
    xit("will call code in the source", function () {
        // Arrange
        var localVariable = 0;
        // Act
        var result = Contract.In(localVariable);
        // Assert
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=typed-contract.js.map