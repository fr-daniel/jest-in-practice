"use strict";

import { expect } from "chai";
import reduce from "./reduce";

describe("# REDUCE", () => {
  it("reduce should be a function", () => {
    expect(reduce).to.be.a("function");
  });

  it("reduce([1], (ac, item) => ac + item)) should return 1", () => {
    expect(reduce([1], (ac, item) => ac + item)).to.be.equal(1);
  });

  it("reduce([1, 2], (ac, item) => ac + item)) should return 3", () => {
    expect(reduce([1, 2], (ac, item) => ac + item)).to.be.equal(3);
  });

  it("reduce([1, 2], (ac, item) => (ac + item) * 2) should return 6", () => {
    expect(reduce([1, 2], (ac, item) => (ac + item) * 2)).to.be.equal(6);
  });

  it("reduce(['d', 'a', 'n', 'i', 'e', 'l'], (ac, item) => ac + item) should return ''daniel'", () => {
    const before = reduce(
      ["d", "a", "n", "i", "e", "l"],
      (ac, item) => ac + item
    );
    const after = "daniel";
    expect(before).to.be.equal(after);
  });

  it("reduce([1, 2], (ac, item) => ac + item, 100) should return 103", () => {
    expect(reduce([1, 2], (ac, item) => ac + item, 100)).to.be.equal(103);
  });

  it("reduce([1, 2], (acc, item) => { acc['number-' + item] = item; return acc}, {}) should return {'number-1': 1, 'number-2': 2} ", () => {
    const before = reduce(
      [1, 2],
      (ac, item) => {
        ac["number-" + item] = item;
        return ac;
      },
      {}
    );
    const after = { "number-1": 1, "number-2": 2 };
    expect(before).to.be.deep.equal(after);
  });

  it("reduce([1, 2], (ac, item, index) => ac + index, 0) shoud return 1", () => {
    const before = reduce([1, 2], (ac, item, index) => ac + index, 0);
    const after = 1;
    expect(before).to.be.equal(after);
  });

  it("reduce([1, 2], (ac, item, index, arr) => ac + arr[index]) shoud return 3", () => {
    const before = reduce([1, 2], (ac, item, index, arr) => ac + arr[index]);
    const after = 3;
    expect(before).to.be.equal(after);
  });
});
