const transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
const totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/

let numSales = transaction => transaction.type == 'sale'

numSales = transactions.filter(numSales).length

/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( 'The total number of sales is:', numSales );


// // --------------------------------------------------
// // QUESTION 02
// // --------------------------------------------------
// /*
//   Calculate the total number of 'purchases'.
// */
  
let numPurchases = transaction => transaction.type == 'purchase'

numPurchases = transactions.filter(numPurchases).length;

 console.log( 'The total number of purchases is:', numPurchases );


// // --------------------------------------------------
// // QUESTION 03
// // --------------------------------------------------
// /*
//   Calculate the total number of 'cash' 'sales'.

//   HINT(S):
//   - Don't forget that 'purchases' can also be made in 'cash'!
// */

let numCashSales = transaction => transaction.type == 'sale' && transaction.paymentMethod == 'cash'

numCashSales = transactions.filter(numCashSales).length

console.log( 'The total number of cash sales is:', numCashSales );


// // --------------------------------------------------
// // QUESTION 04
// // --------------------------------------------------
// /*
//   Calculate the total number of 'credit' 'purchases'.

//   HINT(S):
//   - Make sure to exclude any 'sales' made by 'credit'!
// */
let numCreditPurchases = transaction => transaction.type == 'purchase' && transaction.paymentMethod == 'credit'

numCreditPurchases = transactions.filter(numCreditPurchases).length

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// // --------------------------------------------------
// // QUESTION 05
// // --------------------------------------------------
// /*
//   Create an array that includes all of vendors which appear in the transactions data set.
//   eg. `[ 'vendor one', 'vendor two', ... ]

//   HINT(S):
//   - Not all transactions have a 'vendor'!
//   - The assembled array should be made up of strings, not full `transaction` objects.
//   - This array is allowed to contain duplicate values.
// */
const allVendors = transactions.filter(transaction => transaction.vendor).map( ({vendor}) => vendor)

console.log( 'The vendors are:', allVendors );


// // --------------------------------------------------
// // QUESTION 06
// // --------------------------------------------------
// /*
//   Create an array that includes all of the *unique* customers which appear in the transactions data set.
//   eg. `[ 'customer one', 'customer two', ... ]

//   HINT(S):
//   - Not all transactions have a 'customer'!
//   - The assembled array should be made up of strings, not full `transaction` objects.
//   - Make sure that the resulting array *does not* include any duplicates.
// */
let uniqueCustomers = new Set(transactions.filter(transaction => transaction.customer).map( ({customer}) => customer))
let my_array = []
uniqueCustomers.forEach(element => my_array.push(element)) 
console.log( 'The unique customers are:', my_array );


// // --------------------------------------------------
// // QUESTION 07
// // --------------------------------------------------
// /*
//   Create an array of information about the 'sale' transactions which include 5 or more items.

//   The array should resemble the following:
//   [ { name: 'Customer Name', numItems: 5 }, ... ]

//   HINT(S):
//   - There may be more than 1 'sale' that includes 5 or more items.
//   - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
// */
const bigSpenders = transactions.filter(tx => tx.type == 'sale' && tx.items.length > 4).map(transaction => {
  return {name: transaction.customer, numItem: transaction.items.length}

})
console.log('==========')
console.log( 'The "big spenders" are:', bigSpenders )


// // --------------------------------------------------
// // QUESTION 08
// // --------------------------------------------------
// /*
//   Calculate the sum of the *first* 'sale' transaction.

//   HINT(S):
//   - Transactions don't have 'prices', but their 'items' do!
// */
let sumFirstSale = transactions[0].items.reduce( (accumulator, currentValue) => currentValue.price + accumulator.price )
// total = 0;
// for (i=0; i < sumFirstSale.length; i++) {
//   total += sumFirstSale[i].price;
// }
// sumFirstSale = total;
console.log( 'The sum of the first sale items is:', sumFirstSale );


// // --------------------------------------------------
// // QUESTION 09
// // --------------------------------------------------
// /*
//   Calculate the sum of *all* 'purchase' transactions.

//   HINT(S):
//   - Your solution to 'QUESTION 08' is a good starting point!
//   - Make sure to include 'price' information from *all* purchases.
// */

// const sumPurchases = transactions.filter(tx => tx.type == 'purchase').map(tx => tx.items).flat()
const sumPurchases = transactions.filter(transaction => transaction.type == 'purchase')
      .map(transaction => transaction.items.map(item => item.price)).flat().reduce((accumulator, currentValue) => currentValue + accumulator);



console.log( 'The sum of all purchases is:', sumPurchases);


// // --------------------------------------------------
// // QUESTION 10
// // --------------------------------------------------
// /*
//   Calculate the company's net profit.

//   This number will be positive if the sum of the sales is greater than the amount spent on purchases.

//   Otherwise, this number will be negative.

//   HINT(S):
//   - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
// */
const netProfit = transactions.map(transaction => transaction.items.map(item => item.price)).flat().reduce((accumulator, currentValue) => currentValue + accumulator);



console.log( 'The net profit is:', netProfit );


// // --------------------------------------------------
// // QUESTION 11
// // --------------------------------------------------
// /*
//   Calculate the most items sold as part of single transaction.

//   HINTS:
//   - The result of this calculation should be a number (not an array, object, or other data type).
// */
let mostItems = transactions.filter(tx => tx.type=='sale').map(tx => tx.items.length).sort()
mostItems = mostItems[mostItems.length - 1]

console.log( 'The most items sold in a single transaction is:', mostItems );


// // --------------------------------------------------
// // QUESTION 12
// // --------------------------------------------------
// /*
//   Calculate the sum of the 'purchase' with the fewest items.
// */
const compar = (a, b ) => {
  if(a.items.length < b.items.length ) {
    return -1
  }
  if(a.items.length > b.items.length ) {
    return 1
  }
  return 0;


}
const sumOfSmallestPurchase = transactions.filter(tx => tx.type=='purchase').sort(compar)[0].items.reduce((a,b) => a.price+b.price)
//  map(tx => tx.items.length).sort()[0].items.reduce((a,b) => a+b)
console.log( '=============================')
console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
