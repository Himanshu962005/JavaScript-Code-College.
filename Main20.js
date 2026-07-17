// Exercise 13 - Dynamic Website Builder.
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this Function.
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    };
    let html = `<div class="Card">
    <div class="Image">
        <img src="${thumbnail}"
            alt="">
        <div class="Capsule">${duration}</div>
    </div>
    <div class="Text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`
    document.querySelector(".Container").innerHTML = document.querySelector(".Container").innerHTML + html;
};
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");