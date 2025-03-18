let img = document.querySelector("#img")
let btn = document.querySelector("#btn")
let count = 0
btn.addEventListener('click',()=>
{
    if(count%2 == 0)
    {
        img.setAttribute('src',"https://i.pinimg.com/736x/8b/e0/60/8be0603fa9222908eac38746f7c72c2a.jpg")
        count++
    }
    else
    {
        img.setAttribute('src','https://i.pinimg.com/736x/3f/cb/04/3fcb04b9204ae407de4ee0f85bd90dc6.jpg')
        count++
    }
    
    
})

