function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "add":
            add(firstNumber, secondNumber);
            break;
        case "subtract":
            subtract(firstNumber, secondNumber);
            break;
        case "multiply":
            multiply(firstNumber, secondNumber);
            break;
        case "divide":
            divide(firstNumber, secondNumber);
            break;
    }
}

const display = document.querySelector("#display");
let displayContent = "";

const digits = document.querySelectorAll(".digit");
digits.forEach(element => {
    element.addEventListener("click", () => {
        displayContent += element.textContent;
        display.textContent = displayContent;
    });
});

let firstNumber = 3;
let operator = "add";
let secondNumber = 5;
