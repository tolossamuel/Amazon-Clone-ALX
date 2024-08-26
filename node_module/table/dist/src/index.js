"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorderCharacters = exports.createStream = exports.table = void 0;
const createStream_1 = __importDefault(require("./createStream"));
exports.createStream = createStream_1.default;
const getBorderCharacters_1 = __importDefault(require("./getBorderCharacters"));
exports.getBorderCharacters = getBorderCharacters_1.default;
const table_1 = __importDefault(require("./table"));
exports.table = table_1.default;
__exportStar(require("./types/api"), exports);
//# sourceMappingURL=index.js.map