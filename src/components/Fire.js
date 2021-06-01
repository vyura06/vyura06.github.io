import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB3hoEsz2xDhZ9ZpkXDctIGBSZeg8Mvb_I",
    authDomain: "login-57dac.firebaseapp.com",
    projectId: "login-57dac",
    storageBucket: "login-57dac.appspot.com",
    messagingSenderId: "40192660612",
    appId: "1:40192660612:web:75e03c686d595e3bc75ed1"
  };
  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;