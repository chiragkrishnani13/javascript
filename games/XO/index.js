let box = document.querySelectorAll(".btn")
let count = 0
win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
box.forEach((elem)=>
{   elem.addEventListener('click',()=>{
    if(count%2 === 0)
    {
        elem.innerText = 'O'
        count++
        elem.disabled = true
        
        
    }
    else
    {
        elem.innerText = "X"
        count++
        elem.disabled = true
    }
    check()
})

})
function check()
{
    for(let pattern of win)
    {
        let pos1 = box[pattern[0]].innerText 
        let pos2= box[pattern[1]].innerText 
        let pos3 = box[pattern[2]].innerText

       if(pos1!='' && pos2!='' && pos3!='')
       {
        if(pos1 === pos2 && pos2 === pos3)
        {
            console.log("winner");
            return true
        }
       }
        
    }
    return false
}
