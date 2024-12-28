
let elem = document.getElementById('heading-1')
setTimeout(()=>
    {
        elem.style.color = 'yellow'
    },5000
)
let elements = document.getElementsByClassName('test') 
// elements.style.color = 'red'

// for(let i = 0;i<elements.length;i++)
// {
//     elements[i].style.color = 'red'
// }

console.log(elem.innerHTML)
// textcontent also shoe hidden elements
elem.innerHTML = '<p>head</p>' 


let div = document.getElementById('div')


