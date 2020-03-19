//gives the current state of the calculator object
const calcState = {
  firstVal: "",
  operator: undefined, //default operation is undefined
  secondVal: ""
};
//run automatically if clear is pressed
function reset() {
  calcState.firstVal = "";
  calcState.operator = undefined;
  calcState.secondVal = "";
  document.getElementById("output").value = "";
}
//run automatically if del is pressed
function backspace() {
  let str = document.getElementById("output").value;
  let newStr = str.slice(0, str.length - 1);
  document.getElementById("output").value = newStr;
}

//sets the first and second values to the appropriate state
function buttonPressed(newVal) {
  if (newVal === "=") {
    calcState.secondVal = document.getElementById("output").value;
    evaluateInput(calcState.firstVal, calcState.secondVal);
  } else if (
    newVal === "+" ||
    newVal === "-" ||
    newVal === "x" ||
    newVal === "/"
  ) {
    calcState.firstVal = document.getElementById("output").value;
    document.getElementById("output").value = newVal;
    calcState.operator = newVal;
  } else {
    let temp = document.getElementById("output").value;
    if (temp === "+" || temp === "-" || temp === "x" || temp === "/") {
      document.getElementById("output").value = newVal;
    } else {
      document.getElementById("output").value += newVal;
    }
  }
}

//evaluates first and second values with selected operator
function evaluateInput(first, second) {
  let x = Number(first);
  let y = Number(second);
  if (calcState.operator === "+") {
    document.getElementById("output").value = x + y;
  } else if (calcState.operator === "-") {
    document.getElementById("output").value = x - y;
  } else if (calcState.operator === "x") {
    document.getElementById("output").value = x * y;
  } else {
    document.getElementById("output").value = x / y;
  }
}
