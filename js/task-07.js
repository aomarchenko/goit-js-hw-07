const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", makeTextBiggerOrSmaller)

// let fontSize = input.value;
function makeTextBiggerOrSmaller (){
    console.log(`"${input.value}px"`)
    
    span.style.fontSize = `${input.value}px`;
    
}