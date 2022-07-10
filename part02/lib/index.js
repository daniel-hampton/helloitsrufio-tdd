"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwo = void 0;
/**
 * Add two numbers
 */
function addTwo(x, y) {
    return x + y;
}
exports.addTwo = addTwo;
/* main function to run */
function main() {
    const result = addTwo(10, 5);
    console.log("result:", result);
}
main();
