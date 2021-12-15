import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJiY_nd5RpPs_Rajr4cNAS9yGyWEm9Pu0",
    authDomain: "netflix-v2-clone-c2a82.firebaseapp.com",
    projectId: "netflix-v2-clone-c2a82",
    storageBucket: "netflix-v2-clone-c2a82.appspot.com",
    messagingSenderId: "342017578372",
    appId: "1:342017578372:web:f9e05e9a46fe2ea630b9d1"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;
