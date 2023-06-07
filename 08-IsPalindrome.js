function isPalindrome(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let left = array[i].toLowerCase();
    let right = array[array.length - 1 - i].toLowerCase();

    if (left !== right) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"])); //true
console.log(isPalindrome(["Tom", "Tim", "tim", "tom"])); //true
console.log(isPalindrome(["tik", "tok", "toko", "tik"])); //false
