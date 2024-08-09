import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnr0t50phu4LNZTu845eSbuENrAq4qs4g",
  authDomain: "miniblog-c6130.firebaseapp.com",
  projectId: "miniblog-c6130",
  storageBucket: "miniblog-c6130.appspot.com",
  messagingSenderId: "366178672981",
  appId: "1:366178672981:web:eb9c597bb9025d31124fdc"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app) //inicando banco de dados

export { db, app }