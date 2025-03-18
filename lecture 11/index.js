const xhr = new XMLHttpRequest()
const xhr2 = new XMLHttpRequest()
const xhr3 = new XMLHttpRequest()

const xhr5 = new XMLHttpRequest()
xhr5.addEventListener('loadend',()=>
{
    console.log(JSON.parse(xhr5.responseText));
})
xhr5.open('GET','https://restcountries.com/v3.1/name/India')
xhr5.send()

// xhr3.addEventListener('loadend',()=>
// {
//     console.log(JSON.parse(xhr3.responseText));
// })
// xhr2.addEventListener('loadend',()=>
// {
//     console.log(JSON.parse(xhr2.responseText));
//     xhr3.open("GET","https://cat-fact.herokuapp.com/facts")
//     xhr3.send()
// })
// // we can listen first of xhr2 but in this case it will come after xhr
// xhr.addEventListener('loadend',()=>
// {
//     console.log(JSON.parse(xhr.responseText));
    
//     xhr2.open("GET","https://restcountries.com/v3.1/name/India")
//     xhr2.send()
// })
// xhr.open('GET',"https://dogapi.dog/api/v2/breeds")
// xhr.send()
// console.log("object");
// // when there is callback in callback is known as callbackhell --pyramid of doom
// // solution is promises

// let xhr4 = new XMLHttpRequest()

// xhr4.addEventListener('loadend',()=>
// {
//     console.log('object');
// })
// xhr4.open('GET',"https://restcountries.com/v3.1/name/India")
// xhr4.send()
// console.log("-2");