let num1;
let num2;
let op;

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

console.log(operate(5, "+", 5));
