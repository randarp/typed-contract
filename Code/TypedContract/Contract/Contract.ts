/// <reference path="../IContract.d.ts" />
/// <reference path="../TypeValidators/TypeValidators.d.ts" />

import { StringValidator } from "../TypeValidators/StringValidator";
import { BooleanValidator } from "../TypeValidators/BooleanValidator";
import { NumberValidator } from "../TypeValidators/NumberValidator";
import { ArrayValidator } from "../TypeValidators/ArrayValidator";
import { AnyValidator } from "../TypeValidators/AnyValidator";

export class Contract implements IContractStatic {
    public In(precondition:string): IStringValidator;
    public In(precondition:string, name:string): IStringValidator;
    public In(precondition:boolean): IBooleanValidator;
    public In(precondition:boolean, name:string): IBooleanValidator;
    public In(precondition:number): INumberValidator;
    public In(precondition:number, name:string): INumberValidator;
    public In(precondition:any[]): IArrayValidator;
    public In(precondition:any[], name:string): IArrayValidator;
    public In(precondition:any, name:string): IAnyValidator;
    public In(precondition:any): IAnyValidator;
    public In(precondition:any, name:string = undefined):any {

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

    public Out(postcondition:string): IStringValidator;
    public Out(postcondition:string, name:string): IStringValidator;
    public Out(postcondition:boolean): IBooleanValidator;
    public Out(postcondition:boolean, name:string): IBooleanValidator;
    public Out(postcondition:number): INumberValidator;
    public Out(postcondition:number, name:string): INumberValidator;
    public Out(postcondition:any[]): IArrayValidator;
    public Out(postcondition:any[], name:string): IArrayValidator;
    public Out(postcondition:any, name:string): IAnyValidator;
    public Out(postcondition:any):IAnyValidator;
    public Out(postcondition:any, name:string = undefined):any {

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


