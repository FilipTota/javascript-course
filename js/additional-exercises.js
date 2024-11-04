const testButton = document.querySelector(".test-button");
const haveClass = testButton.classList.contains("test-button");
console.log("haveClass :>> ", haveClass);

function toggleButton(selector) {
  const button = document.querySelector(`.${selector}`);

  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    // remove previous before adding 'is-toggled' to newly selected button
    toggleOffPrevious();
    button.classList.add("is-toggled");
  }
}

// function to toggle off previously selected button (only one can be toggled)
function toggleOffPrevious() {
  const previousButton = document.querySelector(".is-toggled");
  // if previousButton exists then remove 'is-toggled' class
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
