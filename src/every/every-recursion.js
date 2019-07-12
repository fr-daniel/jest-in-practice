"use strict";

function every(arr = [], func = item => item) {
  return (function everyInternal(arrayInternal, index = 0) {
    if (arrayInternal.length === 0) return true;

    const [head, ...tail] = arrayInternal;
    return func(head, index, arr) ? everyInternal(tail, index + 1) : false;
  })(arr);
}

export default every;
