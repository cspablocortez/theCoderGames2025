// Declare a variable and assign it to a non-negative number. 
// Calculate and print ”Yes” if the variable is within 2 of a multiple of 15, otherwise, print ”No”.
// (30pts)

// Multiples of 15: 15, 30, 45, 60, 75, 

let n = 14;

function within2(n, m=15) {
    console.log(`Is ${n} within 2 of a multiple of ${m}?`);

    let remainder = n % m;

    if (n > 2 && (remainder <= 2 || remainder >= 13)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

for (let i = 0; i <= 100; i++) {
    within2(i);
}