/// <reference path="../IContract.d.ts" />
/// <reference path="../TypeValidators/TypeValidators.d.ts" />

import { StringValidator } from "../TypeValidators/StringValidator";
import { BooleanValidator } from "../TypeValidators/BooleanValidator";
import { NumberValidator } from "../TypeValidators/NumberValidator";
import { ArrayValidator } from "../TypeValidators/ArrayValidator";
import { AnyValidator } from "../TypeValidators/AnyValidator";

export class Contract implements IContractStatic {
    public pre(precondition:string): IStringValidator;
    public pre(precondition:string, name:string): IStringValidator;
    public pre(precondition:boolean): IBooleanValidator;
    public pre(precondition:boolean, name:string): IBooleanValidator;
    public pre(precondition:number): INumberValidator;
    public pre(precondition:number, name:string): INumberValidator;
    public pre(precondition:any[]): IArrayValidator;
    public pre(precondition:any[], name:string): IArrayValidator;
    public pre(precondition:any, name:string): IAnyValidator;
    public pre(precondition:any): IAnyValidator;
    public pre(precondition:any, name:string = undefined):any {

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


