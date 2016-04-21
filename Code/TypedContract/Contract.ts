/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />
/// <reference path="TypeValidators\AnyValidator.ts" />
/// <reference path="TypeValidators\HTMLValidator.ts"/>

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
    export function In(precondition: HTMLElement): HTMLValidator;
    export function In (precondition: HTMLElement, name: string): HTMLValidator;
    export function In(precondition: any, name: string): AnyValidator;
    export function In(precondition: any): AnyValidator;

    export function In(precondition: any, name: string = undefined): any {

        if (typeof precondition === "string" || precondition === null || precondition === undefined ) {
            return new StringValidator(precondition, name);
        } else if (typeof precondition === "boolean" || precondition === null || precondition === undefined ) {
            return new BooleanValidator(precondition, name);
        } else if (typeof precondition === "number" || precondition === null || precondition === undefined ) {
            return new NumberValidator(precondition, name);
        } else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined ) {
            return new ArrayValidator(precondition, name);
        } else if (precondition.tagName) {
            return new HTMLValidator(precondition, name);
        } else {
            return new AnyValidator(precondition, name);
        }
    }

    export function Out(postcondition: string): StringValidator;
    export function Out(postcondition: string, name: string): StringValidator;
    export function Out(postcondition: boolean): BooleanValidator;
    export function Out(postcondition: boolean, name: string): BooleanValidator;
    export function Out(postcondition: number): NumberValidator;
    export function Out(postcondition: number, name: string): NumberValidator;
    export function Out(postcondition: any[]): ArrayValidator;
    export function Out(postcondition: any[], name: string): ArrayValidator;
    export function Out(postcondition: any, name: string): AnyValidator;
    export function Out(postcondition: any): AnyValidator;
    export function Out(postcondition: HTMLElement): HTMLValidator;
    export function Out(postcondition: HTMLElement, name: string): HTMLValidator;
    export function Out(postcondition: any, name: string = undefined): any {

        if (typeof postcondition === "string" || postcondition === null || postcondition === undefined) {
            return new StringValidator(postcondition, name);
        } else if (typeof postcondition === "boolean" || postcondition === null || postcondition === undefined) {
            return new BooleanValidator(postcondition, name);
        } else if (typeof postcondition === "number" || postcondition === null || postcondition === undefined) {
            return new NumberValidator(postcondition, name);
        } else if (postcondition instanceof Array ||
            postcondition instanceof Array === null ||
            postcondition instanceof Array === undefined) {
            return new ArrayValidator(postcondition, name);
        } else if (postcondition.tagName || postcondition === null || postcondition === undefined) {
            return new HTMLValidator(postcondition, name);
        } else {
            return new AnyValidator(postcondition, name);
        }

    }
}

/*declare var module: any;
module.exports = Contract;
*/