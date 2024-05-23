"use strict";

// Elements Selection
const containerEl = document.querySelector(".container");
const firstInputEl = document.querySelector(".first-input");
const secondInputEl = document.querySelector(".second-input");
const operatorEl = document.querySelector(".operator");
const resultEl = document.querySelector(".result");

let result, num1, num2, operator;

const calcNumbers = function () {
  num1 = +firstInputEl.value;
  num2 = +secondInputEl.value;
  operator = operatorEl.value;
  if (!num1 || !num2 || !operator) return;

  if (Number.isFinite(num1) === true && Number.isFinite(num2) === true) {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Wrong Operator";
        break;
    }
  } else {
    result = `Error NaN`;
  }
  firstInputEl.value = secondInputEl.value = operatorEl.value = "";
  console.log(result);
  resultEl.textContent = result;
};

containerEl.addEventListener("click", (e) => {
  const equalBtn = e.target.closest(".equal-btn");
  if (!equalBtn) return;
  calcNumbers();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calcNumbers();
});
