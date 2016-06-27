/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
export declare class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;
    constructor(variableValue: T, variableName: string);
    /**
     * Value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    Value(): T;
    /**
     * Name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    Name(): string;
}
