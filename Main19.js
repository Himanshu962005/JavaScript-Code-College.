// Exercise 12 - Color the Boxes.
console.log("Main19.js Initializing.");
// let boxes = document.getElementsByClassName("Box");
let boxes = document.querySelector(".Container").children;
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
};
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});