const visibilityFilters = require("./actions.js").VisibilityFilters;

const initialState = {
    visibilityFilter:visibilityFilters.SHOW_ALL,
    todos:[],
}

function todoApp(state, action) {

    if(typeof state == 'undefined'){

        return initialState;

    }

    return initialState;
    
}