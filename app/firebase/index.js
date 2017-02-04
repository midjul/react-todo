import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBEP4pxycv6aMoWiwxTgMkdxIxmkPpwgDg",
      authDomain: "midhet-todo-app.firebaseapp.com",
      databaseURL: "https://midhet-todo-app.firebaseio.com",
      storageBucket: "midhet-todo-app.appspot.com",
      messagingSenderId: "823921280665"
    };
    firebase.initializeApp(config);  
} catch (e) {
  
} 
  

  
export  var firebaseRef=firebase.database().ref();

export default firebase;  