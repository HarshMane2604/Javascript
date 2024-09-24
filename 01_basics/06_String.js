const name = "Harsh";
const repoCount = 50;
// console.log(name + repoCount + " repository"); // outdated
// // new way
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaration of string
const gameName = new String("Har-sH");
console.log(typeof(gameName));

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt("4"));
console.log(gameName.indexOf("H"));

const newString = gameName.substring(1,3);
// In substring you cannot provide negative values
console.log(newString);//returns the letters at that position
const anotherString = gameName.slice(0,3);
console.log(anotherString); 
// In slice you can provide negative values as well

const newString1 = "   harsh    ";   
console.log(newString1);
console.log(newString1.trim());// removes all the spaces form start and end 
// trim start
//trim end

const url = "https://harsh.com/harsh%20mane";
console.log(url.replace("%20", "-"));// replace the value
console.log(url.includes("Hari"));//checks the value
console.log(gameName.split("-"));// splits the string based on the given value in brackets and returns it in th array