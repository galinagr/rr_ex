import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,//"AIzaSyB9cjmFSBSNNtKSHc_NqR2Q-gpAaZTrBcY",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,// "rr-ex-d7c9a.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL,//"https://rr-ex-d7c9a.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,//"rr-ex-d7c9a",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,//"rr-ex-d7c9a.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID//"602711574534"
  };

  firebase.initializeApp(config);
    
  const database = firebase.database();

export { firebase, database as default };
