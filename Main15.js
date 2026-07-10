// let obj = {
//     a: 1,
//     b: "Himanshu";
// };
// console.log(obj);
// let animal = {
//     eats: true;
// };
// let rabbit = {
//     jumps: true;
// };
// rabbit.__proto__ = animal; // Sets Rabbit.[[Prototype]] = Animal.
class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is Created...");
    };
    eats() {
        console.log("Kha Raha Hoon.");
    };
    jumps() {
        console.log("Kood Raha Hoon.");
    };
};
class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is Created and He is a Lion...");
    };
    eats() {
        super.eats();
        console.log("Kha Raha Hoon Roar.");
    };
};
let a = new Animal("Bunny");
console.log(a);
let l = new Lion("Shera");
console.log(l);