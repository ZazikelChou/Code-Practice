'use strict'




var menuButton = document.getElementById("hbg-btn");
var btnLine = menuButton.querySelector(".btn-line");
var isCross = false;

menuButton.addEventListener("click", function() {
  if (isCross) {
    btnLine.classList.add("btn-line-clicked");
    
  } else {
    btnLine.classList.remove("btn-line-clicked");
  }
  
  isCross = !isCross;
});


// var hbgmenubody = document.getElementById("hbg-menu-body-wrap");
// var hbgmenu = hbgmenubody.querySelector(".hbg-menu-body");
// var isCross1 = false;

// menuButton.addEventListener("click", function() {
//   if (isCross1) {
//     btnLine.classList.add("hbg-menu-body-clicked");
    
//   } else {
//     btnLine.classList.remove("hbg-menu-body-clicked");
//   }
  
//   isCross1 = !isCross1;
// });