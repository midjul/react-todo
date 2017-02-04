var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp=require('TodoApp');
var {Provider} =require('react-redux');
var actions=require('actions');

// import './../playground/firebase/index';

var store=require('configureStore').configure();
var TodoAPI= require('TodoAPI');
console.log(store);
store.subscribe(()=>{
  var state=store.getState();
  
console.log('New state', state);
TodoAPI.setTodos(state.todos);  
});

var initalTodos=TodoAPI.getTodos();
store.dispatch(actions.addTodos(initalTodos));


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
 <Provider store={store}>
   <TodoApp />
 </Provider>  
  ,document.getElementById('app')
);
