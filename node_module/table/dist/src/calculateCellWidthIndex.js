"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_width_1 = __importDefault(require("string-width"));
/**
 * Calculates width of each cell contents.
 */
exports.default = (cells) => {
    return cells.map((value) => {
        return Math.max(...value.split('\n').map((line) => {
            return string_width_1.default(line);
        }));
    });
};
//# sourceMappingURL=calculateCellWidthIndex.js.map