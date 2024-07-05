/*
4 pillars of DOM
1. Selection of Elements
2. Changing HTML
3. Changing CSS
4. Event Listener*/
/*
// Selection of Elements
console.log("Selection of Elements");
var a = document.querySelector("h1"); //This used to select html file in js.
console.log(a);

console.log("\n");

// Changing HTML
console.log("Changing HTML");
var a = document.querySelector("h1");
a.innerHTML = "JS se change kra haai";

console.log("\n");
/*
//Changing CSS
console.log("Changing CSS");
var a = document.querySelector("h1");
a.style.color = "gray"
a.style.backgroundColor = "Black"
*/
/*
//Event Listener
console.log("Event listner");
var a = document.querySelector("h1");   //as after clicked it will get change the existing thing
a.addEventListener("mouseover",function(){
    a.innerHTML = "Badal"
    console.log("Hey");
});
*/


//Simple example of bulb 

var bulb = document.querySelector("#bulb");
var btn  = document.querySelector("button");
var btn2 = document.querySelector("#sw"); // off button

var flag = 0;       
btn.addEventListener("click",function(){
    if(flag == 0){
    bulb.style.backgroundColor = "aquamarine"
    flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Click again");
        flag = 0
    }
})

// OFF Button
btn2.addEventListener("click",function(){
    bulb.style.backgroundColor = "white"
})  

/*
var h = document.querySelector("h1") //ye sare h1 ko select nai krega.
// so sab ko ek bar me select krne k liye
var t = document.querySelectorAll("h1")
console.log(t);
t.forEach(function(e){
    console.log(e);
})

//If we have to take any element by id
document.getElementById()

//by class
document.getElementsByClassName()

//data input in text containt as written -
var box = document.querySelector("#box")
box.textContent = "<h1>Hellllo</h1>"

//To convert text data in output -
box.innerHTML = "<h1>Namaste</h1>"
*/

console.log("\n");
document.write("From js external file");

// window.alert("Welcom!!!");

// window.prompt("Please enter the input")

/*let userInput = window.prompt("Please Enter your Input");

        if (userInput !== null) {
            window.alert("Hello, " + userInput + "!");
        } else {
            window.alert("You clicked Cancel or closed the prompt.");
        }  */

