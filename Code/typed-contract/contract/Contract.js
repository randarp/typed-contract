/// <reference path="../IContract.d.ts" />
/// <reference path="../type-validators/TypeValidators.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringValidator_1 = require("../type-validators/StringValidator");
var BooleanValidator_1 = require("../type-validators/BooleanValidator");
var NumberValidator_1 = require("../type-validators/NumberValidator");
var ArrayValidator_1 = require("../type-validators/ArrayValidator");
var AnyValidator_1 = require("../type-validators/AnyValidator");
var Contract = (function () {
    function Contract() {
    }
    Contract.prototype.checks = function (precondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof precondition === "string" || precondition === null || precondition === undefined) {
            return new StringValidator_1.StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean" || precondition === null || precondition === undefined) {
            return new BooleanValidator_1.BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number" || precondition === null || precondition === undefined) {
            return new NumberValidator_1.NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined) {
            return new ArrayValidator_1.ArrayValidator(precondition, name);
        }
        else {
            return new AnyValidator_1.AnyValidator(precondition, name);
        }
    };
    Contract.prototype.ensures = function (postcondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof postcondition === "string" || postcondition === null || postcondition === undefined) {
            return new StringValidator_1.StringValidator(postcondition, name);
        }
        else if (typeof postcondition === "boolean" || postcondition === null || postcondition === undefined) {
            return new BooleanValidator_1.BooleanValidator(postcondition, name);
        }
        else if (typeof postcondition === "number" || postcondition === null || postcondition === undefined) {
            return new NumberValidator_1.NumberValidator(postcondition, name);
        }
        else if (postcondition instanceof Array ||
            postcondition instanceof Array === null ||
            postcondition instanceof Array === undefined) {
            return new ArrayValidator_1.ArrayValidator(postcondition, name);
        }
        else {
            return new AnyValidator_1.AnyValidator(postcondition, name);
        }
    };
    return Contract;
}());
exports.Contract = Contract;
/*
Create a module level variable that exposes the functionality for typed contract
 */
exports.contract = new Contract();
//# sourceMappingURL=Contract.js.map