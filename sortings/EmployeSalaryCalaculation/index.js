const employees = [
    { id: 1, name: "Alice", salary: 50000, bonus: 5000 },
    { id: 2, name: "Bob", salary: 60000, bonus: 7000 },
    { id: 3, name: "Charlie", salary: 55000, bonus: 6000 }
    ];

let employeesTotalSalary =
[
    
]

function totalSalary(employees)
{
    let total = 0
    for(let i = 0;i<employees.length;i++)
    {
        total = employees[i].salary + employees[i].bonus
        employeesTotalSalary.push({
            id:employees[i].id,
            name:employees[i].name,
            totalsal:total
        })
        total = 0
    }
    
    
    console.log("hello")
}
totalSalary(employees)
console.log(employeesTotalSalary)
