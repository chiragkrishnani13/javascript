let posts = document.querySelector('#posts')
let ip = document.querySelector('#ip')
let ac
let globalData
ip.addEventListener('input',()=>
{
    let text = ip.value.trim()
    let filterd = globalData.filter((elem)=>
    {
        return elem.title.includes(text)
        || elem.body.includes()
    })
    posts.innerHTML = ''
    display(filterd)
})

function api(link)
{
        fetch(link)
            .then((response)=>response.json())
            .then((data)=>{ globalData = data
                display(data)})
}

function display(post)
{
    post.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML =  `<h1>${element.title}</h1><p>${element.body}</p>`
        console.log(div);
        posts.appendChild(div)
    });
    
    console.log(post);
}
api("https://jsonplaceholder.typicode.com/posts")

