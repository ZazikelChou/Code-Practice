'use strict';
const htmlh1 = document.querySelector('h1');
htmlh1.innerHTML += `HELLO WORLD`;
const htmlUl = document.querySelector('ul');

/* htmlUl.innerHTML += `<h1>HELLO WORLD</h1>` */

/* htmlUl.insertAdjacentHTML('beforebegin','<h1>HELLO WORLD</h1>'); */

htmlUl.innerHTML += '<li>1</li>';
htmlUl.innerHTML += '<li>2</li>';
htmlUl.innerHTML += '<li>3</li>';
htmlUl.innerHTML += '<li>4</li>';
htmlUl.innerHTML += '<li>5</li>';