"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alignTableData_1 = __importDefault(require("./alignTableData"));
const calculateCellWidthIndex_1 = __importDefault(require("./calculateCellWidthIndex"));
const calculateRowHeightIndex_1 = __importDefault(require("./calculateRowHeightIndex"));
const drawTable_1 = __importDefault(require("./drawTable"));
const makeConfig_1 = __importDefault(require("./makeConfig"));
const mapDataUsingRowHeightIndex_1 = __importDefault(require("./mapDataUsingRowHeightIndex"));
const padTableData_1 = __importDefault(require("./padTableData"));
const stringifyTableData_1 = __importDefault(require("./stringifyTableData"));
const truncateTableData_1 = __importDefault(require("./truncateTableData"));
const validateTableData_1 = __importDefault(require("./validateTableData"));
exports.default = (data, userConfig = {}) => {
    validateTableData_1.default(data);
    let rows = stringifyTableData_1.default(data);
    const config = makeConfig_1.default(rows, userConfig);
    rows = truncateTableData_1.default(rows, config);
    const rowHeightIndex = calculateRowHeightIndex_1.default(rows, config);
    rows = mapDataUsingRowHeightIndex_1.default(rows, rowHeightIndex, config);
    rows = alignTableData_1.default(rows, config);
    rows = padTableData_1.default(rows, config);
    const cellWidthIndex = calculateCellWidthIndex_1.default(rows[0]);
    return drawTable_1.default(rows, cellWidthIndex, rowHeightIndex, config);
};
//# sourceMappingURL=table.js.map