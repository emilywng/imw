// Printing message to console
console.log("hello world");

// Variables selecting color circles
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightblue";
})

/*
Loop task
1. Select container
2. Declare message variable and assign text
3. For loop
*/

const loopContainer = document.getElementById("loopContainer");
let message = "hello";
message = "brave";

for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

// Condition

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function (){
    console.log("hovering over condition container")
    square.style.backgroundColor = "green";
})

conditionContainer.addEventListener("mouseout", function (){
    // console.log("hovering over condition container")
    square.style.backgroundColor = "lightsalmon";
})

// Time
const timeContainer = document.getElementById("timeContainer");
const increaseText = document.getElementById("increaseText");
let fontSize = 18;
let timeIncrease = setInterval(increaseFontSize, 2000);


function increaseFontSize() {
    fontSize++;
    increaseText.style.fontSize = fontSize + "px";
}

//Input

const inputText = document.getElementById("inputText").value;
const textLength = inputText.length;

document.getElementById('submit').addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const textLength = inputText.length;

    document.getElementById("text-length").innerHTML = "Number of Characters: " + textLength;
});