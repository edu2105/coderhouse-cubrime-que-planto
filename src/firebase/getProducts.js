import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const productsCollection = collection(db, 'products');

const getProducts = async (fieldToQuery, fieldValue="") => { 
    let fieldValueUpper = fieldValue.charAt(0).toUpperCase() + fieldValue.slice(1);
    const productsQuery = 
    fieldToQuery==="id" ? doc(db, "products", fieldValue) :
    fieldToQuery==="title" ? query(productsCollection, where(fieldToQuery, ">=", fieldValueUpper), where(fieldToQuery, "<=", fieldValueUpper+ 'z')) :
    query(productsCollection, where(fieldToQuery, "==", fieldValue));
    
    const queryResult = fieldToQuery==="id" ? await getDoc(productsQuery) : await getDocs(productsQuery);

    return queryResult;
};

export default getProducts;