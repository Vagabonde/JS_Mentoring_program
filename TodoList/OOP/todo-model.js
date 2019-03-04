class TodoModel {
  constructor(items) {
    this.items = items || [];
  }

  addItem(value) {
    if (!value) {
      return;
    }
    this.items.push({
      description: value,
      isDone: false,
    });
    document.dispatchEvent(new CustomEvent('dataChange', { 'detail': this.items }));
  }

  removeItem(index) {
    this.items.splice(index, 1);
    document.dispatchEvent(new CustomEvent('dataChange', { 'detail': this.items }));
  }

  toggleSelect(index) {
    this.items[index].isDone = !this.items[index].isDone;
    document.dispatchEvent(new CustomEvent('dataChange', { 'detail': this.items }));
  }

}