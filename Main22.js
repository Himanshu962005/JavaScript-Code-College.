// Problems for Sigma Developers.
// Q2.The Double Trouble : You are Tasked with Writing a Function that Doubles Each Element in an Array. However, there's a Catch : If the Array Contains Consecutive Duplicate Elements, Only Double One of them.
function doubleTrouble(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i]);
        } else {
            result.push(arr[i] * 2);
        };
    };
    return result;
};
console.log(doubleTrouble([1, 2, 2, 3]));    // Output : [ 2, 4, 2, 6 ].
console.log(doubleTrouble([4, 4, 4, 5]));    // Output : [ 8, 4, 4, 10 ].
console.log(doubleTrouble([1, 2, 3]));       // Output : [ 2, 4, 6 ].
