declare class Test {
    constructor();
}
declare module Contract {
    function In(precondition: any): boolean;
    function Out(postcondition: any): boolean;
}
