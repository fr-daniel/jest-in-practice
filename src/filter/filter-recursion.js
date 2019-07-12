"use strict";

function filter(arr = [], func = item => item) {
  return (function filterInternal(arrayInternal, index = 0) {
    if (arrayInternal.length === 0) return [];

    const [head, ...tail] = arrayInternal;

    return [
      ...(func(head, index, arr) ? [head] : []),
      ...filterInternal(tail, index + 1)
    ];
  })(arr);
}

export default filter;
