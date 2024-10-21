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
    //console.log(item.languageName); //har itteration main apne us obj ka nam item hi rakha hai 
})

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(value); //undefined
// //ForEach() loop does not return any value

const myNume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNume.filter((num) => num > 5);
// console.log(newNums); //[ 6, 7, 8, 9, 10 ]

//Filter returns the value

// const myNume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNume.filter((num) =>{
//     num > 5;
//     return num;
// });
// when you use curly bracket you have to use compulsory return key word

const newNums = [];
myNume.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
})
//console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const  userBooks = books.filter((bk) => bk.genre === "History");
const  userBooks = books.filter((bk) => bk.publish > 1995 && bk.genre === "History");
console.log(userBooks);







