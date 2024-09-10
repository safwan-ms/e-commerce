
// SELECTING MENU  "over-lay" ,"side-menu-bar"
function show() {
    document.getElementById("over-lay").style.display = "block"
    document.querySelector(".side-menu-bar").style.left = "0px"

}

//SELECTING CLOSE BUTTON
function changemenu() {
    document.getElementById("over-lay").style.display = "none"
    document.querySelector(".side-menu-bar").style.left = "-400px"
}

//SUB BTN CODE OPEN sub-btn sub-menu-list aricon
var subMenuBtn = document.getElementById("sub-menu-btn");
var subMenuList = document.getElementById("sub-menu-list");

function openmenu() {
    subMenuList.style.display = "block"
    subMenuList1.style.display = "none"
    subMenuList2.style.display = "none"
}
function closemenu() {
    subMenuList.style.display = "none"
    subMenuList1.style.display = "none"
    subMenuList2.style.display = "none"
}

//Information Open Code
var subMenuBtn1 = document.getElementById("sub-menu-btn-1");
var subMenuList1 = document.getElementById("sub-menu-list-1");

function openmenu1() {
    subMenuList1.style.display = "block"
    subMenuList.style.display = "none"
    subMenuList2.style.display = "none"

}
//Theme Open Code

var subMenuBtn2 = document.getElementById("sub-menu-btn-2");
var subMenuList2 = document.getElementById("sub-menu-list-2");

function openmenu2() {
    subMenuList2.style.display = "block"
    subMenuList.style.display = "none"
    subMenuList1.style.display = "none"
}

// CHANGING RED THEME 
var redRuby = document.getElementById("ruby-red");
var colors_navbar = document.getElementById("colors-navbar")
var colors_btmbg = document.getElementById("colors-btmbg")
var colors_hyperlink = document.getElementById("colors-hyperlinks")

redRuby.addEventListener("click", function () {
    colors_navbar.style.backgroundColor = "#FD6569";
    colors_btmbg.style.backgroundColor = "#FD6569";
    colors_hyperlink.style.backgroundColor = "#FD6569";
})

//CHANGING OLIVE GREEN
var olive_green = document.getElementById("olive-green");
var colors_navbar = document.getElementById("colors-navbar");
var colors_btmbg = document.getElementById("colors-btmbg");
var colors_hyperlink = document.getElementById("colors-hyperlinks");

olive_green.addEventListener("click", function () {
    colors_navbar.style.backgroundColor = "#808000";
    colors_btmbg.style.backgroundColor = "#808000";
    colors_hyperlink.style.backgroundColor = "#808000";
})

//CHANGING ROSY BROWN
var rosy_brown = document.getElementById("rosy-brown");
var colors_navbar = document.getElementById("colors-navbar");
var colors_btmbg = document.getElementById("colors-btmbg");
var colors_hyperlink = document.getElementById("colors-hyperlinks");

rosy_brown.addEventListener("click", function () {
    colors_navbar.style.backgroundColor = "#20b2aa";
    colors_btmbg.style.backgroundColor = "#20b2aa";
    colors_hyperlink.style.backgroundColor = "#20b2aa";

})

//RANDOM COLOR CODE

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`

    colors_navbar.style.backgroundColor = color;
    colors_btmbg.style.backgroundColor = color;
    colors_hyperlink.style.backgroundColor = color;
    localStorage.setItem('color',color)
}

if(!localStorage.getItem('color')){
    randomColor();
}
else{
    const color = localStorage.getItem('color')
    colors_navbar.style.backgroundColor = color;
    colors_btmbg.style.backgroundColor = color;
    colors_hyperlink.style.backgroundColor = color;
}
