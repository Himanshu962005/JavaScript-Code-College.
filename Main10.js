console.log("Himanshu");
// let boxes = document.getElementsByClassName("Box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";
// document.getElementById("Redbox").style.backgroundColor = "red";
// document.querySelector(".Box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".Box"));
document.querySelectorAll(".Box").forEach((e) => {
  e.style.backgroundColor = "Blue";
});