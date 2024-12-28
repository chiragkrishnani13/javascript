// using foreach - print the details of every object in console
// const inventory = [
//     { id: 1, name: "Laptop", stock: 5, threshold: 10 }, 
//     { id: 2, name: "Mouse", stock: 15, threshold: 10 }, 
//     { id: 3, name: "Keyboard", stock: 3, threshold: 5 }
//     ];
// let inven = []
// inventory.forEach((elem)=>console.log(`id - ${elem.id}, name - ${elem.name}, thershold - ${elem.threshold}`))
// inventory.forEach(((elem)=>
//     {
//         if(elem.stock<elem.threshold)
//         {
//             inven.push(elem)
//         }
//     } )
// )
// console.log(inven)


// // in case of filter,your callback must return either true or false
// let filter = inventory.filter((elem)=>elem.stock<elem.threshold)
// console.log(filter)

// using foreach - filter and print details of products having price greater than 1000

// const products = [
//     { name: "Laptop", price: 1000 }, 
//     { name: "Mouse", price: 2500 },
//     { name: "Keyboard",  price: 7500 }
//     ];

// let price = products.filter((elem)=>elem.price>1000)
// console.log(price)

let arr = [11,22,3,43,5]

// arr.sort() here it will based on sort

arr.sort((a,b)=>a-b)
console.log(arr)


let arr2=[]
for(let i = 0;i<arr.length;i++)
{
    for(let j = 0;j<arr.length;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)

const products = [
        { name: "Laptop", price: 1000 }, 
        { name: "Mouse", price: 2500 },
        { name: "Keyboard",  price: 7500 }
        ];

// customSorting
products.sort((a,b)=>a.price - b.price)

// for (let i = 0;i<products.length-1;i++)
// {
//     for(let j = 0;j<products.length-1-i;j++)
//     {
        
//         if(products[j+1].price < products[j].price)
//         {
//             let temp =  products[j]
//             products[j] = products[j+1]
//             products[j+1] = temp
//         }    
//     }
// }
console.log(products)

// hw question
// impementing search feature 
// type - bak
// display all products whoose "name" includes "bak"

let namee = 'chirag'
if(namee.includes('chi'))
{
    console.log("hh")
}