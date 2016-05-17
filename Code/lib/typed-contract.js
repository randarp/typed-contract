"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var contractmodule = require("./Contract/Contract");
__export(require("./TypeValidators/StringValidator"));
__export(require("./TypeValidators/BooleanValidator"));
__export(require("./TypeValidators/NumberValidator"));
__export(require("./TypeValidators/ArrayValidator"));
__export(require("./TypeValidators/AnyValidator"));
if (!contract) {
    contract = new contractmodule.Contract();
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = contract;
//# sourceMappingURL=typed-contract.js.map