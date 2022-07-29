const btnchange = document.querySelector('#change');
const btnreset = document.querySelector('#reset');
const text = document.querySelector('#text')
btnchange.addEventListener('click', () => {
    text.classList.add("change");
    text.innerHTML = "Mindx"
} );

btnreset.addEventListener('click', () => {
    text.classList.remove("change");
    text.innerHTML = "text";
});







const input = document.querySelector('#input');
const btnbutton = document.querySelector('#button');
const body = document.querySelector("body");
btnbutton.addEventListener("click", () => {
    const value = input.value;
    const p =document.createElement("p");
    p.innerHTML = value;
    body.appendChild(p);
    // document.write(value);
    
});

// btnbutton.addEventListener('click', () => {
//     const value = input.value;
//     if(+value > "400")
//     console.log(value);
// });
