// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPhu9Io310-FzjlXfdD9Buo0oWql9ktWw",
  authDomain: "justananba-816e0.firebaseapp.com",
  projectId: "justananba-816e0",
  storageBucket: "justananba-816e0.appspot.com",
  messagingSenderId: "394254116762",
  appId: "1:394254116762:web:e2412f70c26e6216bbbc23"
};




// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};

