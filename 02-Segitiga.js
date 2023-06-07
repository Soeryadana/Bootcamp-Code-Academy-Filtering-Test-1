function segitiga(start) {
  let result = "";

  for (let i = start; i < start + 7; i++) {
    let triangle = "";
    let currentNumber = i;

    for (let j = start; j <= i; j++) {
      triangle += currentNumber + " ";
      currentNumber++;
    }

    result += triangle.trim() + "\n";
  }

  return result;
}

console.log(segitiga(5));