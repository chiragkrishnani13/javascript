const cart =
[
    {
        name:"laptop",
        quantity:1,
        price:2000
    },
    {
        name:"Mouse",
        quantity:2,
        price:2000
    },
    {
        name:"Keyboard",
        quantity:1,
        price:2000
    },
]

function total(arr)
{
    let sum = 0;
    for(let i =0;i<arr.length;i++)
    {
        sum += arr[i].quantity * arr[i].price
    }

    return sum;
}

console.log(total(cart))