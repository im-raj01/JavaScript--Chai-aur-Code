//
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curr_val){
//     console.log(`acc: ${acc} and curr_val is: ${curr_val}`);
//     return acc + curr_val
// },0) // initial value of accumulator = 0

const myTotal = myNums.reduce( (acc,curr_val) => (acc+curr_val), 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "cpp course",
        price: 5999
    },
    {
        itemName: "python",
        price: 9999
    },
    {
        itemName: "java course",
        price: 8999
    }
]

const TotalCartVal = shoppingCart.reduce( (acc,item) => (acc+item.price),0)
console.log(TotalCartVal);