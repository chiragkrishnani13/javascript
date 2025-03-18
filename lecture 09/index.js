let slide = document.querySelectorAll('.slide')
let forward = document.querySelector('.forward')
let prev = document.querySelector('.prev')
let move = document.querySelector('.move')
let demo = document.querySelector('.demo')

let count = 0

slide.forEach((slide,index)=>
{
    slide.style.left = `${index*100}%`
})

prev.addEventListener('click',()=>
{
    count--
    if (count == -1)
    {
        count = slide.length-1
    }
    slide.forEach((slide,index)=>
    {
        slide.style.transform = `translate(${100*-count}%)`
    })
})

forward.addEventListener('click',()=>
{
    count++

    if(count == slide.length)
    {
        count = 0
    }

    slide.forEach((slide,index)=>
    {
        slide.style.transform = `translate(${100*-count}%)`
    })
})

move.addEventListener('click',()=>
{
    
})

function changePostion()
{

}