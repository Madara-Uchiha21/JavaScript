console.log("It works!!!\n"); // \n is used to provide space bet lines
console.log("Hello,Duniya!\n");

// * Variables
var myName ="Madara Uchiha"; // Here VAR Defines that I am going to put some variable.
// myName is the container for variable.

// typeof()- will provide type that f what data typre it is.
// 1. This will provide the output as string .
console.log(myName,"is a type of:",typeof(myName),"\n");

// 2. This will provide the output as number .
var myAge = 12;
console.log(myAge,"is a type of:",typeof(myAge),"\n");

// 3. This will give output as boolean .
let x = true;
console.log(x,"is a type of:",typeof(x),"\n");

// 4. Undefined : Here the value is not defined.
console.log("This is example of:",typeof(iamTHapa),"\n");

// What is what..
console.log("In 5+20- 5 and 20 is Operand, + is Operator");
console.log("Expression is combination of operand aand operator","\n");

// Assingnment OPerator
console.log("Assingnment Operator assing value to variables, represented  by =");
var w=q=5;
console.log("This will provide output as false" + w==q,
"Whereas this will give output as true", w==q,"\n");
console.log("This can also be done by ECMA","\n");

// * EXPRESION(combination of Operand and Operator) and OPERATOR(signs) :
// 1. Arithmetic Operator

console.log("1. Arithmetic Operator:");
console.log("This is example of Addition: 4 + 6 =",4+6);
console.log("The same goes with Substraction[-], Multiplication[*], Division[/],Reminder Operator[%].\n");

console.log("This is modulus,which provide output as remeinder 4 % 2 is",4%2,"\n");
// These all can be also used by using variables.

// Increment Operator & Decrement Operator can be used only while providing variable.
var inc = 2 ;
console.log("Number is:",inc);
inc++; // This is postfix Increment Operator
console.log("This is Increment Operator[++] increases any number by 1,",inc,"\n");

var inp = 2 ;
console.log("Number is:",inp);
++inp; // This is prefix Increment Operatorp
console.log("This is Increment Operator[++] increases any number by 1,",inp,"\n");

// Diffrence bet postfix and prefix is :
var ino = 2 ;
console.log("Number is:",ino);
var n = ino++ + 5 // Output = 7

console.log(n);
var w = ++inc +5; // output = 9
console.log(w,"\n");

// The same is case with Decrement Operator.
var dec = 4;
console.log("Number is:",dec);
dec--;  // This is postfix Decrement Operator

console.log("This is Decrement Operator[--] decreases any number by 1",dec,"\n");

// 2. Comparison(Relational) Operator:
console.log("Comparison(Relational) Operator:")
console.log("This consist of >, <, =<, =>, !=, ==, ===, !==","\n");

console.log("=== This is known as equal value and equal type.");
var tina = 888;
var shika = 222 + 666;
console.log(tina === shika,"\n");

console.log("!== This is known as not equal value and not equal type.");
var ino = 111;
var sai = 999;
console.log(ino !== sai,"\n");

// Logical Operator(&&) - Are the operator which provide TRUE as output as,
// If all statements are true.
var h = 20;
var i = 10;
console.log("Output in Logical and, when every condition is True",(h>i) && (i>0));
console.log("Output in Logical and, when every condition is False",(h<i) && (i<0));
console.log("Output in Logical and , When 1 is True and 1 is false",(h>i)&&(i<0),"\n");

// Logical OR(||) - The output will true if any one input is True,then the finall output is true.
console.log("Here all are true so output is True",(h>0)||(i>0)||(h>i));
console.log("If any one is True all is True in Logical OR",(h<i)||(i>0));
console.log("If every entry is false in Logical OR",(h<i)||(i<0),"\n");

//Logical not(!) - It will alter the actuall output and provide a new output.
console.log(!((h>i) || (i>0)),"\n");

// String concatenation.
console.log("String concatenation Representated by + ")

// In js there is a bug.
var num1 = 5 ;
var num2 = "5";
console.log("The typeof num1 is-",typeof(num1),"and type of num2 is-",typeof(num2));
console.log("Here the symbol == checks the value only not the typeof",num1 == num2,"\n");

//Bitwise LATER

// Control Statement and Loops.

//What is truthy and falsy value in js?
// We have total 5 falsy value in js : 0,  "", undefined, null, NaN, false** is falsy.
if(score=0){
    console.log("Win")  //for this if else loop block of code 
}else{   //The else part will get executed.bcz of falsy value.
    console.log("Loss")
}

// Just another Falsy value.
if(null){
    console.log("yes")
}else{
    console.log("You have to come to me","\n")
}

// Condition(ternary) Operator - The only js operator that takes 3 operand.
// if else statement in short
var agee = 17;
console.log((agee>20)? "vote":"no vote");

//  if statement:
// in if or ifelse code {} is used when multi line statement is used.
var num = 5;
if (num<10) {
    console.log("Its 5","\n")
}

var v = 111;
if (v == 111) {
    console.log("True","\n")
} ("\n")

// If statement with Bitwise Operator/others :
var rum = 1122, year = 1965;
if ((rum == 122) && (year == 1965)) {
    console.log("Yess")     // Ifelse statement:
} else {
    console.log("Bach gya","\n")
}

// Bitwise OR
var nar = 25 , mig = 1;
if ((nar == 25)|| (mig == 11)){
    console.log("OR","\n")
}

// else  if statement:

var oorochi = 49;
if (oorochi == 3*13){
    console.log("Master")
} else if ( oorochi < 40) {
    console.log("Its Valid \n")
} else if (oorochi >= 6*7) {
    console.log("Immortal \n")
} else if (oorochi == 7**7) {
    console.log("The Snake \n")
} else {
    console.log("Saanin \n")
}

/*Conditional(ternary) operator -The only Js operator that takes 3 operand */
// It will help to write if else in single line.
var age = 17;
console.log((age<=18) ? "can't vote":"can vote","\n");

/* Switch Statement : Here day and case value must be the same, if not
then default case shall be executed.Also, the break should be written after ending of each case.
If not, then it will execute every single case.*/

var day = 1 ;
switch(day){
case 1 :
    console.log("Sun");
    break;
case 2 :
    console.log("Mon","\n");
    break;
case 3 :
    console.log("Tue");
    break;
default:
    console.log("Outside")
}
console.log("\n")

// Find the area of circle, rectangle, triangle square. without break statement
var area = "circle";
var PI = 3.14, l=5, b=4, r=3;

if(area = "circle"){
    console.log("The area of circle is:"+ (PI*r**2));
}else if(area = "rectangle"){
    console.log("The area of rectangle is:"+ (l*b));
}else if(area= "triangle"){
    console.log("THe are of triangle:"+ (l*b)/2);
}
console.log("\n");

// This can be written in switch case as well:
var area = "rectangle";
var PI = 3.14, l=5, b=4, r=3;
 
switch(area){
    case "circle":
        console.log("The area of circle: " + PI*r**2);
        break;  // If we remove break statement , it will provide all output.
    case "rectangle":
        console.log("The area of rectangle: " + (l*b));
        break;
    case "triangle" :
        console.log("The area of traiangle: " + (l*b/2));
        break;
    default:
        console.log("Outside");
    
}
console.log("\n");


// Type1: For loop
console.log("For loop");
for (i = 0;i <= 5;i++) {  // Initializer, Condition, Iteration
    console.log(i);
}
console.log("\n")

// Type2: Getting output from 1
var j = 0;
for(; j<5;)
{
    j++;
    console.log(j)
}

// This method is used to get output in single line using for loop
let output = "";
for (let i = 0; i < 10; i++) {
    output += i + " ";
}
console.log(output.trim(),"\n");    //.trim is used to remove spaces from both side.

// Type3 : For loop
var r = 0
for(; ; r++)
{
    if(r==3)
    {
        break;
    } console.log(r)
}
console.log("\n");

// Nested for loop
console.log("Nested for loop");
for (g= 0; g<9; g++)
{
    console.log(g);
    let input = " ";
    for(j=-1;j>-5;j--)
        input+=j+ " ";
    {
        console.log(input.trim(),"\n")
    }
}

// While loop - It keeps repeating an action until an associated condition returns false.
console.log("While Loop")

var k = 0;
while(k<5)
{ //Block Scope
    console.log(k);k++; // if k++ is not put here then it will become infinite loop.
}
console.log("\n")

// Also while loop is used when we know th condition
// that where loop must stop.
let p = 0;
while(true) //this true shows that condition will always true
{
    if (p == 3)
        break;
    console.log(p);p++
}
console.log("\n");

// Do-while loop: It check condition after implementing things.
console.log("Do-While Loop");
var bum = 0;
do{
    console.log(bum);
    bum++;
}while(bum<=10);
console.log("\n")

/*  control statement & loops
If Else ✅
Switch Statement ✅
While Loop ✅
Do-While Loop ✅
For Loop  ✅
For in loop
For of loop
Conditional(ternary) operator. ✅*/

console.log("Functions")
/* Function in Js: In Js a block of code designed to perform a particular task.
A function defination(also called a function declaration, or function statement)
consist of function keyword.

The list of parameter to function, enclosed in parantheses and seperated by commas,
The Js statement that define the function, enclosed in curly braces. 
Type of Function
1. Library or Built-in Function Ex- valueOf(), write(), alert()
2. User Defined function - Created by useer . */

/*Rules:-
1. Function name only starts with letter and underscore(_) 
2. Function name cant starts with num also not with reserveed word
3. Case Senesitive */

// Creation of Function
function tree(a,b){  // If a,b is written in such form it is called as Parameter.
    var total = a+b;
    console.log(total);
} ; // Here we dont have to give semi-colon
tree(); // Calling of Function.
tree(40,50);  // Here 40,50 is known as Argument.
tree(50,50);
console.log("\n");

/* Function Expression : Create a function and took into Variables */
function tree(a,b){
    var total = a+b;
    console.log(total);
}
var funExp = tree(10,10); // This is called Function Expression.

/* Anonymous Function: Function which dont have any name. */
var funExp = function(x,y){  //This whole is Anonymous Function Expression.
    return total = x+y;
}
/* function(x,y){       This is Anonymous Function.
    return total = x+y; */

console.log("The sum of two no is", funExp(20,10));

/* Function Argument Missing- If a function is called with missing argument, 
the missing value are set to undefined. */
function mul(o, p, q){
    console.log("O -" + o + " P -" + p + "Q -" + q);
}
mul(10,20);  // If onnlyy 2 arg s passed for 3 variable then, 
// Third will provide undefined
 
/* Argument Object- Contain an array of argument, It is not an array */
function oopo( v,h ){
    console.log(arguments[0] , arguments[1]);
}  // It can be also written on diffrent name.
oopo("Madara","Uchiha");
console.log("\n");

//Length property - It counts number of arrguments, (argument.length);
function kon(n1,n2){
    console.log(arguments.length);
}
kon("Itachi", "Kisaame", "sasori");
console.log("\n");

// With for loop
function sharingan()
{
    for(var i = 0; i<arguments.length; i++){
        console.log(arguments[i] + " ")
    }
}
sharingan("Tsukinome", "Renni Sharigann");
console.log("\n");

// Many Function Argument : If a function is called with too many arg,
// These arg can be reached using the Argument obj with is built-in .

function add(a,b){
    console.log("A:"+ a + " B :" + b + " C :" + arguments[2])
}
add(10,20,30)
console.log("\n");

// Default parameter :- It shall be given in last,
// Otherwise the output will be undefined, else If default parameter given in bet then after that all parameter shall be given.

function sub (w, e, r = 111){
    console.log(w, e, r);
}
sub(222, 333);
console.log("\n");

// If Default value given in middle
function nut(t, u= 555, o ){  // This will give Output of o as undefinde
    console.log(t, u, o);
}
nut(777,999);
console.log("\n");

// If Default value given to all
function jui(s = 100, d = 200,f =300){
    console.log(s,d,f)
}
jui();

// Javascript also allows the use of array and null as default value.
// null
console.log("Null");
function hub(a,b,c = null){
    console.log(a,b,c);
}
hub(10);  //Here only one value is provided so,
//it will give undefined for b and null as provided for 3rd.
console.log("\n");

// array
console.log("Array");
function bub(a, b =[100]){
    console.log(a ,  b);
}
bub(110);
console.log("\n");

//Rest Parameter - It allows to represent indefinitee number of arguments
// as an array.(... is the representation of rest parameter), It must be last parameter.
console.log("Rest Parameter");
function tub(...args){
    console.log(args);
}
tub(10, 20,30,40,50);
console.log("\n"); 

function tub(a,...args){
    console.log(args);
    console.log(a);
}
tub(10, 20,30,40,50);
console.log("\n");
/*In case of accessing any number inside the args array we have to provide 
index number to access individually. */

/* Rest Vs Argument - 3 Main Diffrence 
1. Rest parameter are only that are not given separate name,
while the argument obj contain all argument passed to the function.

2. The argument obj is not a real array, while  Rest parameter are array
which mean meathod like sosrt, map, forEach or pop can be applied on it directly*/
console.log("Diffrence Bet Rest and Argument");
function restshow(a, ...args){
    console.log(a);
    console.log(args);
}
restshow(10,20,30,40,50);
console.log("\n");

function argshow(a){ // Here 10 is assign to a but still 10 will go with  argument
    console.log(arguments);
}
argshow(10,20,30,40,50);
console.log("\n");

// Return Statement - It may return any type data, Including array and Obj.
console.log("Return Statement");
// Standard form - return(variable or Expression);
function add(k,l){
    return(k+l);
}
console.log(add(10,20));
console.log("\n");

/* Variable Scope - 
1. Global Scope - outside a function defination and is accessible and modifiable throught your program.
In web browser, Global variable are deleted when youu close the browser window
,But reemain to new pageloaded into the same window. */

var Uchiha = "I am Itachi Uchiha of Leaf"
function akutsuki(){
    console.log( Uchiha);
} // Here we access global variable inside loop
akutsuki();

console.log( Uchiha); //Here we access global variable Outside loop.
console.log("\n");

/* 2. Local Scope - A varible that is declared inside a function is local
It is created and desstroyed every time function got executed, Cannot be accessed anywhere 
If variable is not declared with var it is created as a global variable*/
function yay(vue){
var uou = 21; // Local Variable
coc = 11; // Global Variable
return (uou + vue + coc);
}
console.log(yay(31));
console.log("\n");

// In Local Scope the If given 2 function then the inner function can access
// the outer but Outer function can not access inner .
// Function arg(parameters) works as local variable inside function.

/* Block Scope- It is used to keep the loop closed and it wont let aby local variable to
get accessed by outside , so here insteade of var we use let and const*/

/*Variable Hosting - Hosting is javascript default behaviour of moving declaration to the top
of the function, if defined in a function, or the top of global context, If outside the function */
 
/*Closure - A function to access to the parent scope,It preserve data from outside 
A closure is an inner function thaat has access to the outer(enclosing)
Have 3 Type/ Scope-
1. Local Scope (Own Scope)
2. Outer Function Scope
3. Global scope */

function sow(){
    var g = "g is a local variable";
    console.log(g);
    function innerFun(){
        var k = "K is inner Function";
        console.log(k)
    }
    innerFun();
    console.log(g);
    console.log(k)
}
sow();

/*Function Expression - Two placing function. into a variable. */
var mop = function jab(){ //This is called Function Expression
    console.log("tooth");
}
mop();
console.log("\n");
/* Anonymous Function - The function which have no specified name
1. Can be stored in Variable
2. Can be returned in a Function
3. Pass in Function 
Standard Form - 
function(){
    body of function;
};*/


// Passing Anonymous Function as Argument
console.log("Passing Anonymous Function as Argument");
function misp(myfun){
    return myfun;
}

console.log(misp(function(){
    return "Amaterus";
}));
console.log("\n");

/*Return anynomous function- */
console.log("Returning Anynomus Function");
function disp(a){
    return function (b){
        return a+b;
    };
}
var af = disp(11);
console.log(af(20));
console.log("\n");

/*Arrow Function- Arrow function expression(also known as fat arrow) 
has shorter syntax compared to function expression. Arrow function are always anonymous*/
console.log("Arrow Function");
var jsd = () => {
    console.log("Gojo");
};
jsd();
console.log("\n");

var jug = (m,k) => {  // Here more then 1 parameter is passed, so () is needed.
    console.log(m,k);
};
jug(200,300);
console.log("\n");

// Return function in arrow function
var NNN = v => v; // This is what we did insteade of writting return
console.log(NNN(111));
console.log("\n");

/* IIFE(Immediately Invoked Function Expression) It runs as soon as defiened, It is not needed to call 
A type of self executing anynomus Function 
Imp-
1. Avoid Creating Global Variable and Function
2. As it does not define variable and function globally so there
will be no name conflict
3. Scope is ltd to that particular function
Standard Form - (function(){console.log("Hello")})();
(function(a,b){console.log(a,b)})(1,2); */
console.log("IIFE");
(function(){console.log("Hello")})();
(function(n,o){console.log(n,o)})(1,2);
(function(){var s = 333; console.log(s);})();
console.log("\n");

/*OOP(Object Oriented Programming) - It is a programming language model organised 
around object rather than actions and data rather than logic */

/*Encapsulation - The main pillar of OOP, creation of seperate packet to seperate data from each other */

/*Abstraction- Show what is neccessery or know what is important or needed */

/*Inheritance- Transfer things from one gen to next gen */

/*Polymorphism-  */

/*Object- It is a collection of properties, and property is an association bet name and value
 a property value can be a function, in wwhich case the properrty is known as method*/

/*Object Declaration and initializaation-  
1. Using Object Literal- */
console.log("Object Declaration and initialization- Using Object Literal ")
var fees = {};
fees["Rahul"] = 100; //fees.Rahul = 100;
fees["Sumit"] = 200; //fees.Sumit = 200;
fees["Rohan"] = 300;  //fees.Rohan = 300;
fees.Super_man = 400; // fees["Super man"] = 400;
console.log(fees["Super_man"]);  //console.log(fees.Rahul);

console.log("Creation of Method");
fees["total"] = function(){return(100+200+300+400)}; // this is method
console.log("Total feess is - " + fees.total());
console.log("\n");

/*2. Using Object Constructor-The only thing is diffrent is in intial
var fees = new Object(); has to be given else everything is same.  */

/*Accessing Property - Some piece of named data it contains. can be accessed by dot or []
same as Object Literal. */

/*Adding Property/Methods-  */
console.log("Adding Property");
var jes ={
    amrit: 1000,
    vineet: 1100
}
jes.sonam = 600; // This will add another property as sonam in previous string
console.log(jes);
console.log(jes.amrit + jes.vineet); // This will add the values
console.log(jes.amrit + " " + jes.vineet); // This will just concate , and represent the value as it is.
console.log("\n");

console.log("Adding Methods");
jes.aao = function() {};
console.log(jes);
console.log("\n");

/*Deleting Properties-  */
console.log("Deleting Property");
delete jes.amrit;
console.log(jes);
console.log("\n");

/*Factory Function- When a function return an obj, we call it a factory function. It can produce 
object instance without new keyword or classes. */

function mobile() {
    return{
        model:"S20",
        price: function(){return "Price Rs. 21000";}
    }
}
var samsung = mobile();
console.log(samsung.model + samsung.price());
