import { SET_VISIBILITY_FILTER } from "./actions.js";

const visibilityFilters = require("./actions.js").VisibilityFilters;

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state == "undefined") {
    return initialState;
  }

  switch (action.type) {
    case SET_VISIBILITY_FILTER:

        return Object.assign({},state, {
            visibilityFilter:action.filter
        })

        break;

    default:
        return state;

  }

  return state;
}
