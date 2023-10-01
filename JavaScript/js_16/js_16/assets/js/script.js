'use strict'
//<1> OK
console.log('hello world'); 
//<2> ok
let e_h1 = document.querySelector('h1');
console.log(e_h1);
//<3> OK
let txt = "JavaScriptの基礎復習";
const e_p = document.querySelector('p');
e_p.innerText = `${txt}`;
//<4>

let font_color = e_h1.style.color='red';
let font_size = e_h1.style.fontSize='24px';

//<5>
let btn = document.querySelector(".div-btn");
btn.innerText = 'クリックしてね';
btn.addEventListener('click', function() {
    btn.style.backgroundColor = 'green';
});

//<6>
let btn2 = document.querySelector(".div-btn2");
let btn_p = document.querySelector(".button-p");

let i = 0; // 初始化 i

//btn2.addEventListener('click', function() {
//    i++; 
//    btn_p.innerText = i; 
//});

//<7>
//btn2.addEventListener('click', function() {
//    if (i < 10) {
//        i++; 
//        btn_p.innerText = i; 
//    }else{  
//    btn_p.innerText = '10になりました'; 
//    }
//});

//<8>
// btn2.addEventListener('click', function() {
//     i++;
//     if (i % 10 === 0) {
//         btn_p.innerText = `${i}になりました`; 
        
//     }else{  
//         btn_p.innerText = i; 
//     }
// });



//<9>
btn2.addEventListener('click', function() {
    i++;
    if (i % 10 === 0) {
        btn_p.innerText = `${i}になりました`; 
        
    }else{  
        btn_p.innerText = i; 
    }
});
let btn3 = document.querySelector(".div-btn3");
btn3.addEventListener('click', function() {
    i = 0;
    btn_p.innerText = i; 
});

//<10>
let animals = ['ねずみ', 'うし', 'とら', 'うさぎ', 'たつ', 'へび', 'うま', 'ひつじ', 'さる', 'とり', 'いぬ', 'いのしし'];
console.log(animals);

//<11>
let animals_p = document.querySelector(".animalsName");
animals_p.innerHTML = animals[5];

//<12>
// let animals_ul = document.querySelector(".animalsul");
// for (let i = 0; i < animals.length; i++) {
//     animals_ul.innerHTML += `<li>${animals[i]}</li>`;
// };

// 控制台中显示对象
console.log(animalsObject);

//<15> NG
let animalsObject = {
    'animals-name': animals,
    'animals-img': imageFileNames
};
//<16> NG
let animals_ul = document.querySelector(".animalsul");
for (let i = 0; i < animalsObject['animals-name'].length; i++) {
    animals_ul.innerHTML += `<li>${animalsObject['animals-name'][i]}</li>`;
}
let displayAnimalImage = (animalName) => {
    let pElement = document.querySelector('.animal-img');
    let indexOfAnimal = animalsObject['animals-name'].indexOf(animalName);
    let animalImage = animalsObject['animals-img'][indexOfAnimal];
    pElement.innerHTML = `<img src="${animalImage}" alt="${animalName}">`;
};
displayAnimalImage(liToModify.textContent);