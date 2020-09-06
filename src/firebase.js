import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC8grVdT3NOwToK0u03Xmjzxx0wtmJth14",
  authDomain: "chatme-6436c.firebaseapp.com",
  databaseURL: "https://chatme-6436c.firebaseio.com",
  projectId: "chatme-6436c",
  storageBucket: "chatme-6436c.appspot.com",
  messagingSenderId: "933499751721",
  appId: "1:933499751721:web:85a1d84af03488f493bb38",
  measurementId: "G-2ZT4G4P74Q",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
