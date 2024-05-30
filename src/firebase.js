const firebase = require("firebase/app");
require("firebase/storage");
const firebaseConfig = {
  apiKey: "AIzaSyBUazad-OVL9yFDb1QLydfp2fBXA3NHE8g",
  authDomain: "sgfns-f9246.firebaseapp.com",
  projectId: "sgfns-f9246",
  storageBucket: "sgfns-f9246.appspot.com",
  messagingSenderId: "409004979705",
  appId: "1:409004979705:web:7fcb8190ac03683c6ff928",
};

firebase.initializeApp(firebaseConfig);
const storege = firebase.storege();

export { storege, firebase as default };
