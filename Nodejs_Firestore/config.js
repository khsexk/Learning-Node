const firebaseConfig = {
  apiKey: "AIzaSyAOBW2QPmuwtOgFLiPCNaiDQAUkdI5RspU",
  authDomain: "nodejs-firestore-test.firebaseapp.com",
  databaseURL: "https://nodejs-firestore-test.firebaseio.com",
  projectId: "nodejs-firestore-test",
  storageBucket: "nodejs-firestore-test.appspot.com",
  messagingSenderId: "870610286904",
  appId: "1:870610286904:web:a92088901be9d3a6d869cd",
  measurementId: "G-TVKYZR0DJW"
};

// Initialize Firebase
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);