// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironMan", "spiderMan"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  ==>  add 6 in array at last
// myArr.push(7)  ==>  add 7 in array at last
// myArr.pop()  ==>  remove last character from array

// myArr.unshift(9)  ==>  add 9 in array at start
// myArr.shift()  ==>  remove 1st character from array

// console.log(myArr.includes(9));  ==>  find the 9 in array // false
// console.log(myArr.indexOf(3));  ==>  find the location of 3 // 3 "0123"

// const newArr = myArr.join()  ==>  convert array into string

// console.log(myArr);  ==>  [0, 1, 2, 3, 4, 5]
// console.log( newArr);  ==>  0,1,2,3,4,5


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //  ==>  print 1 to 2 from 012345

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //  ==>  cut and print 1 to 3 from 012345
console.log("C ", myArr);
console.log(myn2);
