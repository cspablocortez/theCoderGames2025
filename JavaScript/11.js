// Declare a variable and assign it to a string containing the characters "x"
// and "o". Then calculate and print "Yes" or "No" depending on whether they
// have the same number of x's and o's.
// (50pts)

let str = "xoxo" 
let xCount = 0;
let oCount = 0;

for (let char of str) {
    if (char == "x") {
        xCount += 1;
    }
    if (char == "o") {
        oCount += 1;
    }
}

console.log ( xCount == oCount ? "Yes" : "No" );

