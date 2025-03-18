let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#multiply')
let percentage = document.querySelector('#percentage')
let ip = document.querySelector('#ip')
let sumbit = document.querySelector("#sumbit")
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')
let dzero = document.querySelector('#dzero')
let ac = document.querySelector('#ac')
let dot = document.querySelector('#dot')
let delet = document.querySelector('#delete')

dot.addEventListener('click',()=>
{
    ip.value+=dot.textContent
})

delet.addEventListener('click',()=>
{
    let str = ip.value
    ip.value=str.slice(0,str.length-1)
})

divide.addEventListener('click',()=>
{
    ip.value+='/'
})
multiply.addEventListener('click',()=>
{
    ip.value+='*'
})
percentage.addEventListener('click',()=>
{
    ip.value+='%'
})
            

ac.addEventListener('click',()=>
{
    ip.value = " "
})
plus.addEventListener('click',()=>
{
    ip.value+='+'
})

minus.addEventListener('click',()=>
{
    ip.value+='-'
})

one.addEventListener('click',()=>
{
    ip.value+=one.textContent
    console.log("hello");
})
two.addEventListener('click',()=>
{
    ip.value+=two.textContent
})
three.addEventListener('click',()=>
{
    ip.value+=three.textContent
})
four.addEventListener('click',()=>
{
    ip.value+=four.textContent
})
five.addEventListener('click',()=>
{
    ip.value+=five.textContent
})

six.addEventListener('click',()=>
{
    ip.value+=six.textContent
})
seven.addEventListener('click',()=>
{
    ip.value+=seven.textContent
})
eight.addEventListener('click',()=>
{
        ip.value+=eight.textContent
})
nine.addEventListener('click',()=>
{
    ip.value+=nine.textContent
})
zero.addEventListener('click',()=>
{
    ip.value+=zero.textContent
})

dzero.addEventListener('click',()=>
{
    ip.value+=dzero.textContent
})
sumbit.addEventListener('click',()=>
{
    ip.value = eval(ip.value)
    console.log(ip.value);
})
ip.focus()
