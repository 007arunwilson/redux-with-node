/*
* Action types
*/
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

module.exports.ADD_TODO = ADD_TODO;
module.exports.TOGGLE_TODO = TOGGLE_TODO;
module.exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;

/*
* Other Constants
*/
const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

module.exports.visibilityFilters = visibilityFilters;

/*
* action creators
*/

module.exports.addTodo = function addTodo(text) {
  return { type: ADD_TODO, text };
}

module.exports.toggleTodo = function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

module.exports.setVisibilityFilter =  function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
