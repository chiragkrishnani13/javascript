const cart = [ { name: "Laptop", price: 1000, category: "electronics" }, 
    { name: "Book",price: 20, category: "books" }, 
    { name: "Shirt", price: 50, category: "clothing" }, ];
     const taxRules = { electronics: 0.18,   taxbooks: 0.05, taxclothing: 0.12,
    };
let totalTax = 0;
cart.forEach((elem)=>
{
    totalTax += elem.price * (taxRules[elem.category])
}
)
console.log(totalTax)