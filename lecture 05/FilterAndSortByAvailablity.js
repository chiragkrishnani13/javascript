const products = [ { id: 1, name: "Laptop", price: 1200, available: true }, 
    { id: 2, name:"Phone", price: 800, available: false }, 
    { id: 3, name: "Tablet", price: 600, available: true },
    { id: 4, name: "Monitor", price: 300, available: true }, 
    { id: 5, name: "Keyboard", price: 50,available: false }, ];

let product = products.filter((a)=>a.available).sort((a,b)=>a.price-b.price)
console.log(product)