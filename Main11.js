let button = document.getElementById("btn");
// List of All Mouse Events.
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events;
button.addEventListener("dblclick", () => {
  document.querySelector(".Box").innerHTML =
    "<b>Yayy You Were Clicked.</b> Enjoy Your Click!";
});
button.addEventListener("contextmenu", () => {
  alert("Don't Hack us by Right Click Please.");
});
document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.keyCode);
});