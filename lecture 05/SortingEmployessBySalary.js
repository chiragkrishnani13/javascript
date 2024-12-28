const employees = [ { name: 'Alice', position: 'Developer', salary: 60000 }, 
    { name: 'Bob',position: 'Manager', salary: 90000 }, 
    { name: 'Charlie', position: 'Designer', salary: 50000 }, 
    {name: 'David', position: 'Developer', salary: 75000 } ];

employees.sort((a,b)=> b.salary - a.salary)
console.log(employees)