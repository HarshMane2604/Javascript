//Function declaration
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
//sayMyName()
// when the functions are made the parameters are passed
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

//addTwoNumbers(3, "4");//34 assumes the 3 and 4 to be a string because 4 is strring
//addTwoNumbers(3, "a");//3a
//addTwoNumbers(3, null); //3
// when the function is called the arguments are passed

// const result1 = addTwoNumbers(3, 5);
// console.log("Result: "+result1); //Result: undefined
// because the function has not returned any value 

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}
const result = addTwoNumbers(3, 5);
//console.log("Result: "+result);


function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in.`; 
}
//console.log(loginUserMessage("harsh")); //harsh just logged in
//console.log(loginUserMessage());//undefined just logged in.


function calculateCartPrice(num1){
    return num1;
}
//console.log(calculateCartPrice(200, 300, 500));//200
//To store all the values in function we use rest operator ie "..."

function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(200, 300, 500))// [ 200, 300, 500 ]

const user = {
    userName: "Harsh",
    price: 199
};

function handelObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}.`);
}
//handelObject(user);
handelObject({
    userName: "HarshMane",
    price: 299
})// You can do it as well


let myNewArray = [200, 300, 400]
function returnSecondeValue(getArray){
    return getArray[1];
}
console.log(returnSecondeValue(myNewArray));