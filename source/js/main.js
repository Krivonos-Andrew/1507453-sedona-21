'use strict'

var btn = document.querySelector(".menu-nav__btn");
var menu = document.querySelector(".menu-nav");

menu.classList.remove("menu-nav--nojs");

if (btn) {
  btn.addEventListener("click", function () {
    menu.classList.toggle("menu-nav--open");
  });
}
