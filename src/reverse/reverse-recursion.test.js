"use strict";

import { expect } from "chai";
import reverse from "./reverse-recursion";

describe("# REVERSE", () => {
  it("reverse should be a function", () => {
    expect(reverse).to.be.a("function");
  });

  it("reverse() should return []", () => {
    expect(reverse()).to.be.deep.equal([]);
  });

  it("reverse([1] should return [1]", () => {
    expect(reverse([1])).to.deep.equal([1]);
  });

  it("reverse([1, 2, 3]) should return [3, 2, 1]", () => {
    expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1]);
  });

  it("reverse(['daniel', 'lima']) should return ['lima', 'daniel']", () => {
    expect(reverse(["daniel", "lima"])).to.be.deep.equal(["lima", "daniel"]);
  });
});
