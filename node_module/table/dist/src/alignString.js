"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_number_object_1 = __importDefault(require("is-number-object"));
const is_string_1 = __importDefault(require("is-string"));
const string_width_1 = __importDefault(require("string-width"));
const alignLeft = (subject, width) => {
    return subject + ' '.repeat(width);
};
const alignRight = (subject, width) => {
    return ' '.repeat(width) + subject;
};
const alignCenter = (subject, width) => {
    let halfWidth;
    halfWidth = width / 2;
    if (width % 2 === 0) {
        return ' '.repeat(halfWidth) + subject + ' '.repeat(halfWidth);
    }
    else {
        halfWidth = Math.floor(halfWidth);
        return ' '.repeat(halfWidth) + subject + ' '.repeat(halfWidth + 1);
    }
};
const alignments = [
    'left',
    'right',
    'center',
];
/**
 * Pads a string to the left and/or right to position the subject
 * text in a desired alignment within a container.
 */
exports.default = (subject, containerWidth, alignment) => {
    if (!is_string_1.default(subject)) {
        throw new TypeError('Subject parameter value must be a string.');
    }
    if (!is_number_object_1.default(containerWidth)) {
        throw new TypeError('Container width parameter value must be a number.');
    }
    const subjectWidth = string_width_1.default(subject);
    if (subjectWidth > containerWidth) {
        throw new Error('Subject parameter value width cannot be greater than the container width.');
    }
    if (!is_string_1.default(alignment)) {
        throw new TypeError('Alignment parameter value must be a string.');
    }
    if (!alignments.includes(alignment)) {
        throw new Error('Alignment parameter value must be a known alignment parameter value (left, right, center).');
    }
    if (subjectWidth === 0) {
        return ' '.repeat(containerWidth);
    }
    const availableWidth = containerWidth - subjectWidth;
    if (alignment === 'left') {
        return alignLeft(subject, availableWidth);
    }
    if (alignment === 'right') {
        return alignRight(subject, availableWidth);
    }
    return alignCenter(subject, availableWidth);
};
//# sourceMappingURL=alignString.js.map