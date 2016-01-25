/// <reference path="TypeExtensions\Test.ts" />

module Contract {
    export function In2(precondition:any):boolean {
        let testVariable = 12;
        return true;
    }

    export function Out(postcondition:any):boolean {
        return false;
    }
}