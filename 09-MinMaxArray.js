function minMaxArray(array) {
  //   const min = Math.min(...array);
  //   const max = Math.max(...array);

  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  return [min, max];
}

console.log(minMaxArray([2, 3, 4, 5, 6, 7, 8, 9, 1, 10]));
