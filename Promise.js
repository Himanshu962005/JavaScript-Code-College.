console.log("This is Promises.");
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No Random Number was not Supporting You.");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done.");
      resolve("Himanshu");
    }, 3000);
  };
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No Random Number was not Supporting You 2.");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done 2.");
      resolve("Himanshu 2");
    }, 1000);
  };
});
let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});