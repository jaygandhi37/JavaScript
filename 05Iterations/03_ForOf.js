// For fo Loops


// loop in array
const temp = [1,2,3,4,5,6,7,8,9]
for (const prem of temp) {
    // console.log(prem);   
}

// loop in string
const string = "hello world!"
for (const newString of string) {
    // console.log(newString);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}