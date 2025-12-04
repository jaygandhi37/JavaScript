const number = 200;
// console.log(number);  =>  200

const balance = new Boolean(1);
// console.log(balance);  =>  true

// to sting and length
// console.log(balance.toString().length);  =>  4

// fixed
const newBal = new Number(100);
// console.log(newBal.toString(),length);  =>  3
// console.log(newBal.toFixed(2));  =>  100.00

// precision
const myNumber = 123.788
const myAltNum = 123.233

// console.log(myNumber.toPrecision(5));  =>  123.79
// console.log(myAltNum.toPrecision(5));  =>  123.23

// hundreds like 10,00,000

let hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  =>  10,00,000

// ******************** Maths ********************

// console.log(Math);
// console.log(Math.abs(-4));  =>  4
// console.log(Math.round(4.6));  =>  5
// console.log(Math.ceil(4.2));  =>  5
// console.log(Math.floor(4.9));  =>  4
// console.log(Math.min(4, 3, 6, 8));  =>  3
// console.log(Math.max(4, 3, 6, 8));  =>  8

// console.log(Math.random());  =>  between 0 to 1

// dice
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
              //   ^            ^         ^
              //   1            2         3

// 1. floor for remove values after ponits 
// 2. random for value between 0 to 1