import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCqxatpyU4NGcwBPOtNNoKiI4dpJg-cUUE",
  authDomain: "edteam-reactjs-cero.firebaseapp.com",
  databaseURL: "https://edteam-reactjs-cero.firebaseio.com",
  projectId: "edteam-reactjs-cero",
  storageBucket: "",
  messagingSenderId: "870805927455"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref() // crear o almacenar info
export const firebaseAuth = firebase.auth //objet of authentication