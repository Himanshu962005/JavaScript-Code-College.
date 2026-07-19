// Problems for Sigma Developers.
// Q13.The Shopping Cart Totalizer : You are Working on an E-Commerce Website, and You need to Calculate the Total Cost of Items in the Shopping Cart. Implement a Function Named CalculateTotal that Takes an Array of Products with Prices and Quantities and Returns the Total Cost.
function calculateTotal(products) {
    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};
const products = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];
console.log(calculateTotal(products)); // Output : 52500.