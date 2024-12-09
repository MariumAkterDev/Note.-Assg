// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYJTstWyHfEcuyiYxaZva6e1woIVkIJY",
  authDomain: "note-7b0fe.firebaseapp.com",
  projectId: "note-7b0fe",
  storageBucket: "note-7b0fe.firebasestorage.app",
  messagingSenderId: "897223809878",
  appId: "1:897223809878:web:090b4fafb9ef24063394f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app