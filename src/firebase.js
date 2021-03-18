var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "walters-knife-co.firebaseapp.com",
  projectId: "walters-knife-co",
  storageBucket: "walters-knife-co.appspot.com",
  messagingSenderId: "386697397924",
  appId: "1:386697397924:web:e3fdd51867f045335b0831",
  measurementId: "G-1GZF0MV5Y2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
