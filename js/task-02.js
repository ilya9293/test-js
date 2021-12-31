const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const elem = [];

ingredients.forEach(ingrd => {
  const item = document.createElement('li');
  item.textContent = ingrd;
  elem.push(item);
});

list.append(...elem);
