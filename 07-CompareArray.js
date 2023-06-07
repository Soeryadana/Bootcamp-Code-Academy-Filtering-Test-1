function compareArray(array1, array2) {
    const same = [];
    const different = [];

    array1.forEach((item) => {
        if (array2.includes(item) && !same.includes(item)) {
            same.push(item);
        } else if (!different.includes(item)) {
            different.push(item);
        }
    });

    array2.forEach((item) => {
        if (!array1.includes(item) && !different.includes(item)) {
            different.push(item);
        }
    });

    return {
        same,
        different
    };
}

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"]
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol", "Nangka","Timun"]

const result = compareArray(array1, array2);
console.log("Same = " + result.same);
console.log("Different = " + result.different);


// Result :
//Same = ["Mangga","Tomat","Nangka","Timun"]
//Different = ["Apel","Melon","Pisang","Sirsak","Nanas","Bayam","Wortel","Kangkung","Kembang Kol"]