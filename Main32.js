// Q.Write a JavaScript, to Print Prime Numbers from 1 to 50.
for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        };
    };
    if (isPrime) {
        console.log(num);
    };
};