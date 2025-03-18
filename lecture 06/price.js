let ip = document.querySelector('#ip')
let check = document.querySelector('#check')
let ans = document.querySelector("#ans")
check.addEventListener('click',()=>
{
    let val = ip.value
    let ruppeValue = val*80
    ans.textContent = ruppeValue
    ip.value = ''
    ip.focus()
})