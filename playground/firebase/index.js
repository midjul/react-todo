import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBEP4pxycv6aMoWiwxTgMkdxIxmkPpwgDg",
    authDomain: "midhet-todo-app.firebaseapp.com",
    databaseURL: "https://midhet-todo-app.firebaseio.com",
    storageBucket: "midhet-todo-app.appspot.com",
    messagingSenderId: "823921280665"
  };
  firebase.initializeApp(config);
  
  var firebaseRef=firebase.database().ref();
  firebaseRef.set({
    app:{name:"TodoApp", version:"1.0.0"},
    isRunning: true,
    user:{
      name:'Midhet',
      age:25,
      
    }
  });
  // firebaseRef.update({
  //   isRunning:false,
  //   'app/version': "1.0.1",
  //   'app/name':'Todo Application'
  // });
  
//   firebaseRef.update({
//   'app/name':"Todo Application",
//   'user/name':"Djulovic"  
// }).then(()=>{
//  console.log('Update worked'); 
// }, (e)=>{
// console.log('Update failed');  
// });

// firebaseRef.child('app').update({
//  name:'Todo Application' 
// }).then(()=>{
// console.log("Success app update");  
// }, (e)=>{
// console.log('Error');  
// });
// 
// firebaseRef.child('user').update({
// name:'My full name'  
// }).then(()=>{
// console.log('Success user update');  
// }, (e)=>{
//  console.log('Error');  
// });

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version:'2.0',
//   name:null
// });
// firebaseRef.child('isRunning').remove();
// firebaseRef.child('user').update({
//   age:null
// });

// firebaseRef.child('app').once('value').then((snapshot)=>{
// console.log('Got entier database', snapshot.key, snapshot.val());  
// }, (e)=>{
// console.log('Unable to fetch value', e);  
// });

// firebaseRef.on('value', (snapshot)=>{
// console.log('Got value', snapshot.val());  
// });
// firebaseRef.off();
// 
// firebaseRef.update({isRunning:false});

// firebaseRef.child('user').on('value', (snapshot)=>{
// console.log('snapshot update on user', snapshot.val() );  
// });
// firebaseRef.update({
// 'app/name':'Todo Application',
// 'user/name':'Bla Bla'  
// });
// var notesRef=firebaseRef.child('notes');
// var newNoteRef=notesRef.push();
// newNoteRef.set({
// text:'walk the dog'  
// });

var todosRef=firebaseRef.child('todos');
var newTodosRef=todosRef.push().set(
  {
    text:'New todo',
    completed:false,
    createdAt:1234
  }
  
);

todosRef.on('child_added', (snapshot)=>{
console.log('New todo added', snapshot.key, snapshot.val());  
});

todosRef.push({
  text:'New new ',
  completed:true,
  createdAt:1236
});

todosRef.push({
  text:'Dkd',
  completed:false,
  createdAt:1533
});
