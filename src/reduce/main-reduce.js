"use strict";

function mainReduce(arr, func, initialValue) {
  const existeInitialValue = initialValue !== undefined;
  let acumulado = existeInitialValue ? initialValue : arr[0];

  for (let i = existeInitialValue ? 0 : 1; i < arr.length; i++)
    acumulado = func(acumulado, arr[i], i, arr);

  return acumulado;
}

export default mainReduce;
