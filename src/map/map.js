"use strict";

function map(arr, func) {
  if (!Array.isArray(arr))
    throw new TypeError("The first parameter must be an array");

  if (typeof func !== "function")
    throw new TypeError("The second parameter must be a function");

  const newArray = [];
  for (let i = 0; i < arr.length; i++) newArray.push(func(arr[i], i, arr));
  return newArray;
}

export default map;
