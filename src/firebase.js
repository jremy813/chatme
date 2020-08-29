import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzuHXEaVhINCZIh2l-k85GLPUOJwOCUoQ",
  authDomain: "chatme-81eda.firebaseapp.com",
  databaseURL: "https://chatme-81eda.firebaseio.com",
  projectId: "chatme-81eda",
  storageBucket: "chatme-81eda.appspot.com",
  messagingSenderId: "668039705973",
  appId: "1:668039705973:web:78bd4096970795a6148f3c",
  measurementId: "G-26T5TKKC8C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;