importScripts("https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js");


firebase.initializeApp({
  apiKey: "AIzaSyCjoVfSyy97QoRJeAe3uid_me0WnOqgb3g",
  authDomain: "iho-inc.firebaseapp.com",
  projectId: "iho-inc",
  databaseURL: "https://iho-debug.firebaseio.com",
  storageBucket: "iho-inc.appspot.com",
  messagingSenderId: "623937960601",
  appId: "1:623937960601:web:749df79674ad9c4e0fd608",
  measurementId: "G-KCR1B9F3DV"
});

const messaging = firebase.messaging();
