const coding = ["Js", "Python", "Java", "Cpp"];
// coding.forEach((val) => {
//     console.log(val);
// });

// coding.forEach(function(val) {
//     console.log(val);
// });

// function printMe(val){
//     console.log(val)
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })
// Js 0 [ 'Js', 'Python', 'Java', 'Cpp' ]
// Python 1 [ 'Js', 'Python', 'Java', 'Cpp' ]
// Java 2 [ 'Js', 'Python', 'Java', 'Cpp' ]
// Cpp 3 [ 'Js', 'Python', 'Java', 'Cpp' ]


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName); //har itteration main apne us obj ka nam item hi rakha hai 
})