// when you push array in another array not only the elmnts but the whole array is pushed in the array
const arr = ['apples', 'mango', 'orange'];
const arr2 =['watermelon', 'banana', 'dragonfruit'];
// arr.push(arr2)
// console.log(arr);
// console.log(arr[3][1]);
//Concatenation of two arrays

var new_arr = arr.concat(arr2);
console.log(new_arr);

//spread operator
var new_arr1 = [...arr, ...arr2];
console.log(new_arr1);


//to ask
console.log(Array.isArray("Harsh")); //to check weather is array or not
console.log(Array.from("Harsh")); // to convert into array
console.log(Array.from({name: "Harsh"})); //interesting Case give an empty array

let score1 = 100;
let score2 = 100;
let score3 = 100;
console.log(Array.of(score1, score2, score3));
console.log("Harsh");



