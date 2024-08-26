"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_truncate_1 = __importDefault(require("lodash.truncate"));
/**
 * @todo Make it work with ASCII content.
 */
exports.default = (rows, config) => {
    return rows.map((cells) => {
        return cells.map((content, index) => {
            return lodash_truncate_1.default(content, {
                length: config.columns[index].truncate,
                omission: '…',
            });
        });
    });
};
//# sourceMappingURL=truncateTableData.js.map