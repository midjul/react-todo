var $=require('jquery');
module.exports={
  setTodos:function (todos) {
 if ($.isArray(todos)) {
  localStorage.setItem('todos', JSON.stringify(todos));
  return todos;
 }
  },

  getTodos:function () {
    var stringTodos=localStorage.getItem('todos');
    var todos=[];

     try {
       todos=JSON.parse(stringTodos);
      
     } catch (e) {

     }
return $.isArray(todos) ? todos:[];


  },
  filterTodos:function (todos, showCompleted, searchText) {
  var filteredTodos=todos;
    //filter by showCompleted
   filteredTodos=filteredTodos.filter((todo)=>{
    return !todo.completed || showCompleted;
   });




    //Filter by searchText

filteredTodos=filteredTodos.filter((todo)=>{
  var doo=todo.text.toLowerCase();
 if(searchText !== "" && doo.indexOf(searchText)>-1){
   return todo;
 }  else if(searchText===""){
   return todo;
 }
});

        //sort todos with non-completed first
     filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed) {
      return 1;
    }else {
      return 0;
    }
     });



  return filteredTodos;
  }
};
