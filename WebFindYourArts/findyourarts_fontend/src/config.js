import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDW-rYzy0QNESRip9SHEgMt8VLF_lbbTPI",
    authDomain: "findyourartsweb.firebaseapp.com",
    projectId: "findyourartsweb",
    storageBucket: "findyourartsweb.appspot.com",
    messagingSenderId: "766125830024",
    appId: "1:766125830024:web:1d4e1422e77693a388d43d",
    measurementId: "G-J6BT23H6GG"
});

export default firebaseConfig