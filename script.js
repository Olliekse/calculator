let num1 = 5;
let num2 = 5;
let op = "+";

const btnsContainer = document.querySelector(".ui__btns-container");
const btnsNum = document.querySelector(".btns-num-container");
const btnsFunc = document.querySelector(".btns-func-container");

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (num1, op, num2) => {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, " ", 0, " ", "C", ".", "%"];

const funcs = ["+", "-", "*", "/", "="];

const createBtns = () => {
  for (i = 0; i < nums.length; i++) {
    const btn = document.createElement("div");
    btn.classList.add("btn", "btn_num");
    btn.textContent = nums[i];
    btnsNum.append(btn);
  }
};
for (i = 0; i < funcs.length; i++) {
  const btn = document.createElement("div");
  btn.classList.add("btn", "btn_func");
  btn.textContent = funcs[i];
  btnsFunc.append(btn);
}

createBtns();
