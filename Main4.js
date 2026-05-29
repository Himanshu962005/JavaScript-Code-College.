console.log("Hello I am Conditional.");
let age = 1;
// let Grace = 2;
// let Age += Grace;
// console.log(Age);
// console.log(Age + Grace);
// console.log(Age - Grace);
// console.log(Age * Grace);
// console.log(Age / Grace);
// console.log(Age ** Grace);
// console.log(Age % Grace);
/* I am a Multiline Comment. */
if (age == 18) {
  console.log("You Can Drive.");
} else if (age == 0) {
  console.log("Are You Kidding?");
} else if (age == 1) {
  console.log("Are You Again Kidding?");
} else {
  console.log("You Cannot Drive.");
}
a = 6;
b = 8;
let c = a > b ? a - b : b - a;
/* Translates to :
if (a > b) {
    let c = a - b;
}
else {
    let c = b - a;
} */