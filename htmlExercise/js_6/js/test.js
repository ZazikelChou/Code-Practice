'use strict';
// const arr = [0,1,2,3,4];
// for(let i = 0;i < arr.length; i++){
//     console.log(arr[i] *2)
// }

const array = document.querySelectorAll('li');
// let array2 = [0,1,2,3,4];
for(let i = 0; i<array.length;i++){
    const text = `テキスト（${i + 1}）`; 
    array[i].innerHTML = text; 
}