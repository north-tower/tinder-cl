// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAP-X1RRSrN42x_WKj9EAg_ATYRTtYtzAg',
  authDomain: 'doctor-app-f835a.firebaseapp.com',
  projectId: 'doctor-app-f835a',
  storageBucket: 'doctor-app-f835a.appspot.com',
  messagingSenderId: '2293201862',
  appId: '1:2293201862:web:a0351a437b91ddca8b90c7',
  measurementId: 'G-Z7ND403RMD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;
