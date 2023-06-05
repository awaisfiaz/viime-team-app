import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQQ0Ekyu-vsDwMhAGqtPjz7ZOgMCFX5bY",
  authDomain: "viime-app.firebaseapp.com",
  projectId: "viime-app",
  storageBucket: "viime-app.appspot.com",
  messagingSenderId: "494166557389",
  appId: "1:494166557389:web:8986f714ef00275d2f1f84",
  measurementId: "G-QEQ1Q52PZK",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
