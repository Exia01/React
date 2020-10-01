//importing just the base features
import firebase from 'firebase/app';
//this is the database
import 'firebase/firestore';
//authentication
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6O9F_llB2gUiKApVTX3Hh2Gk1aghgV4U",
  authDomain: "mario-plan-01.firebaseapp.com",
  databaseURL: "https://mario-plan-01.firebaseio.com",
  projectId: "mario-plan-01",
  storageBucket: "",
  messagingSenderId: "387363460849",
  appId: "1:387363460849:web:aedeb7cbd6242167"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase