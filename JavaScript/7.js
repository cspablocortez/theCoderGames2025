// Declare a variable and assign it a string value. Then print that string
// following this rule: only the letters c o d e r should be included in your 
// output if they are present in the word. Otherwise, exclude that specific 
// letter. An example would be: 'condition' would be printed as 'codo'.
// (40pts)

let str = "condition";
let answer = ""; 

for (ch of str) {
  if ("coder".includes(ch)) {
    answer += ch;
  }
}

console.log(answer);
// -> codo