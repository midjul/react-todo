var React=require('react');
var TodoList=require('TodoList');
var AddTodo=require('AddTodo');
var TodoSearch=require('TodoSearch');
var uuid=require('uuid');

var TodoApp=React.createClass({
  getInitialState:function () {
   return {
     showCompleted:false,
     searchText:'',
     todos:[
     {id:uuid(),
       text:'Walk the dog'
     },
    {
      id:uuid(),
      text:'Clear the yard'
    },
    {id:uuid(),
      text:'Leave mail on porch'
    },
   {
     id:uuid(),
     text:'Play video games'
   }
     ]
   };
  },
  handleSearch:function (showCompleted, searchText) {
    this.setState({
     showCompleted:showCompleted,
     searchText:searchText.toLowerCase()
    });
  },

  handleAddTodo:function (text) {
   this.setState({
    todos:[
      ...this.state.todos,
      {
        id:uuid(),
        text:text
      }
    ]


   });
  },
render:function () {
  var {todos}=this.state;

  return (
     <div>
       <TodoSearch onSearch={this.handleSearch} />
    <TodoList todos={todos} />
    <AddTodo onAddTodo={this.handleAddTodo}/>
     </div>
  );
}
});

module.exports=TodoApp;