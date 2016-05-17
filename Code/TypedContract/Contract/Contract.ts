import * as stringvalidator from "../TypeValidators/StringValidator";
import * as booleanvalidator from "../TypeValidators/BooleanValidator";
import * as numbervalidator from "../TypeValidators/NumberValidator";
import * as arrayvalidator from "../TypeValidators/ArrayValidator";
import * as anyvalidator from "../TypeValidators/AnyValidator";

export interface IContractStatic {
    In(precondition: string): stringvalidator.StringValidator;
    In(precondition: string, name: string): stringvalidator.StringValidator;
    In(precondition: boolean): booleanvalidator.BooleanValidator;
    In(precondition: boolean, name: string): booleanvalidator.BooleanValidator;
    In(precondition: number): numbervalidator.NumberValidator;
    In(precondition: number, name: string): numbervalidator.NumberValidator;
    In(precondition: any[]): arrayvalidator.ArrayValidator;
    In(precondition: any[], name: string): arrayvalidator.ArrayValidator;
    In(precondition: any, name: string): anyvalidator.AnyValidator;
    In(precondition: any): anyvalidator.AnyValidator;
    In(precondition: any, name: string): any;

    Out(postcondition: string): stringvalidator.StringValidator;
    Out(postcondition: string, name: string): stringvalidator.StringValidator;
    Out(postcondition: boolean): booleanvalidator.BooleanValidator;
    Out(postcondition: boolean, name: string): booleanvalidator.BooleanValidator;
    Out(postcondition: number): numbervalidator.NumberValidator;
    Out(postcondition: number, name: string): numbervalidator.NumberValidator;
    Out(postcondition: any[]): arrayvalidator.ArrayValidator;
    Out(postcondition: any[], name: string): arrayvalidator.ArrayValidator;
    Out(postcondition: any, name: string): anyvalidator.AnyValidator;
    Out(postcondition: any): anyvalidator.AnyValidator;
    Out(postcondition: any, name: string): any;
}

 export class Contract implements IContractStatic {
     public In(precondition: string): stringvalidator.StringValidator;
     public In(precondition: string, name: string): stringvalidator.StringValidator;
     public In(precondition: boolean): booleanvalidator.BooleanValidator;
     public In(precondition: boolean, name: string): booleanvalidator.BooleanValidator;
     public In(precondition: number): numbervalidator.NumberValidator;
     public In(precondition: number, name: string): numbervalidator.NumberValidator;
     public In(precondition: any[]): arrayvalidator.ArrayValidator;
     public In(precondition: any[], name: string): arrayvalidator.ArrayValidator;
     public In(precondition: any, name: string): anyvalidator.AnyValidator;
     public In(precondition: any): anyvalidator.AnyValidator;
     public In(precondition: any, name: string = undefined): any {

        if (typeof precondition === "string" || precondition === null || precondition === undefined ) {
            return new stringvalidator.StringValidator(precondition, name);
        } else if (typeof precondition === "boolean" || precondition === null || precondition === undefined ) {
            return new booleanvalidator.BooleanValidator(precondition, name);
        } else if (typeof precondition === "number" || precondition === null || precondition === undefined ) {
            return new numbervalidator.NumberValidator(precondition, name);
        } else if (precondition instanceof Array ||
            precondition instanceof Array === null
            || precondition instanceof Array === undefined ) {
            return new arrayvalidator.ArrayValidator(precondition, name);
        } else {
            return new anyvalidator.AnyValidator(precondition, name);
        }
    }

     public Out(postcondition: string): stringvalidator.StringValidator;
     public Out(postcondition: string, name: string): stringvalidator.StringValidator;
     public Out(postcondition: boolean): booleanvalidator.BooleanValidator;
     public Out(postcondition: boolean, name: string): booleanvalidator.BooleanValidator;
     public Out(postcondition: number): numbervalidator.NumberValidator;
     public Out(postcondition: number, name: string): numbervalidator.NumberValidator;
     public Out(postcondition: any[]): arrayvalidator.ArrayValidator;
     public Out(postcondition: any[], name: string): arrayvalidator.ArrayValidator;
     public Out(postcondition: any, name: string): anyvalidator.AnyValidator;
     public Out(postcondition: any): anyvalidator.AnyValidator;
     public Out(postcondition: any, name: string = undefined): any {

        if (typeof postcondition === "string" || postcondition === null || postcondition === undefined) {
            return new stringvalidator.StringValidator(postcondition, name);
        } else if (typeof postcondition === "boolean" || postcondition === null || postcondition === undefined) {
            return new booleanvalidator.BooleanValidator(postcondition, name);
        } else if (typeof postcondition === "number" || postcondition === null || postcondition === undefined) {
            return new numbervalidator.NumberValidator(postcondition, name);
        } else if (postcondition instanceof Array ||
            postcondition instanceof Array === null ||
            postcondition instanceof Array === undefined) {
            return new arrayvalidator.ArrayValidator(postcondition, name);
        } else {
            return new anyvalidator.AnyValidator(postcondition, name);
        }
    }

     public foo5(): string {
        return "foo";
    };
}


