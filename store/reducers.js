const actionImports = require("./actions.js");
const _ = require("lodash");

const visibilityFilters = actionImports.visibilityFilters;
const SET_VISIBILITY_FILTER = actionImports.SET_VISIBILITY_FILTER;
const TOGGLE_TODO = actionImports.TOGGLE_TODO;
const ADD_TODO = actionImports.ADD_TODO;

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
};

function todos(state, action) {
  switch (action.type) {
    case ADD_TODO:
      state.push({ text: action.text, completed: false });
      return state;
    case TOGGLE_TODO:
      state = state.map((todo, index) => {
        if (index == action.index) {
          todo.completed = !todo.completed;
          return todo;
        }

        return todo;
      });
      return state;
    default:
      return state;
      break;
  }
}

function visibilityFilter(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      state.visibilityFilter = action.filter;
      return state;
    default:
      return state;
  }
}

function todoApp(state, action) {
  if (typeof state == "undefined") {
    var state = initialState;
  }

  const clonedState = _.cloneDeep(state);

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      clonedState.visibilityFilter = visibilityFilter(
        clonedState.visibilityFilter,
        action
      );
      return clonedState;

      break;

    case ADD_TODO:
      clonedState.todos = todos(clonedState.todos, action);

      return clonedState;
      break;

    case TOGGLE_TODO:
      clonedState.todos = todos(clonedState.todos, action);

      return clonedState;
      break;
    default:
      return state;
  }

  return state;
}
