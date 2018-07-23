let inputScreen = document.querySelector('#input-screen');
let answerScreen = document.querySelector('#output-screen');
let calcArr = [];



function calculate() {
    console.log(this.value);
    // calcArr.push(Number(this.value));
    // console.log(calcArr);
};

let num1 = document.querySelector('#number_1');
num1.addEventListener('click', calculate
    // function () {
    // console.log(this.value);

    // // calcArr.push(Number(this.value));
    // // console.log(calcArr);
    // }
);

let num2 = document.querySelector('#number_2');
num2.addEventListener('click', () => {
    console.log(this.value);
    // calcArr.push(Number(this.value));
    // console.log(calcArr);
});


let num3 = document.querySelector('#number_3');

let num4 = document.querySelector('#number_4');

let num5 = document.querySelector('#number_5');

let num6 = document.querySelector('#number_6');

let num7 = document.querySelector('#number_7');

let num8 = document.querySelector('#number_8');

let num9 = document.querySelector('#number_9');

let num0 = document.querySelector('#number_0');

let dot = document.querySelector('.numbers[value="."]');

let equals = document.querySelector('.numbers[value="="]');

let minus = document.querySelector('.numbers[value="&minus"]');

let times = document.querySelector('.numbers[value="&times"]');

let divide = document.querySelector('.numbers[value="&divide"]');

let plus = document.querySelector('.numbers[value="&plus"]');

let clear = document.querySelector('.numbers[value="Del"]');
