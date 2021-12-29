const refs = {
  counterValue: document.querySelector('#value'),
  btnIncr: document.querySelector(`[data-action="increment"]`),
  btnDecr: document.querySelector(`[data-action="decrement"]`),
};

let counter = 0;

function increment () {
   counter += 1;
   refs.counterValue.textContent = counter;
};

function decrement () {
   counter -= 1;
   refs.counterValue.textContent = counter;
};

refs.btnIncr.addEventListener('click', increment);
refs.btnDecr.addEventListener('click', decrement);




