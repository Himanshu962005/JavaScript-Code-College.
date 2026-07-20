// Q.Write a Script to Get the Largest Value in an Array.
let arr = [10, 45, 7, 89, 23, 67];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    };
};
console.log("Largest Value :", largest);