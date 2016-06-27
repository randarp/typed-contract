import { BaseValidator } from "./BaseValidator";
export declare class AnyValidator extends BaseValidator<any> {
    constructor(variableValue: any, variableName: string);
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {AnyValidator}
     */
    IsNotNull(): AnyValidator;
    /**
     *
     * IsNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {AnyValidator}
     */
    IsNull(): AnyValidator;
    /**
     * IsDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {AnyValidator}
     */
    IsDefined(): AnyValidator;
    /**
     * IsUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {AnyValidator}
     */
    IsUndefined(): AnyValidator;
    /**
     * IsNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {AnyValidator}
     */
    IsNullOrUndefined(): AnyValidator;
}
