// Declare a variable and assign it to a string. The code should print "Yes" if
// all the words in the string begin with an uppercase letter. Print "No"
// otherwise. You cannot use a library for this solution.
// (40pts)

let str = "Hello And Welcome To The Coder School"; // good

function isAllCaps(str) {
    arr = str.split(" ");
    for (let word of arr) {
        if (word[0] != word[0].toUpperCase()) {
            return false;
        } 
    }
    return true;
}

if (isAllCaps("HERE Is My Sentence")) {
    console.log("yes")
} else {
    console.log("no");
}

// Ternary operator synatx - CONDITON ? TRUE : FALSE
// console.log( isAllCaps("Sample Short Sentence") ? "YES" : "NO" );