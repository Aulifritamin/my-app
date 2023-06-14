import { deleteTransaction } from "components/AddNewTransaction/budgetSlice";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { firebaseAuth, firestore } from "../../firebase/firebase";
import { BudgetData } from "types/budgetFormTypes";
import { useAppDispatch } from "app/hooks";
import styles from './deleteButton.module.scss'

interface DeleteButtonProps {
  transaction: BudgetData
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ transaction }) => {
    const user = firebaseAuth.currentUser;
  const dispatch = useAppDispatch()
  const collectionRef = collection(firestore, user?.uid || "") 
  const doc1Ref = doc(collectionRef, user?.email || ""); 
  const collectionRef1 = collection(doc1Ref, `MyTransactions`); 

  const handleDelete = async () => {
    try {
      // Удаление из Firebase
    if (transaction.id !== undefined) {
      const docRef = doc(collectionRef1, transaction.id);
      await deleteDoc(docRef);
      dispatch(deleteTransaction(transaction.id));
    }

      // Удаление из хранилища
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className={styles.delete_button} onClick={handleDelete}>
    </button>
  );
};

export default DeleteButton;