let score = "33abc";
//let score = null; // check the conversion on null
//let score = "Harsh" // check the conversion of string in int;
// output will be NaN;
let new_score = "33";
//  console.log(typeof score);
//  console.log(typeof new_score); 

// Conversion deals with converting the datatype in another datatype;

let new_data = Number(score); //here the string datatype is converting into number(integer)
//  console.log(typeof new_data); 

//There is no strict check in the javascript

//  console.log(new_data); // outout => NaN(not a number);

//let score = "33abc"; because score var is not just a number;

//For Boolean DataType
let isLoggedIn = "";
let is_boolean = Boolean(isLoggedIn);
    console.log(is_boolean); 

//Conclusion
//"33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
//"" => false;
// "Harsh" => true;
 