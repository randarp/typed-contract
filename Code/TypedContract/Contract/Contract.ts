import { StringValidator } from "../TypeValidators/StringValidator";
import { BooleanValidator } from "../TypeValidators/BooleanValidator";
import { NumberValidator } from "../TypeValidators/NumberValidator";
import { ArrayValidator } from "../TypeValidators/ArrayValidator";
import { AnyValidator } from "../TypeValidators/AnyValidator";

export class Contract {
    public In(precondition:string):StringValidator;
    public In(precondition:string, name:string):StringValidator;
    public In(precondition:boolean):BooleanValidator;
    public In(precondition:boolean, name:string):BooleanValidator;
    public In(precondition:number):NumberValidator;
    public In(precondition:number, name:string):NumberValidator;
    public In(precondition:any[]):ArrayValidator;
    public In(precondition:any[], name:string):ArrayValidator;
    public In(precondition:any, name:string):AnyValidator;
    public In(precondition:any):AnyValidator;
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

    public Out(postcondition:string):StringValidator;
    public Out(postcondition:string, name:string):StringValidator;
    public Out(postcondition:boolean):BooleanValidator;
    public Out(postcondition:boolean, name:string):BooleanValidator;
    public Out(postcondition:number):NumberValidator;
    public Out(postcondition:number, name:string):NumberValidator;
    public Out(postcondition:any[]):ArrayValidator;
    public Out(postcondition:any[], name:string):ArrayValidator;
    public Out(postcondition:any, name:string):AnyValidator;
    public Out(postcondition:any):AnyValidator;
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
Createa a module level variable as a shortcut 
 */
export var contract: Contract = new Contract();


