import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBMOW_JJ0KKcLhHVYJIVT3GWijONJC9_Oc",
  authDomain: "care2share-cce71.firebaseapp.com",
  databaseURL: "https://care2share-cce71.firebaseio.com",
  projectId: "care2share-cce71",
  storageBucket: "care2share-cce71.appspot.com",
  messagingSenderId: "49381745806",
  appId: "1:49381745806:web:079de8a7ada3cc515055df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
