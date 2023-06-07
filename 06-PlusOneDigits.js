function plusOneDigit(array) {
    let concate = '';

    for (let i = 0; i < array.length; i++) {
        concate += array[i];
    }

    let number = Number(concate)

    number += 1;

    let result = Array.from(String(number), Number);

    return result;
}

console.log(plusOneDigit([1, 2, 3]));
console.log(plusOneDigit([4, 3, 2, 1]));
console.log(plusOneDigit([9]));