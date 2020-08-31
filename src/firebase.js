import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyBvJ2mqakBvmqHkHWprgNFgTyqXj4agAxM",
    authDomain: "gfull-website.firebaseapp.com",
    databaseURL: "https://gfull-website.firebaseio.com",
    projectId: "gfull-website",
    storageBucket: "gfull-website.appspot.com",
    messagingSenderId: "598939415015",
    appId: "1:598939415015:web:a5fbc8b9314735ee204d42",
    measurementId: "G-GQSFWEPYQ9"
  };

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth }

