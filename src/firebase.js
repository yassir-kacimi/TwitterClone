import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQqeijH7IE5wJEQiF0eueEFMQSbr4blWg",
  authDomain: "twitterclone-2031a.firebaseapp.com",
  projectId: "twitterclone-2031a",
  storageBucket: "twitterclone-2031a.appspot.com",
  messagingSenderId: "415616366236",
  appId: "1:415616366236:web:956ccc90b22006db8d9f59",
  measurementId: "G-641NNJTM65"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);/*that will set the app and connect everything we need*/
const db = firebaseApp.firestore();// db is our portable database.
const auth = firebase.auth();// the authentication functionnality on firebase
const provider = new firebase.auth.GoogleAuthProvider();/*google login functionality*/

export {auth, provider};
export default db ;// default because we will use it frequently 