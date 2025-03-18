const cat1 = fetch("https://cat-fact.herokuapp.com/facts")
let dog1 = fetch("https://dog-api.kinduff.com/api/facts")
console.log(cat1);
// cat1.then((response)=>
// {
//     const cat2 = response.json()
//     cat2.then((data)=>
//     {
//         console.log(data)
//         dog1.then((response)=>
//         {
//             let dog2 = response.json()
//             dog2.then((data)=>
//             {
//                 console.log(data);
//             })
            
//         })
//     })
// })

cat1.then((response)=>response.json())
.then((data)=>fetch("https://restcountries.com/v3.1/name/India"))
.then((response2)=>response2.json())
.then((data)=>fetch("https://restcountries.com/v3.1/name/India"))
.then((response3)=> response3.json())
.then((data)=>console.log(data))