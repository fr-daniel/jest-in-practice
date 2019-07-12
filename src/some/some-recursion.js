"use strict";

function some(arr = [], func = item => item) {
  return (function someInternal(arryInternal, index = 0) {
    if (arryInternal.length === 0) return false;

    const [head, ...tail] = arryInternal;
    return func(head, index, arr) ? true : someInternal(tail, index + 1);
  })(arr);
}

export default some;
