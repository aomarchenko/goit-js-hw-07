const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector("#value"),
};


refs.decrement.addEventListener('click', onDecrementClick)
function onDecrementClick ()
{
refs.span.textContent -= 1;
}
refs.increment.addEventListener('click', onIncrementClick)
function  onIncrementClick(){
    refs.span.textContent = Number(refs.span.textContent) + 1;
}