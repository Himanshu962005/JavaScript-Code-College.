// async function getData() {
//     Simulate Getting Data From a Server.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// };
// Settle Means Resolve or Reject.
// Resolve Means Promise has Settled Successfully.
// Reject Means Promise has not Settled Successfully.
async function getData() {
    // Simulate Getting Data From a Server.
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await x.json();
    return data;
};
async function main() {
    console.log("Loading Modules.");
    console.log("Do Something Else.");
    console.log("Load Data.");
    let data = await getData();
    console.log(data);
    console.log("Process Data.");
    console.log("Task 2.");
}
main();
// data.then((v) => {
//     console.log(Data);
//     console.log("Process Data.");
//     console.log("Task 2.");
// });