const {
  visibilityFilters,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  ADD_TODO
} = require("./actions.js");
const _ = require("lodash");

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state == "undefined") {
    var state = initialState;
  }

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      const clonedState = _.cloneDeep(state);

      clonedState.visibilityFilter = action.filter;

      return clonedState;

      break;

    case ADD_TODO:
      const clonedState = _.cloneDeep(state);

      clonedState.todos.push({ text: action.text, completed: false });

      break;

    default:
      return state;
  }

  return state;
}
