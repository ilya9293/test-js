const ref = {
  slider: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

ref.slider.addEventListener('input', handleRange);

function handleRange() {
  ref.text.style.fontSize = ref.slider.value + "px";
}

// не знаю, как сохранить начальный размер текста, и потом увеличивать его