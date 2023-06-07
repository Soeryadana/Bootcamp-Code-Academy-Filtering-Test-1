// Buat function return untuk menampilkan element index mana saja yang jika dijumlahkan sama dengan target

function addSum(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }            
        }
    }

    return [];
}

console.log(addSum([2, 7, 11, 15], 9));
console.log(addSum([3, 2, 3], 6));
console.log(addSum([3, 2, 4], 6));
console.log(addSum([3, 3], 6));