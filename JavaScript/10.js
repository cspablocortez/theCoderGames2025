// Declare a variable and assign it to a non-empty string. Then construct a
// string that is formatted this way:
// "Coder" becomes "CoderCodeCodCoC"
// Print the newly formatted string. You must use string splicing.
// (50pts)

// "Hello".length
// "Hello".slice(0, 2) -> "Hel"
// For loops

let str = "Coder"
let answer = ""

for (let i = str.length - 1; i >= 0; i--) {
    let word = str.slice(0, i + 1);
    answer += word;
}

console.log(answer);