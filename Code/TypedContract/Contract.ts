/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />

module Contract {
    "use strict";

    export function In(precondition: string): StringValidator;
    export function In(precondition: boolean): BooleanValidator;
    export function In(precondition: number): BooleanValidator;
    export function In(precondition: [any]): BooleanValidator;
    export function In(precondition: any): any {
        if (typeof precondition === "string") {
            return new StringValidator();
        } else if (typeof precondition === "boolean") {
            return new BooleanValidator();
        } else if (typeof precondition === "number") {
            return new NumberValidator();
        } else if (precondition instanceof Array) {
            return new ArrayValidator();
        }

        return undefined;
    }

    export function Out(postcondition: any): boolean {
        return true;
    }
}
