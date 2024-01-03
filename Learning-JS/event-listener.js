// JavaScript Event Listeners
// Syntax: addEventListener(event, function, useCapture)

// Thay đổi thanh header.
"use strict";

// Exercise 1:
/* document.addEventListener(
    "readystatechange", // thay đổi trạng thái (load lại trang).
    (e) => {
        console.log("readyState: complete");
    }
);

let nav = document.querySelector("nav");
nav.addEventListener(
    "mouseover",
    (e) => {
        nav.classList.add("height100");
    },
    false
);
nav.addEventListener(
    "mouseout",
    (e) => {
        nav.classList.remove("height100");
    },
    false
);

// Thay đổi phần section.
const view = document.querySelector("#view1");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

h2.addEventListener(
    "click",
    (e) => {
        e.stopPropagation();
        const text = e.target.textContent;
        text === "Hello World!" 
        ? (e.target.textContent = "Xin Chào!")
        : (e.target.textContent = "Hello World!");
    },
    false
);

div.addEventListener(
    "click",
    (e) => {
        e.stopPropagation();
        div.classList.toggle("blue");
        div.classList.toggle("navy");
    }
);

view.addEventListener(
    "click",
    (e) => {
        view.classList.toggle("green");
        view.classList.toString("gray");
    },
    false
); */


// Exercise 2: exercise about preventDefault() method.
document.addEventListener(
    "readystatechange", 
    (e) => {
        if (e.target.readyState === "complete") {
            console.log("readyState: complete");
            initApp();
        }
    }
);

const initApp = () => {
    const view2 = document.querySelector("#view2");
    console.log(view2);
    const myForm_container = view2.querySelector("#myForm-container");
    console.log(myForm_container);
    myForm_container.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            console.log("submit event");
        }
    );
}