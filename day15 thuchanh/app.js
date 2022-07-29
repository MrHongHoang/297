const form = document.querySelector('#form');
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const Container = document.querySelector(".container");
const fileInput = document.querySelector("#file");
const button = document.querySelector("#button");

fileInput.addEventListener("chage", (e) => {
    const file = e.target.file[0];
    const url = URL.createObjectURL(file);
    const img = document.createElement("img");
    img.src = url;
    Container.appenChild(img);
});
form.addEventListener("submit", (e) =>{
e.preventDefault();
// console.log();
const valueName = inputName.value;
const valueAge = inputAge.value;
});
