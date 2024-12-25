// NaN is not a number (special type of datatype)

// three type of conversions from string to int

// let a = '4.2'
// let b = parseFloat(a)
// console.log(b)

// let x = '4.2'
// let y = Number(a)
// console.log(b)

// a = '5.3'
// b = +a
// console.log(b)


// truthy value : anything other than 0 in number is true

// flasy vlaues : '',undefined,0,null,false

// == : it checks only content
// === : it checks content and datatype


let obj1 = 
{
    name :'chirag',
    rollNo:2
}

// shallow coppying
// let obj2 = {...obj1}
// obj1.name = "shhh"
// console.log(obj1)
// console.log(obj2)

let objs1 = 
{
    name:'name',
    address:{
        street:"lkvflsd"
    }
}
let objs2 = {...objs1}
objs2.address.street = "changed"
console.log(objs1)
console.log(objs2)
//indar wala address ek daba hai address ka jo ki obj1 aur obj2 toh uska refernce ek h hai tabhi andar ka address change hooga

let obj3 = 
{
    name :'chirag',
    rollNo:2
}

for(let elem in obj3 )
{
    console.log(elem)
}
// it will print keys of object and  in array it will print index because in internaly it is object only


console.log(undefined+20)