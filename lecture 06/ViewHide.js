let btn = document.querySelector('#btn')
let img = document.querySelector("#img")
let count = 0
btn.addEventListener(
    'click',()=>
    {
        if(count%2==0)
        {
        img.setAttribute('src',"https://i.pinimg.com/736x/3f/cb/04/3fcb04b9204ae407de4ee0f85bd90dc6.jpg")
        btn.textContent = "hide"
        count++
        }
        else
        {
            img.setAttribute('src','')
            btn.textContent = 'View'
            count++
        }
        
    }
)

// share git of your website
// q4 of pdf
// screen has two buttons when we click 1.dollar conventer 2.pound conventer