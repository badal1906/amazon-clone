import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRTY_mqadGFi-CrHqHgjnkrKhkRhsQ2_c",
  authDomain: "clone-42d09.firebaseapp.com",
  projectId: "clone-42d09",
  storageBucket: "clone-42d09.appspot.com",
  messagingSenderId: "547890518564",
  appId: "1:547890518564:web:fff590fa662e114182d6b1",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}
