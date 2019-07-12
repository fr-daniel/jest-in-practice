"use strict";

import { expect } from "chai";
import mapRecursion from "./map-recursion";

describe("# MAP RECURSION", () => {
  it("Should be a function", () => {
    expect(mapRecursion).to.be.a("function");
  });

  it("map([1, 2], (item) => item) should return [1, 2]", () => {
    expect(mapRecursion([1, 2], item => item)).to.be.deep.equal([1, 2]);
  });

  it("map([2, 3], (item) => item) should return [2, 3]", () => {
    expect(mapRecursion([2, 3], item => item)).to.be.deep.equal([2, 3]);
  });

  it("map([1, 2], (item) => item + 1) should return [2, 3]", () => {
    expect(mapRecursion([1, 2], item => item + 1)).to.be.deep.equal([2, 3]);
  });

  it("map([1, 2], (item, index) => index) should return [0, 1]", () => {
    expect(mapRecursion([1, 2], (item, index) => index)).to.be.deep.equal([
      0,
      1
    ]);
  });

  it("map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]", () => {
    expect(mapRecursion([1, 2], (item, index, arr) => arr)).to.be.deep.equal([
      [1, 2],
      [1, 2]
    ]);
  });

  it("map() should return []", () => {
    expect(mapRecursion()).to.be.deep.equal([]);
  });

  it("map([1, 2]) should return [1, 2]", () => {
    expect(mapRecursion([1, 2])).to.be.deep.equal([1, 2]);
  });
});
