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


const myUlAll = document.querySelectorAll("ul");
// myUlAll[0].style.color = "pink";

myUlAll.forEach((curElem)=> curElem.style.color = "blue");

const list_item = document.getElementsByClassName("list-item");
// list_item.forEach((curElem)=> curElem.style.backgroundColor = "purple");
// it will not work on html collection or node list you have to convert first in array 
const converted_List_item = Array.from(list_item);
converted_List_item.forEach((curElem)=> curElem.style.color = "orange");
