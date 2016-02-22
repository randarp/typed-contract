/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />

module Contract {
    "use strict";

    export function In(precondition: string): StringValidator;
    export function In(precondition: string, name: string): StringValidator;
    export function In(precondition: boolean): BooleanValidator;
    export function In(precondition: boolean, name: string): BooleanValidator;
    export function In(precondition: number): NumberValidator;
    export function In(precondition: number, name: string): NumberValidator;
    export function In(precondition: any[]): ArrayValidator;
    export function In(precondition: any[], name: string): ArrayValidator;

    export function In(precondition:any, name:string = undefined):any {

        if (typeof precondition === "string" || precondition === null || precondition === undefined ) {
            return new StringValidator(precondition, name);
        } else if (typeof precondition === "boolean" || precondition === null || precondition === undefined ) {
            return new BooleanValidator(precondition, name);
        } else if (typeof precondition === "number" || precondition === null || precondition === undefined ) {
            return new NumberValidator(precondition, name);
        } else if (precondition instanceof Array || precondition instanceof Array === null || precondition instanceof Array === undefined ) {
            return new ArrayValidator(precondition, name);
        }

        return undefined;
    }

    export function Out(postcondition:any):boolean {
        return true;
    }
}