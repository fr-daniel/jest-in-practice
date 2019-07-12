"use strict";

import { expect } from "chai";
import filter from "./filter-recursion";

describe("# FILTER", () => {
  it("filter should be a function", () => {
    expect(filter).to.be.a("function");
  });

  it("filter() should return an []", () => {
    expect(filter()).to.be.deep.equal([]);
  });

  it("filter([1, 2]) should return [1, 2]", () => {
    expect(filter([0, 1, 2])).to.be.deep.equal([1, 2]);
  });

  it("filter([2, 3]) should return [2, 3]", () => {
    expect(filter([0, 2, 3])).to.be.deep.equal([2, 3]);
  });

  it("filter([2, 3], (item) => true) should return [2, 3]", () => {
    expect(filter([0, 2, 3], item => true)).to.be.deep.equal([0, 2, 3]);
  });

  it("filter([2, 3], (item) => false) should return []", () => {
    expect(filter([2, 3], item => false)).to.be.deep.equal([]);
  });

  it("filter([2, 3, 4], (item) => item % 2 == 0) should return [2, 4]", () => {
    expect(filter([2, 3, 4], item => item % 2 == 0)).to.be.deep.equal([2, 4]);
  });

  it("filter([1, 2, 3, 4], (item, index) => index % 2 == 0) should return [1, 3]", () => {
    const before = filter([1, 2, 3, 4], (item, index) => index % 2 == 0);
    expect(before).to.be.deep.equal([1, 3]);
  });

  it("filter([1, 2, 3, 5], (item, index) => item === index + 1) should return [1, 2, 3]", () => {
    const before = filter([1, 2, 3, 5], (item, index) => item === index + 1);
    expect(before).to.be.deep.equal([1, 2, 3]);
  });

  it("filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]", () => {
    const before = filter(
      [1, 2, 3, 2, 1, 5],
      (item, index, arr) => index === arr.indexOf(item)
    );
    expect(before).to.be.deep.equal([1, 2, 3, 5]);
  });
});
