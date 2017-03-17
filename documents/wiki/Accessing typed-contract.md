Typed-contract has been created as a Universal Module Definition ([UMD](https://github.com/umdjs/umd)).  This means you can access the library as a global variable, AMD or Node/CommonJS.  It should be noted that you do have to pick one and cannot use them in parallel unless the scope and how you reference it is different.

## Global scope
There is a global variable that has been instantiated that you can access the contracts.  For example: 

### JavaScript

#### String validator
	var localVariable = "A string";
	var result = contract.In(localVariable).isNotNull();

#### Number validator
	var localVar = 99.9;
	var startRange = 0.00;
	var endRange = 100.0;
	var result = contract.In(localVar).isBetween(startRange, endRange);

### TypeScript

#### Boolean validator
	/// <reference path="../typedcontract.d.ts" />

    let localVariable: boolean = true;
    contract.In(localVariable).isTrue();

#### Any validator
	/// <reference path="../typedcontract.d.ts" />

	let divElement: HTMLElement = document.createElement("div");
	let localVar: void = divElement.addEventListener("click", (e: MouseEvent) => {e.preventDefault(); }, false);
	let result: IAnyValidator = contract.In(localVar).isNotNull();

## Module

### JavaScript
There is a module called “typedcontract” that can be accessed using either the require or define syntax.

#### Boolean validator
	var localVariable = true;
	var typedcontract = require("typedcontract");
	var result = typedcontract.contract.In(localVariable).isTrue();

#### Array validator
	define(['typedcontract'], function(typedcontract) {
		describe("typed-contract with module syntax RequireJS via JavaScript", function() {
			it("IsNotNull returns the right validator with a string array", function() {
				// arrange
				var localVariable = ["A", "B", "C"];

				// act
				var result = typedcontract.contract.In(localVariable).isNotNull();

				// assert
				expect(result).not.toBeNull();
			});
		});
	});

### TypeScript
	/// <reference path="../typedcontract.d.ts" />

	import { contract } from "typedcontract";

    let localVariable: number = 2.05;
    let comparableVar: number = 1;

    let result: INumberValidator = contract.In(localVariable).isGreaterThan(comparableVar);