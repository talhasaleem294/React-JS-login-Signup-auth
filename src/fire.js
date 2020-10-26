import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKMmShlPEOR3KUshH7hilJViZvyFnt-Z8",
    authDomain: "login-d304d.firebaseapp.com",
    databaseURL: "https://login-d304d.firebaseio.com",
    projectId: "login-d304d",
    storageBucket: "login-d304d.appspot.com",
    messagingSenderId: "767284099636",
    appId: "1:767284099636:web:f80bb2258263d976976861"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;