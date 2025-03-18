// Enable sorting functionality,
// sort by name, sort by rating

let products = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 29.99,
        "category": "Fashion",
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 29.99,
        "category": "Entertainment",
        "rating": 4.2
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 24.99,
        "category": "Electronics",
        "rating": 4.2
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 14.99,
        "category": "Fashion",
        "rating": 3.9
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 39.99,
        "category": "Fashion",
        "rating": 4.7
    },
    {
        "id": 6,
        "name": "Product 3",
        "price": 44.99,
        "category": "Electronics",
        "rating": 4.1
    },
    {
        "id": 7,
        "name": "Product 7",
        "price": 34.99,
        "category": "Books",
        "rating": 4.6
    },
    {
        "id": 8,
        "name": "Product 7",
        "price": 49.99,
        "category": "Sports & Outdoors",
        "rating": 4.3
    },
    {
        "id": 9,
        "name": "Product 9",
        "price": 54.99,
        "category": "Health & Personal Care",
        "rating": 4.9
    },
    {
        "id": 10,
        "name": "Product 10",
        "price": 64.99,
        "category": "Toys & Games",
        "rating": 4.4
    }
];

function sortByPrice(a,b)
{
    return a.price - b.price
}

function sortByRating(a,b)
{
    return a.rating  - b.rating
}

let product = products.sort(sortByRating)
console.log(product);