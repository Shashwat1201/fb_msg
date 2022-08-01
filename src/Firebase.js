import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgLMa7l1JiFDlK7ue8uiBV1Jjny6ATShI",
    authDomain: "facebook-messenger-clone-3c544.firebaseapp.com",
    projectId: "facebook-messenger-clone-3c544",
    storageBucket: "facebook-messenger-clone-3c544.appspot.com",
    messagingSenderId: "148470942032",
    appId: "1:148470942032:web:f44f66cec504542345c455",
    measurementId: "G-WX1ERWWQMG"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

export default db ; 