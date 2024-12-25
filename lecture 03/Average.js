
let arr = [1,2,3,4,5,6]


let average = (arr)=>
{ let sum = 0
    let avg
    for(let elem of arr)
    {
        sum+=elem
    }
    avg = sum/arr.length
    console.log(avg)
}
average(arr)