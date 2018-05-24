const actionImports = require("./store/actions.js");

const visibilityFilters = actionImports.visibilityFilters;
const toggleTodo = actionImports.toggleTodo;
const setVisibilityFilter = actionImports.setVisibilityFilter;
const addTodo = actionImports.addTodo;


const createStore = require('redux').createStore;
const todoApp = require('./store/reducers.js').todoApp;

const store = createStore(todoApp);
const unsubscribe = store.subscribe(function(){
  console.log(store.getState())
});

/* testing App */
console.log('Initial State : ',store.getState());

store.dispatch(addTodo('Need to check Documentation tools used by react'));
store.dispatch(addTodo('Need to complete Blockchain course with python'));
store.dispatch(addTodo('Need to Initate by writing "90 days and a react native App"'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED));

unsubscribe();