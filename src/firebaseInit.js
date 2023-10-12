// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTAWcDF4_lzTuwVK6qD-1K9V1gNs6yxfE",
  authDomain: "busybuy-68f48.firebaseapp.com",
  projectId: "busybuy-68f48",
  storageBucket: "busybuy-68f48.appspot.com",
  messagingSenderId: "205042782334",
  appId: "1:205042782334:web:3006f52138ac2ea63cc82f",
  measurementId: "G-7GVEKK6EXT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
