const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".digit");
const historyEl = document.querySelector(".previous");
const resultEl = document.querySelector(".current-input");

window.onload = () => {
  printHistory("");
  printCurrent("00");
};

// ! Utilities Functions

function getCurrent() {
  return resultEl.innerHTML;
}

function printCurrent(current) {
  resultEl.innerHTML = current;
}

function getHistory() {
  return historyEl.innerHTML;
}

function printHistory(history) {
  historyEl.innerHTML = history;
}

function evalute(output) {
  return eval(output);
}

// ! Operators

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (e.target.id === "=") {
      let history = getHistory();

      if (history == "") {
        alert("Nothing to evalute...!");
        return;
      }

      let evalutionOf = `${historyEl.innerHTML}${resultEl.innerHTML}`;

      const result = eval(evalutionOf);

      if (result == "Infinity") {
        printCurrent("∞");
      } else {
        printCurrent(result);
      }

      printHistory("");
    } else if (e.target.id === "C") {
      let currentInput = getCurrent();

      if (currentInput == "0" || currentInput == "00") printCurrent("00");

      if (currentInput == "00") return;

      printCurrent(currentInput.substring(0, currentInput.length - 1));

      if (resultEl.innerHTML == "") printCurrent("00");
    } else if (e.target.id == "AC") {
      printCurrent("00");
      printHistory("");
    } else {
      if (resultEl.innerHTML == "00" || resultEl.innerHTML == "0") {
        alert("First, Please Enter a digit...!");
        return;
      }

      historyEl.innerHTML = resultEl.innerHTML + e.target.id;

      resultEl.innerHTML = "00";
    }
  });
});


numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let output = getCurrent();
    if (output === "0" || output === "00" || output === "∞") printCurrent("");

    resultEl.innerHTML += e.target.id;
  });
});
