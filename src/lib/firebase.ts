// 6- npm install firebase & copy Firebase SDK

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzgeEwgeQJi_Kao8nQQnxegHQrrxGRXf8",
  authDomain: "hoteldashboard-808c4.firebaseapp.com",
  projectId: "hoteldashboard-808c4",
  storageBucket: "hoteldashboard-808c4.appspot.com",
  messagingSenderId: "61081903977",
  appId: "1:61081903977:web:d0112fa9258772c4e1d3f8",
  measurementId: "G-B47QYE99YN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
