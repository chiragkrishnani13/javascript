let eventt = document.querySelector('#btn-click')
console.log(eventt);
// eventt.addEventListener('click',()=>
// {
//     console.log("hi")
// })

function foo()
{
    console.log("From Funcation.....");
}
let ip = document.querySelector('#ip')
ip.addEventListener('change',()=>
{
            console.log("change")

    console.log(ip.value)
})
ip.addEventListener('input',()=>
    {
        console.log("input")
        console.log(ip.value)
    })