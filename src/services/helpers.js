import dataBase from "../data/dataBase";
import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkVbBU4jKHGszqhCvievR-f8JEspbBVeo",
  authDomain: "react-proyectofinal-1edf2.firebaseapp.com",
  projectId: "react-proyectofinal-1edf2",
  storageBucket: "react-proyectofinal-1edf2.appspot.com",
  messagingSenderId: "357443718526",
  appId: "1:357443718526:web:64465a9ce5f6037abab72f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export async function exportData(){
    const productsCollectionRef = collection (db,"dataBase")
    for(let item of dataBase){
      delete item.id;
        const response = await addDoc(productsCollectionRef, item);
        console.log("doc creado", response.id);
    }
}