/// <reference path="../icontract.d.ts" />
/// <reference path="../type-validators/type-validators.d.ts" />

import { StringValidator } from "../type-validators/string-validator";
import { BooleanValidator } from "../type-validators/boolean-validator";
import { NumberValidator } from "../type-validators/number-validator";
import { ArrayValidator } from "../type-validators/array-validator";
import { AnyValidator } from "../type-validators/any-validator";

export class Contract implements IContractStatic {
    public checks(precondition:string): IStringValidator;
    public checks(precondition:string, name:string): IStringValidator;
    public checks(precondition:boolean): IBooleanValidator;
    public checks(precondition:boolean, name:string): IBooleanValidator;
    public checks(precondition:number): INumberValidator;
    public checks(precondition:number, name:string): INumberValidator;
    public checks(precondition:any[]): IArrayValidator;
    public checks(precondition:any[], name:string): IArrayValidator;
    public checks(precondition:any, name:string): IAnyValidator;
    public checks(precondition:any): IAnyValidator;
    public checks(precondition:any, name:string = undefined):any {

        if (typeof precondition === "string" || precondition === null || precondition === undefined) {
            return new StringValidator(precondition, name);
        } else if (typeof precondition === "boolean" || precondition === null || precondition === undefined) {
            return new BooleanValidator(precondition, name);
        } else if (typeof precondition === "number" || precondition === null || precondition === undefined) {
            return new NumberValidator(precondition, name);
        } else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined) {
            return new ArrayValidator(precondition, name);
        } else {
            return new AnyValidator(precondition, name);
        }
    }

    public ensures(postcondition:string): IStringValidator;
    public ensures(postcondition:string, name:string): IStringValidator;
    public ensures(postcondition:boolean): IBooleanValidator;
    public ensures(postcondition:boolean, name:string): IBooleanValidator;
    public ensures(postcondition:number): INumberValidator;
    public ensures(postcondition:number, name:string): INumberValidator;
    public ensures(postcondition:any[]): IArrayValidator;
    public ensures(postcondition:any[], name:string): IArrayValidator;
    public ensures(postcondition:any, name:string): IAnyValidator;
    public ensures(postcondition:any):IAnyValidator;
    public ensures(postcondition:any, name:string = undefined):any {

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
        } else {
            return new AnyValidator(postcondition, name);
        }
    }
}

/*
Create a module level variable that exposes the functionality for typed contract
 */

export var contract: IContractStatic = new Contract();


