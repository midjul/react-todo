var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');


var TodoList=require('TodoList');
var Todo=require('Todo');
describe('TodoList', ()=>{

   it('Should exist',()=>{
    expect(TodoList).toExist();
   });

it('shoul render one Todo component for each to do item', ()=>{
var todos=[
  {
    id:1,
    text:'something'
  },
  {
    id:2,
    text:"check"

  }
];
var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos} />);
var todosComponents=TestUtils.scryRenderedComponentsWithType(todoList,Todo);
expect(todosComponents.length).toBe(todos.length);
});

it('shoul render empty message if no todos', ()=>{
var todos=[];
var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos} />);
var $el=$(ReactDOM.findDOMNode(todoList));
expect($el.find('.container__message').length).toBe(1); 
});

});
