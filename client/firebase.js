// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw5CFt88lUsAUu5XFH4ULgol3TwQ1MgG8",
  authDomain: "active8-722d2.firebaseapp.com",
  projectId: "active8-722d2",
  storageBucket: "active8-722d2.appspot.com",
  messagingSenderId: "574811535056",
  appId: "1:574811535056:web:33f8f11ae9a18afb3410d5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
// export const colRef = collection(db, 'chats')

