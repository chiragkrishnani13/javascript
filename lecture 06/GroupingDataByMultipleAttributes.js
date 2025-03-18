const sales = [
    { region: 'North', product: 'A', sales: 100 },
    { region: 'South', product: 'B', sales: 200 },
    { region: 'North', product: 'B', sales: 150 },
    { region: 'South', product: 'A', sales: 300 },
    { region: 'North', product: 'A', sales: 50 },
    ];
let sal = {
    
}
function callBack({region})
{

}

let sale = Object.groupBy(sales,callBack)
console.log(sale);