const users = [
    { id: 1, name: { first: 'Alice', last: 'Johnson' } },
    { id: 2, name: { first: 'Bob', last: 'Smith' } },
    { id: 3, name: { first: 'Charlie', last: 'Brown' } },
    ];
let user = users.map((acc,curr)=>
{
    return {
        id:acc.id,
        lastName:acc.name.last.toUpperCase()
    }
})    
console.log(user)