let inputScreen = document.querySelector('#input-screen');
let answerScreen = document.querySelector('#output-screen');
let symbols = document.querySelectorAll('.symbols');
let calcArray = [];
//initially make the screen have a zero value
inputScreen.innerText = 0;
answerScreen.innerText = 0;



//select all number keys and call the display function
let num1 = document.querySelector('#number_1');
num1.addEventListener('click', display);

let num2 = document.querySelector('#number_2');
num2.addEventListener('click', display);

let num3 = document.querySelector('#number_3');
num3.addEventListener('click', display);

let num4 = document.querySelector('#number_4');
num4.addEventListener('click', display);

let num5 = document.querySelector('#number_5');
num5.addEventListener('click', display);

let num6 = document.querySelector('#number_6');
num6.addEventListener('click', display);

let num7 = document.querySelector('#number_7');
num7.addEventListener('click', display);

let num8 = document.querySelector('#number_8');
num8.addEventListener('click', display);

let num9 = document.querySelector('#number_9');
num9.addEventListener('click', display);

let num0 = document.querySelector('#number_0');
num0.addEventListener('click', display);


//control the dot in the display, allow only one dot
let dot = document.querySelector('#dot');
dot.addEventListener('click', function () {
    if (inputScreen.innerText.includes('.')) {
        inputScreen.innerText += '';
    } else {
        inputScreen.innerText += ".";
    }
});


//
let equals = document.querySelector('#equals');
equals.addEventListener('click', display);

let minus = document.querySelector('#minus');

let times = document.querySelector('#times');

let divide = document.querySelector('#divide');

let plus = document.querySelector('#plus');

let clear = document.querySelector('#del');
clear.addEventListener('click', function () {
    inputScreen.innerText = 0;
});



function display() {
    console.log(this.innerHTML);
    if (inputScreen.innerText == 0) {
        inputScreen.innerText = Number(this.innerHTML);
    } else if ((inputScreen.innerText.includes(".") && inputScreen.innerText.length >= 11) || inputScreen.innerText.length >= 10) {
        inputScreen.innerText += "";
    } else {
        inputScreen.innerText += Number(this.innerHTML);
    }

}

//if any of the +,-,*,/ key is pressed, push the number on the screen to an array
//display the sign
//wait fo another input
//rinse and repeat
//if the equal sign is pressed, calculate the value in the array and display
