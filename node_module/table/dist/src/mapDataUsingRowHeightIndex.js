"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_flatten_1 = __importDefault(require("lodash.flatten"));
const wrapCell_1 = __importDefault(require("./wrapCell"));
exports.default = (unmappedRows, rowHeightIndex, config) => {
    const tableWidth = unmappedRows[0].length;
    const mappedRows = unmappedRows.map((row, index0) => {
        const rowHeight = Array.from({ length: rowHeightIndex[index0] }, () => {
            return new Array(tableWidth).fill('');
        });
        // rowHeight
        //     [{row index within rowSaw; index2}]
        //     [{cell index within a virtual row; index1}]
        row.forEach((cell, index1) => {
            const cellLines = wrapCell_1.default(cell, config.columns[index1].width, config.columns[index1].wrapWord);
            cellLines.forEach((cellLine, index2) => {
                rowHeight[index2][index1] = cellLine;
            });
        });
        return rowHeight;
    });
    return lodash_flatten_1.default(mappedRows);
};
//# sourceMappingURL=mapDataUsingRowHeightIndex.js.map