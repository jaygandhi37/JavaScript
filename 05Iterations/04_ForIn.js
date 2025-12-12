// loop in objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const obj in myObject) {
    console.log(obj,"full form is : ", myObject[obj ]);
    
}