import * as contractmodule from "./Contract/Contract";
export * from "./TypeValidators/StringValidator";
export * from "./TypeValidators/BooleanValidator";
export * from "./TypeValidators/NumberValidator";
export * from "./TypeValidators/ArrayValidator";
export * from "./TypeValidators/AnyValidator";

declare let contract: contractmodule.Contract;
if (!contract) {
    contract = new contractmodule.Contract();
};

export default contract;