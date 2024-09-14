//Comparison should be of same datatype
 console.log(null > 0);
 console.log(null == 0);
 console.log(null >= 0);
// In comparison the eqaulity check == and comparison < > >= <= works differently
// Copmarisons automatically converts null to a number treating it as 0;

console.log(undefined >= 0); //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false

// === (Strict check)

console.log("2" === 2);// should be of same data type