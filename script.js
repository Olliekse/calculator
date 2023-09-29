const btnsContainer = document.querySelector(".ui__btns-container");
const screen = document.querySelector(".ui__screen-digits");

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

const numsFuncs = [
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "*",
  " ",
  0,
  " ",
  "/",
  "C",
  ".",
  "%",
  "=",
];

const operate = (num1, op, num2) => {
  console.log(num1, op, num2);
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

const createBtns = () => {
  let num1 = 0;
  let num2 = 0;
  let inputSequence = 0;
  let operator = "";
  let screenSequence;

  screen.textContent = 0;

  for (i = 0; i < numsFuncs.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = numsFuncs[i];
    btn.type = "button";
    btnsContainer.append(btn);

    btn.addEventListener("click", (e) => {
      const input = e.target.textContent;
      if (inputSequence === 0 && !isNaN(input)) {
        num1 = parseInt(input);
        screenSequence = num1;
        screen.textContent = screenSequence;
        inputSequence++;
      } else if (
        inputSequence === 1 &&
        (input === "+" || input === "-" || input === "*" || input === "/")
      ) {
        operator = input;
        screenSequence += operator;
        screen.textContent = screenSequence;
        inputSequence++;
      } else if (inputSequence === 2 && !isNaN(input)) {
        num2 = parseInt(input);
        screenSequence = `${num1}${operator}${num2}`;
        screen.textContent = screenSequence;
        inputSequence++;
      } else if (inputSequence === 3 && input === "=") {
        screen.textContent = operate(num1, operator, num2);
        console.log(operate(num1, operator, num2));
        inputSequence = 0;
      }
    });
  }
};

createBtns();
