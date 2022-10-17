import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCbaoCs8xidzYJSATBgpr4uK3ovFpSJhfA",
    authDomain: "booklist-app-react.firebaseapp.com",
    projectId: "booklist-app-react",
    storageBucket: "booklist-app-react.appspot.com",
    messagingSenderId: "651539525598",
    appId: "1:651539525598:web:c741299ccfaea88242374f"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export {db,auth};