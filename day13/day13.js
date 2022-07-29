const box = document.getElementById('box');
const hiddenbtn = document.getElementById('hidden');
const colorbtn = document.getElementById('color');
hiddenbtn.addEventListener("click", () => {
    box.style.display = "none";
    // console.log('ok');
} );

colorbtn.addEventListener('click', () => {
    box.style.backgroundColor = 'yellow'
});

// console.log(box,hiddenbtn,colorbtn);
