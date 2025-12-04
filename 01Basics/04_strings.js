const name = "Jay ";
let repoCount = 1;

/*
this is old method not m,uch read friendly
console.log(name + "has " + repoCount + " Repo in his Github.");
*/

// new 

console.log(`${name}has ${repoCount} Repo in his Github.`);

// using new for make string to object
const myName = new String('Jay-Gandhi-37')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('G'));

const newString = myName.substring(0, 4)
console.log(newString);

const newStringOne = "   jay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jay.com/jay%20gandhi"

console.log(url.replace('%20', '-'))

console.log(url.includes('abcdef'))

console.log(myName.split('-'));