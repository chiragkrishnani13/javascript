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
    input.innerText =''
    answer.innerText = ''

    let ans = primeNUmber(ip.value)
    if(ans)
    {
        input.innerText += ip.value
        answer.innerText += 'primeNumber'
    }
    else
    {
        input.innerText += ip.value
        answer.innerText += 'Not a prime Number'
    }
  
})

// prime number working synchrously took some time for very long number
// due to which website got stuck and we were not able to even focus on the input
// website is not responding
// this is the problem with long running sychronus programs
// asynchrnous bolega kaam kr ka rakh, i will comeback to take answer from you
// eg - instagram - page works even if the data is loading from backend
// example of asynchrous is setTimeout


// API - door to your backend prog
// plss data do - request

// data ayi - response
// jo data bej rhe hai bundle -request body
// data gyi ya nahi gyi - response
// response comes with a status code
// 404 not found
// 200 ok
// 500 inernal server error


const xml = new XMLHttpRequest()
xml.addEventListener('loadend',()=>
{
    console.log('data agyi');
})
xml.open('GET',"https://dogapi.dog/api/v2/breeds")
xml.send()
console.log('testing');

