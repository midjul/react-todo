var expect=require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
  localStorage.removeItem('todos');
  });
   it('should exist', ()=>{
     expect(TodoAPI).toExist();
   });

  describe('setTodos', ()=>{
       it('should set valid todos array', ()=>{
        var todos=[{
          id:23,
          test:"test",
          completed:false
        }];
        TodoAPI.setTodos(todos);

        var actualTodos=JSON.parse(localStorage.getItem('todos'));

    expect(actualTodos).toEqual(todos);

       });
       it('should not set invalid todos area', ()=>{
        var badTodos={
          a:'b'
        };
        TodoAPI.setTodos(badTodos);
        expect(localStorage.getItem('todos')).toBe(null);
       });
  });

  describe('getTodos', ()=>{
     it('should return empty array for bad localstorage data', ()=>{
      var actualTodos=TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
     });


     it('should return todo if valid array in localstorage', ()=>{
       var todos=[{
         id:23,
         test:"test",
         completed:false
       }];
     localStorage.setItem('todos', JSON.stringify(todos));
     var actualTodos=TodoAPI.getTodos();

     expect(actualTodos).toEqual(todos);

     });

  });


 describe('filterTodos', ()=>{
  var todos=[
    {id:1,
      text:'Some text',
      completed:true
    },
    {id:2,
      text:'Some',
      completed:false
    },
    {id:3,
      text:'text',
      completed:true
    }
  ];
  it('should return all items if showCompleted is true', ()=>{
   var filteredTodos=TodoAPI.filterTodos(todos, true, '');

   expect(filteredTodos.length).toBe(3);
  });

  it('should return none-completed todos when showCompleted is false', ()=>{
   var filteredTodos=TodoAPI.filterTodos(todos, false, '');

   expect(filteredTodos.length).toBe(1);
  });

  it('should sort by completed status', ()=>{
  var filteredTodos=TodoAPI.filterTodos(todos, true, '');
  expect(filteredTodos[0].completed).toBe(false);
  });

it('should return all todos if searchText empty', ()=>{
 var filteredTodos=TodoAPI.filterTodos(todos, true, '');
 expect(filteredTodos.length).toBe(todos.length);
});

it('should return only relevant todos', ()=>{
  var seaTxt='text';
 var filteredTodos=TodoAPI.filterTodos(todos, true, seaTxt);
var rez=[];
for(var i=0;i<todos.length; i++){
  var item=todos[i].text.toLowerCase();
  if(item.indexOf(seaTxt)>-1){
    rez.push(item);
  }
}
expect(filteredTodos.length).toBe(rez.length);

});

 });

});
