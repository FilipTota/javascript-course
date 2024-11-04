let calculation = localStorage.getItem("calculation") || "";
displayCalculation();

function calculate(value) {
  if (value === "=") {
    calculation = eval(calculation);
    displayCalculation();
    localStorage.setItem("calculation", calculation);
  } else if (value === "reset") {
    calculation = "";
    displayCalculation();
    localStorage.setItem("calculation", calculation);
  } else {
    calculation += value;
    displayCalculation();
    localStorage.setItem("calculation", calculation);
  }
}

function displayCalculation() {
  document.querySelector(".calculation-paragraph").innerHTML = calculation;
}
