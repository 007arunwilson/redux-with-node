const visibilityFilters = require("./actions.js").VisibilityFilters;
const _ = require("lodash");

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
        
        const clonedState = _.cloneDeep(state);

        clonedState.visibilityFilter = action.filter;

        return clonedState;
        
        break;

    default:
        return state;

  }

  return state;
}
