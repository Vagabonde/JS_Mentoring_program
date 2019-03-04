class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    document.addEventListener('add', this.handleAddition.bind(this));
    document.addEventListener('remove', this.handleRemoval.bind(this));
    document.addEventListener('toggle', this.handleToggle.bind(this));
    document.addEventListener('dataChange', this.updateView.bind(this));
    this.view.init(this.model.items);
  }

  handleAddition(event) {
    this.model.addItem(event.detail);

  }

  handleRemoval(event) {
    this.model.removeItem(event.detail);

  }

  handleToggle(event) {
    this.model.toggleSelect(event.detail);

  }

  updateView(event) {
    this.view.render(event.detail);
  }
  
}