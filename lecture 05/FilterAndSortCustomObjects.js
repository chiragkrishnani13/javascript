const books = [ { title: "Book A", author: "John Doe", year: 2008 },
     { title: "Book B",author: "Jane Smith", year: 2015 }, 
     { title: "Book C", author: "Emily Davis", year: 2020 }, 
     {title: "Book D", author: "Michael Brown", year: 2005 }, ];

let book = books.filter((elem)=>elem.year>2010)
let auth = book.sort((a,b)=>
{
    let author1 = a.author.split(' ')
    let author2 = b.author.split(' ')
    return   author1[1].localeCompare(author2[1]) 

}
)
console.log(auth)

