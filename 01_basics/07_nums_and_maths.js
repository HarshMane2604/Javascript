//-----------------number----------------------
const  score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
// Some Properites
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //It provides 2 decimal after the given number, Mostly used in Ecommerce store

const otherNumber = 2604.2002;
console.log(otherNumber.toPrecision(3));//It gives the prices value but remenber to give it up to the decimal point ie priority is before the decimal point
console.log(otherNumber.toPrecision(5));
const hundreds = 100000;
console.log(hundreds.toLocaleString());// in US standards
console.log(hundreds.toLocaleString("en-IN"));// in Indian

//---------------------Maths--------------------------
console.log(Math);
console.log(Math.abs(-6));//provides the absolute value ie negative values changes to positive values
console.log(Math.round(4.6));   // rounds of the value
console.log(Math.floor(4.6));   // rounds of the value to lowest integer
console.log(Math.ceil(4.6));    //rounds of the vaule to highest integer
console.log(Math.min(4, 3, 5, 8)); // gives the min value
console.log(Math.max(4, 3, 5, 8)); // gives the max value

console.log(Math.random()); // give the random value between 0 and 1
var random = ((Math.random() * 6) + 1);// give value bet 1 to 6
console.log(random);
console.log(Math.floor(random));

//Remember This(If you want the value in the range)
var min = 10;
var max = 20;

var range = Math.random() * (max - min + 1) + 10;
console.log(Math.floor(range));

