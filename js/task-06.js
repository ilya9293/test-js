const form = document.querySelector('#validation-input');

form.addEventListener('blur', onLoseFocus);

function onLoseFocus() {
  form.value.length >= form.dataset.length
    ? (form.classList = 'valid')
    : (form.classList = 'invalid');
}
