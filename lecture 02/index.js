console.error("Coming as error")
console.warn("coming as warning")



let a
console.log(a)
// above a is undefined , means no value

let b = null
console.log(typeof b)
// above b is null it is special value which has datatype is object


let obj = 
{
    name : "Chirag",
    rollNo:3,
    1:'chirag',
    

   
}


// object is key value pair: object is also like dictionary , we can write key in string , Number and symbol (we dont write in quotes it comes in primitive) In value it holds anything


console.log(obj.rollNo)
console.log(obj.name)

console.log(obj.address?.street)
console.log(obj["address"]?.['street'])
// ? wil do if it gives error then ignore that experssion otherwise it will compil and run that line




let keyName = 'rollNo'
console.log(obj[keyName])

// In this case we have stored rollNo in variable as String then in console keyName have its value 'rollNo' then it will search for 'rollNo' in obj




// array is also an object


// for(let i = 0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
let j =0
// while( j!=arr.length)
// {
//     console.log(arr[j])

// }

let obj1 = 
{
    name : "Chirag",
    rollNo:2,
    

   
}
// let obj2 = 



// create an array of students each student having name,rollNo

let arr2 = [
{
    name : "Chirag",
    rollNo:2
},
{
    name : "Chirag",
    rollNo:1
},
{
    name : "Chirag",
    rollNo:3
}
]
for(let i = 0;i<arr2.length;i++)
{
    // console.log("Name:",arr2[i]["name"]," RollNo:",arr2[i]['rollNo'])
    console.log(`Name - ${arr2[i]['name']} Rollno - ${arr2[i]['rollNo']}`)
}

// for-each loop
for(let student of arr2)
{
    console.log(`Name - ${student.name} Rollno - ${student.rollNo}`)
}

// create an array of integers sort using bubble sort
let arr = [1,2,3,90,2,3]
console.log(arr.sort
)