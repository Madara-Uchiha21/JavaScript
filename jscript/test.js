
console.log(10+"20"); // here concatation will happens
console.log(9-"5");  // this will provide output as 4 due it bug.
console.log("Java"+"Script");
console.log(" "+" "); // this will give output as empty string
console.log(" "+0); //
console.log("vinod"-"thapa"); // provide output as NaN(Not a Number).

console.log("\n");
// * IQ 1. Diffrence between Null and Undefined:

// Null - It will have Null as value. Eg-
var drag = null;
console.log(drag);
// Also there is one more bug as,It provide typeof as object
console.log(typeof(drag),"\n")

// Undefined - No value is provided in it. Eg-
var konoha ;
console.log((konoha),"\n");

// * IQ 2. What is NaN ?
// Stands for Not-a-Number, Variable in global scope
// property of global scope, Used to check weather something is number or not.Eg-

var phone_num = 8809228888;
console.log(isNaN(phone_num));

var org = "Akutsuki";
console.log(isNaN(org),"\n");

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN),"\n");

// if else Questions
/* Ques - write a program that work out weather
if a given year is a leap year or not?*/
/*
var year = 2020;
if ( year%4 === 0){
    if(year%100 === 0){
        if (year%400 === 0)
    }
else{
console.log("The year"+year + "is not a leap year")
}
}else{
    console.log("The year" + year + "is a leap year");
}else{
    console.log("The year" + year + "is not a leap year");
}
*/
/*var year = prompt("Enter a year: ");
if (((year % 4 == 0) && (year % 100 != 0))|| (year % 400 == 0)) {
    console.log(year + " year is a leap year.")
} else {
    console.log(year + " year is not a leap year.")
}*/

var x = 10;
var y = 10;
console.log("\n");

// These 3 will have diffrent output.
console.log("do they both are equal", x==y); // True
console.log("do they both are equal " + (x==y)); //True
console.log("do they both are equal" + x==y,"\n"); // False

// Operators Questions -
// Q1. What will be the output of 3**3?
console.log(3**3,"\n");

/* 2. What will be the output when we add number and a string number?
It will simply concate */
console.log(3 + " RAsputin","\n");

/* 3. Write a programme to swap two numbers. */
a = 5;
b = 10;
c = a ; // here now c become a
a = b ;// here a = 10
b = c ; // b = 5
console.log("This is value of a,b respectively:",a,"and",b,"\n");

/* 4. Write a programme to swap two num without third var */

var yr = 2000;
if (yr%4 == 0 && yr%100 == 0 && yr%400 ){
    console.log("This year is leap year");
} else{
    console.log("Year is not Leap.")
}
/*What is trthy and falsy value in JavaScript 
ANS - We have total 5 falsy values in js.
0, " ", undefined, null, NaN, false** is false anyway.*/

if(score = 0){
    console.log("What to say.");
}else{
    console.log("we lost","\n")
}


// Find the area of circle, rectangle, triangle square.
var area = "circle";
var PI = 3.14, l=5, b=4, r=3;

if(area = "circle"){
    console.log("The area of circle is:"+ PI*r**2);
}else if(area = "rectangle"){
    console.log("The area of rectangle is:"+ (l*b))
}else if(area= "triangle"){
    console.log("THe are of triangle:"+ (l*b)/2)
}

//
var area = "circle";
var PI = 3.14, l=5, b=4, r=3;
 
switch(area){
    case area:
        console.log("The area of circle: " + PI*r**2);
        
    case area:
        console.log("The area of rectangle: " + (l*b));
        
    case area :
        console.log("The area of traiangle: " + (l*b/2));
        
    default:
        console.log("Outside");
    
}
console.log("\n");

var bum = 0;
do{
    console.log(bum);
    bum++;
}while(bum<=10);
console.log("\n");

// Table of 8:
for (num = 0; num<=10; num++){
    console.log("8 X",num,"=",8*num)
}
console.log("\n");

//  Table of 9
for (num = 0; num<=10; num++){
    console.log("9 X",num,"=",9*num)
}

// What is difference between function parameter versus function argument?
module.exports
var r = require('./W3');
console.log(r)

/* var year = 2020;
if (year%4 === 0){
    if (year % 100 === 0){
        if (year % 400 === 0){
            console.log("The year" + year + "ia a leap year");
        } else { 
            console.log("The year"+ year + "is not a leap year");
        }
    }else{
        console.log("The year"+ year+ "is a leap year");
    }
} else {
    console.log("The year " + year + " is not a leap year");
} */

var year = 2024;
debugger;
if (year%4 === 0){
    if (year%100 === 0){
        if(year%400 === 0){
            console.log("This year"+year+"is leap year");
        } else{
            console.log("This year"+year+"is not a leap year");
        }
        console.log("This year"+year+"is not a leap year");
    } else{
        console.log("This year"+year+"is a leap year");
    }
    console.log("this year"+ year+ "is a leap year");
} else{
    console.log("This year"+year+"is not a leap year");
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log('i: ' + i + ', j: ' + j);
    }
}
console.log("\n");

// Date - 23/03/2024
// Q1. Write a program that determines whether a given number is positive or negative.
var n8 = -10;
if (n8 < 0){
    console.log("Number"+ n8 +"is a negative number.")
} else{
    console.log("Number"+ n8 +"is a positive number.")
}
console.log("\n");

/* This code is used to get input from user.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (answer) => {
  console.log(`Hello, ${answer}`);
  rl.close();
});
console.log("\n"); */

// Q2. Write a program that checks if a number is even or odd.
var EO = 10;
if (EO%2 == 0){
    console.log( EO +" is an Even number");
} else{
    console.log(EO+ "is an Odd number")
}
console.log("\n")

//Q3. Write a program that transforms a numerical grade to a letter grade 
//(e.g grade 10 should display “A”).
var score = 85;
var grade;

if (score>=90){
    grade = "A";
}else if (score >= 80){
    grade = "B";
}else if (score>= 70){
    grade = "C";
}else if (score >= 60){
    grade = "D"
}else {
    grade ="F"
}
console.log("Grade:"+ grade + "\n");

/*Q4. Write a program that calculates the ticket price based on age with the following conditions: 
age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20,
 age over 60 play a ticket price of 15. */
var age = 25;
var tktprice ;

if (age<12){
    tktprice =5;
} else if (age > 12 && age < 18){
    tktprice = 10;
} else if (age < 60){
    tktprice = 20;
} else if (age > 60){
    tktprice = 15;
}
console.log("Age is " + age + " Price = " +tktprice + "\n");

// Q6. determines if a year is a leap year.
var yr = 2023;
if (yr%4 === 0){
    if (yr%400 === 0){
        if (yr% 100 === 0){
            console.log("year" + yr + "is not a leap year");
        } else {
            console.log("year" + yr + "is a leap year");
        }
        console.log("year" + yr + "is a leap year");
    } else {
        console.log("year" + yr + "is not a leap year");
    }
    console.log("year" + yr + "is a leap year");
} else{
    console.log("year" + yr + "is not a leap year")
}
console.log("\n");

/* Q7. Write a program that calculates a discount based on the purchase amount.
Prices equal or over 100 discount have a discount of 20. 
Prices equal or over 50 have a discount of 10. 
Otherwise discount is 0.*/
var price = 111;
var discount;

if (price >= 100){
    discount = 20
} else if (price >= 50){
    discount = 10
}else{
    discount = 0
}
console.log("discount " + discount + "%");
console.log("\n");

/* Q8 . Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
The formula for BMI is: weight / (height * height).*/
var height = 183, weight = 80; 
var BMI = weight/(height*height);
console.log("Your BMI is " + BMI);
console.log("\n");

/* Q9. Write a simple number guessing game.*/
var spnum = 3;
var guess = [2,1,4,5,6,7,8,9,0]

if (guess === spnum){
    console.log("Cong! You won Lottery");
} else {
    console.log("Better Luck next time!!!");
}

// For loop question
console.log("For Loop Ques");
/* Q1. Print the numbers from 0 to 15 */
for(i = 0; i<=15; i++){
    console.log("Value of i is " + i );
}
console.log("\n");

//Q2. Print the numbers from 12 to 24
for(a = 12; a<=24; a++){
    console.log("From 12 to 24,The num here is " + a );
}
console.log("\n");

// Q3. Print the ODD numbers from 7 to 31
for (b = 7; b<=31; b++){
    if(b%2 !== 0){
        console.log("The Odd num are " + b);
    }
}
console.log("\n");

// Q4. Print the EVEN numbers from 10 to -20
for(c= 10; c>=-20; c--){
    if(c%2 === 0){
        console.log("The even num are " + c);
    }
}
console.log("\n");

/* Q5. Iterate through all numbers from 1 to 45. Print the following:
    For multiples of 3 print “Fizz”
    For multiples of 5 print “Buzz”
    For multiples of 3 and 5 print “FizzBuzz” */
/* for(d=1; d<=45; d++){
    if(d%3 == 0){
        console.log("This is Fizz " + d);
    } else if(d%5 == 0){
        console.log("This is Buzz " + d);
    } else if ((d%3 == 0) && (d%5 == 0)){
        console.log("This is FizzBuzz " + d);
    }

    }*/
console.log("\n");

for(d=1; d<=45; d++){
    if(d%3 == 0){
        if(d%5 == 0){
            if ((d%3 == 0) && (d%5 == 0)){
                console.log("This is FizzBuzz " + d);
            }
            console.log("This is Buzz " + d);
    }
        console.log("This is Fizz " + d);
    }
}
console.log("\n");

// Q6. Print all the elements of the following array
var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// This method is used to get the length of array
console.log("The length of Array is " + thisIsAnArray.length);
for(i=0; i<thisIsAnArray.length; i++){
    console.log("The elements are " + thisIsAnArray[i] + "\n");
    // console.log(thisIsAnArray[i] + " is at " + i + "place");
}

// Q7. Calculate the sum of all the numbers in the following array
var numbersArray = [1,13,22,123,49];
var sum = 0;

for(i = 0; i<numbersArray.length; i++ ){
    sum = sum + numbersArray[i];
}
console.log("The sum is " + sum );

/*User will ask for a number between 0-9  and if below 5 resolve if not reject */

