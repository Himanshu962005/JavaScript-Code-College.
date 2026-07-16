// Exercise 9 - Faulty Calculator.
/* Create a Faulty Calculator using JavaScript.
    This Faulty Calculator does Following :
    1. It Takes Two Numbers as Input from the User.
    2. It Perfoms Wrong Operations as Follows :
    + ---> -
    * ---> +
    - ---> /
    / ---> **
    3. It Performs Wrong Operation 10% of the Times.
*/
let random = Math.random();
console.log(random);
let a = prompt("Enter First Number.");
let c = prompt("Enter Operation.");
let b = prompt("Enter Second Number.");
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};
if (random > 0.1) {
    // Perform Correct Calculation.
    console.log(`The Result is ${a} ${c} ${b}`);
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    // Perform Wrong Calculation.
    c = obj[c]
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
};