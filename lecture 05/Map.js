let arr = [1,2,3,4,5,6]
// let mappedArr = arr.map((elem)=>elem*elem)

let Currency = [1,2,3,4,5,6]
let mappedArr = Currency.map((elem)=> `$${elem}`
)
console.log(mappedArr)

let employess =[
    {
        name:'test1',
        id:1,
        salary:50000
    },
    {
        name:'test1',
        id:2,
        salary:60000

    },
    {
        name:'test1',
        id:3,
        salary:70000

    }
]

let nameEmployess = employess.map((elem)=>{
   return {name:elem.name,
            salary:elem.salary
}
})
console.log(nameEmployess)

let average = (elems)=>
{
    let sum = 0
    for(let elem of elems)
    {
        sum +=elem
    }
    return sum/elems.length
}

const students = [
    { name: "Alice", grades: [50, 60, 70] },
    { name: "Bob", grades: [30, 20, 40] },
    { name: "Charlie", grades: [90, 85, 95] }
    ];
let student = students.map(
    (elem)=>
    {
       return{
        name:elem.name,
        avg:average(elem.grades)
       }
    }
)
console.log(student)