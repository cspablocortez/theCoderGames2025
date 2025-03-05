// Declare a variable and assign it to a list of integers. Calculate and print
// "Yes" if the list has any duplicates, otherwise print "No". 
// (50pts)

let arr = [1, 31, 3, 5, 5, 7, 17, 21];
let hasDuplicates = false;

for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
        if (arr[x] == arr[y]) {
            hasDuplicates = true;
            // break;
        }
        console.log(`arr[x]: ${arr[x]} | arr[y]: ${arr[y]}, hasDuplicates: ${hasDuplicates}`);
    } 
    // if (hasDuplicates) break;
}

console.log(hasDuplicates ? "Yes" : "No" );