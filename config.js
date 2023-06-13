import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig ={
    apiKey: "AIzaSyCPhu9Io310-FzjlXfdD9Buo0oWql9ktWw",
    authDomain: "justananba-816e0.firebaseapp.com",
    databaseURL: "https://justananba-816e0-default-rtdb.firebaseio.com",
    projectId: "justananba-816e0",
    storageBucket: "justananba-816e0.appspot.com",
    messagingSenderId: "394254116762",
    appId: "1:394254116762:web:e2412f70c26e6216bbbc23"


}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db, firebase }
