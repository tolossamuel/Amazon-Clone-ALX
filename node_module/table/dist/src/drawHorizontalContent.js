"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawHorizontalContent(contents, config) {
    const { separator, drawVerticalLine } = config;
    const contentSize = contents.length;
    const result = [];
    result.push(drawVerticalLine(0, contentSize) ? separator.left : '');
    contents.forEach((content, index) => {
        result.push(content);
        // Only append the join separator if it is not the last content
        if (index + 1 < contentSize) {
            result.push(drawVerticalLine(index + 1, contentSize) ? separator.join : '');
        }
    });
    result.push(drawVerticalLine(contentSize, contentSize) ? separator.right : '');
    return result.join('') + '\n';
}
exports.default = drawHorizontalContent;
//# sourceMappingURL=drawHorizontalContent.js.map