// Problems for Sigma Developers.
// Q5.The Sum Selector : You are Working on a Function that Should Sum All Numbers in an Array Until it Encounters a Negative Number. Write a Function that Performs this Summation.
function sumSelector(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) break;
        sum += arr[i];
    };
    return sum;
};
console.log(sumSelector([1, 2, 3, -4, 5])); // Output : 6
console.log(sumSelector([10, 20, -1, 30])); // Output : 30
console.log(sumSelector([5, 5, 5]));        // Output : 15
console.log(sumSelector([-2, 1, 2]));       // Output : 0