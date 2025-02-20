// Declare a variable and assign it to a string. Print a new string 
// made of every other char starting with the first, so 
// 'Coder' yields 'Cdr'
// (30pts)

let myString = "Coder";

function everyOtherChar(str) {
    let newStr = "";
    let index = 0;
    for (ch of str) {
        if (index % 2 === 0) {
            newStr += ch;
        }
        index++;
    }
    return newStr;
}

console.log(`${myString} -> ${everyOtherChar(myString)}`);