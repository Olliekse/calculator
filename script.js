const display = document.querySelector(".display");
const buttonsContainer = document.querySelector(".buttons");

const buttonsData = [
  { value: "7", text: "7", classList: ["number"] },
  { value: "8", text: "8", classList: ["number"] },
  { value: "9", text: "9", classList: ["number"] },
  { value: "+", text: "+", classList: ["operator"] },
  { value: "4", text: "4", classList: ["number"] },
  { value: "5", text: "5", classList: ["number"] },
  { value: "6", text: "6", classList: ["number"] },
  { value: "-", text: "-", classList: ["operator"] },
  { value: "1", text: "1", classList: ["number"] },
  { value: "2", text: "2", classList: ["number"] },
  { value: "3", text: "3", classList: ["number"] },
  { value: "*", text: "*", classList: ["operator"] },
  { value: "C", text: "C", classList: ["clear"] },
  { value: "0", text: "0", classList: ["number"] },
  { value: "/", text: "/", classList: ["operator"] },
  { value: "=", text: "=", classList: ["equals"] },
];

buttonsData.forEach((buttonData) => {
  const button = document.createElement("button");
  button.value = buttonData.value;
  button.innerText = buttonData.text;
  buttonData.classList.forEach((className) => button.classList.add(className));
  buttonsContainer.appendChild(button);
});

const buttons = document.querySelectorAll("button");

let stack = [];
let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.value;
    if (value === "C") {
      stack = [];
      displayValue = "";
      display.value = displayValue;
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (displayValue !== "") {
        stack.push(parseFloat(displayValue));
        displayValue = "";
      }
      if (stack.length >= 3) {
        const num2 = stack.pop();
        const operator = stack.pop();
        const num1 = stack.pop();
        let result;
        if (operator === "+") {
          result = num1 + num2;
        } else if (operator === "-") {
          result = num1 - num2;
        } else if (operator === "*") {
          result = num1 * num2;
        } else if (operator === "/") {
          result = num1 / num2;
        }
        stack.push(result);
        display.value = result;
      }
      if (!isNaN(stack[stack.length - 1])) {
        stack.push(value);
      }
    } else if (value === "=") {
      if (displayValue !== "") {
        stack.push(parseFloat(displayValue));
        displayValue = "";
      }
      let result;
      if (stack.length >= 3) {
        while (stack.length >= 3) {
          const num2 = stack.pop();
          const operator = stack.pop();
          const num1 = stack.pop();

          if (operator === "+") {
            result = num1 + num2;
          } else if (operator === "-") {
            result = num1 - num2;
          } else if (operator === "*") {
            result = num1 * num2;
          } else if (operator === "/") {
            result = num1 / num2;
          }
          stack.push(result);
        }
        if (result !== Infinity) {
          display.value = Math.round(result);
        } else {
          display.value = "Impossible!";
        }
      }
    } else {
      if (value !== "C") {
        displayValue += value;
        display.value = displayValue;
      }
    }

    // console logs
    console.log("stack: " + stack);
    console.log("displayValue: " + displayValue);
    console.log("value: " + value);
    console.log("stack length: " + stack.length);
  });
});
