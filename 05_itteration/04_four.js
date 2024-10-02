const myObj1 = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}
for (const key in myObj1) {
    //console.log(`${key} shortcut is for ${myObj1[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for Swift by apple

const prog = ["js","js", "js", "js"];
for (const key in prog) {
    //console.log(key);
    //console.log(prog[key]);
}
// in for in it gives directly keys

// const map = new Map()
// map.set('USA', "United State of america");
// map.set('IN', "India");
// map.set('Fr', "France");
// map.set('Fr', "France");

// for (const key in map) {
//     console.log(key);
// }
//It wont print because map is not ittratetable 