const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_DONE = 'TOGGLE_DONE';

const removeItem = (idx) => {
  return {
    type: REMOVE_ITEM,
    payload: idx,
  };
};

const toggleDone = (idx) => {
  return {
    type: TOGGLE_DONE,
    payload: idx,
  };
};

const addItem = (value) => {
  return {
    type: ADD_ITEM,
    payload: value,
  };
};