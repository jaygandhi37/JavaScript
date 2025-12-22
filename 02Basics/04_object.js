// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jay",
    "full Name": "Jay Gandhi",
    [mySym]: "key1",
    age: 20,
    location: "Gujarat",
    email: "jay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.location);
//console.log(JsUser["full Name"]);

//console.log(typeof JsUser[mySym]);

JsUser.email = "Jay@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "Jay@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());