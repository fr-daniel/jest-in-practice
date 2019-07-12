"use strict";

function mapRecursion(arr = [], func = item => item) {
  return (function mapInteranl(arrayInternal, index = 0) {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? []
      : [func(head, index, arr), ...mapInteranl(tail, index + 1)];
  })(arr);
}

export default mapRecursion;
