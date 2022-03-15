import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAwwbMeVemcbb9HgFWtekHt7V1n8q7AnNw',
    authDomain:'quest-production-d2672.firebaseapp.com' ,
    projectId: 'quest-production-d2672',
    storageBucket: 'quest-production-d2672.appspot.com',
    messagingSenderId: '831941679808',
    appId: '1:831941679808:web:725e926119506fbef8eb25'
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
