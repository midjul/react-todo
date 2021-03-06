var React=require('react');
var uuid=require('uuid');
var moment=require('moment');

// var TodoList=require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

import TodoSearch from 'TodoSearch';

var TodoApp=React.createClass({

render:function () {
  return (
     <div>
      <h1 className="page-title">Toto App</h1>
      <div className="row">
        <div className="column small-centered small-11  medium-6 large-5">
          <div className="container">
            <TodoSearch  />
             <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
     </div>
  );
}
});

module.exports=TodoApp;
