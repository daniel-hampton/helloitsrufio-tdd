"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The test file
 */
// Libs
const chai_1 = __importDefault(require("chai"));
// Local
const index_1 = require("../index");
// This is how we opt in to the 'expect' syntax with the Chai assertion library.
const expect = chai_1.default.expect;
describe("Test Suite", () => {
    it("should return the correct sum", () => {
        // ASSEMBLE
        const xInput = 10;
        const yInput = 5;
        const expectedOutput = 15;
        // ACTION (call the function under test)
        const result = (0, index_1.addTwo)(xInput, yInput);
        // ASSERT
        // expect(result).to.equal(11); // make sure it fails as expected first.
        expect(result).to.equal(expectedOutput);
    });
    // Write another test when your about to expand functionality.
    it("should accept an array of number and return the sum", () => {
        expect(false).to.equal(true);
    });
    it("should display an error message if the arguments are not numbers or an array of numbers", () => {
        expect(false).to.equal(true);
    });
});
