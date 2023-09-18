import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyBhRt3HekJo9ks74Fv1TvXBBFFB5-_NLW8",
  authDomain: "capivapp.firebaseapp.com",
  projectId: "capivapp",
  storageBucket: "capivapp.appspot.com",
  messagingSenderId: "152785443903",
  appId: "1:152785443903:web:ccad32463eca13a9f3ac8a",
  measurementId: "G-BZJ642BGNX"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore_db = getFirestore(app);

