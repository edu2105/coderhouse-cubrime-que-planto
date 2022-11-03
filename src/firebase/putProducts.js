import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ordersCollection = collection(db, 'orders');

const putProducts = async(order) => {
    const result = await addDoc(ordersCollection, {
        ...order,
        date: serverTimestamp()
    });

    return result;
};

export default putProducts;