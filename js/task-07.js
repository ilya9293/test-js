const ref = {
   slider: document.querySelector('#font-size-control'),
   text: document.querySelector('#text'),
 };
 
 const rangeInputsetUp = (minRem = 1, maxRem = 5, step = 1) => {
   ref.slider.value = minRem;
   ref.text.style.fontSize = ref.slider.value + 'rem';
   ref.slider.min = minRem;
   ref.slider.max = maxRem;
   ref.slider.step = step;
 };
 
 rangeInputsetUp();
 // я установил в функции значения по умолчанию, но по желанию, можно передать другие аргументы например
 // rangeInputsetUp(1, 5, 3);
 
 ref.slider.addEventListener('input', handleRange);
 
 function handleRange(e) {
   ref.text.style.fontSize = e.target.value + 'rem';
 }

// не знаю, как сохранить начальный размер текста, и потом увеличивать его