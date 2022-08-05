// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import "firebase/compat/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBvojAyk-Q6t7x1B8r3_KHPey7i7VsmI",
  authDomain: "dalilimob.firebaseapp.com",
  projectId: "dalilimob",
  storageBucket: "dalilimob.appspot.com",
  messagingSenderId: "483656068603",
  appId: "1:483656068603:web:166cdceec2b4c8cd162f5e"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
firebase.analytics()


export const authentication = getAuth(app)
export const messaging =  getMessaging(app);