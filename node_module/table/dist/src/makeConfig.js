"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const calculateMaximumColumnWidthIndex_1 = __importDefault(require("./calculateMaximumColumnWidthIndex"));
const getBorderCharacters_1 = __importDefault(require("./getBorderCharacters"));
const validateConfig_1 = __importDefault(require("./validateConfig"));
/**
 * Merges user provided border characters with the default border ("honeywell") characters.
 */
const makeBorder = (border) => {
    return {
        ...getBorderCharacters_1.default('honeywell'),
        ...border,
    };
};
/**
 * Creates a configuration for every column using default
 * values for the missing configuration properties.
 */
const makeColumns = (rows, columns, columnDefault) => {
    const maximumColumnWidthIndex = calculateMaximumColumnWidthIndex_1.default(rows);
    return rows[0].map((_cell, index) => {
        return {
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            width: maximumColumnWidthIndex[index],
            wrapWord: false,
            ...columnDefault,
            ...columns === null || columns === void 0 ? void 0 : columns[index],
        };
    });
};
/**
 * Makes a new configuration object out of the userConfig object
 * using default values for the missing configuration properties.
 */
exports.default = (rows, userConfig = {}) => {
    var _a, _b, _c;
    validateConfig_1.default('config.json', userConfig);
    const config = lodash_clonedeep_1.default(userConfig);
    return {
        ...config,
        border: makeBorder(config.border),
        columns: makeColumns(rows, config.columns, config.columnDefault),
        drawHorizontalLine: (_a = config.drawHorizontalLine) !== null && _a !== void 0 ? _a : (() => {
            return true;
        }),
        drawVerticalLine: (_b = config.drawVerticalLine) !== null && _b !== void 0 ? _b : (() => {
            return true;
        }),
        singleLine: (_c = config.singleLine) !== null && _c !== void 0 ? _c : false,
    };
};
//# sourceMappingURL=makeConfig.js.map