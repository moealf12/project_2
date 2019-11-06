import firebase from 'firebase/app'
import firestore from 'firebase/firestore'



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsOWMhNTlIksO6CDYdALzajNlzBDpCfMY",
    authDomain: "findemeee.firebaseapp.com",
    databaseURL: "https://findemeee.firebaseio.com",
    projectId: "findemeee",
    storageBucket: "findemeee.appspot.com",
    messagingSenderId: "53039516371",
    appId: "1:53039516371:web:83536ce171882cb29e6226",
    measurementId: "G-QJ8TRJ342X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default firebase
