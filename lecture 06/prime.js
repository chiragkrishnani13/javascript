function primeNUmber(num)
{
    let i = 2
    let flag = true
    while(i!=num)
    {
        if(num%i === 0)
        {
            return false
        }
        i++
    }
    return flag
}
let ip = document.querySelector('.ip')
let button = document.querySelector('.button')
let input = document.querySelector('#input')
let answer = document.querySelector('#ans')


button.addEventListener('click',()=>
{
    input.innerText += ip.value
    let ans = primeNUmber(ip.value)
    if(ans)
    {
        answer.innerText += 'primeNumber'
    }
    else
    {
        answer.innerText += 'Not a prime Number'
    }
})

