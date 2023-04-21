'use strict';
const htmlUl = document.querySelector('ul');
const num = 9999;
if (num % 2 === 0) {
  htmlUl.innerHTML = `偶数です`;
} else {
  htmlUl.innerHTML = `奇数です`;
}

//0や負の値が入った際も正しく判定したいとき
// if (Math.sign(num) === 0 || Math.sign(num) === -1) {
//   htmlUl.innerHTML = `0か負の値です`;
// } else if (num % 2 === 0) {
//   htmlUl.innerHTML = `偶数です`;
// } else {
//   htmlUl.innerHTML = `奇数です`;
// }
