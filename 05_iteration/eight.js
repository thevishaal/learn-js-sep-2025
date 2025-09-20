// reduce method

const myNums = [1, 2, 3, 4]

// const total = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

const total = myNums.reduce( (acc, cur) => acc + cur, 0 )

console.log(total);

const shoppingCart = [
    {
        course: "js",
        price: 999
    },
    {
        course: "py",
        price: 2999
    },
    {
        course: "ethical hacking",
        price: 5999
    },
    {
        course: "data science",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);

