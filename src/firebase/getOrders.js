import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const getOrders = async (id) => { 
    const orderQuery = doc(db, "orders", id);
    const queryResult = await getDoc(orderQuery);

    return queryResult;
};

export default getOrders;