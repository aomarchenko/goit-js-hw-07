const input = document.querySelector("#validation-input");
input.addEventListener("blur", letsCheckInputLength)
function letsCheckInputLength (){
    if(input.value.length < 6){
        input.classList.add("invalid")
    }
    else {
        input.classList.add("valid")
    }
}