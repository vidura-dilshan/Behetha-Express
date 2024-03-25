// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9ovoYCHYuXC4_zdv-PmprytKVXS-Brc",
  authDomain: "test-auth-5b2e1.firebaseapp.com",
  projectId: "test-auth-5b2e1",
  storageBucket: "test-auth-5b2e1.appspot.com",
  messagingSenderId: "115029206112",
  appId: "1:115029206112:web:4ba96b3e87ecd17d0a8f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage= getStorage(app);

export { app, auth, storage };


// Initialize Firebase Authentication and get a reference to the service
