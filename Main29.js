// Problems for Sigma Developers.
// Q10.The Coffee Machine : In your Coffee Shop Application, You need to Simulate the Process of Brewing Coffee Asynchronously. Write an Async Function Named BrewCoffee that Takes the Type of Coffee and Returns a Promise. The Promise should Resolve with a Message Indicating that the Coffee is Ready After a Random Delay.
async function brewCoffee(coffeeType) {
    const delay = Math.floor(Math.random() * 3000) + 1000; // 1–3 Seconds.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${coffeeType} is Ready!`);
        }, delay);
    });
};
brewCoffee("Cappuccino").then((message) => {
    console.log(message);
});