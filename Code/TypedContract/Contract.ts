/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />

module Contract {

    export function In(precondition:string):StringValidator;
    export function In(precondition:boolean):BooleanValidator;
    export function In(precondition:any):any{
        if (typeof precondition == "string") {
            return new StringValidator();
        }
        else if (typeof precondition == "boolean") {
            return new BooleanValidator();
        }

        return null;
    }

    export function Out(postcondition:any):boolean {
        return true;
    }
}