const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

// console.log(refs.span.textContent);
refs.input.addEventListener('input', enterName);

function enterName(event) {
  refs.span.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    refs.span.textContent = 'незнакомец';
  }
}
