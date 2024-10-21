//REDUCE JS
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, curvVal){
//     console.log(`acc: ${acc} and curvVal: ${curvVal}` );
//     return acc + curvVal;
// }, 0);
//The number provided after the comma and scope it gets stored in acc;

const myTotal = myNums.reduce((acc, curVal) => {
    return acc + curVal;
},0)
console.log(myTotal);

