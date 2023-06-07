// Buat function untuk menampilkan element value yang jika dijumlahkan tiap elementnya akan return value = 0

function sumZero(array) {
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === 0) {
                    return [array[i], array[j], array[k]];
                }    
            }
        }
    }

    return [];
}

console.log(sumZero([-1, 0, 1, 2, -1, 4]));
console.log(sumZero([2, 3, 4, -1, -2]));
console.log(sumZero([]));