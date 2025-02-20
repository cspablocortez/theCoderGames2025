// Print the perfect squares between 1 and 100 using an algorithm. 
// Perfect square numbers are the result of multiplying a number by itself. 
// Please make sure your output numbers have been calculated using mathematical operators.
// (20pts)

// Desired output: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

for (let i = 1; i <= 100; i++) {
    if ((i ** 2) <= 100) {
        console.log(i ** 2);
    }
}