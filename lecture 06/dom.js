let elem = document.querySelector('.test')
elem.style.color = 'red'
elem.style.color = 'yellow'
// queryselector will give only one and querySelectorAll will give collection

let elem2 = document.querySelectorAll('p')

let elem3 = document.querySelector('#id')
console.log(elem3)

elem3.setAttribute('id','changedId')
// it will change the attribuite

setTimeout(()=>
{
    elem3.setAttribute('style','color:green;background-color:grey')
})