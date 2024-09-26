// False Values
// false, 0, '', "", BignInt 0n, NaN, undefined 

//Truth  Values
// true, "0", '0', "false", 

//To check empty object
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.");
}

//Nullish coalescing Operator(??) : null undefined
//this operator is designed mostly for the database part becuase when the some values are called form the database mostly there are two values one is null and other is something else
let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 15;
val = null ?? 10 ?? 15;
console.log(val);

//Ternary Operator
//condition ? true : false
const price = 100;
price <= 100 ? console.log("Less Then 80") : console.log("More then 80.");