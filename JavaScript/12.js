// Declare a variable and assign it to a string. Print that string with an 
// added space in between all of the letters. If there's a space in the string,
// you should not consider it a letter and not add an extra space.
// (60pts)

let str = "Coder";
let result = "";

for (let char of str) {
  if (char != " ") {
    result += char + " ";
  }
}

console.log("Coder");
console.log(result)