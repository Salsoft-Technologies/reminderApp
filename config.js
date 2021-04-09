import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCw8NYsz_j2UjI3r37ieWrUNZIR2Q2suoc",
    authDomain: "reminderapp-c7c47.firebaseapp.com",
    projectId: "reminderapp-c7c47",
    storageBucket: "reminderapp-c7c47.appspot.com",
    messagingSenderId: "1034732652678",
    appId: "1:1034732652678:web:d8e7613c404c5af3276907"
  };
  
  const app = Firebase.initializeApp(firebaseConfig);
  
  export const db = app.database();
  