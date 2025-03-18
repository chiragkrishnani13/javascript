const inventory = [
{ id: 1, name: "Laptop", stock: 5, threshold: 10 },
{ id: 2, name: "Mouse", stock: 15, threshold: 10 },
{ id: 3, name: "Keyboard", stock: 3, threshold: 5 }
]


let reStock =[]
function inventoryManagement( inventory )
{

    for(let i = 0;i<inventory.length;i++)
    {
        if(inventory[i].stock < inventory[i].threshold)
        {
            reStock.push(inventory[i])  
        }
    }

}
inventoryManagement(inventory)
console.log(reStock)