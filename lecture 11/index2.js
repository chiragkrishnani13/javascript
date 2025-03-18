// function doStep1(intit,callback)
// {
//     const result = intit + 1
//     callback(result)

// }
// function doStep2(init,callback)
// {
//     const result = init +2
//     callback(result)
// }
// function doStep3(init,callback)
// {
//     const result = init +3
//     callback(result)
// }
// function doOperation()
// {
//     doStep1(0,(result1)=>
//     {
//         doStep2(result1,(result2)=>
//         {
//             doStep3(result2,(result3)=>
//             {
//                 console.log(`result:${result3}`)
//             })
//         })
//     })
// }
// doOperation()

const promise = fetch("https://v6.exchangerate-api.com/v6/0c8a053c9a6c20d379bea695/latest/USD")
console.log(promise);
promise.then((response)=>
{
    console.log("data aagai");
    let promise2 = response.json() 
    // response.json bhi promise h return karta hai
    promise2.then((data)=>
    {
        console.log(data);
    })
})

