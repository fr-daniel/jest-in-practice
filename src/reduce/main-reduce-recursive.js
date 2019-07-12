"use strict";

const isInitialValueUndefined = initialValue => initialValue === undefined;

const mainReduce = (arr, func, initialValue) => {
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;

  return (function reduceInternal(accInternal, arrayIntenal, index = 0) {
    const [head, ...tail] = arrayIntenal;
    const accNext = () => func(accInternal, head, index, arrCopy);

    return arrayIntenal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, index + 1);
  })(acc, arrCopy);
};

export default mainReduce;
