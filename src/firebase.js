import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAC5x5oh15Zehg1suwDSdwPWctZCDnWxFM",
    authDomain: "practicamoskalia.firebaseapp.com",
    databaseURL: "https://practicamoskalia.firebaseio.com",
    projectId: "practicamoskalia",
    storageBucket: "practicamoskalia.appspot.com",
    messagingSenderId: "837319075731",
    appId: "1:837319075731:web:608987f397d89890256a66",
    measurementId: "G-PPRHPHS7DK"
  };
  
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
export const db = firebase.database();
