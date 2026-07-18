// Problems for Sigma Developers.
// Q1.The Magical Sorting Hat : Imagine you are Creating a Magical Sorting Hat for a Wizard School. Implement a JavaScript Function that Takes an Array of Student Names and Assigns them to One of the Four Houses (Gryffindor (Length Less Than 6), Hufflepuff(Length Less Than 8), Ravenclaw(Length Less Than 12), or Slytherin(Length Greater Than or Equal to 12)) Based on the Length of their Names.
let students = ["Himanshu", "Divya", "Prashant", "Laxmi", "Digesh", "Khushi", "Anish", "Nisha", "Rajkumar", "Dipika", "Aadil"];
let houses = [];
for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor");
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff");
    }
    else if (student.length < 12) {
        houses.push("Ravenclaw");
    }
    else {
        houses.push("Slytherin");
    };
};
console.log(houses);