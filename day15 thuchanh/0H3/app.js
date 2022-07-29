const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const taskContainer = document.querySelector(".task-container");
const fileInput = document.querySelector("#file");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const img = document.createElement("img");
  img.src = url;
  taskContainer.appendChild(img);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueInput = input.value;
  if (!valueInput) {
    alert("Task input should not be empty");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("task-item");
  div.innerHTML = `
    <p class = 'name-text'>${valueInput}</p>
    <span class = 'close' onClick = 'handleClick(this)'>X</span>
  `;

  taskContainer.appendChild(div);
  input.value = "";
});

const handleClick = (e) => {
  e.parentElement.remove();
};
