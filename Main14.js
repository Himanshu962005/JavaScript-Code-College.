let a = prompt("Enter First Number.");
let b = prompt("Enter Second Number.");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry, This is Not Allowed.");
};
let sum = parseInt(a) + parseInt(b);
function main() {
    let x = 1;
    try {
        console.log("The Sum is :", sum * x);
        return true;
    } catch (error) {
        console.log("Error Occured.");
        return false;
    }
    finally {
        console.log("Files are Being Closed and DB Connection is Being Closed.");
    };
};
let c = main();