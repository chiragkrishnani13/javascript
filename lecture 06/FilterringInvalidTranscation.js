const transactions = [
    { id: 1, amount: 100 },
    { id: 2, amount: -50 },
    { id: 3 },
    { id: 4, amount: 200 },
    ];

let trans = transactions.filter((elem)=> elem.amount>0
)
console.log(trans)