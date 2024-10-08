"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_string_1 = __importDefault(require("is-string"));
const wrapCell_1 = __importDefault(require("./wrapCell"));
exports.default = (value, columnWidth, useWrapWord = false) => {
    if (!is_string_1.default(value)) {
        throw new TypeError('Value must be a string.');
    }
    if (!Number.isInteger(columnWidth) || columnWidth < 1) {
        throw new TypeError('Column width must be an integer greater than 0.');
    }
    return wrapCell_1.default(value, columnWidth, useWrapWord).length;
};
//# sourceMappingURL=calculateCellHeight.js.map