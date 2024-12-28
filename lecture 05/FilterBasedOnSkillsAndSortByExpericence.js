const employees = [ { id: 1, name: "Alice", skills: ["JavaScript", "React"], experience: 5 },
{ id: 2, name: "Bob", skills: ["Python", "Django"], experience: 8 }, 
{ id: 3, name: "Charlie",skills: ["JavaScript", "Node.js"], experience: 3 }, 
{ id: 4, name: "David", skills: ["Java","Spring"], experience: 7 }, 
{ id: 5, name: "Eve", skills: ["JavaScript", "Vue"], experience: 6}, ];

let employee = employees.filter((elem)=>
    elem.skills.includes("JavaScript")

).sort((a,b)=>b.experience-a.experience)

console.log(employee)