"use strict";
var stringvalidator = require("../TypeValidators/StringValidator");
var booleanvalidator = require("../TypeValidators/BooleanValidator");
var numbervalidator = require("../TypeValidators/NumberValidator");
var arrayvalidator = require("../TypeValidators/ArrayValidator");
var anyvalidator = require("../TypeValidators/AnyValidator");
var Contract = (function () {
    function Contract() {
    }
    Contract.prototype.In = function (precondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof precondition === "string" || precondition === null || precondition === undefined) {
            return new stringvalidator.StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean" || precondition === null || precondition === undefined) {
            return new booleanvalidator.BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number" || precondition === null || precondition === undefined) {
            return new numbervalidator.NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined) {
            return new arrayvalidator.ArrayValidator(precondition, name);
        }
        else {
            return new anyvalidator.AnyValidator(precondition, name);
        }
    };
    Contract.prototype.Out = function (postcondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof postcondition === "string" || postcondition === null || postcondition === undefined) {
            return new stringvalidator.StringValidator(postcondition, name);
        }
        else if (typeof postcondition === "boolean" || postcondition === null || postcondition === undefined) {
            return new booleanvalidator.BooleanValidator(postcondition, name);
        }
        else if (typeof postcondition === "number" || postcondition === null || postcondition === undefined) {
            return new numbervalidator.NumberValidator(postcondition, name);
        }
        else if (postcondition instanceof Array ||
            postcondition instanceof Array === null ||
            postcondition instanceof Array === undefined) {
            return new arrayvalidator.ArrayValidator(postcondition, name);
        }
        else {
            return new anyvalidator.AnyValidator(postcondition, name);
        }
    };
    Contract.prototype.foo5 = function () {
        return "foo";
    };
    ;
    return Contract;
}());
exports.Contract = Contract;
//# sourceMappingURL=Contract.js.map