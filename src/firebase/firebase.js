import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD49B2N9kk_Y4WsDi5RH8xDIu0p_Ib11KQ",
  authDomain: "cubrimequeplantoshop.firebaseapp.com",
  projectId: "cubrimequeplantoshop",
  storageBucket: "cubrimequeplantoshop.appspot.com",
  messagingSenderId: "386949263308",
  appId: "1:386949263308:web:a1fc115b32c6fe39e97769"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);