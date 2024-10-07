document.getElementById("title");

document.getElementById("title").getAttribute("id");
// title is id

document.getElementById("title").getAttribute("class");

// document.getElementById("title").setAttribute("class" , "test")
// overwrite the previous clasname to new

// document.getElementById("title").setAttribute("class" , "test heading")
// make sure to give also old class name

const title = document.getElementById("title");

title.style.backgroundColor = "yellow";
title.style.padding = "15px";
title.style.borderRadius = "20px";

title.style.color = "black";

const heading = document.getElementsByClassName("heading");

document.querySelector("h2");
document.querySelector(".class");
document.querySelector("#heading");

const myUl = document.querySelector("ul");
const turnGreen = myUl.querySelector("li");
turnGreen.style.backgroundColor = "green";
turnGreen.style.padding = "20px"

const myH1 = document.querySelectorAll("h1");

myH1[0].style.color = "pink";