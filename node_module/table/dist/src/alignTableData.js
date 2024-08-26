"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_width_1 = __importDefault(require("string-width"));
const alignString_1 = __importDefault(require("./alignString"));
exports.default = (rows, config) => {
    return rows.map((row) => {
        return row.map((cell, index) => {
            const column = config.columns[index];
            if (string_width_1.default(cell) === column.width) {
                return cell;
            }
            else {
                return alignString_1.default(cell, column.width, column.alignment);
            }
        });
    });
};
//# sourceMappingURL=alignTableData.js.map