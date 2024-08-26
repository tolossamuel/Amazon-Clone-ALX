"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drawHorizontalContent_1 = __importDefault(require("./drawHorizontalContent"));
exports.default = (row, config) => {
    return drawHorizontalContent_1.default(row, {
        ...config,
        separator: {
            join: config.border.bodyJoin,
            left: config.border.bodyLeft,
            right: config.border.bodyRight,
        },
    });
};
//# sourceMappingURL=drawRow.js.map