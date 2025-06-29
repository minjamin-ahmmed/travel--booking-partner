import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwfJ8EY16sIFMitvu0Y8ZnLC5BjabH6s4",
  authDomain: "travel-portal-fc176.firebaseapp.com",
  projectId: "travel-portal-fc176",
  storageBucket: "travel-portal-fc176.firebasestorage.app",
  messagingSenderId: "624598368656",
  appId: "1:624598368656:web:0f972608f99c90182eb315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
