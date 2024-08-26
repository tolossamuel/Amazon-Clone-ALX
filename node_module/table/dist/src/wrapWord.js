"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slice_ansi_1 = __importDefault(require("slice-ansi"));
const string_width_1 = __importDefault(require("string-width"));
exports.default = (input, size) => {
    let subject = input;
    const chunks = [];
    // https://regex101.com/r/gY5kZ1/1
    const re = new RegExp('(^.{1,' + String(size) + '}(\\s+|$))|(^.{1,' + String(size - 1) + '}(\\\\|/|_|\\.|,|;|-))');
    do {
        let chunk;
        chunk = re.exec(subject);
        if (chunk) {
            chunk = chunk[0];
            subject = slice_ansi_1.default(subject, string_width_1.default(chunk));
            chunk = chunk.trim();
        }
        else {
            chunk = slice_ansi_1.default(subject, 0, size);
            subject = slice_ansi_1.default(subject, size);
        }
        chunks.push(chunk);
    } while (string_width_1.default(subject));
    return chunks;
};
//# sourceMappingURL=wrapWord.js.map