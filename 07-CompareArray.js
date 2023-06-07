function compareArray(array1, array2) {
    const same = [];
    const different = [];
    const processed = [];

    array1.forEach((item) => {
        if (processed.includes(item)) {
            return;
        }

        if (array2.includes(item)) {
            same.push(item);

            const index = array2.indexOf(item);
            array2.splice(index, 1);

            processed.push(item);
        } else {
            different.push(item);

            processed.push(item);
        }
    });

    different.push(...array2);

    return {
        same,
        different
    };
}

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol", "Nangka","Timun"];

const result = compareArray(array1, array2);
console.log("Same = " + result.same);
console.log("Different = " + result.different);

// Result :
//Same = ["Mangga","Tomat","Nangka","Timun"]
//Different = ["Apel","Melon","Pisang","Sirsak","Nanas","Bayam","Wortel","Kangkung","Kembang Kol"]