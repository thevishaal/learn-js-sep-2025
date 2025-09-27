const promiseOne = new Promise (function (resolve, reject) {
    // Do an async task
    // DB calls, crptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise cosumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async resolved 2")
})

const promiseThree = new Promise (function (resolve, reject) {
    setTimeout(function(){
        resolve({username: 'vishal', email: 'vishal@gmail.com'})
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise (function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "vishal", password: "123"})
        } else {
            reject('Error: Some thing went wrong!');
        }
    }, 1000)
})
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("the promise is either reject or resolve");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "js", password: "123"})
        } else {
            reject('Error: js went wrong!');
        }
    }, 1000);
});

async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers () {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);   
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
} )
.then((data) => console.log(data))
.catch((error) => console.log(error))

const promiseSix = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("hello");
        resolve("promise six is resolved")
    }, 2000 )
} )

promiseSix.then((response) => {
    console.log(response);
});

new Promise((resolve, reject) => {
    setTimeout( () => {
        const error = false;
        if(!error) {
            const data = {
                username: 'vishalbaghel', 
                password: "123", 
                mobile: '7417265871'
            }
            resolve(data)
        } else {
            reject('error....')
        }
    }, 3000)
})
.then((users) => {
    console.log(users)
    return users.mobile
})
.then( (mobile) => {
    console.log(mobile);
} )
.catch((err) => {
    console.log(err)
})
.finally(function(){
    console.log("code is running");
})
