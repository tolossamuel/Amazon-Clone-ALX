"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alignTableData_1 = __importDefault(require("./alignTableData"));
const calculateRowHeightIndex_1 = __importDefault(require("./calculateRowHeightIndex"));
const drawBorder_1 = require("./drawBorder");
const drawRow_1 = __importDefault(require("./drawRow"));
const makeStreamConfig_1 = __importDefault(require("./makeStreamConfig"));
const mapDataUsingRowHeightIndex_1 = __importDefault(require("./mapDataUsingRowHeightIndex"));
const padTableData_1 = __importDefault(require("./padTableData"));
const stringifyTableData_1 = __importDefault(require("./stringifyTableData"));
const truncateTableData_1 = __importDefault(require("./truncateTableData"));
const prepareData = (data, config) => {
    let rows = stringifyTableData_1.default(data);
    rows = truncateTableData_1.default(rows, config);
    const rowHeightIndex = calculateRowHeightIndex_1.default(rows, config);
    rows = mapDataUsingRowHeightIndex_1.default(rows, rowHeightIndex, config);
    rows = alignTableData_1.default(rows, config);
    rows = padTableData_1.default(rows, config);
    return rows;
};
const create = (row, columnWidthIndex, config) => {
    const rows = prepareData([row], config);
    const body = rows.map((literalRow) => {
        return drawRow_1.default(literalRow, config);
    }).join('');
    let output;
    output = '';
    output += drawBorder_1.drawBorderTop(columnWidthIndex, config);
    output += body;
    output += drawBorder_1.drawBorderBottom(columnWidthIndex, config);
    output = output.trimEnd();
    process.stdout.write(output);
};
const append = (row, columnWidthIndex, config) => {
    const rows = prepareData([row], config);
    const body = rows.map((literalRow) => {
        return drawRow_1.default(literalRow, config);
    }).join('');
    let output = '';
    const bottom = drawBorder_1.drawBorderBottom(columnWidthIndex, config);
    if (bottom !== '\n') {
        output = '\r\u001B[K';
    }
    output += drawBorder_1.drawBorderJoin(columnWidthIndex, config);
    output += body;
    output += bottom;
    output = output.trimEnd();
    process.stdout.write(output);
};
exports.default = (userConfig) => {
    const config = makeStreamConfig_1.default(userConfig);
    const columnWidthIndex = Object.values(config.columns).map((column) => {
        return column.width + column.paddingLeft + column.paddingRight;
    });
    let empty = true;
    return {
        write: (row) => {
            if (row.length !== config.columnCount) {
                throw new Error('Row cell count does not match the config.columnCount.');
            }
            if (empty) {
                empty = false;
                create(row, columnWidthIndex, config);
            }
            else {
                append(row, columnWidthIndex, config);
            }
        },
    };
};
//# sourceMappingURL=createStream.js.map