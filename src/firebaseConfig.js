import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWtulBzHkOxworPgtiuI-_exBxgNMDGYw",
  authDomain: "tutorial-f57d3.firebaseapp.com",
  projectId: "tutorial-f57d3",
  storageBucket: "tutorial-f57d3.appspot.com",
  messagingSenderId: "276679842503",
  appId: "1:276679842503:web:5af1e19bc2f6669f45bce2",
  measurementId: "G-R9EGWBCKRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);