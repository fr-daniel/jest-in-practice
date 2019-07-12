"use strict";

import { expect } from "chai";
import reduceRight from "./reduce-right";

describe("# REDUCE RIGHT", () => {
  it("reduceRight should be a function", () => {
    expect(reduceRight).to.be.a("function");
  });

  it("reduceRight([1]) should return 1", () => {
    expect(reduceRight([1])).to.be.equal(1);
  });

  it("reduceRight([2]) should return 2", () => {
    expect(reduceRight([2])).to.be.equal(2);
  });

  it("reduceRight([1, 2], (acc, item) => acc + item) should return 3", () => {
    expect(reduceRight([1, 2], (acc, item) => acc + item)).to.be.equal(3);
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
