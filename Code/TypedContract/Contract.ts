/// <reference path="TypeExtensions\Test.ts" />

module Contract {
    export function In(precondition:any):boolean {
        let testVariable = 23;
        return true;
    }

    export function Out(postcondition:any):boolean {
        return false;
    }
}