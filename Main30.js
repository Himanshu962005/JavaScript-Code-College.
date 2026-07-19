// Problems for Sigma Developers.
// Q11.The Array Filterer : You are Building a Search Feature for your E-Commerce Site. Write a Function Named FilterProducts that Takes an Array of Product Objects and a Filter Criterion. The Function should Return a New Array Containing Only the Products that Match the Filter Criterion.
function filterProducts(products, criterion) {
    return products.filter(product => product.category === criterion);
}
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Shoes", category: "Footwear" }
];
console.log(filterProducts(products, "Electronics"));