import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDMbQTbWKI53IuO3zkRsDopds1AqP8rE",
  authDomain: "learning-aa6d9.firebaseapp.com",
  databaseURL: "https://learning-aa6d9-default-rtdb.firebaseio.com",
  projectId: "learning-aa6d9",
  storageBucket: "learning-aa6d9.appspot.com",
  messagingSenderId: "696646270665",
  appId: "1:696646270665:web:fba8499f5a8098411fd718",
  measurementId: "G-TRDCZ40506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);