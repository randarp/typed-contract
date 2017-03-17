(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("typedcontract", [], factory);
	else if(typeof exports === 'object')
		exports["typedcontract"] = factory();
	else
		root["typedcontract"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
var BaseValidator = (function () {
    function BaseValidator(variableValue, variableName) {
        var self = this;
        self._variableValue = variableValue;
        if (variableName && variableName.length > 0) {
            self._variableName = variableName;
        }
        else {
            self._variableName = "The variable";
        }
    }
    /**
     * value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    BaseValidator.prototype.value = function () {
        return this._variableValue;
    };
    /**
     * name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    BaseValidator.prototype.name = function () {
        return this._variableName;
    };
    return BaseValidator;
}());
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=base-validator.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../icontract.d.ts" />
/// <reference path="../type-validators/type-validators.d.ts" />

Object.defineProperty(exports, "__esModule", { value: true });
var string_validator_1 = __webpack_require__(6);
var boolean_validator_1 = __webpack_require__(4);
var number_validator_1 = __webpack_require__(5);
var array_validator_1 = __webpack_require__(3);
var any_validator_1 = __webpack_require__(2);
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="type-validators.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_validator_1 = __webpack_require__(0);
var AnyValidator = (function (_super) {
    __extends(AnyValidator, _super);
    function AnyValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    return AnyValidator;
}(base_validator_1.BaseValidator));
exports.AnyValidator = AnyValidator;
//# sourceMappingURL=any-validator.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="type-validators.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_validator_1 = __webpack_require__(0);
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isUndefined = function () {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isEqualTo = function (compareTo, index) {
        if (!compareTo.length || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNotEqualTo = function (compareTo, index) {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                " please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length < compareValue) {
            throw new RangeError(this._variableName + " should have a\n            length greater than " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareValue + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterOrEqualTo = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareValue + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterOrEqualTo = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            throw new RangeError(this._variableName + " should not have a\n             length greater or equal to " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length >= compareValue) {
            throw new RangeError(this._variableName + " should have a length less than " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this._variableName + " should have a length\n        not less than " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessOrEqualThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue) {
            throw new RangeError(this._variableName + " should have a length less or equal\n            to " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessOrEqualThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this._variableName + " should not have a\n             length less or equal to " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the contains function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.contains = function (compareTo) {
        var _this = this;
        var count = 0;
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        var _loop_1 = function (i) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        };
        for (var i = 0; i < compareTo.length; i++) {
            _loop_1(i);
        }
        if (count === 0) {
            throw new RangeError(this._variableName + " should contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    /**
     *
     * notContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the notContains function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.notContains = function (compareTo) {
        var _this = this;
        var count = 0;
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        var _loop_2 = function (i) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        };
        for (var i = 0; i < compareTo.length; i++) {
            _loop_2(i);
        }
        if (count > 0) {
            throw new RangeError(this._variableName + " should not contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    ArrayValidator.prototype.prepareArrayForLengthComparison = function (compareTo, compareValue) {
        if (!this._variableValue.length) {
            throw new RangeError("Can't compare the values length of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (compareTo instanceof Array) {
            if (!compareTo.length) {
                throw new RangeError("Can't compare the length of uninitialized arrays, " +
                    "please append values to the array's in the instance of this TypedContract");
            }
            compareValue = compareTo.length;
        }
        else {
            compareValue = compareTo;
        }
        return compareValue;
    };
    return ArrayValidator;
}(base_validator_1.BaseValidator));
exports.ArrayValidator = ArrayValidator;
//# sourceMappingURL=array-validator.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="type-validators.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_validator_1 = __webpack_require__(0);
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    BooleanValidator.prototype.isNull = function () {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        }
        else {
            throw new ReferenceError(this._variableName + " should be null");
        }
    };
    /**
     *
     * isNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    BooleanValidator.prototype.isNotNull = function () {
        if (this._variableValue == null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isEqualTo = function (compareTo) {
        if (!this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should be equal to the boolean variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the boolean " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isTrue = function () {
        if (this._variableValue === false) {
            throw new RangeError(this._variableName + " should be true");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isFalse = function () {
        if (this._variableValue === true) {
            throw new RangeError(this._variableName + " should be false");
        }
        else {
            return this;
        }
    };
    return BooleanValidator;
}(base_validator_1.BaseValidator));
exports.BooleanValidator = BooleanValidator;
//# sourceMappingURL=boolean-validator.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="type-validators.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_validator_1 = __webpack_require__(0);
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isGreaterThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotGreaterThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater or equal to " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isLessThan = function (compareTo) {
        if (this._variableValue >= compareTo) {
            throw new RangeError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotLessThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isLessOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new ReferenceError(this._variableName + " should be less or equal than " + compareTo + " but is " + this._variableName);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    NumberValidator.prototype.isNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less or equal\n                 than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.isBetween = function (startRange, endRange) {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
        }
    };
    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.isNotBetween = function (startRange, endRange) {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
        }
        else {
            return this;
        }
    };
    return NumberValidator;
}(base_validator_1.BaseValidator));
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=number-validator.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="type-validators.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_validator_1 = __webpack_require__(0);
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * Checks if a string is only whitespace
     * @returns {StringValidator}
     */
    StringValidator.prototype.isWhitespace = function () {
        if (this._variableValue.replace(/^\s+/, "").replace(/\s+$/, "") === "") {
            return this;
        }
        else {
            throw new ReferenceError(this._variableName + " should be all whitespace");
        }
    };
    /**
     * Checks if a string is not only whitespace
     * @returns {StringValidator}
     */
    StringValidator.prototype.isNotWhitespace = function () {
        if (this._variableValue.replace(/^\s+/, "").replace(/\s+$/, "") === "") {
            throw new ReferenceError(this._variableName + " should be all whitespace");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLessThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotLessThan = function (compareTo) {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(this._variableName + " should not be less that " + compareTo + " but is " + this._variableValue + " ");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthGreaterThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length greater\n            than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthNotGreaterThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthNotGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length greater or equal to " + compareTo.length + "\n              but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthLessThan = function (compareTo) {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthNotLessThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(this._variableName + " should have a\n            length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length less\n            or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * toMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    StringValidator.prototype.toMatch = function (regExp) {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should match\n            the pattern " + regExp + " but the value of " + this._variableValue + " does not match");
        }
        else {
            return this;
        }
    };
    /**
     *
     * toNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    StringValidator.prototype.toNotMatch = function (regExp) {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should not match\n            the pattern " + regExp + " but the value of " + this._variableValue + " matches");
        }
        else {
            return this;
        }
    };
    /**
     *
     * contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.contains = function (compareTo) {
        if (this._variableValue.length === 0 && compareTo.length === 0) {
            return this;
        }
        if (compareTo.length === 0 || this._variableValue.indexOf(compareTo) <= -1) {
            throw new RangeError(this._variableName + " should contain\n           the pattern " + compareTo + " but the pattern is not found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * notContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notContains = function (compareTo) {
        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(this._variableName + " should not contain\n           the pattern " + compareTo + " but the pattern is found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * startsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.startsWith = function (compareTo) {
        if ((this._variableValue).lastIndexOf(compareTo, 0) === 0) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should start with " + this._variableValue + ", but " + compareTo + " does not");
        }
    };
    /**
     *
     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notStartsWith = function (compareTo) {
        if ((this._variableValue).lastIndexOf(compareTo, 0) !== 0) {
            throw new RangeError(this._variableName + " should not start with " + compareTo + " but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * endsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.endsWith = function (compareTo) {
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) === -1) {
            throw new RangeError(this._variableName + " should end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notEndsWith = function (compareTo) {
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) !== -1) {
            throw new RangeError(this._variableName + " should not end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isBetween = function (startRange, endRange) {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
        }
    };
    /**
     *
     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotBetween = function (startRange, endRange) {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
        }
        else {
            return this;
        }
    };
    return StringValidator;
}(base_validator_1.BaseValidator));
exports.StringValidator = StringValidator;
//# sourceMappingURL=string-validator.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});
//# sourceMappingURL=typedcontract-lib.js.map