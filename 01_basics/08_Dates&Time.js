// Dates
let myDate = new Date()
console.log(myDate);// not readable
console.log(myDate.toString());//Sun Sep 15 2024 10:38:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sun Sep 15 2024
console.log(myDate.toISOString());//2024-09-15T15:23:55.189Z
console.log(myDate.toLocaleDateString());//9/15/2024
console.log(typeof(myDate));// Object

//let myCreatedDate = new Date("2024-9-15");//Sun Sep 15 2024
let myCreatedDate = new Date("2024, 0, 15");
console.log(myCreatedDate.toDateString());