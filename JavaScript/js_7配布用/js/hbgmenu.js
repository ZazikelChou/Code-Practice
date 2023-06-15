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


var isCross1 = false;
var hbgmenu = document.getElementById("hbg-menu-body-wrap");
var hbgmenubody = hbgmenu.querySelector(".hbg-menu-body");

menuButton.addEventListener("click", function() {
  if (isCross1) {
    hbgmenubody.classList.add("hbg-menu-body-clicked");
  } else {
    hbgmenubody.classList.remove("hbg-menu-body-clicked");
  }
  
  isCross1 = !isCross1;
});