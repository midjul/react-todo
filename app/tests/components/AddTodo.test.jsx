var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

var AddTodo=require('AddTodo');
describe('AddTodo', ()=>{
  it('should exits', ()=>{
   expect(AddTodo).toExist();
  });

  it('should call onAddTodo if not empty todo entered',()=>{
   var spy=expect.createSpy();
   var addTodo=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
   var $el=$(ReactDOM.findDOMNode(addTodo));
     addTodo.refs.todoText.value="test todo";
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toHaveBeenCalledWith('test todo');
  });

  it('should not onAddTodo if empty todo entered', ()=>{
   var spy=expect.createSpy();
   var addTodo=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
   var $el=$(ReactDOM.findDOMNode(addTodo));
   addTodo.refs.todoText.value="";
   TestUtils.Simulate.submit($el.find('form')[0]);
   expect(spy).toNotHaveBeenCalled();

  });
});
