// Problems for Sigma Developers.
// Q8.Async Array Mapping : Write an Asynchronous Function that Takes an Array of Numbers and Returns a New Array of Promises where each Number is Multiplied by 2 After a Delay of 500 Milliseconds.
async function asyncArrayMapping(arr) {
    return arr.map(num =>
        new Promise(resolve =>
            setTimeout(() => resolve(num * 2), 500)
        )
    );
};
asyncArrayMapping([1, 2, 3]).then(async (promises) => {
    const result = await Promise.all(promises);
    console.log(result); // Output After 500ms : [2, 4, 6].
});