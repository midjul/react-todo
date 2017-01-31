var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var {Provider}= require('react-redux');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

// var TodoList=require('TodoList');
// var Todo=require('Todo');
describe('TodoList', ()=>{

   it('Should exist',()=>{
    expect(TodoList).toExist();
   });

it('shoul render one Todo component for each to do item', ()=>{
var todos=[
  {
    id:1,
    text:'something',
    completed:false,
    completedAt:undefined,
    cratedAt:500
  },
  {
    id:2,
    text:'something',
    completed:false,
    completedAt:undefined,
    cratedAt:500
    
  }
];
var store =configure({
  todos
});
var provider=TestUtils.renderIntoDocument(
  <Provider store={store}>
  <ConnectedTodoList />  
  </Provider>
);
var todoList=TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
var todosComponents=TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);
expect(todosComponents.length).toBe(todos.length);
});

it('shoul render empty message if no todos', ()=>{
var todos=[];
var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos} />);
var $el=$(ReactDOM.findDOMNode(todoList));
expect($el.find('.container__message').length).toBe(1); 
});

});
