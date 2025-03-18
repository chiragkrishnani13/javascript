fetch('https://fakestoreapi.com/products/categories')
.then((response)=>response.json())
.then((value)=>console.log(value))

let cont= document.querySelector('.cont')
let pro = document.querySelector('.product')

async function getCategories()
{
    let response = await fetch('https://fakestoreapi.com/products/categories')
    let categories = await response.json()
    display(categories)
}
let categories = getCategories()

function display(data)
{
    let button
    data.forEach(element => {
         button = document.createElement('button')
        button.innerText = element
        cont.appendChild(button)
        button.addEventListener('click',(event)=>
        {
            console.log(event.target.innerText);
            getProduct(event.target.innerText)
        })
        
    });
    

}
function displayProduct(product)
{
    product.forEach((element)=>
    {
        const productDiv = document.createElement('div')
        const h2 =  document.createElement('h2')
        const p = document.createElement('p')
        const img = document.createElement('img')

        console.log('hi')
        h2.innerText = element.title
        p.innerText = element.description
        img.setAttribute('src',element.image)

        productDiv.appendChild(h2)
        productDiv.appendChild(img)
        productDiv.appendChild(p)

        pro.appendChild(productDiv)
        console.log('hi')


    })
    console.log(pro)
    
}
async function getProduct(product)
{
    let response = await fetch(`https://fakestoreapi.com/products/category/${product}`)
    let products = await response.json()
    console.log(products);
    displayProduct(products); 
}