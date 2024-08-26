"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (rows, config) => {
    return rows.map((cells) => {
        return cells.map((value, index1) => {
            const column = config.columns[index1];
            return ' '.repeat(column.paddingLeft) + value + ' '.repeat(column.paddingRight);
        });
    });
};
//# sourceMappingURL=padTableData.js.map