let cont = document.querySelector('.cont')
let all = document.querySelector('.all')
let single = document.querySelector('.single')


async function getStudent()
{
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    console.log(data);

    displayAllStudents(data)
}
getStudent()

function displayAllStudents(data)
{
    data.forEach(element => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        let button = document.createElement('button')
        div.classList.add('d-flex')
        p.innerText =  `${element.name}`
        button.innerText = 'view'
        div.appendChild(p)
        div.appendChild(button)
        all.appendChild(div)
        button.addEventListener('click',()=>
        {
            getSingleStudent(element.id)
        })
        
    });

}

async function getSingleStudent(id)
{
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let data = await res.json()
    console.log('hii');
    displaySingleStudent(data)
}

function displaySingleStudent(data)
{
    single.innerHTML = ''

    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let a = document.createElement('a')
    h2.innerText = data.name
    p.innerText = data.phone
    a.innerText = 'view'
    a.setAttribute('href',data.website)
    a.setAttribute('target',"_blank")


    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(a)
    single.appendChild(div)


    
}