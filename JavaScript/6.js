/*
* Print the numbers from 1 to 100. For multiples of three, print 'Coder' instead
* of the number. For multiples of four, print 'School' instead of the number.
* For numbers which are multiples of both three and four, print 'CoderSchool'
* (30 pts)
*/

// 1. For loop from 1 to 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 == 0) {
        console.log("CoderSchool");
    } else if (i % 3 === 0) {
        console.log("Coder")
    } else if (i % 4 === 0 ){
        console.log("School");
    } else {
        console.log(i);
    }
}