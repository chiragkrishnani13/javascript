const products = [ { productId: 1, productName: 'Laptop', price: 1000 },
        { productId: 3, productName: 'Tablet', price: 700 },
        { productId: 2,productName: 'Phone', price: 500 },
      { productId: 4, productName: 'Headphones', price: 100 } ];

let product = products.filter((a)=> a.price>200 && a.price<800)
product.sort((a,b)=>a.price-b.price)
console.log(product)