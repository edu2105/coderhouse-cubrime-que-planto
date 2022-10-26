import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const productsCollection = collection(db, 'products');

const getDocsFromFirebase = async (reference="", type) => { 
    const productsQuery = type==="category" ? 
        query(productsCollection, where("category", "==", reference)) : 
        doc(db, "products", reference.toString());
        
    const queryResult = type==="category" ? await getDocs(productsQuery) : await getDoc(productsQuery);

    return queryResult;
};

export default getDocsFromFirebase;