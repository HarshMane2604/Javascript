for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}
const myArr = ['superman', 'Batman', 'flash'];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    //console.log(element);
}

//For Break
for (let index = 0; index <= 20; index++) {
    // const element = index;
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

//For Continue
for (let index = 0; index <= 20; index++) {
    // const element = index;
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}