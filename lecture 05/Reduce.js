let nums = [10,20,30,40]
let value = nums.reduce((acc,curr,index)=>acc+curr,12)
// if intial value is not passed ,arr[0] is your intial value
console.log(value)

let words = ['hello','world','from','SGT']
let word=words.reduce((acc,curr)=>acc+" "+curr)
console.log(word)

const numbers = [1,22,3,4,5]
let max = numbers.reduce((acc,curr)=>{
    if(acc>curr)
{
    return acc
}
else
{
    return curr
}
})
console.log(max)


setInterval(()=>
{
    console.log('hii')

},1000)

setTimeout(()=>{
    console.log('popped')
},5000)