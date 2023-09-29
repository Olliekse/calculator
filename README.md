# Calculator

This is a basic calculator application that allows you to perform simple arithmetic operations like addition, subtraction, multiplication, and division. The calculator interface is built using HTML and CSS, with the application logic implemented using JavaScript.

## How to Use

- Clone the repository on your local machine using `git clone https://github.com/<username>/<repository-name>.git`.
- Open `index.html` in your web browser to launch the application.

## Features

- The calculator has a simple UI with a screen to display the numbers and buttons to input the operations and operands.
- The calculator supports basic arithmetic operations like addition, subtraction, multiplication, and division.
- The calculator supports clearing the screen with the 'C' button and calculating the result with the '=' button.
- The calculator supports decimal numbers and percentage operations.

## Architecture

### HTML

The `index.html` file sets up the basic calculator interface with a screen to display the numbers and buttons to input the operations and operands.

### CSS

The `style.css` file defines the styles for the calculator user interface.

### JavaScript

The `script.js` file implements the application logic for the calculator and provides the functionality to perform basic arithmetic operations. The script defines helper functions like `add`, `subtract`, `multiply`, and `divide` to perform basic arithmetic operations on two numbers. 

The script uses the `createBtns` function to generate the calculator buttons and set up event listeners to capture button clicks. The function also defines variables to keep track of the input sequence, the numbers entered, and the current operator selected.

The `operate` function uses the selected operator and performs the corresponding arithmetic operation on the two entered numbers. On clicking the `=` button, the current operation is performed, and the result is displayed on the calculator screen.

## UI Design

The calculator UI is built using basic HTML and CSS properties. The calculator has a screen to display the numbers and a button container to input the operations and operands. The application is designed to be responsive, working on both desktop and mobile devices.

## Conclusion

This calculator application is a basic implementation of a calculator using JavaScript, HTML, and CSS. It provides basic functionality while keeping the user interface simple and enjoyable to use.
