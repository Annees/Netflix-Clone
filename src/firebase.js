//Day-2 of build (Authentication and plans profile screen)
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBKTLjid9VMznggxDw1gYiH5ozcoKo_KJ4",
    authDomain: "netflix-clone-project-5e0b3.firebaseapp.com",
    projectId: "netflix-clone-project-5e0b3",
    storageBucket: "netflix-clone-project-5e0b3.appspot.com",
    messagingSenderId: "1087680582806",
    appId: "1:1087680582806:web:ad580c9d744144d3f8deb7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing the app with these credentials
  const db = firebaseApp.firestore();   //it is actually the realtime database-firestore
  const auth = firebase.auth();

  export {auth};  //explicite export but we only have default export
  export default db;