const ref = {
  number: document.querySelector('#controls input'),
  create: document.querySelector(`[data-action="render"]`),
  remove: document.querySelector(`[data-action="destroy"]`),
  boxes: document.querySelector('#boxes'),
};

ref.number.addEventListener('input', meaning);



function meaning(event) {
 let amount = Number(event.currentTarget.value);
 
}



function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const createBxs = document.createElement('div');
    size += 10;
    createBxs.style.width = size + 'px';
    createBxs.style.height = size + 'px';
    createBxs.style.backgroundColor = 'blue';
    ref.boxes.append(createBxs);
  }
}

ref.create.addEventListener('click', createBoxes);
