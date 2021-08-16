const input = document.querySelector('#validation-input');
input.addEventListener('blur', letsCheckInputLength);
input.addEventListener('focus', letsRemoveClass);
function letsCheckInputLength() {
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
  } else if (input.value.length !== Number(input.getAttribute('data-length'))) {
    input.classList.add('invalid');
  }
}
function letsRemoveClass() {
  input.classList.remove('valid', 'invalid');
}
