console.log("Object >>>>>> API");

//  Destructuring
console.log("Destructuring");
console.log("\n")

// Object
const course = {
    courseName : "Js in Hindi",
    Price : 999,
    courseInstructor : "Hitesh"
}

console.log(course.Price);      // To accessing the value
console.log("\n");

// Another Method
const {courseInstructor} = course
console.log(courseInstructor);

// API - Apna kaam kisi or k sar per dalna.And API are in JSON file.

/*  This is JSON file
{
    "Name" : "Hitesh",
    "CourseName" : "Js in Hindi",
    "Price" : "Free"
}   */
console.log("\n");

// Array as Object.
console.log("Array as Object");

// Array as an API -
[
    {},
    {},
    {}
]

console.log("\n");


// +++++++++++++ Functions ++++++++++++++: 
console.log("Functions");

function addTwonum (num){   // Parameters
    console.log(4 + num)
}
addTwonum(3);       // Arguments

console.log("\n");

function loginUserMsg (username){
    return `${username} just logged in`
}
console.log(loginUserMsg("Welcome"));       // When argument is not passed it will show undefined.
console.log("\n")

// Using If in this.
console.log("Using If in function");

function loginUserMsg (username){
    if (!username){
        console.log("Please enter a value")
    } else {
    return `${username} just logged in`
}}
console.log(loginUserMsg()); //This will provide output as undefined. as bcz argu is not defined.
console.log("\n");

// +++++++++++++++++ Rest or spread - (...)  +++++++++++++++++++
function calcKartPrice (...num11){
    return num11
}
console.log(calcKartPrice(100,200,300,400))     // By this every value will be spread in the output
console.log("\n")

// Here the rest / remaining value will included in num111 bcz initial 2 value will be taken by val1, val2
function calcKartPrice (val1, val2, ...num111){
    return num111
}
console.log(calcKartPrice(100,200,300,400))    
console.log("\n")

// +++ Hoisting +++++
// This is Hoisting here we can access the value prior declaration but by this method only

console.log(addOne(5))
function addOne(num){
        return num + 1
}
console.log("\n")

/* Here It will Throw an Error by this method we cant access Things properly and this is called Hoistting
console.log(addTwo(5))
const addTwo = function(numb){
    return numb + 2
} */

const user = {
    username : "Priyanshu",
    price : 1111,

    welcomeMesssage : function(){   //This is used to refrence the current context.
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

/*
user.welcomeMesssage();
console.log("\n")

user.username = "sam"
user.welcomeMesssage()  */

console.log(this)    // This will provide Empty output but as we run this code in console wwe will gat window objj

function chai(){    // This will provide multiple output.
    let username = "Priyanshu"   // output - Undefined, nothing will  
    console.log(this)
    
}
chai()
console.log("\n")

// +++++++++ Arrow Function +++++++++++++++

const chaia = () => {
    let username = "Priyanshu"
   
    console.log(username)
}

chaia()
console.log("\n")

const addTow = (num1,num2) => {
    return num1 + num2
}
console.log(addTow(3,4))
console.log("\n")

// ++++++++++++ Implicit Return ++++++++++
const sub3num = (n1, n2, n3) => n1-n2-n3
console.log(sub3num(1,2,3));
console.log("\n");

// Immediately Invoked Funnction Expression (IIFE) +++++++++
/* when global function corrupt we have to use IIFE */

// Named IIFE
(function guy(){
    console.log(`Blue Beast of Leaf`);
}) ();
console.log("\n");

// ++++++++ IIFE with arroew function ++++++++++
( () => {
    console.log(`Kakashi of Sharingan`);
})()
console.log("\n");

( (name) => {
    console.log(`God of Genjutsu - ${name}`)
}) ("Itachi Uchiha")
console.log("\n");

// +++++++++++ Code Execution + call stack ++++++++++++++++++
/* Execution of js code -  take place as the very first instance it runs in Global Execution context and 
that global Execution Context is saved in variable as this. 

++ There are 3 type of execution Context 
- Global Execution Context
- Function Execution Context
- Eval Execution Context (It work in Mongoose)..

+++ The code run as in 1st step the memory allocation take place, while allocatting memory evry single variable
is placed/valued as  undefined and in 2nd step value allocation takes place which is provided by user. 

+++** Call Stack - Define the path of execution of code.*/
