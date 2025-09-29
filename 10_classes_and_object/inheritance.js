class User {
    constructor(username) {
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username),
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new couse was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com",  "134")

chai.addCourse()
const masalaChai = new User("masalaChai");
masalaChai.logme()

console.log(chai instanceof Teacher);
