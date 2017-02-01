var expect=require('expect');
var actions=require('actions');

describe('Actions', ()=>{
it('shoud generate search text action', ()=>{
   var action={
     type:'SET_SEARCH_TEXT',
     searchText:'test text'
   };
   var res=actions.setSearchText('test text');
   expect(res).toEqual(action);
});

it('shoud generate add to do action', ()=>{
var action={
  type:'ADD_TODO',
  text:'test text'
};

var res=actions.addTodo('test text');

expect(res).toEqual(action);

});

it('should generate add todos action object', ()=>{
var todos=[{
  id:'111',
  text:"anything",
  completed: false,
  completedAt:undefined,
  createdAt:3000
}];
var action={
  type:'ADD_TODOS',
  todos
};

var res=actions.addTodos(todos);
expect(res).toEqual(action);

});

it('shoud generate toggleShowCompleted action',()=>{
var action={
  type:'TOGGLE_SHOW_COMPLETED'
};
     var res=actions.toggleShowCompleted();

     expect(res).toEqual(action);
});

it('shoud generate toggletodo action', ()=>{
  var action={
    type:'TOGGLE_TODO',
    id:123
  };

  var res=actions.toggleTodo(action.id);

  expect(res).toEqual(action);
});

});
