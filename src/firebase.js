//Day-2 of build (Authentication and plans profile screen)
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCtqb33smrXWtFt5BW0Z7QS1oESL8V5WRc",
//   authDomain: "netflix-clone-2afde.firebaseapp.com",
//   projectId: "netflix-clone-2afde",
//   storageBucket: "netflix-clone-2afde.appspot.com",
//   messagingSenderId: "512553427574",
//   appId: "1:512553427574:web:732e770e4c7b1830c77557",
//   measurementId: "G-P2CCR0JTKZ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD9YP1FXoRwmYb8_wv7BI2VQwxIXJhYzAY",
  authDomain: "ah-movies-app.firebaseapp.com",
  projectId: "ah-movies-app",
  storageBucket: "ah-movies-app.appspot.com",
  messagingSenderId: "360467752198",
  appId: "1:360467752198:web:974b9f141ff6ee491bea87",
  measurementId: "G-3MMWZCX1TE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing the app with these credentials
const db = firebaseApp.firestore(); //it is actually the realtime database-firestore
const auth = firebase.auth();

export { auth }; //explicite export but we only have default export
export default db;

