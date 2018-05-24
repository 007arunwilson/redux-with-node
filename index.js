const actionImports = require("./actions.js");

const visibilityFilters = actionImports.visibilityFilters;
const SET_VISIBILITY_FILTER = actionImports.SET_VISIBILITY_FILTER;
const TOGGLE_TODO = actionImports.TOGGLE_TODO;
const ADD_TODO = actionImports.ADD_TODO;


const createStore = require('redux').createStore;
const todoApp = require('./store/reducers.js').todoApp;

const store = createStore(todoApp);

/* testing App */
console.log('Initial State : ',store.getState());