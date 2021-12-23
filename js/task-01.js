// const quantityItem = document.querySelector('#categories');

// console.log(quantityItem);

// const childrenList = quantityItem.children.length;
// console.log(`В списке ${quantityItem} категории`);

const items = document.querySelectorAll('.item');
const quantityItem = items.length;
console.log(`В списке ${quantityItem} категории`);

const list = document.body.firstElementChild.nextElementSibling;
// console.log(list);

const firstTitle = list.firstElementChild.firstElementChild;
console.log(`Категория: ${firstTitle.textContent}`);

const quantityElem = list.firstElementChild.lastElementChild.children.length;
console.log(`Количество элементов: ${quantityElem}`);

const secondtTitle =
  list.firstElementChild.nextElementSibling.firstElementChild;
console.log(`Категория: ${secondtTitle.textContent}`);

const quantitysecElem =
  list.firstElementChild.nextElementSibling.lastElementChild.children.length;
console.log(`Количество элементов: ${quantitysecElem}`);

const thirdTitle = list.lastElementChild.firstElementChild;
console.log(`Категория: ${thirdTitle.textContent}`);

const quantitythirdElem =
  list.lastElementChild.lastElementChild.children.length;
console.log(`Количество элементов: ${quantitythirdElem}`);

// const element = document.querySelector('.item');
// console.log(element);

// const animals = element.lastElementChild.children.length;
// console.log(animals);

// const elm = document.querySelectorAll('h2');
// elm.forEach(elem => {
//   console.log(`Категория: ${elem.textContent}`);
// });
