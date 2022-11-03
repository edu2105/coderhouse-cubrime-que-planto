import { db } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const updateProducts = async(id, object) => {
    const document = doc(db, 'products', id.toString());
    const result = await updateDoc(document, object);

    return result;
}

export default updateProducts;