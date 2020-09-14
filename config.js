import firebase from 'firebase'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrs5XP_OXxXxjFtoXebPCXpp2KVZuBVKA",
    authDomain: "student-attendance-25912.firebaseapp.com",
    databaseURL: "https://student-attendance-25912.firebaseio.com",
    projectId: "student-attendance-25912",
    storageBucket: "student-attendance-25912.appspot.com",
    messagingSenderId: "773256353677",
    appId: "1:773256353677:web:2cb53c3d48fe38b9c54fc4"
  };
  
  if(!firebase.apps.length){
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.database()
