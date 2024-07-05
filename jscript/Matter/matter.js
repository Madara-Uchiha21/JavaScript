/* 1. Word - is just a english word which have no meaning in js. 
Keyword - It have some value in js. ex- if, for etc .

2. var const let
var - The Value of variable assigned with this keyword can be changed.
const - The Value of variables assigned with this keyword cannot be changed. 

3. Hoisting - Variable and functions are hosted, which mean the Declaration is moved on the top of code.
Which mean we can print object before giving the value of variable.
var roo = 10 ; - This could get breakdown into
var roo; - Declaration
roo = 10; - Initialisation

**What is difference between undefined and not defined, The undefined object is that which existed but the value Is not known.
Whereas not defined does not exist although

** types in js - primitive nd refrence
Primitives -  number, string, null, undefined, boolean.
Refrence - [] {} ()
Esse koi b value jisko copy krne pr real copy nai hota, balki uss mein value ka refrence pass
ho jata hai usse hum refrence value kehte hai. aur jiska copy krne par real copy ho jaaye wo primitive type value .
if there is no brackket it means it is primitive.*/

// const { useCallback } = require("react");

var a = [1,2,3,4,5]; // This is refrence type
var b = a;   // Here we is referring to the value of A. So the changes in B Create changes in a
b.pop()
console.log(a);
console.log("\n");

/* 4. Conditionals - (if, else, else-if) 

5. Function - Function ka matlab hai , appp kuch code ko likh kr k koi naam de sake, fr baad me use kar sake
as many time as i wish .
Function mainly 3 kaam k liye use - 
a) code ko future me challa ne k liye / Helicopter entry of code
b) code reuse karna chahte  ho
c) code chalana hai but with diffrent data 
function = code ko name dena */ 

function abcd(a,b,c){   //This is parameter
    console.log(a,b,c);
}
abcd(10,12,13)  //This is arguments
console.log("\n");

/* 6. argument- real value jo hum dete hai fnc chaalate time
parameter - variable jinme value store hoti hai arg waali 

7. array - hum ek variable mein ek value store kar patte hai , but jab multiple value store
kiya jatta hai use array kehte hai 
var arr =["a","e","i","o","u"];
for(i = 0;i <arr.length; i++){
console.log(i,"=", arr[i]);}
console.log("\n"); */

/*Push pop shift unshift */
console.log("push");
var vrr = [11,12,13,14,15]
vrr.push(16) //push is used to add new element
console.log(vrr);
console.log("\n");

console.log("pop");
vrr.pop(); //To remove last element
console.log(vrr);   //
console.log("\n");

console.log("shift");
vrr.shift() //to remove 1st element from initial
console.log(vrr)
console.log("\n");

console.log("unshift");
vrr.unshift(7)  // used to add value at 1st place
console.log(vrr);
console.log("\n");

console.log("splice");
vrr.splice(3) //here 3 is index number the number after 3 index will be deleted
console.log(vrr) //splice function is used to remove particular obj frm array
vrr.splice(1,2); //removing range can be given also
console.log(vrr); 
console.log("\n");

/*Ek se jayada bande ki baat hui to array(common noun), Ek bande k bare me saari baat kari
to hua object(proper noun) */

//1) blank obj
var www = {};

// 2) filled obj- It is like dict of python , can store n number of value
var iii = {
    age : 88,
    nae: "Madara Uchiha",
    linkedin:"khaini",
    bolo: function(){}  //This is method,bcz its value is function
}

console.log(iii);
iii.age = 108;  //To change the internal thing
console.log(iii);
console.log("\n");

//To access the value 
console.log(iii.nae);
console.log("\n")

/*Adv js */

console.log("Adv js")
/* #var(Older version from es5) {let, const}-new added in es6 
var function scoped hota hai which mean var apne parent function me kahi b use ho sakta hai */
function tude(){
    for(var i=1; i<12; i++){
    console.log(i);
}
console.log("\n");
console.log(i); // #here we can print i outside of for loop but in function jus due to var
}   //so to correct such issue there is let bcz let is braces scoped.
tude()
console.log("\n");

// #var add itself to window obj(Those obj jisme browser se related feature dalle hai), 
//where as let doesnt add.

function ludo(){
    for(let u = 0; u<10; u++){ //This code works until here
        console.log(u);
    }
}
ludo()
console.log("\n");

/*var add itself to windows obj.But let doesnt 

Window object are those objects in which material related to browser can be found.
JS maien kai ek feature hai jinko hum use krte hai wo feature wo nai hai pr fr bhi use kr paate 
hai kyoki wo feature js lang use kr leti hai window se, aur windows hai ek box of feature given 
by browser to use with js 

Browser context api- jisme 3 chize hoti hai
1. stack - kon c chiz kesse chalegi., Sequence
2. heap memory - jitna b intermmideate data hota hai wo kahi to store hota hai that is heap, and final 
answer print hota hua aa jayega
3. window obj - 

/*Execution context - mean jab bhi hum function chalayenge function apne app khud ka 
ek imaginary container bna lega jisme uski 3 chize hogi

1. variable
2. function inside that parent function
3. lexical ennvironment of that function - 

OR execution context is a container whereever a function code is executed and its 
created whenever a function is called.

Lexical environment tell us that what can be accessed and what can be not, it is a chart in which 
it is written, It is also known as scope and in this the children can access the parent but parent cant access children. */

function abc(){
    var vv = 10;
    console.log(vv);
    function fed(){
        var bb = 11;
        console.log(bb); //var is nearest function scoped, so it can only be executed till
    }  // fed function and cant be accessed by abc function
    fed()
}
abc()
console.log("\n");

//how to copy refrence value [...variable - is spread operator]
console.log("how to copy refrence value");
var rat = [11,22,33,44,55,66];
var cat = [...rat];  //Here it is not refering the element but actually copying 
cat.pop()
console.log( rat +  cat );      // if we place , instead of + we will get 2 array.
console.log("\n");

//spread operator with obj-
var obj = {name: "simyj"};
var copyobj = {...obj};
console.log(copyobj);
console.log("\n");

// Truthy and Falsy
/*js me kuch bhi likho wo mainly do type mein se kisi 1 type ko belong krti hai
falsy values - 0, false, NaN, undefiened, null, document.all
else other value will be truthy value */

console.log("Test of Truthy and Falsy");

if(0){  // Here we placed 0 so, the else part will executed because it is falsy value
    console.log("Hii");
}
else{
    console.log("Hello");
}

if(5){
    console.log("Ghost");
}
else{
    console.log("fygaku");
}
console.log("\n");

/*foreach loop sirf array pe chalta hai mtlab ki jab tumhare pass sirf array ho,
to hum foreach loop ko use krte hai, for each kabhi b array me changes nai krta hai.
array ki temporary copy par jiske wajah se array hamessha same rehta hai. */
console.log("For Each loop")
var we = [1,2,3,4,5,6,7,8,9,10];
we.forEach(function(vall){
    console.log(vall+2);
})  //forEach kabhi b array me change nai krta.Wo apko changes kr
// k deta hai array ki temporary copy pr. array hamesha same rehta hai
console.log("\n");

/*obj me loop lagane k liye (forin) ka use krte hai */
console.log("Use of forin loop")
var obj = {
    name: "Aditya",
    age: 24,
    city: "Bageshwar"
}
for(var key in obj){ // if we write only key here we will get the output as only he left arrow
    console.log(key,":" ,obj[key]);  // with this input we will get complete output
}
console.log("\n");

/*do-while loop */

var oo = 0; //what ever the number given here, the loop starts from that number onwards
do{ //ek baar chalega hi
    console.log(oo,"= new");
    oo++
}
while(oo<21)
console.log("\n");

/*callback functions - jab bhi koi aisa code jo baad me chalna hai, jo mai likhunga ,qki wo code baad me chalta hai 
js ko nai pta hota hai ki wo completion par btaya jata hai ki wo complete hoga or  aap use challa skte ho , ye btane ka kaam call back function ks hsi.
This is Ashyncronous js,aisa codee jo baad me chalta hai or hum usse ek function de dete hai ki bhaiya jab complete hojana
to ye function chala dena, or wwo function hum dete hai wo ek normal function hota hai or use kehta hai callback function  */
setTimeout(function(){  // setTimeout mtlb kuch der baad challao
    console.log("Chall ja bhai");
},2000);
console.log("\n");

/*first class function- here we use function as value */
function avt(func){
    func();
}
avt(function(){console.log("hey");}) // This will output "hey" to the console
console.log("\n");

/*Array is not actually an Array it is treated as an object, bcz if we write- 
var tot = [1,2,3] // it will get converted in Object.
tot = {
    0:1
    1:2
    2:3
}
    So if we have to check any array as Array then we have to */
   


function bvt(func){
    if (typeof func !== 'function') {
        console.log('Error: argument is not a function');
        return;
    }
    func();
}

// Array.isArray([]) - used to check if something is array or not


// Advanced JavaScript Concepts - 2

console.log("Higher Order Function");
/*Higher Order Functions -In which the function is passed as parameter. or the function is returned.
It is used commonly during making of closer. For each function always use. higher order function.
OR 
Higher Order function are the function which accept a function as parameter or return a fumction as parameter or Both.
forEach is also a higher order function Eg- */
// Type1 -
function duty(){
    return function(){}
}

duty()

//Type2 - 
function futy(){

}
futy(function(){})

console.log("\n");

console.log("Constructor Function");
/* Instance(new produced goods) = new keyword + Constructor Fuction
Constructor Function -  normal function jisme this(this refers to the object being created, new object is created, 
this becomes that object, ) ka istemal ho and aap 
function ko call krte waqt new keyword ka istemal karein.

Use case - Jab ek jessi property walle bahut saare element bnnane ho
to app construction function use kr skte ho.*/

function sancha(){
    this.width = 12;
    this.height = 22;
    this.color = "Brown";
    this.taste = "SUgarry";
}  

//The new keyword make any function, a constructor function. Heere in this case
// sancha is made to constructor function by new keyword.
var bis1 = new sancha();
var bis2 = new sancha();
var bis3 = new sancha();
// The output of this will be instance.

console.log("\n");

/*When I have to give multiple value */
console.log("Multiple value");

function circularButtonBanao(color){
    this.radii = 2;
    this.color = color;
    this.icon = false;
    this.pressable = false;
}

var redbtn = new circularButtonBanao("Red");
var greenbtn = new circularButtonBanao("Green");

console.log("\n");

/* First Class Function - When a functionn is treated as Variable. We can save then and 
can also pass it to another arguments. */
console.log("First Class Function");

//Type1 - 
var rw = function(){ // saving it in variable

}

//Type2 - 
function hh(){  //Passing function into function.

}
hh(function(){})

/*New Keyword - JAb b new lgta hai ek naya blank obj apne app bnn jataa hai. for the constructor function which is called. */
function zx(){
    this.age = 17;
}

zx();

console.log("\n");

/*Immedietly Invoked Function Expression(iife) - function kko turant challane ki kla. is tareeke se ki hum log koi prvt variable bna paye.
also it will not accessed easily. Any variable inside iife is private variable.*/

var gns = (function(){
    var nyc = 8181;  // This varible can't accessed,This is pivate variable

    return{
        getter: function(){  //getter mean value ko print krna.
            console.log(nyc);       //it can only be accessed by gns.getter()
        },
        setter:function(jal){       //To set the function, by including values in setter we can change the value in getter as well.
            nyc = jal;      //via console , we just have to put the main variable.setter(value) then main variable.getter() - the value is changed
        }
    }
}) ()
console.log("\n");

// jab bhi koi chiz {} k bahar ho to wo global scope hoga. where as {}k andar walla bracket scopedd.

/* Prototype -  It comes automatically whenever we create a obj.
It is an additional property. js by default adds a property called [[prototype]] . It content hands on supportive 
property. */

/*Prototypal Inheritance - Here the code or obj will inherit the fefeatures but willl have some extra things as well*/
console.log("Prototypal Inheritence");

var Human = {
    canFly: false,
    canTalk: true,
    canRead: true,
    hasFourLegs: false
}

var Coder = {
    Webdesign: true,
    Animation:true
}

Coder.__proto__ = Human; //inheritance.

/*This  Keyword - Special keyword in js , It changes value in diffrent context*/
    /* The global scope - jab bhi koi chiz likho rahe ho to check kro ki koi function, object ya fir scope bana hai,
    which mean anything which is not in {} .*/
var kj = 1155; //This is global scope

function grt (){
    var tr = 555; // This is local scope
}

console.log(this);  //Here this is in global scope , and will print window.

/*Value of this in function scoped */
function tw (){
    console.log(this);  //window
}

/*Value of this when method scoped ,
when function is inside obj then that is known as method scoped. 
In any obj , this always refers to parents obj.*/

var iyi = {
    // Other property can also be added
    baatkro: function(){
        console.log(this);  // will give output as obj.
    }
}

iyi.baatkro();
/*In any method this keywork is refer as parent obj. */
console.log(typeof baatkro);

//DOM - 
var button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log(this);
})      // here this keyword is equa to what eveer written before addEventListner.
// So, here in this case it is button.

/*Call apply bind - agar tumhare pass koi function hai and koi object hai and tumhe
function chalana hai or by deffault jo this ki value hai use window na rakh kr point krwanaa hai obj ki taraf. */

function feg(){
    console.log(this);
}
var obj = {age:24}
abcd.call(obj)  // here we are pointing out that what shall be the value of this at this place by the help of call.


/*Async and Sync Js */

/*Sync(In Order) - Ek kaam complete hone k baad dusra start krna. 
Async(No-Order)  - Saare kaam ek sath suru kr do jiska jawab aa jaye ans de dena.

How to get if any code is Sync or Async?
If we use - 
setInterval
setTimeout
Promise
fetch
axios
XMLHttpRequest
 Then it is AsyncJs else other is Sync js.
 
 async js ka main motive hhota hai un cases me jisme pta nai hota hai ki code kitne der me 
 aayega.*/
console.log("Async Js"); //Sync js
setTimeout(function(){   // this function is known as callback function Async js
    console.log("Hello"); // Agar ye bahr likhaa hota toh setTimeout se pehlr chall jatta.
},2000)

console.log("\n");

// callback function hamesha async code me answer aane par chalta hai.
/*Event Loop main stack and side stack k bich me communication extablish krta hai
Main stack me chize execute hoti hai chalti hai.
Side stack me async js chalta hai fr, side stack me akaam hone k baad wo
Manin stack me atta hai n then execute hota hai. */

/*Async code likhne k liye - 
fetch
XMLHttpRequest
axios
promises
setInterval
setTimeout  - inn sab ka use hota hai 

Async ka output lene k liye -
Callbacks
then catch
async await     */

/*Promises */
console.log("Promises");

var nue = new Promise((res,rej) =>{
    if (true){
       return res();
    }
    else {
        return rej();
    }
})

nue
    .then(function(){
        console.log("Resolve ho gya.");
    })
    .catch(function(){
        console.log("Reject ho gya");
    })

console.log("\n");

var dnc = new Promise((res,rej) =>{
    var n = Math.floor(Math.random()*10);

    if (n<5){
        return res();
    }
    else{
        return rej();
    }
})

dnc.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("Above");
})


