// Problems for Sigma Developers.
// Q9.The Asynchronous Shopper : Imagine you are Building an Online Shopping Application. Write an Asynchronous Function called PlaceOrder that Simulates Placing an Order and Returns a Promise. The Promise should Resolve with an Order Confirmation Message After a Random Delay.
async function placeOrder() {
    const delay = Math.floor(Math.random() * 3000) + 1000; // 1–3 Seconds.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Placed Successfully!");
        }, delay);
    });
};
placeOrder().then((message) => {
    console.log(message);
});