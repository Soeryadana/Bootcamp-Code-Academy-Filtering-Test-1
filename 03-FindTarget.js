// Buat function return untuk menampilkan index dari element target yang dicari dari sebuah array

function findTarget(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }        
    }
}


console.log(findTarget([1,2,4], 4));
console.log(findTarget([-1, 2, 5, 6, 7], 6));