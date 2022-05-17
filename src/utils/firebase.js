import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl84VKS41TfcJw5A3Bj5E2xkOfcWLVYDM",
  authDomain: "deliveryapp-3ae84.firebaseapp.com",
  projectId: "deliveryapp-3ae84",
  storageBucket: "deliveryapp-3ae84.appspot.com",
  messagingSenderId: "165514920377",
  appId: "1:165514920377:web:cae607eefa2848ce5cf668"
};


export const initFirebase = initializeApp(firebaseConfig);