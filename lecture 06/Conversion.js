let pound = document.querySelector('#pound')
let dollar = document.querySelector('#dollar')
let ans = document.querySelector('p')
let ip = document.querySelector('#ip')
let check = document.querySelector('#check')
let form = document.querySelector('#form')
let label = document.querySelector('#label')

pound.addEventListener('click',()=>
{
    form.setAttribute('class','d-flex d-block')
    label.textContent = 'Enter in Dollars $'
    ip.value =''
    ans.textContent ='Ans-'

    
    check.addEventListener('click',()=>
    {
        ans.textContent ='Ans'
        let val = ip.value
        let ruppeValue = val*80
        console.log(ruppeValue)
        ans.textContent+=ruppeValue + " In Dollars"
        
    })



})
dollar.addEventListener('click',()=>
{
    form.setAttribute('class','d-flex d-block')
    label.textContent = 'Enter in pounds '

    ip.value =''
    ans.textContent ='Ans-'
    
    check.addEventListener('click',()=>
    {
        ip.textContent =''

        ans.textContent ='Ans'
        let val = ip.value
        let ruppeValue = val*20
        console.log(ruppeValue)
        ans.textContent+=ruppeValue +' In Pounds'

    })

})