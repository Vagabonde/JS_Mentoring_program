const defaultState = {
  items: [
      {description: 'learn functional programming', isDone: false}
      ],
};

const defaultAction = {
  type: 'DEFAULT',
};

const reducer = (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return remove(state, action.payload);
    case ADD_ITEM:
      return add(state, action.payload);
    case TOGGLE_DONE:
      return toggle(state, action.payload);
    default:
      return state;
  }
};

function remove(state, idxToUpd) {
  const items = state.items.filter((item, currentIdx) =>
      currentIdx !== idxToUpd);
  return {
    ...state,
    items,
  };
}

function add(state, value) {
  if (!value) {
    return;
  }
  const item = {
    description: value,
    isDone: false
  };
  const items = state.items.slice(0);
  items.push(item);
  return {
    ...state,
    items,
  };
}

function toggle(state, idxToUpd) {
  const items = state.items.map((item, currentIdx) => {
    if (currentIdx === idxToUpd) {
      item.isDone = !item.isDone;
    }
    return item;
  });
  return {
    ...state,
    items,
  };
}
