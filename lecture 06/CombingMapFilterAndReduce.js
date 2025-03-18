const students = [
    { id: 1, name: 'Alice', grades: { Math: 85, English: 78 } },
    { id: 2, name: 'Bob', grades: { Math: 65, English: 89 } },
    { id: 3, name: 'Charlie', grades: { Math: 92, English: 88 } },
    ];

function average(elem,elem2)
{
    return elem.Math + elem.English/2

}
let student = students.filter((elem)=>
{
   return elem.grades.Math>80
    
}).reduce((acc,curr)=>(acc.grades.Math + curr.grades.Math)/2
)   
console.log(student)