const input = document.getElementById("input")
const button = document.getElementById("submit")
const form = document.querySelector("form")
const div = document.querySelector("div")

form.onsubmit = (event) => {
  event.preventDefault();
  const span = document.createElement("p");
  span.textContent = input.value;
  input.value = ""
  div.appendChild(span)
}

input.addEventListener("keydown", (event) => {
  event.preventDefault()
  const span = document.createElement("p");
  span.textContent = event.key
  div.appendChild(span)
})