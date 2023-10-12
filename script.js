"use strict";

const visitors = document.querySelector(".visitor");
const totalVisitors = document.querySelector(".total");
const count = document.querySelector(".count");
const save = document.querySelector(".save");
const reset = document.querySelector(".reset");
const back = document.querySelector(".minus");
const paragraph = document.querySelector("p");

let num = 0;
count.addEventListener("mousedown", () => {
  visitors.innerText = ++num;
});

back.addEventListener("click", () => {
  if (num > 0) {
    visitors.innerText = --num;
  }
});

save.addEventListener("click", () => {
  if (num === 0) {
    return;
  }
  paragraph.classList.remove("hidden");
  totalVisitors.innerText = num;
  totalVisitors.style.fontSize = "3rem";
});

reset.addEventListener("click", () => {
  visitors.innerText = 0;
  totalVisitors.innerText = 0;
  num = 0;
  paragraph.classList.add("hidden");
});
