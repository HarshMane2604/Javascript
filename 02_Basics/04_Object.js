//Object as singleton
// const tinderUser = new Object() //singleton object
const tinderUser = {};
tinderUser.name = "Harsh Mane";
tinderUser.id = "123ABC";
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "maneharsh72@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Harsh",
            lastName : "Mane"
        }
    }
}
//You can declare multiple obj in obj

//console.log(regularUser.fullname.userFullName.firstName);

//Merging Object

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
//const obj3 = {obj1, obj2};// not a proper way to merging
const obj3 = Object.assign({}, obj1, obj2)// copies all enumerable from one or more sources
// const returnedTarget = object.assign(target,source);
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2};
// console.log(obj4);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//-----------Destructuring Of Arrays-------------------

const course = {
    coursename: "Hari",
    price: "999",
    courseInstructor: "Harsh"
}
//course.courseInstructor to tidious to write

const {courseInstructor} = course
const {courseInstructor: Instructor} = course
console.log(courseInstructor);
console.log(Instructor);// This is destructuring
