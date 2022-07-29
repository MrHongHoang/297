// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const inputPassword = document.querySelector("#pass");
// const inputCFpassword = document.querySelector("#cfpass");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const valueName = inputName.value;
//     const valuePassword = inputPassword.value;
//     const valueCFpassword = inputCFpassword.value;
//     // if (valueCFpassword === valuePassword)
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <h3>Xin chao  ${valueName}<h3>
//     <a href="about.html">about</a>
//     `;
//     document.querySelector("body").appendChild(div);
//     // else (valueCFpassword !== valuePassword)
//     // alert ("mat khau khac nhau");
    
// });


const form = document.querySelector("#form");
const inputName = document.querySelector("#name");

form.addEventListener("submit", (e) => {
        e.preventDefault();
        const valueName = inputName.value;
        if (valueName == "")
        alert ("hay nhap noi dung")
        return;
    }
    const div = document.createElement('div')
    div.innerHTML = `
    <p class = "name-text">${valueInput}
    `
    );