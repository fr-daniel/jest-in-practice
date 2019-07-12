"use strict";

import { expect } from "chai";
import find from "./find";

describe("# FIND", () => {
  it("find should be a function", () => {
    expect(find).to.be.a("function");
  });

  it("find() should return undefined", () => {
    expect(find()).to.be.undefined;
  });

  it("find([1, 2], item => item === 1) should return 1", () => {
    expect(find([1, 2], item => item === 1)).to.be.equal(1);
  });

  it("find([0, 1, 2], item => item === 0) should return 0", () => {
    expect(find([0, 1, 2], item => item === 0)).to.be.equal(0);
  });

  it("find([0, 1, 2], item => item === 5) should return undefined", () => {
    expect(find([0, 1, 2], item => item === 5)).to.be.undefined;
  });

  it("find([1, 2, 3], (item, index) => index === 1) should return 2", () => {
    expect(find([1, 2, 3], (item, index) => index === 1)).to.be.equal(2);
  });

  it("find([1, 2, 3], (item, index, arr) => arr[index] === 2) should return 2", () => {
    const before = find([1, 2, 3], (item, index, arr) => arr[index] === 2);
    const after = 2;
    expect(before).to.be.equal(after);
  });
});
