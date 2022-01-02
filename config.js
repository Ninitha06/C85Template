import firebase from 'firebase';

const firebaseConfig = {
  
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
else firebase.app();

export default firebase.database();
