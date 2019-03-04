const store = createStore(reducer);
init();

function init() {
  initView();
  store.subscribe(() => {
    render(store.getState().items);
  });
  store.dispatch();
}

function handleRemoval(idx) {
  store.dispatch(removeItem(idx));
}

function handleAddition() {
  const inputAdd = document.querySelector('.add-item-input');
  const value = inputAdd.value;
  store.dispatch(addItem(value));
}

function handleToggleDone(idx) {
  store.dispatch(toggleDone(idx));
}

// TODO: split into smaller functions work with DOM, remove duplication