function initView() {
  const btnAdd = document.querySelector('.add-item-btn');
  btnAdd.addEventListener('click', handleAddition);
}
function render(items) {
  let inputAdd = document.querySelector('.add-item-input');
  const list = document.querySelector('.list');
  inputAdd.value = '';

  if(list.children) {
    clearList(list);
  }

  for (let i = 0; i < items.length; i++) {
    list.appendChild(createItem(items[i], i));
  }
}

function  clearList(list) {
  while (list.firstChild) {
    list.firstChild.remove();
  }
}

function createItem(item, i) {
  const listItem =  document.createElement('li');
  const label = document.createElement('label');
  const btn = document.createElement('button');
  const checkbox = document.createElement('input');

  if (item.isDone) {
    checkbox.setAttribute('checked', '');
  }
  checkbox.setAttribute('type', 'checkbox');
  label.innerText = `${item.description}`;
  btn.innerText = '–';

  checkbox.addEventListener('click', handleToggleDone.bind(null, i));
  btn.addEventListener('click', handleRemoval.bind(null, i));

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(btn);

  return listItem;
}
