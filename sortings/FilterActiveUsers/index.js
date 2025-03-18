let users = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true }
]
let activeUSers=[]

function filterActiveUsers(users)
{
    let index = 0
    for(let i = 0;i<users.length;i++)
    {
        if(users[i].isActive)
        {
            activeUSers[index] = users[i]
            index++
        }

    }
}

filterActiveUsers(users)
console.log(activeUSers)