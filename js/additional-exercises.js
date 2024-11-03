const testButton = document.querySelector(".test-button");
const haveClass = testButton.classList.contains("test-button");
console.log("haveClass :>> ", haveClass);

function toggleButton() {
  const button = document.querySelector(".toggle-button");
  if (button.classList.contains("is-toggled")) {
    return button.classList.remove("is-toggled");
  }
  button.classList.add("is-toggled");
}
