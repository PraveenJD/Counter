let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const clickButton = e.currentTarget.classList;
    if (clickButton.contains("decrease")) {
      count--;
    } else if (clickButton.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
  });
});
