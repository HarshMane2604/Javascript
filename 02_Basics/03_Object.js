// In object there are key and values unlike arrays only have values
//object as literals
const mySym2 = Symbol("Key1");

const obj ={
    name: "Harsh",
    College: "Walchand College",
    mySym: "mykey1",//It is not in symbol form
    //to denote in symbol form
    [mySym2]: "myKey2",
    location: "Solapur",
    email: "manehars72@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}
console.log(obj.email); //old way
console.log(obj["email"]); //in back keys are treated as string
console.log(typeof obj.mySym);
console.log(typeof obj.mySym2);
console.log(typeof obj[mySym2]);


//To overwrite the value
obj.email = "maneharsh792@gmail.com"
console.log(obj["email"]);
// Object.freeze(obj);
obj.email = "mane792@gmail.com";
console.log(obj);

//Function (You can treat function as variables)
obj.greetings = function(){
    console.log("Hello JS user.");
}
console.log(obj.greetings()); // error encountered beacuse on line  number 26 the obj is freezed so we will comment it out
obj.greetings1 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(obj.greetings1());
