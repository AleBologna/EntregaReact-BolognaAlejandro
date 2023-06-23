import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkVbBU4jKHGszqhCvievR-f8JEspbBVeo",
  authDomain: "react-proyectofinal-1edf2.firebaseapp.com",
  projectId: "react-proyectofinal-1edf2",
  storageBucket: "react-proyectofinal-1edf2.appspot.com",
  messagingSenderId: "357443718526",
  appId: "1:357443718526:web:64465a9ce5f6037abab72f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export async function getData(){
  const productsCollectionRef = collection (db, "dataBase")
  const productsSnapshot = await getDocs (productsCollectionRef);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id:doc.id}
  })
  return dataDocs
}
export async function getItemData(idUrl){
 const docRef = doc (db, "dataBase", idUrl);
 const docSnap = await getDoc (docRef);
 //FALTA EL ERROR
 return {id: docSnap.id, ...docSnap.data()}
}
export async function getCategoryData(idCategory){
      const productsCollectionRef = collection (db, "dataBase");
      const q = query(productsCollectionRef, where("category", "==", idCategory));
      const productsSnapshot = await getDocs (q);
      const arrayDocs = productsSnapshot.docs;
      const dataDocs = arrayDocs.map(doc => {
      return {...doc.data(), id:doc.id}
      })
     return dataDocs
    }

export async function createOrder(data){
  const ordersCollectionRef = collection(db, "orders");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id
}