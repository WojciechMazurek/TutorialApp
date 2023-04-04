export const environment = {
  production: true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQHqUBKIhCXvj7t2BO4Y2NNvnbRu3eAs",
  authDomain: "tutorial-db3ee.firebaseapp.com",
  databaseURL: "https://tutorial-db3ee-default-rtdb.firebaseio.com",
  projectId: "tutorial-db3ee",
  storageBucket: "tutorial-db3ee.appspot.com",
  messagingSenderId: "337478714478",
  appId: "1:337478714478:web:f9f6dfb8340a5633a1127f",
  measurementId: "G-LZCKJEBDL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);