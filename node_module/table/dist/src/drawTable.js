"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drawBorder_1 = require("./drawBorder");
const drawRow_1 = __importDefault(require("./drawRow"));
exports.default = (rows, columnSizeIndex, rowSpanIndex, config) => {
    const { drawHorizontalLine, singleLine, } = config;
    let output;
    let realRowIndex;
    let rowHeight;
    const rowCount = rows.length;
    realRowIndex = 0;
    output = '';
    if (drawHorizontalLine(realRowIndex, rowCount)) {
        output += drawBorder_1.drawBorderTop(columnSizeIndex, config);
    }
    rows.forEach((row, index0) => {
        output += drawRow_1.default(row, config);
        if (!rowHeight) {
            rowHeight = rowSpanIndex[realRowIndex];
            realRowIndex++;
        }
        rowHeight--;
        if (!singleLine &&
            rowHeight === 0 &&
            index0 !== rowCount - 1 &&
            drawHorizontalLine(realRowIndex, rowCount)) {
            output += drawBorder_1.drawBorderJoin(columnSizeIndex, config);
        }
    });
    if (drawHorizontalLine(realRowIndex, rowCount)) {
        output += drawBorder_1.drawBorderBottom(columnSizeIndex, config);
    }
    return output;
};
//# sourceMappingURL=drawTable.js.map