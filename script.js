// Existing JavaScript functions for calculator operations
let display = document.getElementById("display");
let currentInput = "";

function inputValue(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay(currentInput);
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value) {
  var displayElement = document.getElementById("display");
  while (displayElement.firstChild) {
    displayElement.removeChild(displayElement.firstChild);
  }
  var textNode = document.createTextNode(value);
  displayElement.appendChild(textNode);
}