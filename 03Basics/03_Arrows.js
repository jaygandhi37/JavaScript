const user = {
    username: "Jay",
    age: 20,

    wellcomeMsg: function(){
        console.log(`${this.username} , wellcome to site!`);
        // console.log(this);
        
    }
}

// user.wellcomeMsg()

function hello() {
    let username = "jay"
    console.log(this.username);
}

// hello();

// const helloo1 = function () {
//     let username1 = "jay"
//     console.log(this.username1);
    
// }

const helloo1 = () => {
    let username1 = "jay"
    console.log(this.username1);
    
}

// helloo1()


const addTwo01 = (num1, num2) => {
    return num1 + num2
}

const addTwo02 = (num1, num2) =>  num1 + num2

const addTwo03 = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Jay"})


console.log(addTwo())
