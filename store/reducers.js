const actionImports = require("./actions.js");
const _ = require("lodash");
const combineReducers = require("redux").combineReducers;

const visibilityFilters = actionImports.visibilityFilters;
const SET_VISIBILITY_FILTER = actionImports.SET_VISIBILITY_FILTER;
const TOGGLE_TODO = actionImports.TOGGLE_TODO;
const ADD_TODO = actionImports.ADD_TODO;

function todos(state, action) {
  if (typeof state == "undefined") state = [];

  state = _.cloneDeep(state);

  switch (action.type) {
    case ADD_TODO:
      state.push({ text: action.text, completed: false });
      return state;
    case TOGGLE_TODO:
      state = state.map(function(todo, index){
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

  return state;
}

function visibilityFilter(state, action) {
  if (typeof state == "undefined") state = visibilityFilters.SHOW_ALL;

  state = _.cloneDeep(state);
  
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      state = action.filter;
      return state;
    default:
      return state;
  }

  return state;
}

const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todos
});

module.exports.todoApp = todoApp;
