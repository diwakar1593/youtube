import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0RoZY6BqX_LY9n1UxFV7PVdMQjL7fPuI",
  authDomain: "netflix-fe8c5.firebaseapp.com",
  projectId: "netflix-fe8c5",
  storageBucket: "netflix-fe8c5.appspot.com",
  messagingSenderId: "536718841178",
  appId: "1:536718841178:web:1f10c32255b145452dcf63",
  measurementId: "G-8PD05VWGLH"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;