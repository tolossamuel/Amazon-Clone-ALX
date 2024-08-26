"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const getBorderCharacters_1 = __importDefault(require("./getBorderCharacters"));
const validateConfig_1 = __importDefault(require("./validateConfig"));
/**
 * Merges user provided border characters with the default border ("honeywell") characters.
 *
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
const makeColumns = (columnCount, columns = {}, columnDefault) => {
    return Array.from({ length: columnCount }).map((_, index) => {
        return {
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            wrapWord: false,
            ...columnDefault,
            ...columns[index],
        };
    });
};
/**
 * Makes a new configuration object out of the userConfig object
 * using default values for the missing configuration properties.
 */
exports.default = (userConfig) => {
    var _a;
    validateConfig_1.default('streamConfig.json', userConfig);
    const config = lodash_clonedeep_1.default(userConfig);
    if (!config.columnDefault || !config.columnDefault.width) {
        throw new Error('Must provide config.columnDefault.width when creating a stream.');
    }
    if (!config.columnCount) {
        throw new Error('Must provide config.columnCount.');
    }
    return {
        ...config,
        border: makeBorder(config.border),
        columnCount: config.columnCount,
        columns: makeColumns(config.columnCount, config.columns, config.columnDefault),
        drawVerticalLine: (_a = config.drawVerticalLine) !== null && _a !== void 0 ? _a : (() => {
            return true;
        }),
    };
};
//# sourceMappingURL=makeStreamConfig.js.map