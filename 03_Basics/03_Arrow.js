
// const user = {
//         username: "Harsh",
//         price: 999,
//         welcomeMessage: function(){
//             console.log(`${this.username}, welcome to the website`);
//         }
// }
// // user.welcomeMessage();
// user.username = "Hari";
// user.welcomeMessage();
 
//console.log(this) // In this environment {} = empty object

//In the browser the globle object is window object

//this keyword talks about the current context that means context refers to the scope

// function chai(){
//     let username = "Harsh"
//     console.log(this);
// }

// chai();

// const chai = function(){
//     let username = "Harsh"
//      console.log(this.username);
     
// }
// chai();//undefined


//Declaration of arrow function
const chai = () => {
    let username = "Harsh"
    //console.log(this);
     
}
chai(); //{}

//Arrow function
//Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
//console.log(addTwo(3, 5));

//Implicit return
//When we write with curly braces we have to use return key word and VICE VERSA
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "Harsh" });
console.log(addTwo(3, 5));


//IMMEDIATELY INVOKED FUNCTION EXPRESSION

//() () //first bracket express the function defination and second bracket calls the function amd semicolon is compulsory 
(function chai(){
    //name IIFE
    console.log(`DB connected`);
})();

//We do this because when globle scope declared sometimes it pollutes so to avoid it we use IIFE

((name) => { //unamed IFFE
    console.log(`DB Connected ${name}`);
})("Harsh");

// Sometimes the golbal scope creates the pollution and due to which it can create problem so to avoid it we use IIFE
// To end the IIFE function we use semicolon 
(function chai(){
    console.log(`DB connected`);
})();

(() => {
    console.log(`DB connected ONE`);
})()
