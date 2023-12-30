
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDFDWyC-DAO9pNu3CZoAG587m2-XhMACo",
  authDomain: "portfolio-tarun-react.firebaseapp.com",
  projectId: "portfolio-tarun-react",
  storageBucket: "portfolio-tarun-react.appspot.com",
  messagingSenderId: "523545930314",
  appId: "1:523545930314:web:6a61a4d8ff96bbdb5654b3"
};


export const app = initializeApp(firebaseConfig);
export const db= getFirestore()