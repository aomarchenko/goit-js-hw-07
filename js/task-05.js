const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onKeyPress);
// console.log(input.value);

function onKeyPress() {
  if (input.value.length > 0) {
    span.textContent = input.value;
  } else {
    span.textContent = 'незнакомец';
  }
}
