const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear");
const arrow = document.querySelector("#arrow");
const readout = document.querySelector("#readout");

let dispNum = "0";
let storedNum = 0;
let adding = false;
let subtracting = false;
let multiplying = false;
let dividing = false;
let allClear = false;
let repeater = "";

one.addEventListener("click", function() {
  toReadout("1");
})
two.addEventListener("click", function() {
  toReadout("2");
})
three.addEventListener("click", function() {
  toReadout("3");
})
four.addEventListener("click", function() {
  toReadout("4");
})
five.addEventListener("click", function() {
  toReadout("5");
})
six.addEventListener("click", function() {
  toReadout("6");
})
seven.addEventListener("click", function() {
  toReadout("7");
})
eight.addEventListener("click", function() {
  toReadout("8");
})
nine.addEventListener("click", function() {
  toReadout("9");
})
zero.addEventListener("click", function() {
  if (dispNum != "0") {
    toReadout("0");
  }
})
plus.addEventListener("click", function() {
  resetOp();
  adding = true;
  transferNum();
})
subtract.addEventListener("click", function() {
  resetOp();
  subtracting = true;
  transferNum();
})
multiply.addEventListener("click", function() {
  resetOp();
  multiplying = true;
  transferNum();
})
divide.addEventListener("click", function() {
  resetOp();
  dividing = true;
  transferNum();
})
equals.addEventListener("click", function() {
  if (dispNum) {executeOp()};
})
clear.addEventListener("click", function() {
  clearReadout();
})
arrow.addEventListener("click", function() {
  if (allClear === true) {
  } else if (dispNum.length > 1) {
    dispNum = dispNum.slice(0, -1);
    dispReadout();
  } else {
    clearReadout();
  }
})

function clearReadout() {
  dispNum = "0";
  repeater = "";
  if (allClear === true) {
    resetOp();
    storedNum = 0;
  }
  if (storedNum) {
    allClear = true;
    dispNum = "";
    storedReadout();
  } else {
    allClear = false;
    dispReadout();
  }
}

function toReadout(num) {  
  (dispNum != "0" && repeater === "") ? dispNum += num : dispNum = num;
  repeater = "";
  allClear = false;
  dispReadout();
}

function executeOp() {
  let executor = repeater ? parseFloat(repeater) : parseFloat(dispNum);
  if (adding) {
    storedNum += executor;
  } else if (subtracting) {
    storedNum -= executor;
  } else if (multiplying) {
    storedNum *= executor;
  } else if (dividing) {
    storedNum /= executor;
  }
  repeater = executor.toString();
  dispNum = storedNum.toString();
  allClear = true;
  dispReadout();
}

function dispReadout() {
  readout.innerHTML = dispNum;
  renderClearButton();
}

function storedReadout() {
  readout.innerHTML = storedNum.toString();
  renderClearButton();
}

function renderClearButton() {
  clear.innerHTML = allClear ? "AC" : "C";
}

function resetOp() {
  adding = false;
  subtracting = false;
  multiplying = false;
  dividing = false;
}

function transferNum() {
  if (dispNum) {
    storedNum = parseFloat(dispNum, 10);
    repeater = "";
    dispNum = "";
  }
}
