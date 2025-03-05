// Declare a variable and assign it a string value. Then print that string
// following this rule: only the letters c o d e r should be included in your 
// output if they are present in the word. Otherwise, exclude that specific 
// letter. An example would be: 'condition' would be printed as 'codo'.
// (40pts)

// 1. Declare a variable and assign it a string value

let str = "condition";
let answer = "";
str = str.split("")

for (let char of str) {
    if (char == "c" || char == "o" || char == "d" || char == "e" || char == "r") {
        answer += char;
    }
}

console.log(answer)


// Q: Is the current letter c, o, d, e, r ??

// C - YES
// O - YES
// N - NO
// D - YES
// I - NO
// T - NO
// I - NO
// O - YES
// N - NO