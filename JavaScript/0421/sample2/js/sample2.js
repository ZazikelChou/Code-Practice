'use strict';
const htmlUl = document.querySelector('ul');

for (let i = 0; i < 5; i++) {
  htmlUl.innerHTML += `<li>${i + 1}</li>`;
}

// 4行目と同じことができる処理の例
// 1.カウントを1から初めて、5と同数になるまで続ける
// for (let i = 1; i <= 5; i++) {
//   htmlUl.innerHTML += `<li>${i}</li>`;
// }

// 2.カウントを1から初めて、iが6未満のうちは続ける
// for (let i = 1; i < 6; i++) {
//   htmlUl.innerHTML += `<li>${i}</li>`;
// }
