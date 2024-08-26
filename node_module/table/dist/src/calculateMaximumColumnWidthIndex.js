"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCellWidthIndex_1 = __importDefault(require("./calculateCellWidthIndex"));
/**
 * Produces an array of values that describe the largest value length (width) in every column.
 */
exports.default = (rows) => {
    if (!rows[0]) {
        throw new Error('Dataset must have at least one row.');
    }
    const columns = new Array(rows[0].length).fill(0);
    rows.forEach((row) => {
        const columnWidthIndex = calculateCellWidthIndex_1.default(row);
        columnWidthIndex.forEach((valueWidth, index0) => {
            if (columns[index0] < valueWidth) {
                columns[index0] = valueWidth;
            }
        });
    });
    return columns;
};
//# sourceMappingURL=calculateMaximumColumnWidthIndex.js.map