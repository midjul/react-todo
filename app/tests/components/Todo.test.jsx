var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

var Todo=require('Todo');

describe('Todo', ()=>{
  it('Should exist',()=>{
   expect(Todo).toExist();  
  });
});
