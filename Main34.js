// Q.Write a Function to Calculate the Factorial of a Number (A Non-Negative Integer).
function factorial(n) {
    if (n < 0) {
        return "Factorial is not Defined for Negative Numbers.";
    };
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    };
    return fact;
};
console.log(factorial(5));