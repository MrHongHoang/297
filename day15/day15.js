const form=document.querySelector("#form");
const inputName=document.querySelector("#name");
const inputAge= document.querySelector("#age")
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const valueName = inputName.value;
    const valueAge = inputAge.value;

    const div=document.createElement("div");
    div.innerHTML=`
    <h3 class='name' id= 'name'> Name : ${valueName}</h3>
    <h4> Age : ${valueAge}</h4>
    `;
    document.querySelector("body").appendChild(div);

});