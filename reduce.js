// import fs from 'fs';
const fs = require('fs');

let output = fs.readFileSync('./assets/data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('  '))
    .reduce((customers, line) => {
        console.log('customers:', customers)

        const customerName = line[0];
        if (!customers[customerName]) {
            customers[customerName] = [];
        }
        customers[customerName].push(
            {
                item: line[1],
                quantity: line[2],
                number: line[3],
            }
        )
        console.log('customers:', customers)
        console.log('----')
        return customers;
    }, {})

console.log('output', JSON.stringify(output));


//console.log(filterdDogs)

// var orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ]
//
// var totalAmount = orders.reduce((sum, order) => {
//          console.log('-----')
//      console.log('sum: ', sum)
//      console.log('order: ', order.amount)
//     return sum + order.amount
// }, 0)

// console.log(totalAmount)
