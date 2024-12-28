let obj1 = {
    name:"test1",
    roll:23
}

const obj2 = {
    name:"test1",
    roll:24
}
// obj2 = obj1 error
// the refernce of obj2 is changing then it gives error bcoz obj2 is const

obj2.name='updated test2'
console.log(obj2)
// this not a error bcoz the refernce of obj2 is not changing

