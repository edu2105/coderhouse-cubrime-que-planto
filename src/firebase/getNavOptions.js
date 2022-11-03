import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

const navOptionsCollection = collection(db, 'navOptions');

const getNavOptionsFromFirebase = async () => { 
    const queryResult = await getDocs(navOptionsCollection);

    return queryResult;
};

export default getNavOptionsFromFirebase;