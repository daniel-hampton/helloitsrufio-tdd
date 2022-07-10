/**
 * The test file
 */
// Libs
import chai from "chai";

// Local
import { addTwo } from "../index.js"; // notice we're going up a level here.

// This is how we opt in to the 'expect' syntax with the Chai assertion library.
const expect = chai.expect;

describe("Test Suite", () => {
  it("should return the correct sum", () => {
    // ASSEMBLE
    const xInput = 10;
    const yInput = 5;

    const expectedOutput = 15;

    // ACTION (call the function under test)
    const result = addTwo(xInput, yInput);

    // ASSERT
    // expect(result).to.equal(11); // make sure it fails as expected first.
    expect(result).to.equal(15);
  });

  // Write another test when your about to expand functionality.
  it("should accept an array of number and return the sum", () => {
    expect(false).to.equal(true);
  });

  it("should display an error message if the arguments are not numbers or an array of numbers", () => {
    expect(false).to.equal(true);
  });
});
