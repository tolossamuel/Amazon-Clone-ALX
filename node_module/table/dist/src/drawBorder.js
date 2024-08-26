"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawBorderTop = exports.drawBorderJoin = exports.drawBorderBottom = exports.drawBorder = void 0;
const drawHorizontalContent_1 = __importDefault(require("./drawHorizontalContent"));
const drawBorder = (columnSizeIndex, config) => {
    const columns = columnSizeIndex.map((size) => {
        return config.separator.body.repeat(size);
    });
    return drawHorizontalContent_1.default(columns, config);
};
exports.drawBorder = drawBorder;
const drawBorderTop = (columnSizeIndex, config) => {
    const result = drawBorder(columnSizeIndex, {
        ...config,
        separator: {
            body: config.border.topBody,
            join: config.border.topJoin,
            left: config.border.topLeft,
            right: config.border.topRight,
        },
    });
    if (result === '\n') {
        return '';
    }
    return result;
};
exports.drawBorderTop = drawBorderTop;
const drawBorderJoin = (columnSizeIndex, config) => {
    return drawBorder(columnSizeIndex, {
        ...config,
        separator: {
            body: config.border.joinBody,
            join: config.border.joinJoin,
            left: config.border.joinLeft,
            right: config.border.joinRight,
        },
    });
};
exports.drawBorderJoin = drawBorderJoin;
const drawBorderBottom = (columnSizeIndex, config) => {
    return drawBorder(columnSizeIndex, {
        ...config,
        separator: {
            body: config.border.bottomBody,
            join: config.border.bottomJoin,
            left: config.border.bottomLeft,
            right: config.border.bottomRight,
        },
    });
};
exports.drawBorderBottom = drawBorderBottom;
//# sourceMappingURL=drawBorder.js.map