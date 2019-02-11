import firebase from 'firebase/app';
import 'firebase/firestore'; 

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB6sEqLgcOP7TvokwWl0VhpHZyODNGQP44",
    authDomain: "parking-e486e.firebaseapp.com",
    databaseURL: "https://parking-e486e.firebaseio.com",
    projectId: "parking-e486e",
    storageBucket: "parking-e486e.appspot.com",
    messagingSenderId: "62019737877"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore(); 

  db.settings({timestampsInSnapshots:true});

  export default db;
