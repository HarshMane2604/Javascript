// ARRAY SPECIFIC LOOP
// For of loop
// ["", "", ""];
 const arr = [1, 2, 3];
 for (const num  of arr) {
    //console.log(num);
 }

 const greeting = "Hello World";
 for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
 }
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is 
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d

// MAPS = object holds the key & unique value. no duplicate values
const map = new Map()
map.set('USA', "United State of america");
map.set('IN', "India");
map.set('Fr', "France");
map.set('Fr', "France"); //It wont print the dupilcate values
//console.log(map);

// Map(3) {
//     'USA' => 'United State of america',
//     'IN' => 'India',
//     'Fr' => 'France'
//   }

for(const [key, value] of map){
    //console.log(`${key} :- ${value}`);
}
// USA :- United State of america
// IN :- India
// Fr :- France

const myObj = {
    "Game1" : "NFS",
    "Game2" : "SpiderMane"
}
for(const [key, value] of myObj){
    //console.log(`${key} :- ${value}`);
}//myObj is not iterable
// in for of it gives directly values