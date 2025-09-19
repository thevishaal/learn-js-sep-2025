function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vishal"))
// console.log(loginUserMessage("vishal"))

function calculateCartPrice(val1, val2, ...num1){  //rest operator  ...
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 500, 600));

const user = {
    username: "vishal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "raj",
    price: 499
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
