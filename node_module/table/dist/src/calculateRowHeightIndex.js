"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_boolean_object_1 = __importDefault(require("is-boolean-object"));
const is_number_object_1 = __importDefault(require("is-number-object"));
const calculateCellHeight_1 = __importDefault(require("./calculateCellHeight"));
/**
 * Calculates the vertical row span index.
 */
exports.default = (rows, config) => {
    const tableWidth = rows[0].length;
    const rowSpanIndex = [];
    rows.forEach((cells) => {
        const cellHeightIndex = new Array(tableWidth).fill(1);
        cells.forEach((value, index1) => {
            if (!is_number_object_1.default(config.columns[index1].width)) {
                throw new TypeError('column[index].width must be a number.');
            }
            if (!is_boolean_object_1.default(config.columns[index1].wrapWord)) {
                throw new TypeError('column[index].wrapWord must be a boolean.');
            }
            cellHeightIndex[index1] = calculateCellHeight_1.default(value, config.columns[index1].width, config.columns[index1].wrapWord);
        });
        rowSpanIndex.push(Math.max(...cellHeightIndex));
    });
    return rowSpanIndex;
};
//# sourceMappingURL=calculateRowHeightIndex.js.map