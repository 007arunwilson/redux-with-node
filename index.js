const createStore = require('redux').createStore;
const todoApp = require('./store/reducers.js').todoApp;

const store = createStore(todoApp);