const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener('input', onKeyPress);

function onKeyPress (){
    span.textContent = input.value;
}
