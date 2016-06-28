(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("typed-contract", [], factory);
	else if(typeof exports === 'object')
		exports["typed-contract"] = factory();
	else
		root["typed-contract"] = factory();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StringValidator_1 = __webpack_require__(2);
	var BooleanValidator_1 = __webpack_require__(4);
	var NumberValidator_1 = __webpack_require__(5);
	var ArrayValidator_1 = __webpack_require__(6);
	var AnyValidator_1 = __webpack_require__(7);
	var Contract = (function () {
	    function Contract() {
	    }
	    Contract.prototype.In = function (precondition, name) {
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
	    Contract.prototype.Out = function (postcondition, name) {
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
	    Contract.prototype.foo7 = function () {
	        return "foo";
	    };
	    ;
	    return Contract;
	}());
	exports.Contract = Contract;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseValidator_1 = __webpack_require__(3);
	var StringValidator = (function (_super) {
	    __extends(StringValidator, _super);
	    function StringValidator(variableValue, variableName) {
	        _super.call(this, variableValue, variableName);
	    }
	    /**
	     *
	     * IsNotNull checks if the string variable is not null
	     * @throws a ReferenceError if the variable is null
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNotNull = function () {
	        if (this._variableValue === null) {
	            throw new ReferenceError(this._variableName + " should not be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNull checks if the string variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNull = function () {
	        if (this._variableValue !== null) {
	            throw new ReferenceError(this._variableName + " should be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsDefined checks if the string variable is defined
	     * @throws ReferenceError if the string is not defined
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsDefined = function () {
	        if (typeof this._variableValue === "undefined") {
	            throw new ReferenceError(this._variableName + " should be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNotDefined checks if the string variable is not defined
	     * @throws ReferenceError if variable is defined
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsUndefined = function () {
	        if (typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should not be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNullOrUndefined checks if a string variable is not null or undefined
	     * @throws ReferenceError if a string variable is null or not undefined
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNullOrUndefined = function () {
	        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should not be null or undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsEqualTo = function (compareTo) {
	        if (this._variableValue !== compareTo) {
	            throw new RangeError(this._variableName + " should be equal to the string variable " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNotEqualTo = function (compareTo) {
	        if (this._variableValue === compareTo) {
	            throw new RangeError(this._variableName + " should not be equal to the string variable " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsLessThan = function (compareTo) {
	        if (this._variableValue.length > compareTo.length) {
	            throw new ReferenceError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not less than to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNotLessThan = function (compareTo) {
	        if (this._variableValue.length < compareTo.length) {
	            throw new ReferenceError(this._variableName + " should not be less that " + compareTo + " but is " + this._variableValue + " ");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsLengthGreaterThan = function (compareTo) {
	        if (this._variableValue.length <= compareTo.length) {
	            throw new RangeError(this._variableName + " should have a length greater\n            than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
	     * to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
	        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	    };
	    /**
	     *
	     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
	        if (this._variableValue.length <= compareTo.length) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	    };
	    /**
	     *
	     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
	        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
	            throw new RangeError(this._variableName + " should not have a length greater or equal to " + compareTo.length + "\n              but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     *
	     */
	    StringValidator.prototype.IsLengthLessThan = function (compareTo) {
	        if (this._variableValue.length >= compareTo.length) {
	            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     *
	     */
	    StringValidator.prototype.IsLengthNotLessThan = function (compareTo) {
	        if (this._variableValue.length <= compareTo.length) {
	            throw new RangeError(this._variableName + " should not have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater than the comparable passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     *
	     */
	    StringValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
	        if (this._variableValue.length > compareTo.length) {
	            throw new RangeError(this._variableName + " should have a\n            length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is less or equal than the comparable passed into the function
	     * @param compareTo
	     * @returns {StringValidator}
	     *
	     */
	    StringValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
	        if (this._variableValue.length <= compareTo.length) {
	            throw new RangeError(this._variableName + " should not have a length less\n            or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * ToMatch checks if the regular expression passed into the function matches the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.ToMatch = function (regExp) {
	        if (!regExp.test(this._variableValue)) {
	            throw new RangeError(this._variableName + " should match\n            the pattern " + regExp + " but the value of " + this._variableValue + " does not match");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * ToNotMatch checks if the regular expression passed into the function does not match the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.ToNotMatch = function (regExp) {
	        if (regExp.test(this._variableValue)) {
	            throw new RangeError(this._variableName + " should not match\n            the pattern " + regExp + " but the value of " + this._variableValue + " matches");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * Contains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does match the values in the precondition
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.Contains = function (compareTo) {
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
	     * NotContains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.NotContains = function (compareTo) {
	        if (this._variableValue.indexOf(compareTo) > -1) {
	            throw new RangeError(this._variableName + " should not contain\n           the pattern " + compareTo + " but the pattern is found in " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * StartsWith checks if the precondition in the TypedContract has the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.StartsWith = function (compareTo) {
	        if ((this._variableValue).lastIndexOf(compareTo, 0) === 0) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should start with " + this._variableValue + ", but " + compareTo + " does not");
	        }
	    };
	    /**
	     *
	     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.NotStartsWith = function (compareTo) {
	        if ((this._variableValue).lastIndexOf(compareTo, 0) !== 0) {
	            throw new RangeError(this._variableName + " should not start with " + compareTo + " but " + this._variableValue + " does not");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * EndsWith checks if the precondition in the TypedContract has the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.EndsWith = function (compareTo) {
	        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) === -1) {
	            throw new RangeError(this._variableName + " should end with " + compareTo + ", but " + this._variableValue + " does not");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
	     * @param compareTo
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.NotEndsWith = function (compareTo) {
	        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) !== -1) {
	            throw new RangeError(this._variableName + " should not end with " + compareTo + ", but " + this._variableValue + " does not");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
	     * starting and ending range
	     * @param startRange, endRange
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsBetween = function (startRange, endRange) {
	        if (this._variableValue > startRange && this._variableValue < endRange) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
	        }
	    };
	    /**
	     *
	     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is in between the
	     * starting and ending range
	     * @param startRange, endRange
	     * @returns {StringValidator}
	     */
	    StringValidator.prototype.IsNotBetween = function (startRange, endRange) {
	        if (this._variableValue > startRange && this._variableValue < endRange) {
	            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
	        }
	        else {
	            return this;
	        }
	    };
	    return StringValidator;
	}(BaseValidator_1.BaseValidator));
	exports.StringValidator = StringValidator;
	//# sourceMappingURL=StringValidator.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
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
	     * Value returns the value that was passed into the contract
	     * @returns {T}
	     * @constructor
	     */
	    BaseValidator.prototype.Value = function () {
	        return this._variableValue;
	    };
	    /**
	     * Name returns the variable name that was passed into the contract
	     * @returns {string}
	     * @constructor
	     */
	    BaseValidator.prototype.Name = function () {
	        return this._variableName;
	    };
	    return BaseValidator;
	}());
	exports.BaseValidator = BaseValidator;
	//# sourceMappingURL=BaseValidator.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseValidator_1 = __webpack_require__(3);
	var BooleanValidator = (function (_super) {
	    __extends(BooleanValidator, _super);
	    function BooleanValidator(variableValue, variableName) {
	        _super.call(this, variableValue, variableName);
	    }
	    /**
	     *
	     * IsNull checks if the boolean variable is null
	     * @throws a ReferenceError if the variable is not null
	     */
	    BooleanValidator.prototype.IsNull = function () {
	        if (this._variableValue === null && typeof this._variableValue === "object") {
	            return this;
	        }
	        else {
	            throw new ReferenceError(this._variableName + " should be null");
	        }
	    };
	    /**
	     *
	     * IsNotNull checks if the boolean variable is not null
	     * @throws a ReferenceError if the variable is null
	     */
	    BooleanValidator.prototype.IsNotNull = function () {
	        if (this._variableValue == null) {
	            throw new ReferenceError(this._variableName + " should not be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsDefined checks if the boolean variable is defined
	     * @throws a ReferenceError if the boolen variable is undefined
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsDefined = function () {
	        if (typeof this._variableValue === "undefined") {
	            throw new ReferenceError(this._variableName + " should be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsUndefined checks if the boolean variable is undefined
	     * @throws ReferenceError if the boolean variable is defined
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsUndefined = function () {
	        if (typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should be undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNullOrUndefined checks if the boolean variable is not null or undefined
	     * @throws ReferenceError if the boolean variable is null or undefined
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsNullOrUndefined = function () {
	        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should be null or undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsEqualTo = function (compareTo) {
	        if (!this._variableValue === compareTo) {
	            throw new RangeError(this._variableName + " should be equal to the boolean variable " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsNotEqualTo = function (compareTo) {
	        if (this._variableValue === compareTo) {
	            throw new RangeError(this._variableName + " should not be equal to the boolean " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsTrue checks if the boolean variable is true
	     * @throws RangeError if the boolean variable is false
	     * @param compareTo
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsTrue = function () {
	        if (this._variableValue === false) {
	            throw new RangeError(this._variableName + " should be true");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsFalse checks if the boolean variable is false
	     * @throws RangeError if the boolean variable is alse
	     * @param compareTo
	     * @returns {BooleanValidator}
	     */
	    BooleanValidator.prototype.IsFalse = function () {
	        if (this._variableValue === true) {
	            throw new RangeError(this._variableName + " should be false");
	        }
	        else {
	            return this;
	        }
	    };
	    ;
	    return BooleanValidator;
	}(BaseValidator_1.BaseValidator));
	exports.BooleanValidator = BooleanValidator;
	//# sourceMappingURL=BooleanValidator.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseValidator_1 = __webpack_require__(3);
	var NumberValidator = (function (_super) {
	    __extends(NumberValidator, _super);
	    function NumberValidator(variableValue, variableName) {
	        _super.call(this, variableValue, variableName);
	    }
	    /**
	     *
	     * IsNotNull checks if the type number variable is not null
	     * @throws a ReferenceError if the variable is null
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotNull = function () {
	        if (this._variableValue === null) {
	            throw new ReferenceError(this._variableName + " should not be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNull checks if the string variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNull = function () {
	        if (this._variableValue !== null) {
	            throw new ReferenceError(this._variableName + " should be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsDefined checks if the number variable is defined
	     * @throws ReferenceError if the number variable jis not defined
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsDefined = function () {
	        if (typeof this._variableValue === "undefined") {
	            throw new ReferenceError(this._variableName + " should be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsUndefined checks if the number variable is undefined
	     * @throws a ReferenceError if the number variable is undefined
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsUndefined = function () {
	        if (typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should not be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNullOrUndefined checks if the number variable is not null or undefined
	     * @throws ReferenceError if the number variable is null or undefined
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNullOrUndefined = function () {
	        if (this._variableValue === null || typeof this._variableValue === undefined) {
	            throw new ReferenceError(this._variableName + " should not be null or undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsEqualTo = function (compareTo) {
	        if (this._variableValue !== compareTo) {
	            throw new RangeError(this._variableName + " should be equal to the number variable " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotEqualTo = function (compareTo) {
	        if (this._variableValue === compareTo) {
	            throw new RangeError(this._variableName + " should not be equal to the number variable " + compareTo);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsGreaterThan = function (compareTo) {
	        if (this._variableValue < compareTo) {
	            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotGreaterThan = function (compareTo) {
	        if (this._variableValue > compareTo) {
	            throw new RangeError(this._variableName + " should not be greater than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsGreaterOrEqualThan = function (compareTo) {
	        if (this._variableValue < compareTo) {
	            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
	     * parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotGreaterOrEqualThan = function (compareTo) {
	        if (this._variableValue > compareTo) {
	            throw new RangeError(this._variableName + " should not be greater or equal to " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsLessThan = function (compareTo) {
	        if (this._variableValue >= compareTo) {
	            throw new RangeError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotLessThan = function (compareTo) {
	        if (this._variableValue <= compareTo) {
	            throw new RangeError(this._variableName + " should not be less than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsLessOrEqualThan = function (compareTo) {
	        if (this._variableValue > compareTo) {
	            throw new ReferenceError(this._variableName + " should be less or equal than " + compareTo + " but is " + this._variableName);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @returns {NumberValidator}
	     */
	    NumberValidator.prototype.IsNotLessOrEqualThan = function (compareTo) {
	        if (this._variableValue <= compareTo) {
	            throw new RangeError(this._variableName + " should not be less or equal\n                 than " + compareTo + " but is " + this._variableValue);
	        }
	        else {
	            return this;
	        }
	    };
	    NumberValidator.prototype.IsBetween = function (startRange, endRange) {
	        if (this._variableValue > startRange && this._variableValue < endRange) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
	        }
	    };
	    NumberValidator.prototype.IsNotBetween = function (startRange, endRange) {
	        if (this._variableValue > startRange && this._variableValue < endRange) {
	            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
	        }
	        else {
	            return this;
	        }
	    };
	    return NumberValidator;
	}(BaseValidator_1.BaseValidator));
	exports.NumberValidator = NumberValidator;
	//# sourceMappingURL=NumberValidator.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseValidator_1 = __webpack_require__(3);
	var ArrayValidator = (function (_super) {
	    __extends(ArrayValidator, _super);
	    function ArrayValidator(variableValue, variableName) {
	        _super.call(this, variableValue, variableName);
	    }
	    /**
	     *
	     * IsNull Checks if the array variable is null
	     * @throws ReferenceError if the variable is not null
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsNull = function () {
	        if (this._variableValue !== null) {
	            throw new ReferenceError(this._variableName + " should be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNotNull checks if the array variable is not null
	     * @throws ReferenceError if the variable is null
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsNotNull = function () {
	        if (this._variableValue === null) {
	            throw new ReferenceError(this._variableName + " should not be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsDefined checks if the array variable is defined
	     * @throws ReferenceError if the array variable is undefined
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsDefined = function () {
	        if (typeof this._variableValue === "undefined") {
	            throw new ReferenceError(this._variableName + " should be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsUndefined checks if the array variable is undefined
	     * @throws ReferenceError if the array variable is defined
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsUndefined = function () {
	        if (this._variableValue !== undefined) {
	            throw new ReferenceError(this._variableName + " should be undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNullOrUndefined checks if the array variable is not null or undefined
	     * @throws ReferenceError if the array variable is null or undefined
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsNullOrUndefined = function () {
	        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should be null or undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
	     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsEqualTo = function (compareTo, index) {
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
	     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
	     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsNotEqualTo = function (compareTo, index) {
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
	     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
	     * @throws RangeError if the array is not greater than the parameter passed into the function
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthGreaterThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length < compareTo.length) {
	            throw new RangeError(this._variableName + " should have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length <= compareTo.length) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	    };
	    /**
	     *
	     * IsLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not
	     * greater or equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays," +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
	            return this;
	        }
	        else {
	            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	    };
	    /**
	     *
	     * IsLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays," +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
	            throw new RangeError(this._variableName + " should not have a\n             length greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthLessThan checks if the array variable's length is less than the length of the contract precondition
	     * @throws RangeError if the array variable is greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthLessThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length >= compareTo.length) {
	            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
	     * @throws RangeError if the array variable is less than or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthNotLessThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length <= compareTo.length) {
	            throw new RangeError(this._variableName + " should have a length\n        not less than " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length > compareTo.length) {
	            throw new RangeError(this._variableName + " should have a length less or equal\n            to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is less or equal than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
	                "please append values to the array's in the instance of this TypedContract");
	        }
	        if (this._variableValue.length <= compareTo.length) {
	            throw new RangeError(this._variableName + " should not have a\n             length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * Contains checks if the array variable's values contains one or more values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does not contain any of the values
	     *  passed into the instance of the TypedContract using the Contains function
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.Contains = function (compareTo) {
	        var _this = this;
	        this.count = 0;
	        if (!compareTo.length || !this._variableValue.length) {
	            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
	        }
	        for (var i = 0; i < compareTo.length; i++) {
	            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
	                this.count++;
	            }
	        }
	        if (this.count === 0) {
	            throw new RangeError(this._variableName + " should contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
	        }
	        return this;
	    };
	    /**
	     *
	     * NotContains checks if the array variable's values does not contain any values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does contain any of the values
	     *  passed into the instance of the TypedContract using the NotContains function
	     * @param compareTo
	     * @returns { ArrayValidator}
	     */
	    ArrayValidator.prototype.NotContains = function (compareTo) {
	        var _this = this;
	        this.count = 0;
	        if (compareTo.length === 0 || this._variableValue.length === 0) {
	            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
	        }
	        for (var i = 0; i < compareTo.length; i++) {
	            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
	                this.count++;
	            }
	        }
	        if (this.count > 0) {
	            throw new RangeError(this._variableName + " should not contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
	        }
	        return this;
	    };
	    return ArrayValidator;
	}(BaseValidator_1.BaseValidator));
	exports.ArrayValidator = ArrayValidator;
	//# sourceMappingURL=ArrayValidator.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseValidator_1 = __webpack_require__(3);
	var AnyValidator = (function (_super) {
	    __extends(AnyValidator, _super);
	    function AnyValidator(variableValue, variableName) {
	        _super.call(this, variableValue, variableName);
	    }
	    /**
	     *
	     * IsNotNull checks if the type any variable is not null
	     * @throws a ReferenceError if the any is null
	     * @returns {AnyValidator}
	     */
	    AnyValidator.prototype.IsNotNull = function () {
	        if (this._variableValue === null) {
	            throw new ReferenceError(this._variableName + " should not be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     *
	     * IsNull checks if the any variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {AnyValidator}
	     */
	    AnyValidator.prototype.IsNull = function () {
	        if (this._variableValue !== null) {
	            throw new ReferenceError(this._variableName + " should be null");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsDefined checks if the any variable is defined
	     * @throws ReferenceError if the any variable jis not defined
	     * @returns {AnyValidator}
	     */
	    AnyValidator.prototype.IsDefined = function () {
	        if (typeof this._variableValue === "undefined") {
	            throw new ReferenceError(this._variableName + " should be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsUndefined checks if the any variable is undefined
	     * @throws a ReferenceError if the any variable is undefined
	     * @returns {AnyValidator}
	     */
	    AnyValidator.prototype.IsUndefined = function () {
	        if (typeof this._variableValue !== "undefined") {
	            throw new ReferenceError(this._variableName + " should not be defined");
	        }
	        else {
	            return this;
	        }
	    };
	    /**
	     * IsNullOrUndefined checks if the any variable is not null or undefined
	     * @throws ReferenceError if the any variable is null or undefined
	     * @returns {AnyValidator}
	     */
	    AnyValidator.prototype.IsNullOrUndefined = function () {
	        if (this._variableValue === null || typeof this._variableValue === undefined) {
	            throw new ReferenceError(this._variableName + " should not be null or undefined");
	        }
	        else {
	            return this;
	        }
	    };
	    return AnyValidator;
	}(BaseValidator_1.BaseValidator));
	exports.AnyValidator = AnyValidator;
	//# sourceMappingURL=AnyValidator.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=typed-contract.js.map