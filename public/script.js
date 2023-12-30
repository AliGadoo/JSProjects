let increaseBtn = document.getElementById("increaseBtn");
let text = document.getElementById("text");
text.textContent = localStorage.counter;

increaseBtn.addEventListener("click", function () {
  localStorage.counter++;
  text.textContent = localStorage.counter;
});
