/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />
/// <reference path="TypeValidators\ObjectValidator.ts" />

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
    export function In<T>(precondition: T): ObjectValidator<T>;
    export function In<T>(precondition: any, name: string = undefined): any {
        if (typeof precondition === "string") {
            return new StringValidator(precondition, name);
        } else if (typeof precondition === "boolean") {
            return new BooleanValidator(precondition, name);
        } else if (typeof precondition === "number") {
            return new NumberValidator(precondition, name);
        } else if (precondition instanceof Array) {
            return new ArrayValidator(precondition, name);
        } /*else if (typeof precondition === T.toString()) {
            return new ObjectValidator<T>(precondition, name);
        }*/

        return undefined;
    }

    /*export function In<T>(precondition:T):ObjectValidator<T>;
    export function In<T>(precondition:T, name:string):ObjectValidator<T>;*/
    /*export function In<T>(precondition: any, name: string = undefined): any {
        return new ObjectValidator<T>(precondition, name);
    }*/

    // todo: Implement out, which is similar to In, but for post-conditions
    /*export function Out(postcondition: any): boolean {
        return true;
    }*/
}

