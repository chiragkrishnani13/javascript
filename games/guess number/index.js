let ip = document.querySelector('#ip')
let sumbit_button = document.querySelector('#sumbit-button')
let lowHigh = document.querySelector('#low-high')
let lastGuess = document.querySelector('#last-guess')
let result = document.querySelector('#result')
let restart = document.querySelector("#restart")

let inputValue
let tries = 0
let randomNumber = getRandom()
console.log(randomNumber);

sumbit_button.addEventListener('click',()=>
{

    checkGuess()
})

function reset()
{
    
    
    
    restart.addEventListener('click',()=>
    {
        lowHigh.textContent = ''
        lastGuess.textContent = 'last guess:'
        result.textContent=''
        hide()
        ip.value = ' '
        tries = 0
        randomNumber = getRandom()
        console.log(randomNumber);

        sumbit_button.className ='d-block'
        restart.className='d-none'        

    })
}


function show()
{
    lowHigh.className = 'd-block'
    lastGuess.className = 'd-block'
    result.className = 'd-block'
}

function hide()
{
    lastGuess.className = 'd-none'
    result.className = 'd-none'
    lowHigh.className = 'd-none'
}

function getRandom()
{
    
    return parseInt(Math.random()*100) ; 

}


function checkGuess()
{
     inputValue = ip.value
    
    if(randomNumber > inputValue )
    {
        show()
        lastGuess.textContent+=" "+inputValue
        result.textContent = "WRONG"
        result.className="bg-danger"
        lowHigh.textContent = "TOO LOW"
        tries++
    }
    else if(randomNumber < inputValue )
    {
        show()
        lastGuess.textContent+=" "+inputValue
        result.textContent = "WRONG"
        result.className="bg-danger"
        lowHigh.textContent = "TOO HIGH"
        tries++

        console.log('to high')
    }
    else
    {
        show()
        lastGuess.textContent+=" "+inputValue
        result.textContent = "RIGHT"
        result.className="bg-scuess"
        console.log('you win');
        tries++
        // ip.disabled = true
        sumbit_button.className ='d-none'
        restart.className='d-block'
        reset()
        

    }
    if(tries>=5)
    {
        sumbit_button.className ='d-none'
        restart.className='d-block'
        reset()
    }
   
    ip.focus()
    ip.value = ' '
}