'use strict'
let ulElement = document.querySelector("ul");
for (let i=1; i<10; i++){
    for (let j=1; j<10; j++){
        let product = i*j;
    let liElement = document.createElement("li");
    liElement.textContent = i + " * " + j + " = " + product;
    ulElement.appendChild(liElement);
    }
}   


// const weather = '晴れ';
// console.log('今日の天気は' + weather + 'です。');

// const age = 19;
// console.log('私の年齢は' + age + 'です。');
// console.log('私の年齢は + age + です。');

// const txt = `hello world`;
// console.log(txt);

const addTxt = 'beautiful';
const txt1 = `hello ${addTxt} world`;
const ans = `答えは${1 + 1}です`;
const txt = `hello
world`;
console.log(addTxt+txt1+ans+txt);