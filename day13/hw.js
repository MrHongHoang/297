const button1 = document.getElementById('button-id');
// console.log(button1);
button1.addEventListener('click', () => {
    button1.style.display = 'none';
});

const buttonclass = document.querySelectorAll('.button-class');
Array.from(buttonclass).forEach((button) => {
    button.addEventListener("click", () => {
        button.style.display = "none";
    })
});

// console.log(button2);
// const button3 = document.getElementsByTagName('button');
// button3.addEventListener('click', () => {
//     button3.style.display = 'none';
// });
// // // console.log(button3);

const buttons = document.getElementsByClassName('button0');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', ()=>{
        alert(btn.innerHTML);
        // console.log('ok');
    });
});
