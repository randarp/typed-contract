/// <reference path="../icontract.d.ts" />
/// <reference path="../type-validators/type-validators.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_validator_1 = require("../type-validators/string-validator");
var boolean_validator_1 = require("../type-validators/boolean-validator");
var number_validator_1 = require("../type-validators/number-validator");
var array_validator_1 = require("../type-validators/array-validator");
var any_validator_1 = require("../type-validators/any-validator");
var Contract = (function () {
    function Contract() {
    }
    Contract.prototype.In = function (precondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof precondition === "string" || precondition === null || precondition === undefined) {
            return new string_validator_1.StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean" || precondition === null || precondition === undefined) {
            return new boolean_validator_1.BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number" || precondition === null || precondition === undefined) {
            return new number_validator_1.NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined) {
            return new array_validator_1.ArrayValidator(precondition, name);
        }
        else {
            return new any_validator_1.AnyValidator(precondition, name);
        }
    };
    Contract.prototype.Out = function (postcondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof postcondition === "string" || postcondition === null || postcondition === undefined) {
            return new string_validator_1.StringValidator(postcondition, name);
        }
        else if (typeof postcondition === "boolean" || postcondition === null || postcondition === undefined) {
            return new boolean_validator_1.BooleanValidator(postcondition, name);
        }
        else if (typeof postcondition === "number" || postcondition === null || postcondition === undefined) {
            return new number_validator_1.NumberValidator(postcondition, name);
        }
        else if (postcondition instanceof Array ||
            postcondition instanceof Array === null ||
            postcondition instanceof Array === undefined) {
            return new array_validator_1.ArrayValidator(postcondition, name);
        }
        else {
            return new any_validator_1.AnyValidator(postcondition, name);
        }
    };
    return Contract;
}());
exports.Contract = Contract;
/*
Create a module level variable that exposes the functionality for typed contract
 */
exports.contract = new Contract();
//# sourceMappingURL=contract.js.map