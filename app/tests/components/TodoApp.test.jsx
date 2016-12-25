var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

var TodoApp=require('TodoApp');

describe('TodoApp',()=>{
it('Should exits',()=>{
  expect(TodoApp).toExist();
});

it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText="test";
     var todoApp=TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
    todos:[]
    });

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
});

});