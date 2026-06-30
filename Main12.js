console.log("Himanshu is a Hacker.");
console.log("Divya is a Hacker.");
setTimeout(() => {
  console.log("I am Inside SetTimeOut.");
}, 0);
setTimeout(() => {
  console.log("I am Inside SetTimeOut2.");
}, 0);
console.log("The End");
const fn = () => {
  console.log("Nothing");
};
const callback = (arg, fn) => {
  console.log(arg);
  fn();
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => callback("Himanshu", fn);
  document.head.append(sc);
};
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);