declare interface IContractStatic {
    In(precondition:string):IStringValidator;
    In(precondition:string, name:string):IStringValidator;
    In(precondition:boolean):IBooleanValidator;
    In(precondition:boolean, name:string):IBooleanValidator;
    In(precondition:number):INumberValidator;
    In(precondition:number, name:string):INumberValidator;
    In(precondition:any[]):IArrayValidator;
    In(precondition:any[], name:string):IArrayValidator;
    In(precondition:any, name:string):IAnyValidator;
    In(precondition:any):IAnyValidator;
    In(precondition:any, name:string):any;

    Out(postcondition:string):IStringValidator;
    Out(postcondition:string, name:string):IStringValidator;
    Out(postcondition:boolean):IBooleanValidator;
    Out(postcondition:boolean, name:string):IBooleanValidator;
    Out(postcondition:number):INumberValidator;
    Out(postcondition:number, name:string):INumberValidator;
    Out(postcondition:any[]):IArrayValidator;
    Out(postcondition:any[], name:string):IArrayValidator;
    Out(postcondition:any, name:string):IAnyValidator;
    Out(postcondition:any):IAnyValidator;
    Out(postcondition:any, name:string):any;
}