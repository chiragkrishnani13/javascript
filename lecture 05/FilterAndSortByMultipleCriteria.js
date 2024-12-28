const employees = [ { id: 1, name: "Alice", department: "HR", salary: 70000 }, 
    { id: 2,name: "Bob", department: "Engineering", salary: 50000 }, 
    { id: 3, name: "Charlie",department: "Engineering", salary: 90000 }, 
    { id: 4, name: "David", department:"Marketing", salary: 60000 }, 
    { id: 5, name: "Eve", department: "HR",  salary: 45000 }, ];

let employee = employees.filter((a)=>a.salary>50000).sort(
    (a,b)=>{
        let ans = a.department.localeComapre(b.department)
        if(ans === 0)
        {
            return b.salary - a.salary
        }
        return ans
    }
)
console.log(employee)
