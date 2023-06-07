function insertValue(array, number) {
  let numbers = array;

  numbers.push(number);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        let temp;
        temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  return numbers;
}

console.log(insertValue([4, 7, 1, 20], 9));
console.log(insertValue([3, 5, 2], 7));
console.log(insertValue([2, 14, 10, 1, 11, 12, 3, 4], 7));
