"use strict";

import { expect } from "chai";
import some from "./some-recursion";

describe("# SOME RECURSION", () => {
  it("some should be a function", () => {
    expect(some).to.be.a("function");
  });

  it("some() should return false", () => {
    expect(some()).to.be.not.ok;
  });

  it("some([1]) should return true", () => {
    expect(some([1])).to.be.ok;
  });

  it("some([], (item) => item) should return false", () => {
    expect(some([], item => item)).to.be.not.ok;
  });

  it("some([1, 2], (item) => item) should return true", () => {
    expect(some([1, 2], item => item)).to.be.ok;
  });

  it("some([1, 2], (item) => item > 10) should return false", () => {
    expect(some([1, 2], item => item > 10)).to.be.not.ok;
  });

  it("some([1, 2, 3], (item, index) => index % 2 === 0) should return true", () => {
    expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok;
  });

  it("some([1, 2, 3], (item, index) => index % 2 === 0) should return true", () => {
    expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok;
  });

  it("some([1, 3], (item, index) => index % 2 === 0) should return false", () => {
    expect(some([1, 3], (item, index) => item % 2 === 0)).to.be.not.ok;
  });

  it("every([1, 2, 3], (item, index, arr) => arr.indexOf(2) > -1) should return true", () => {
    expect(some([1, 2, 3], (item, index, arr) => arr.indexOf(2) === 1)).to.be
      .ok;
  });
});
