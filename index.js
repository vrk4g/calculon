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
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

const display = document.querySelector("#display");
let displayContent = "";

const digits = document.querySelectorAll(".digit");
digits.forEach(element => {
    element.addEventListener("click", () => {
        displayContent += element.textContent;
        display.textContent += element.textContent;
    });
});

let firstNumber;
let operator;
let secondNumber;

const signs = document.querySelectorAll(".sign");
signs.forEach(element => {
    element.addEventListener("click", () => {
        if (operator === undefined) {
            firstNumber = +displayContent;
            displayContent = "";

            operator = element.dataset.operator;
            display.textContent = `${firstNumber} ${operator} `;
        } else {
            secondNumber = +displayContent;
            displayContent = "";

            firstNumber = operate(operator, firstNumber, secondNumber);

            operator = element.dataset.operator;
            display.textContent = `${firstNumber} ${operator} `;
        }
    });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    secondNumber = +displayContent;

    product = operate(operator, firstNumber, secondNumber);
    displayContent = product;
    display.textContent = product;

    operator = undefined;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayContent = "";
    display.textContent = "";

    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
});
