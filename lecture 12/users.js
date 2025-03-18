let container = document.querySelector("#container")
let Accesding = document.querySelector("#Accesding")
let Dsecding = document.querySelector('#Dsecding')
let globalData
console.log(container);
async function api()
{
       const response = await fetch("https://reqres.in/api/users")
        let value = await response.json()
        console.log(value);
        display(value.data)
        globalData = value
}


api()
function display(object)
{
    object.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `<img src="${element.avatar}"> <p> First Name: ${element.first_name}</p>
        <p>Last Name: ${element.last_name}</p>`
        container.appendChild(div)
    });
}

Accesding.addEventListener("click",()=>
{
    let filter = globalData.data.sort((a,b)=>
    {
        return a.first_name.localeCompare(b.first_name)
    })
    container.innerHTML = ''
    display(filter)
})
Dsecding.addEventListener("click",()=>
{
    let filter = globalData.data.sort((a,b)=>
    {
        return b.first_name.localeCompare(a.first_name)
    })
    container.innerHTML = ''
    display(filter)
})
