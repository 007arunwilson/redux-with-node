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

  const clonedState = _.cloneDeep(state);

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      clonedState.visibilityFilter = action.filter;

      return clonedState;

      break;

    case ADD_TODO:
      clonedState.todos.push({ text: action.text, completed: false });

      return clonedState;
      break;

    case TOGGLE_TODO:
      clonedState.todos = clonedState.todos.map((todo, index) => {
        if (index == action.index) {
          todo.completed = !todo.completed;
          return todo;
        }

        return todo;
      });

      break;
    default:
      return state;
  }

  return state;
}
