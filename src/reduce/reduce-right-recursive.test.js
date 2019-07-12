"use strict";

import { expect } from "chai";
import reduceRight from "./reduce-right-recursive";

describe("# REDUCE", () => {
  it("reduceRight should be a function", () => {
    expect(reduceRight).to.be.a("function");
  });

  it("reduceRight([1], (ac, item) => ac + item)) should return 1", () => {
    expect(reduceRight([1], (ac, item) => ac + item)).to.be.equal(1);
  });

  it("reduceRight([1, 2], (ac, item) => ac + item)) should return 3", () => {
    expect(reduceRight([1, 2], (ac, item) => ac + item)).to.be.equal(3);
  });

  it("reduceRight([1, 2], (ac, item) => (ac + item) * 2) should return 6", () => {
    expect(reduceRight([1, 2], (ac, item) => (ac + item) * 2)).to.be.equal(6);
  });

  it("reduceRight(['el' 'ni', 'da'], (acc, item) => acc + item) should return 'daniel", () => {
    const before = reduceRight(["el", "ni", "da"], (acc, item) => acc + item);
    const after = "daniel";
    expect(before).to.be.equal(after);
  });

  it("reduceRight(['el' 'ni', 'da'], (acc, item) => acc + item, 'francisco ') should return 'daniel", () => {
    const before = reduceRight(
      ["el", "ni", "da"],
      (acc, item) => acc + item,
      "francisco "
    );
    const after = "francisco daniel";
    expect(before).to.be.equal(after);
  });
});
