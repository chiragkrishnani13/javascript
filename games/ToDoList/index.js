let ip = document.querySelector('#ip')
let add = document.querySelector('#add')
let listt = document.querySelector('ul')
let btn = document.querySelector('.btn')
let val = ip.value
let li = document.querySelector('label')
let checkedList = []

// listt.className = "bg-green"
add.addEventListener('click',()=>
{
    listt.innerHTML += `
<li>${ip.value}</li>`
console.log(ip.value);
ip.value = ''

})

let f = checkedList.find((element) => element == 'chirag');

const found = checkedList.find((element)=>
    {
        element == e.target.textContent
    })

listt.addEventListener('click',(e)=>
{
   
    if(e.target.className)
    {

        e.target.className = ''
    }
    else
    {
        e.target.className = 'bg-green'
    }
})

function checked(element)
{
    checkedList.push(element)
}
