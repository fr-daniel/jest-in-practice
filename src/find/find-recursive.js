"use strict";

const find = (arr, func) => {
  return (function findInternal(arrayInternal, index = 0) {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? undefined
      : func(head, index, arr)
      ? head
      : findInternal(tail, index + 1);
  })(arr);
};

export default find;
