// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAv_EZ-7ZPOR46P7A1UOdMg8KlgtKUL6Ko",
  authDomain: "vnyone-pro.firebaseapp.com",
  projectId: "vnyone-pro",
  storageBucket: "vnyone-pro.firebasestorage.app",
  messagingSenderId: "888833255412",
  appId: "1:888833255412:web:15afcd22b9c7ab0ed4bba1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global variables to fix "auth is not defined" error
window.auth = firebase.auth();
window.db = firebase.firestore();
window.storage = firebase.storage();

console.log("VNYone Firebase Connected Successfully!");
