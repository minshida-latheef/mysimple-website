let count = 0;

const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  count++;
  message.textContent = `Button clicked ${count} time${count === 1 ? "" : "s"}.`;
});
