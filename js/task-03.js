const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery');
const items = images.map(
  item =>
    `<li class="list__item"><img class="list__img" src="${item.url}" alt="${item.alt}">
    </li>`
);

list.insertAdjacentHTML('afterbegin', items);

list.style.display = "flex";

const pictr = document.querySelectorAll(".list__img");
pictr.forEach(el => el.style.width = "500px");