var c = 300; // globle scope;
// globle scope can be accessable in block but block scope shloud not be accessble out of the block
if(true){ // block scope
    let a = 10;
    const b = 20;
    //var c = 30;
}
// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); // 30 => scope is coming out of the loop which should not be thats is the reason not to use "var";

// NESTED SCOPE


function one(){
    const username = "Harsh";
}

if(true){
    const userName = "Harsh";
    if(userName === "Harsh"){
        const website = " GitHub";
        //console.log(userName + website);
    }
    //console.log(website) //website is not defined scope of website ends with the above if block
}
//console.log(userName); //userName is not defined scope of userName ends with the above parent if block


//++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}
console.log(addone(5));

const addTwo = function(num){ // different ways of declaring functions
    return num + 2;
}
console.log(addTwo(5));
