interface IAnyValidator {
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {AnyValidator}
     */
    IsNotNull(): IAnyValidator;

    /**
     *
     * IsNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {AnyValidator}
     */
    IsNull(): IAnyValidator;


    /**
     * IsDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {AnyValidator}
     */
    IsDefined(): IAnyValidator;

    /**
     * IsUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {AnyValidator}
     */
    IsUndefined(): IAnyValidator;

    /**
     * IsNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {AnyValidator}
     */
    IsNullOrUndefined(): IAnyValidator;
}

