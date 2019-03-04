class TodoView {

  init(items) {
    this.list = document.querySelector('.list');
    this.inputAdd = document.querySelector('.add-item-input');
    const btnAdd = document.querySelector('.add-item-btn');
    btnAdd.addEventListener('click', () => document.dispatchEvent(new CustomEvent('add', { 'detail': this.inputAdd.value })));
    this.render(items);
  }

  render(items) {
    if(items) {
      this.clearList();
    }
    this.inputAdd.value = '';
    for (let i = 0; i < items.length; i++) {
      this.list.appendChild(this.createItem(items[i], i));
    }
  }

  clearList() {
    while (this.list.firstChild) {
      this.list.firstChild.remove();
    }
  }

  createItem(item, i) {
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

    checkbox.addEventListener('click', () => document.dispatchEvent(new CustomEvent('toggle', { 'detail': i })));
    btn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('remove', { 'detail': i })));

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(btn);

    return listItem;
  }
}