var uuid=require('node-uuid');
var moment=require('moment');


export var searchTextReducer=(state='', action)=>{
switch (action.type) {
  case 'SET_SEARCH_TEXT':
  return action.searchText;
  default:
  return state;
};
};

export var showCompletedReducer=(state=false, action)=>{
 switch (action.type) {
   case 'TOGGLE_SHOW_COMPLETED':
    return !state;

     default:
     return state

 } ;
};

export var todosReducer=(state=[], action)=>{
switch (action.type) {
  case 'ADD_TODO':
  return [
    ...state,
    {
      id:uuid(),
      text:action.text,
      completed:false,
      cratedAt:moment().unix(),
      completedAt:undefined
    }
  ];
  case 'TOGGLE_TODO':
var st1=JSON.parse(JSON.stringify(state));
  var updatedTodos=st1.map(function (todo) {
 if (todo.id===action.id) {
  todo.completed=!todo.completed;
  todo.completedAt=todo.completed? moment().unix():undefined;
 }
   return todo ;
  });
return updatedTodos;
  default:
  return state;
}
};
