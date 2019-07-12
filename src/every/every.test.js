"use strict";

import { expect } from "chai";
import every from "./every";

describe("# EVERY", () => {
  it("every should be a function", () => {
    expect(every).to.be.a("function");
  });

  it("every() should return true", () => {
    expect(every()).to.be.ok;
  });

  it("every([], item => item) should return true", () => {
    expect(every([], item => item)).to.be.ok;
  });

  it("every([0, 1]) should return false", () => {
    expect(every([0])).to.be.not.ok;
  });

  it("every([0, 2, 3]) should return false", () => {
    expect(every([0, 2, 3])).to.be.not.ok;
  });

  it("every([2, 3], item => item) should return true", () => {
    expect(every([2, 3], item => item > 1)).to.be.ok;
  });

  it("every([0, 2, 3], item => item) should return false", () => {
    expect(every([0, 2, 3], item => item)).to.be.not.ok;
  });
});
