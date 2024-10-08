"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wrapString_1 = __importDefault(require("./wrapString"));
const wrapWord_1 = __importDefault(require("./wrapWord"));
/**
 * Wrap a single cell value into a list of lines
 *
 * Always wraps on newlines, for the remainder uses either word or string wrapping
 * depending on user configuration.
 *
 */
exports.default = (cellValue, columnWidth, useWrapWord) => {
    // First split on literal newlines
    const cellLines = cellValue.split('\n');
    // Then iterate over the list and word-wrap every remaining line if necessary.
    for (let lineNr = 0; lineNr < cellLines.length;) {
        let lineChunks;
        if (useWrapWord) {
            lineChunks = wrapWord_1.default(cellLines[lineNr], columnWidth);
        }
        else {
            lineChunks = wrapString_1.default(cellLines[lineNr], columnWidth);
        }
        // Replace our original array element with whatever the wrapping returned
        cellLines.splice(lineNr, 1, ...lineChunks);
        lineNr += lineChunks.length;
    }
    return cellLines;
};
//# sourceMappingURL=wrapCell.js.map