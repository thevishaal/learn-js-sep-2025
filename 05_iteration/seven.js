const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);

// const newNums = []

// myNumbers.forEach( (num) => {
//     num = num + 10
//     newNums.push(num)
// } )

// console.log(newNums);

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 2 )
                .map( (num) => num - 7 )
                .filter( (num) => num > 45 )

console.log(newNums);

